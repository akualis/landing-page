'use client';
import './theme.scss';
import ConstatSection from '@/sections/ConstatSection';
import TeamSection from '@/sections/TeamSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import Menu from '@/components/Menu';
import HeroSection from '@/sections/HeroSection';
import FooterSection from '@/sections/FooterSection';
import ConceptSection from '@/sections/ConceptSection';
import { InformSection } from '@/sections/InformSection';

export default function HomePage() {
  return (
    <>
      <Menu />
      <HeroSection />
      <div className="max-w-screen-xl mx-auto">
        <ConceptSection />
        <ConstatSection />
        <TeamSection />
        <TestimonialsSection />
      </div>
      <InformSection />
      <FooterSection />
    </>
  );
}
