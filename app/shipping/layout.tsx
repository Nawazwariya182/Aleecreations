import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Pickup Information",
  description: "Free store pickup in Mumbai. Shipping information for crystal phone charms. Order process and delivery details for Alee Creation's.",
  alternates: {
    canonical: "https://alee-creations.vercel.app/shipping",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
