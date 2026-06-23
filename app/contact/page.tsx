import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Salon Sonali. Find our location, hours, phone number, and send us a message.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
