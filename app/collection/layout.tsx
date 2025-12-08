import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crystal Phone Charms Collection - 50+ Handcrafted Designs",
  description: "Browse 50+ handcrafted crystal phone charms. Rose Quartz, Amethyst, Pearl, Jade & more gemstone designs. Filter by category. Shop online in India.",
  alternates: {
    canonical: "https://www.aleecreations.live/collection",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Crystal Phone Charms Collection | Alee Creation's",
    description: "Browse our complete collection of handcrafted crystal phone charms and accessories.",
    url: "https://www.aleecreations.live/collection",
  },
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
