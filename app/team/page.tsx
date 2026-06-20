import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the talented stylists and beauty experts at Salon Sonali. Each specialist is dedicated to bringing out your best.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
