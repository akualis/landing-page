'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function AppPreviewCarousel({ appPreviews } : AppPreviews) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="preview-carousel relative"
    >
      {appPreviews.map((appPreview) => (
        <SwiperSlide key={appPreview.alt}>
          {/* Mobile: Top info */}
          <span className="preview-carousel-info top block mb-4 m-auto md:hidden">
            <p className="bold">{appPreview.info.left.title}</p>
            <p className="small">{appPreview.info.left.description}</p>
          </span>
          {/* Image */}
          <div className="text-center mb-8">
            <Image
              src={appPreview.picture}
              alt={appPreview.alt}
              width={440} // Adjust width as needed
              height={888} // Adjust height as needed
              className="h-[580px] md:h-[540px] mx-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Desktop: Left info */}
          <span className="preview-carousel-info hidden md:block absolute left-0 top-1/4 transform -translate-y-1/2">
            <p className="bold">{appPreview.info.left.title}</p>
            <p className="small">{appPreview.info.left.description}</p>
          </span>
          {/* Desktop: Right info */}
          <span className="preview-carousel-info hidden md:block absolute right-0 top-3/4 transform -translate-y-1/2">
            <p className="bold">{appPreview.info.right.title}</p>
            <p className="small">{appPreview.info.right.description}</p>
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
