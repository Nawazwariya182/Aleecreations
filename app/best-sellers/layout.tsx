import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Selling Crystal Phone Charms - Top Picks",
  description: "Shop our best-selling crystal phone charms. Most popular handcrafted gemstone accessories loved by customers across India. Order on WhatsApp.",
  alternates: {
    canonical: "https://alee-creations.vercel.app/best-sellers",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Best Sellers | Alee Creation's",
    description: "Discover our most popular crystal phone charms loved by customers.",
    url: "https://alee-creations.vercel.app/best-sellers",
  },
};

export default function BestSellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
