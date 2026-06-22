import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Salon Sonali's portfolio of transformations — hair colour, cuts, skin treatments, grooming, and bridal looks.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
