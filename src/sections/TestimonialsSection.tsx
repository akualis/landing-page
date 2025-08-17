'use client';
import Image from 'next/image';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function TestimonialsSection({ t }: { t?: any }) {
  // read values from i18n: t.testimonials.title and t.testimonials.items
  const sectionTitle = t?.testimonials?.title;
  const testimonials = t?.testimonials?.items ?? [];

  return (
    <section id="testimonials" className="w-full flex flex-col items-center text-center py-14 scroll-mt-14">
      <div className="hidden md:block w-full px-4">
        <p className="text-lg text-accent subtitle">{sectionTitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
          {testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={testimonial.picture}
                width={180}
                height={180}
                alt={testimonial.alt || `Photo de ${testimonial.name}`}
              />
              <h3 className="font-semibold mt-4">{testimonial.name}</h3>
              <p className="mt-4 text-sm">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial mobile */}
      <div className="block md:hidden w-full">
        <p className="text-lg text-accent subtitle">{sectionTitle}</p>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
