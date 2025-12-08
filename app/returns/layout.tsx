import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Exchange Policy",
  description: "Easy returns and exchanges for crystal phone charms. Quality guarantee. Customer-friendly policy at Alee Creation's Mumbai.",
  alternates: {
    canonical: "https://alee-creations.vercel.app/returns",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReturnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
