import { useState } from "react";
import JSZip from "jszip";

function Thread() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState<Comments[]>([]);

  async function getComments() {
    try {
      const response = await fetch("http://localhost:8000/comments?" + new URLSearchParams({thread_url: inputText}), {
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
            return {name: filename.split(".")[0], src: videoURL}
          }
          return null;
        })
      ).then((results:any[]) => results.filter((imageUrl) => imageUrl !== null))

      setComments(imageUrls);
      console.log("fetching comments successful");
    } catch (error) {
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
    }
  }

  return (
    <>
      <div className="container rounded-lg pb-10 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-sm">
        <div className="flex flex-col items-center text-white">
          <div className="pt-10 font-bold text-center">
            <h1 className="text-2xl">Test it yourself</h1>
            <h2 className="text-xl">Enter a thread name</h2>
          </div>
          <div className="w-2/4 scale-130 bg-slate-800/30 mt-5 rounded border border-white border-2 drop-shadow-xl">
            <input
              type="text"
              placeholder="Thread Link"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-3/4 bg-transparent text-white text-sm py-0.5 px-1 rounded-sm placeholder-white/80 focus:outline-none"
            />
            <button
              type="submit"
              className="text-white font-bold pl-3 "
              onClick={getComments}
            >
              Submit
            </button>
          </div>
          <div className="flex-row mx-auto " >
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
                  <img src={comment.src} alt={comment.name} className="rounded-md"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Thread };
