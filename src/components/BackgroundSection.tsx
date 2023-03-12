import JSZip from "jszip";
import GalleryView from "./GalleryView";
import { useEffect, useState } from "react";

function BackgroundSection() {

  const [videos, setVideos] = useState<Video[]>([]);

  async function fetchVideos() {
    try {
      const response = await fetch("https://api.trending-trawler.com/video/preview", {
        method: "GET",
        mode: "cors"
      });

      const arrayBuffer = await response.arrayBuffer();
      const zip = await JSZip.loadAsync(arrayBuffer);
      let videoId = 0;

      const updatedVideos = await Promise.all(
        Object.keys(zip.files).map(async (filename) => {
          const file = zip.files[filename];
          if (file.name.endsWith(".mp4")) {
            const videoBlob = await file.async("blob");
            const videoUrl = URL.createObjectURL(videoBlob);
            return { id: videoId++, src: videoUrl };
          }
          return null;
        })
      ).then((results: any[]) => results.filter((video) => video !== null));

      setVideos(updatedVideos);

      console.log("fetching videos successfull");
    } catch (error) {
      console.error("Error fetching or extracting videos:", error);
      setVideos([
        {
          id: 0,
          src: "videos/video0.mp4"
        },
        {
          id: 1,
          src: "videos/video1.mp4"
        },
        {
          id: 2,
          src: "videos/video2.mp4"
        },
        {
          id: 3,
          src: "videos/video3.mp4"
        },
        {
          id: 4,
          src: "videos/video4.mp4"
        },
        {
          id: 5,
          src: "videos/video5.mp4"
        },
        {
          id: 6,
          src: "videos/video3.mp4"

        }]);
    }
  }

  useEffect(() => {
  if(videos.length === 0){
    fetchVideos();
  }
  }, []);

  console.log("videos:", videos);
  return (
    <div className="flex flex-row items-center text-white">
      <div className="container rounded-lg pb-10 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-sm">
        <h1 className="pb-8 pt-6 font-bold text-center text-2xl">Choose A Background</h1>
        <div className="flex w-1/2 mx-auto">
          <GalleryView videos={videos} />
        </div>
      </div>
    </div>
  );
}

export { BackgroundSection };