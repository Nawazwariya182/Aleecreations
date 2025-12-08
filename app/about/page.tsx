"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaHeart, FaYoutube } from "react-icons/fa";
import { HiSparkles, HiStar, HiGift, HiLightningBolt } from "react-icons/hi";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  const values = [
    {
      icon: HiSparkles,
      title: "Handcrafted Quality",
      description: "Every piece is meticulously crafted by hand, ensuring unique beauty and exceptional quality.",
    },
    {
      icon: HiHeart,
      title: "Made with Love",
      description: "Each accessory carries the passion and dedication of our artisans who pour their heart into every creation.",
    },
    {
      icon: HiGift,
      title: "Perfect Gifting",
      description: "Our crystals make meaningful gifts that sparkle with elegance and carry heartfelt sentiments.",
    },
    {
      icon: HiLightningBolt,
      title: "Unique Designs",
      description: "Stand out with exclusive designs that blend traditional craftsmanship with contemporary style.",
    },
  ];

  const milestones = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Unique Designs" },
    { number: "5", label: "Years of Craft" },
    { number: "100%", label: "Handmade" },
  ];

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-cream" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-6">
            Our Story
          </p>
          <h1 className="font-gatheraz text-6xl md:text-8xl text-cream tracking-wide mb-6">
            About Us
          </h1>
          <p className="text-cream/70 font-gi text-xl max-w-2xl leading-relaxed">
            Where passion meets craftsmanship to create timeless crystal elegance for your everyday devices
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Others/work.webp"
                  alt="Our Craft"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold px-8 py-4 rounded-full shadow-lg">
                <p className="font-gatheraz text-2xl text-charcoal">Est. 2025</p>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
                Welcome to
              </p>
              <h2 className="font-gatheraz text-5xl text-charcoal tracking-wide mb-6">
                Alee Creation&apos;s
              </h2>
              <div className="w-16 h-px bg-gold mb-8"></div>
              
              <p className="text-taupe font-gi text-lg leading-relaxed mb-6">
                Born from a deep love for crystals and creativity, Alee Creation&apos;s began as a small dream in Mumbai. What started as a personal hobby has blossomed into a passionate pursuit of bringing sparkle and elegance to everyday life.
              </p>
              
              <p className="text-taupe font-gi text-lg leading-relaxed mb-6">
                Every piece in our collection is thoughtfully designed and handcrafted with premium crystals, ensuring that each accessory is not just an ornament, but a statement of style and sophistication.
              </p>

              <p className="text-taupe font-gi text-lg leading-relaxed mb-8">
                We believe that beauty lies in the details, and our crystal accessories are crafted to add that perfect touch of glamour to your mobile devices, making them as unique as you are.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                  <Image
                    src="/Others/logo.webp"
                    alt="Founder"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-gatheraz text-xl text-charcoal">Reshma Wariya</p>
                  <p className="text-gold font-gi text-sm">Founder & Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-charcoal py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="font-gatheraz text-4xl md:text-5xl text-cream tracking-wide">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 border border-gold/20 rounded-2xl hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon className="text-gold text-2xl" />
                </div>
                <h3 className="font-gatheraz text-xl text-cream tracking-wide mb-4">
                  {value.title}
                </h3>
                <p className="text-cream/60 font-gi text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="w-full py-24 mb-[-120px] px-8 bg-gradient-to-b from-cream to-cream/90">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Our Journey
            </p>
            <h2 className="font-gatheraz text-4xl md:text-5xl text-charcoal tracking-wide">
              Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="text-center p-8"
              >
                <p className="font-gatheraz text-5xl md:text-6xl text-gold mb-2">
                  {milestone.number}
                </p>
                <p className="text-taupe font-gi text-sm uppercase tracking-widest">
                  {milestone.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div>
              <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="font-gatheraz text-4xl md:text-5xl text-charcoal tracking-wide mb-8">
                The Alee Difference
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <HiStar className="text-gold text-sm" />
                  </div>
                  <div>
                    <h4 className="font-gatheraz text-2xl text-charcoal mb-2">Premium Quality Crystals</h4>
                    <p className="text-taupe font-gi text-base">We source only the finest crystals that catch light beautifully and last for years.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <HiStar className="text-gold text-sm" />
                  </div>
                  <div>
                    <h4 className="font-gatheraz text-2xl text-charcoal mb-2">Secure Attachment</h4>
                    <p className="text-taupe font-gi text-base">Our accessories are designed to stay put, with durable attachments that won&apos;t let you down.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <HiStar className="text-gold text-sm" />
                  </div>
                  <div>
                    <h4 className="font-gatheraz text-2xl text-charcoal mb-2">Universal Compatibility</h4>
                    <p className="text-taupe font-gi text-base">Our designs work with all phone models and cases, giving you complete flexibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <HiStar className="text-gold text-sm" />
                  </div>
                  <div>
                    <h4 className="font-gatheraz text-2xl text-charcoal mb-2">Personalized Service</h4>
                    <p className="text-taupe font-gi text-base">We&apos;re always here to help you find the perfect piece or create custom designs just for you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/products/1.webp"
                  alt="Crystal Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-xl overflow-hidden mt-8">
                <Image
                  src="/products/2.webp"
                  alt="Crystal Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/products/3.webp"
                  alt="Crystal Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-xl overflow-hidden mt-8">
                <Image
                  src="/products/4.webp"
                  alt="Crystal Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-charcoal via-charcoal to-burgundy/30 py-24 mb-17 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FaHeart className="text-gold text-5xl mx-auto mb-6" />
          <h2 className="font-gatheraz text-4xl md:text-5xl text-cream tracking-wide mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-cream/60 font-gi text-lg mb-12 max-w-2xl mx-auto">
            Whether you&apos;re looking for the perfect accessory or want a custom design, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="./collection"
              className="px-10 py-4 border-2 border-gold text-gold font-gi text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-full"
            >
              Explore Collection
            </Link>
            <a 
              href="https://wa.me/918108328786?text=Hi! I'd like to know more about Alee Creation's."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-charcoal font-gi text-sm uppercase tracking-[0.2em] hover:bg-cream transition-all duration-300 flex items-center gap-3 rounded-full shadow-lg shadow-gold/30"
            >
              <FaWhatsapp size={20} />
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <a 
              href="https://www.instagram.com/alee__creation_s?igsh=bG5nbGVneWRlaGRl" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://wa.me/918108328786" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
            <a 
              href="https://youtube.com/@alee_creations?si=oi1JgrX_FUdT-tEe" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// HiHeart component since it's not in react-icons/hi
function HiHeart({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  );
}
