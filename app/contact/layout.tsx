import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Order on WhatsApp",
  description: "Contact Alee Creation's for crystal phone charms. Order via WhatsApp. Quick response. Mumbai, India. Custom orders welcome.",
  alternates: {
    canonical: "https://alee-creations.vercel.app/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Alee Creation's",
    description: "Get in touch for orders and inquiries. Quick WhatsApp response.",
    url: "https://alee-creations.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
