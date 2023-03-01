import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

interface GalleryViewProps {
  videos: Video[];
}

function GalleryView({ videos }: GalleryViewProps) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        mousewheel={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id} className="w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4">
            <video autoPlay loop muted className="" >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default GalleryView;
