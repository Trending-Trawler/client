import GalleryView from "./GalleryView";

function BackgroundSection() {

  const videos: Video[] = [
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
    }
  ];

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