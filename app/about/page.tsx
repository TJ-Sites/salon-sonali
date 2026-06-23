import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn the story behind Salon Sonali — our values, our journey, and the passion that drives everything we do.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
