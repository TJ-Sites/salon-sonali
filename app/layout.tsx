import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Yeseva_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/layout/LenisProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Salon Sonali | Luxury Hair & Beauty Studio",
    template: "%s | Salon Sonali",
  },
  description:
    "Salon Sonali is a premium hair and beauty studio offering expert hair, skin, nails, and wellness treatments. Book your transformation today.",
  keywords: ["salon", "hair salon", "beauty studio", "hair", "skin", "nails", "wellness", "luxury salon"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Salon Sonali",
    title: "Salon Sonali | Luxury Hair & Beauty Studio",
    description:
      "Premium hair and beauty studio offering expert treatments for hair, skin, nails, and wellness.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salon Sonali | Luxury Hair & Beauty Studio",
    description: "Premium hair and beauty studio. Book your transformation today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${yeseva.variable}`}>
      <body>
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
