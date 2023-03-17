import { useState } from "react";
import JSZip from "jszip";

function Thread() {
  const [inputText, setInputText] = useState("");
  let [comments, setComments] = useState<Comments[]>([]);
  const [error, setError] = useState("");

  async function getComments() {
    if (inputText === "") {
      setError("Please enter a valid URL");
      return;
    }
    if (error !== "") {
      setError("");
    }
    document.getElementById("loader_thread")?.classList.remove("hidden");


    try {
      const response = await fetch("http://localhost:8000/comments?" + new URLSearchParams({ thread_url: inputText }), {
        method: "GET"
      });

      const arrayBuffer = await response.arrayBuffer();
      const zip = await JSZip.loadAsync(arrayBuffer);

      const imageUrls = await Promise.all(
        Object.keys(zip.files).map(async (filename) => {
          const file = zip.files[filename];
          if (!file.dir && file.name.endsWith(".png")) {
            const imageBlob = await file.async("blob");
            const videoURL = URL.createObjectURL(imageBlob);
            return { name: filename.split(".")[0], src: videoURL };
          }
          return null;
        })
      ).then((results: any[]) => results.filter((imageUrl) => imageUrl !== null));

      setComments(imageUrls);
      document.getElementById("loader_thread")?.classList.add("hidden");

      console.log("fetching comments successful");
    } catch (error: any) {
      document.getElementById("loader_thread")?.classList.add("hidden");
      if (error.response && error.response.status === 400) {
        setError("Server error: Bad Gateway (502)");
      } else {
        setError("Error fetching or extracting comments");
      }

      /*
            console.error("Error fetching or extracting comments:", error);
            setComments([
              {
                name: "thread_comment_0",
                src: "public/images/thread_comment_0.png"
              },
              {
                name: "thread_comment_1",
                src: "public/images/thread_comment_1.png"
              },
              {
                name: "thread_comment_2",
                src: "public/images/thread_comment_2.png"
              }
            ])
       */
    }
  }

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-tl-full rounded-bl-full bg-blue-400 bg-opacity-60
        blur-own2 z-0">
        </div>
        <div className="container rounded-lg pb-10 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-sm">
          <div className="flex flex-col items-center text-white">
            <div className="pt-10 font-bold text-center">
              <h1 className="text-2xl">Test it yourself</h1>
              <h2 className="text-xl">Enter a thread name</h2>
            </div>
            <input
              type="text"
              name="text"
              className="inputThr focus:outline-none w-4/12 transition duration-250 focus:w-2/3 mt-2"
              placeholder="Thread Link"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="m-auto mt-4">
              <button id="voicePre" className="generator w-30 text-lg font-bold text-center" onClick={getComments}>
                Submit
              </button>
            </div>
            {error && (
              <div className="font-bold text-red-500 pt-2">{error}</div>
            )}
            <div className="flex-row mx-auto ">
              <div id="loader_thread" className="text-center hidden mt-10">
                <svg className="pl m-auto" width="240" height="240" viewBox="0 0 240 240">
                  <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000"
                          strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330"
                          strokeLinecap="round"></circle>
                  <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000"
                          strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110"
                          strokeLinecap="round"></circle>
                  <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000"
                          strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                  <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000"
                          strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                </svg>
                <div className="text-2xl">Fetching Reddit...</div>
              </div>
              <div className="w-2/3 container mx-auto py-3">
                {comments.length > 0 && (
                  <div key={0} className="pt-4">
                    <img src={comments[0].src} alt={comments[0].name} className="rounded-md" />
                  </div>
                )}
              </div>
              <div className="w-1/2 container mx-auto">
                {comments.slice(1).map((comment, index) => (
                  <div key={index} className="pb-3">
                    <img src={comment.src} alt={comment.name} className="rounded-md" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Thread };
