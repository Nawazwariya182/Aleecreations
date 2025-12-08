"use client";

import Image from "next/image";
import { HiGift, HiSparkles, HiSun } from "react-icons/hi";

export default function Occasions() {
  const occasions = [
    {
      icon: HiGift,
      title: "Perfect Gift",
      description: "Surprise your loved ones with a unique, handcrafted crystal accessory.",
      image: "/occasion/gift.webp",
    },
    {
      icon: HiSparkles,
      title: "Special Occasions",
      description: "Elevate your look for weddings, parties, and celebrations.",
      image: "/occasion/special.webp",
    },
    {
      icon: HiSun,
      title: "Everyday Elegance",
      description: "Add a touch of luxury to your daily life effortlessly.",
      image: "/occasion/daily.webp",
    },
  ];

  return (
    <section className="w-full bg-cream pt-4 px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
          For Every Moment
        </p>
        <h2 className="font-gatheraz text-5xl md:text-6xl text-charcoal tracking-wide mb-6">
          Crafted for You
        </h2>
        <div className="w-24 h-px bg-gold/60 mx-auto"></div>
      </div>

      {/* Occasions Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {occasions.map((occasion, index) => (
          <div
            key={index}
            className="group relative h-[500px] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={occasion.image}
              alt={occasion.title}
              fill
              className="object-cover transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              {/* Icon */}
              <div className="w-16 h-16 mb-4 rounded-full border border-gold/50 bg-charcoal/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold transition-all duration-500">
                <occasion.icon className="text-gold text-2xl" />
              </div>

              {/* Title */}
              <h3 className="font-gatheraz text-3xl text-cream tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                {occasion.title}
              </h3>

              {/* Description */}
              <p className="text-cream/70 font-gi text-sm leading-relaxed max-w-xs">
                {occasion.description}
              </p>

              {/* Animated Line */}
              <div className="w-0 h-px bg-gold mt-6 group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-taupe font-gi text-base mb-6">
          Not sure what to pick? We&apos;ll help you find the perfect piece.
        </p>
        <a
          href="https://wa.me/918108328786?text=Hi! I need help choosing a crystal accessory."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold font-gi text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300"
        >
          Get Personalized Help
        </a>
      </div>
    </section>
  );
}
