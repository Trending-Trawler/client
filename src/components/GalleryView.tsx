import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Mousewheel, Navigation, Pagination } from "swiper";

interface GalleryViewProps {
  videos: Video[];
}

function GalleryView({ videos }: GalleryViewProps) {

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = async (swiper: any) => {
    const currentIndex = (swiper.realIndex + 1) % videoRefs.current.length;
    const previousIndex = (currentIndex + 1) % videoRefs.current.length;
    let swipeDirectionForward: boolean = true;

    // Create Promises that resolve when the slideNextTransitionEnd and slidePrevTransitionEnd events are triggered
    const nextPromise = new Promise<void>((resolve) => {
      swiper.on("slideNextTransitionEnd", () => {
        swipeDirectionForward = true;
        resolve();
      });
    });
    const prevPromise = new Promise<void>((resolve) => {
      swiper.on("slidePrevTransitionEnd", () => {
        swipeDirectionForward = false;
        resolve();
      });
    });
    // Wait for either of the Promises to resolve
    await Promise.race([nextPromise, prevPromise]);

    if (videoRefs.current[currentIndex] && videoRefs.current[currentIndex]?.paused) {
      // @ts-ignore
      videoRefs.current[currentIndex].play();
    }
    if (swipeDirectionForward) {
      if (videoRefs.current[swiper.realIndex] && !videoRefs.current[swiper.realIndex]?.paused) {
        // @ts-ignore
        videoRefs.current[swiper.realIndex]?.pause();
      }
    } else if (!swipeDirectionForward) {
      if (videoRefs && videoRefs.current[previousIndex] && !videoRefs.current[previousIndex]?.paused) {
        // @ts-ignore
        videoRefs.current[previousIndex]?.pause();
      }
    }
  };

  const handleVideoClick = async (swiper: any) => {
    const currentIndex = (swiper.realIndex + 1) % videoRefs.current.length;

    if (videoRefs.current[currentIndex] && videoRefs.current[currentIndex]?.paused) {
      // @ts-ignore
      videoRefs.current[currentIndex].play();
    } else if (videoRefs.current[currentIndex] && !videoRefs.current[currentIndex]?.paused) {
      // @ts-ignore
      videoRefs.current[currentIndex].pause();
    }
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        initialSlide={1}
        loop={true}
        coverflowEffect={{
          rotate: -10,
          depth: 200
        }}
        pagination={{ el: ".swiper-pagination" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        mousewheel={true}

        modules={[EffectCoverflow, Navigation, Mousewheel, Pagination]}

        onSlideChangeTransitionEnd={handleSlideChange}
        onClick={handleVideoClick}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id} className="w-1/2 sm:w-auto md:w-full lg:w-32">
            <video id={`video_${video.id}`}
                   className="flex justify-center align-middle rounded-xl border-solid border border-grey-400"
                   ref={el => (videoRefs.current[index] = el)}
                   loop
                   muted
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          </div>
          <div className="swiper-button-next slider-arrow">
          </div>
        </div>
      </Swiper>
      <div className="swiper-pagination"></div>
    </>
  );
}

export default GalleryView;
