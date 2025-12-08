import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you are looking for does not exist. Browse our crystal phone charms collection.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-gatheraz text-8xl md:text-9xl text-gold mb-4">404</h1>
        <h2 className="font-gatheraz text-2xl md:text-3xl text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-taupe font-gi text-base mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gold text-charcoal font-gi text-sm uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/collection"
            className="px-6 py-3 border border-gold text-gold font-gi text-sm uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Browse Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
