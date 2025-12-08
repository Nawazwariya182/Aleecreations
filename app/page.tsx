import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Occasions from "./components/Occasions";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Alee Creation's - Handcrafted Crystal Phone Charms & Accessories India",
  description: "Shop premium handcrafted crystal phone charms, mobile accessories & keychains. Rose Quartz, Amethyst, Pearl designs. Mumbai, India. Order on WhatsApp. Free shipping available.",
  alternates: {
    canonical: "https://www.aleecreations.live",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Products />
      {/* Divider */}
      <div className="w-9/10 mx-auto h-px bg-taupe mb-6"></div>
      <Occasions />
      <Footer />
    </div>
  );
}
