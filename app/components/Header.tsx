"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full h-16 md:h-20 bg-charcoal flex items-center justify-between px-4 md:px-6 shadow-md">
      {/* Logo - Left on mobile, Tagline on tablet+ */}
      <div className="flex items-center gap-2 lg:gap-3">
        {/* Logo on mobile with tagline */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/">
            <Image
              src="/Others/logo.webp"
              alt="Alee Creation's Logo"
              width={40}
              height={40}
              className="object-cover rounded-full w-10 h-10"
            />
          </Link>
          <div className="w-0.5 h-5 bg-taupe"></div>
          <p className="text-cream text-[10px] sm:text-xs font-light font-blosta tracking-wider">
            Crystal Elegance for Your Device
          </p>
        </div>
        {/* Tagline - Hidden on mobile, visible on tablet and up */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <div className="w-0.5 h-6 lg:h-8 bg-taupe"></div>
          <p className="text-cream text-sm md:text-base lg:text-xl xl:text-2xl font-light font-blosta tracking-widest">
            Crystal Elegance for Your Device
          </p>
        </div>
      </div>

      {/* Logo - Centered (only on tablet and up) */}
      <Link href="/" className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <Image
          src="/Others/logo.webp"
          alt="Alee Creation's Logo"
          width={64}
          height={64}
          className="object-cover rounded-full w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
      </Link>

      {/* Contact Button - Hidden on mobile */}
      <a 
        href="https://wa.me/918108328786?text=Hi! I'm interested in your crystal accessories."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 border border-gold text-gold text-xs lg:text-sm uppercase tracking-widest font-gi hover:bg-gold hover:text-charcoal transition-all duration-300"
      >
        Contact
      </a>

      {/* Mobile WhatsApp Circle Button */}
      <a 
        href="https://wa.me/918108328786?text=Hi! I'm interested in your crystal accessories."
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}
