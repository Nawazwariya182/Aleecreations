"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-[100vw] h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Full background image */}
      <Image
        src="/products/0.webp"
        alt="Crystal accessory"
        fill
        className="object-cover"
        priority
      />

      {/* Top left text - ALEE CREATION'S - responsive */}
      <div className="absolute top-4 left-2 sm:left-3 z-10 max-w-full overflow-hidden">
        {/* Mobile: 2 lines */}
        <div className="md:hidden">
          <h1 
            className="text-charcoal font-gatheraz tracking-wider leading-[0.85] text-[20vw]"
          >
            ALEE
          </h1>
          <h1 
            className="text-charcoal font-gatheraz tracking-wider leading-[0.85] text-[20vw]"
          >
            CREATION&apos;S
          </h1>
        </div>
        {/* Tablet and Desktop: 1 line */}
        <h1 
          className="hidden md:block text-charcoal font-gatheraz tracking-widest leading-[0.8] whitespace-nowrap"
          style={{ fontSize: 'clamp(90px, 13vw, 200px)' }}
        >
          ALEE CREATION&apos;S
        </h1>
      </div>

      {/* Bottom text - Elegance in Every Detail */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 right-2 md:left-auto md:right-8 text-center md:text-right z-51">
        <p 
          className="text-charcoal font-gi tracking-wide leading-tight"
          style={{ fontSize: 'clamp(32px, 8vw, 100px)' }}
        >
          Elegance in Every Detail
        </p>
      </div>

      {/* Overlap image - all devices */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-50 flex items-end justify-center h-[85vh] sm:h-[85vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] 2xl:h-[110vh]"
        style={{ transform: `translateY(-${scrollY * 0.5}px)` }}
      >
        <Image
          src="/Others/overlap.webp"
          alt="Overlay"
          fill
          className="object-cover object-bottom 2xl:object-contain"
        />
      </div>

      {/* Overoverlap image - all devices */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-[110] flex items-end justify-center h-[85vh] sm:h-[85vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] 2xl:h-[110vh]"
        style={{ transform: `translateY(-${scrollY * 0.5}px)` }}
      >
        <Image
          src="/Others/overroverlap.webp"
          alt="Overlay"
          fill
          className="object-cover object-bottom 2xl:object-contain"
        />
      </div>

    </div>
  );
}
