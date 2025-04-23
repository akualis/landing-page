'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PreviewCarousel ({appPreviews} : AppPreviews) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? appPreviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === appPreviews.length - 1 ? 0 : prev + 1));
  };

  const preview = appPreviews[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      <div className="relative rounded-2xl overflow-hidden flex flex-col items-center">
        {/* Mobile (top info) */}
        <div className="md:hidden preview-carousel-info top text-center mb-4 mt-4">
          <p className="font-bold">{preview.info.left.title}</p>
          <p className="text-sm">{preview.info.left.description}</p>
        </div>

        {/* Image */}
        <img
          src={preview.picture}
          alt={preview.alt}
          className="w-full max-w-md object-contain transition-transform duration-500 h-[580px] md:h-[540px]"
        />

        {/* Desktop (left + right info) */}
        <div className="hidden preview-carousel-info left md:flex justify-between w-full px-8 mt-6 mb-4 text-sm">
          <div className="text-left max-w-sm">
            <p className="font-bold">{preview.info.left.title}</p>
            <p>{preview.info.left.description}</p>
          </div>
          <div className="text-right preview-carousel-info right max-w-sm">
            <p className="font-bold">{preview.info.right.title}</p>
            <p>{preview.info.right.description}</p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <ChevronRight />
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {appPreviews.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-accent' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};
