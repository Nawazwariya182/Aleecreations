"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="w-full bg-cream pt-13 sm:pt-10 md:pt-12 px-0 overflow-hidden">
      {/* Large Brand Name */}
      <div className="flex items-center justify-start pl-1">
        <h2 className="font-gatheraz text-charcoal tracking-widest text-[45px] sm:text-[60px] md:text-[110px] lg:text-[130px] xl:text-[165px] 2xl:text-[200px] leading-none mb-[-9px] sm:mb-[-16px] md:mb-[-23px] lg:mb-[-28px] xl:mb-[-33px] 2xl:mb-[-40px]">
          ALEE CREATION&apos;S
        </h2>
      </div>

      {/* Bottom Black Box - merged with brand text by -1px */}
      <div className="bg-charcoal py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 -mt-[1px]">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Column */}
          <div className="flex flex-col col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-gold flex-shrink-0">
                <Image
                  src="/Others/logo.webp"
                  alt="Alee Creation's Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-gatheraz text-lg sm:text-xl md:text-2xl text-cream tracking-widest">ALEE CREATION&apos;S</h3>
                <p className="font-gi text-gold text-[10px] sm:text-xs tracking-widest">Reshma Wariya</p>
              </div>
            </div>
            <p className="text-cream/60 text-xs sm:text-sm font-gi leading-relaxed">
              Handcrafted crystal accessories that add elegance and sparkle to your everyday devices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-gatheraz text-sm sm:text-base md:text-lg lg:text-xl text-gold mb-3 sm:mb-4 md:mb-6 tracking-widest">Quick Links</h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <a href="/" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">Home</a>
              <a href="/collection" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">All Collections</a>
              <a href="/best-sellers" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">Best Sellers</a>
              <a href="/about" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">About Us</a>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col">
            <h4 className="font-gatheraz text-sm sm:text-base md:text-lg lg:text-xl text-gold mb-3 sm:mb-4 md:mb-6 tracking-widest">Customer Service</h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <a href="/contact" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">Contact Us</a>
              <a href="/shipping" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">Shipping Info</a>
              <a href="/returns" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">Returns & Exchange</a>
              <a href="/faq" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi">FAQs</a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col">
            <h4 className="font-gatheraz text-sm sm:text-base md:text-lg lg:text-xl text-gold mb-3 sm:mb-4 md:mb-6 tracking-widest">Get In Touch</h4>
            <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
              <a href="tel:+918108328786" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi flex items-center gap-2">
                <HiPhone className="text-gold text-sm sm:text-base flex-shrink-0" /> +91 8108328786
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aleenascrystal@gmail.com" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition-colors text-xs sm:text-sm font-gi flex items-center gap-2 break-all">
                <HiMail className="text-gold text-sm sm:text-base flex-shrink-0" /> aleenascrystal@gmail.com
              </a>
              <p className="text-cream/70 text-xs sm:text-sm font-gi flex items-center gap-2">
                <HiLocationMarker className="text-gold text-sm sm:text-base flex-shrink-0" /> Mumbai, India
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3">
              <a href="https://www.instagram.com/alee__creation_s?igsh=bG5nbGVneWRlaGRl" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold hover:text-charcoal text-gold transition-all">
                <FaInstagram className="text-sm sm:text-base md:text-lg" />
              </a>
              <a href="https://wa.me/918108328786" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold hover:text-charcoal text-gold transition-all">
                <FaWhatsapp className="text-sm sm:text-base md:text-lg" />
              </a>
              <a href="https://youtube.com/@alee_creations?si=oi1JgrX_FUdT-tEe" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gold/50 flex items-center justify-center hover:bg-gold hover:text-charcoal text-gold transition-all">
                <FaYoutube className="text-sm sm:text-base md:text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/20 mb-4 sm:mb-6"></div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-cream/70 text-xs sm:text-sm font-light font-gi">
            &copy; 2025 ALEE CREATION&apos;S. All rights reserved.
          </p>
          <p className="text-cream/70 text-xs sm:text-sm font-light font-gi">
            Crafted with &#10084; in India
          </p>
        </div>
      </div>
    </footer>
  );
}
