'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation";
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

type Testimonial = {
  name: string
  quote: string
  picture: string
  alt?: string
}

type TestimonialCarouselProps = {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      navigation
      className="w-full max-w-md"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center text-center px-6 pt-8 pb-10">
            <Image
              src={testimonial.picture}
              alt={testimonial.alt || `Photo de ${testimonial.name}`}
              width={180}
              height={180}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.quote}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
