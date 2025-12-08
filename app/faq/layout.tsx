import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions",
  description: "Common questions about crystal phone charms, ordering, shipping, and care. Everything you need to know about Alee Creation's products.",
  alternates: {
    canonical: "https://www.aleecreations.live/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
