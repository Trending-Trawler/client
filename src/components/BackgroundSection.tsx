import JSZip from "jszip";
import GalleryView from "./GalleryView";
import { useEffect, useState } from "react";

function BackgroundSection() {

  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState("");

  async function fetchVideos() {
    document.getElementById("loader_video")?.classList.remove("hidden");

    try {
      const response = await fetch("http://localhost:8000/videos/preview", {
        method: "GET",
        mode: "cors"
      });

      const arrayBuffer = await response.arrayBuffer();
      const zip = await JSZip.loadAsync(arrayBuffer);

      const updatedVideos = await Promise.all(
        Object.keys(zip.files).map(async (filename) => {
          const file = zip.files[filename];
          if (file.name.endsWith(".mp4")) {
            const videoBlob = await file.async("blob");
            const videoUrl = URL.createObjectURL(videoBlob);
            return { name: filename.split(".")[0], src: videoUrl };
          }
          return null;
        })
      ).then((results: any[]) => results.filter((video) => video !== null));

      setVideos(updatedVideos);
      document.getElementById("loader_video")?.classList.add("hidden");
      console.log("fetching videos successful");
    } catch (error) {
      document.getElementById("loader_video")?.classList.add("hidden");
      setError("Error fetching or extracting videos");

      /*
      setVideos([
        {
          name: "video0",
          src: "videos/video0.mp4"
        },
        {
          name: "video1",
          src: "videos/video1.mp4"
        },
        {
          name: "video2",
          src: "videos/video2.mp4"
        },
        {
          name: "video3",
          src: "videos/video3.mp4"
        },
        {
          name: "video4",
          src: "videos/video4.mp4"
        },
        {
          name: "video5",
          src: "videos/video5.mp4"
        },
        {
          name: "video6",
          src: "videos/video3.mp4"
        }]);
      */
    }
  }

  useEffect(() => {
    if (videos.length === 0) {
      fetchVideos();
    }
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute bottom-0 right-0 w-60 h-96 rounded-tl-full rounded-bl-full bg-orange-400 bg-opacity-40 blur-own2 z-0"></div>
      <div className="flex flex-row items-center text-white">
        <div className="container rounded-lg pb-10 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-2xl z-10">
          <h1 className="pb-8 pt-6 font-bold text-center text-2xl">Choose A Background</h1>
          <div className="flex w-1/2 mx-auto">
            <GalleryView videos={videos} />
          </div>
          {error && (
            <div className=" text-center mx-auto font-bold text-red-500 pt-2">{error}</div>
          )}
          <div id="loader_video" className="text-center hidden">
            <svg className="pl mx-auto" width="240" height="240" viewBox="0 0 240 240">
              <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            </svg>
            <div className="text-2xl">Fetching Reddit...</div>
          </div>
        </div>
      </div>
    </div>
  );

}

export { BackgroundSection };