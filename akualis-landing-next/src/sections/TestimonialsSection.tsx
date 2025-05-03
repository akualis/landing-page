import Image from 'next/image';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Lyla',
      picture: '/img/portrait/akualis-lyla.webp',
      alt: "Photo de Lyla - utilisatrice de l'application Akualis pour trouver des points d'eau potable",
      quote:
        'Grâce à Akualis, je peux facilement trouver des points d’eau quand je me balade avec mes parents et remplir ma gourde plutôt qu’utiliser du plastique',
    },
    {
      name: 'Benoît',
      picture: '/img/portrait/akualis-benoit.webp',
      alt: "Photo de Benoît - utilisateur de l'application Akualis pour trouver des points d'eau potable",
      quote:
        'En rando, en vélo, en ville, Akualis me permet de recharger mes gourdes et de profiter pleinement de mes sorties sportives',
    },
    {
      name: 'Philippe',
      picture: '/img/portrait/akualis-philippe.webp',
      alt: "Photo de Philippe - utilisateur de l'application Akualis pour trouver des points d'eau potable",
      quote:
        'Akualis, au delà d’une application pratique est une application ludique et d’intérêt général',
    },
  ];

  return (
    <section id="testimonials" className="w-full flex flex-col items-center text-center py-14">
        <div className="hidden md:block w-full px-4">
          <p className="text-lg text-accent subtitle">Témoignages</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
            {/* Map over testimonial array */}
            {testimonials.map((testimonial, index) => (
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
          <p className="text-lg text-accent subtitle">Témoignages</p>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
  );
}
