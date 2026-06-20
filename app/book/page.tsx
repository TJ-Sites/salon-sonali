import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book your appointment at Salon Sonali. Choose your service, specialist, and time — easy online booking.",
};

export default function BookPage() {
  return <BookPageClient />;
}
