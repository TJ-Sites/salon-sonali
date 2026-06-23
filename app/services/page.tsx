import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Salon Sonali's full menu of luxury hair, skin, dressings, and beauty services. Premium treatments tailored to you.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
