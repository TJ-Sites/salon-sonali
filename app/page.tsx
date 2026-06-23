import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import StatsSection from "@/components/home/StatsSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutTeaser from "@/components/home/AboutTeaser";
import GalleryStrip from "@/components/home/GalleryStrip";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon Sonali | Luxury Hair & Beauty Studio",
  description:
    "Salon Sonali is a premium luxury hair and beauty studio. Expert treatments for hair, skin, dressings, and wellness. Book your transformation today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatsSection />
      <FeaturedServices />
      <AboutTeaser />
      <GalleryStrip />
      <Testimonials />
      <CTABanner />
    </>
  );
}
