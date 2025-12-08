import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Craftsmanship",
  description: "Learn about Alee Creation's journey. 5+ years of handcrafting crystal phone accessories in Mumbai. 500+ happy customers. 100% handmade with love.",
  alternates: {
    canonical: "https://www.aleecreations.live/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Alee Creation's | Our Story",
    description: "Discover our passion for handcrafted crystal accessories.",
    url: "https://www.aleecreations.live/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
