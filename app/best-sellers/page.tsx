"use client";

import Image from "next/image";
import { useState } from "react";
import { HiX, HiStar } from "react-icons/hi";
import { FaWhatsapp, FaCrown } from "react-icons/fa";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  material: string;
  compatibility: string;
}

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const bestSellers: Product[] = [
    {
      id: 1,
      name: "Gilded Amber Butterfly",
      price: 149,
      description: "Faceted amber crystals with a delicate butterfly accent for a touch of whimsy.",
      material: "Faceted crystal glass beads, acrylic butterfly accent, silver-tone metal crimp, black nylon lanyard string",
      compatibility: "All phone models",
    },
    {
      id: 3,
      name: "Lavender Reverie",
      price: 149,
      description: "Gradient purple tones with pearls, butterflies, and flowers for a romantic touch.",
      material: "Faux Pearls, Acrylic Beads, Purple Stone/Glass Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "All devices",
    },
    {
      id: 2,
      name: "Amber Monarch Drop",
      price: 49,
      description: "Vertical drop of faceted amber crystals flowing into delicate butterfly beads.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy based lobster clasp, black nylon lanyard string",
      compatibility: "All devices",
    },
    {
      id: 4,
      name: "Amber Gold Chain",
      price: 599,
      description: "Chic wearable accessory with shimmering faceted amber-gold crystal beads.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy Spring O-ring, High Quality Wire",
      compatibility: "All phone models",
    },
    {
      id: 5,
      name: "Gilded Amber Bow",
      price: 299,
      description: "Handcrafted bow motif strung with faceted amber-gold crystals.",
      material: "Faceted Crystal Beads, Small Crystal Beads Silver-tone Metal Alloy Lobster clasp, Metal Heart tag, Metal Balls, High Quality Wire/Cord",
      compatibility: "All smartphones",
    },
    {
      id: 6,
      name: "Purple Heart Butterfly",
      price: 249,
      description: "Translucent holographic butterfly with purple beads, pearls, and silver chains.",
      material: "Faceted Crystal/Glass Beads, Acrylic Butterfly, Bows and Hearts, Silver-tone Chain, Nylon Cord Lanyard String, High Quality Wire",
      compatibility: "Universal fit",
    },
  ];

  const closeModal = () => setSelectedProduct(null);

  const getRankStyle = (index: number) => {
    if (index === 0) return "bg-gradient-to-br from-gold via-yellow-400 to-gold shadow-lg shadow-gold/30";
    if (index === 1) return "bg-gradient-to-br from-gray-300 via-white to-gray-300 shadow-lg shadow-gray-300/30";
    if (index === 2) return "bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/30";
    return "bg-charcoal/80";
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/products/6.webp"
          alt="Best Sellers"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-cream" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaCrown className="text-gold text-xl sm:text-2xl md:text-3xl" />
            <p className="text-gold font-gi text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Customer Favorites
            </p>
            <FaCrown className="text-gold text-xl sm:text-2xl md:text-3xl" />
          </div>
          <h1 className="font-gatheraz text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-cream tracking-wide mb-4 sm:mb-6">
            Best Sellers
          </h1>
          <p className="text-cream/70 font-gi text-sm sm:text-base md:text-xl max-w-2xl">
            Discover our most loved crystal accessories, handpicked by customers like you
          </p>
          <div className="flex items-center gap-1 sm:gap-2 mt-4 sm:mt-8">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="text-gold text-lg sm:text-xl md:text-2xl" />
            ))}
            <span className="text-cream/60 font-gi text-xs sm:text-sm ml-2">Loved by 500+ customers</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gold font-gi text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4">Top 6 Products</p>
            <h2 className="font-gatheraz text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide">
              Our Most Popular Picks
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-cream"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Rank Badge */}
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${getRankStyle(index)} flex items-center justify-center`}>
                  <span className={`font-gatheraz text-lg sm:text-xl ${index === 0 ? 'text-charcoal' : index === 1 ? 'text-charcoal' : index === 2 ? 'text-white' : 'text-cream'}`}>
                    #{index + 1}
                  </span>
                </div>


                {/* Product Image */}
                <div className="relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden bg-gradient-to-b from-cream/50 to-white">
                  <Image
                    src={`/best-seller/${product.id}.webp`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    className="object-contain p-4 sm:p-6 md:p-8"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-b from-white to-cream/30 border-t border-gold/20">
                  <h3 className="font-gatheraz text-xl sm:text-2xl text-charcoal tracking-wide mb-2 sm:mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gold font-gatheraz text-xl sm:text-2xl">
                      Rs. {product.price}
                    </p>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className="text-gold text-xs sm:text-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="text-taupe font-gi text-xs sm:text-sm mt-2 sm:mt-3 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Hover Overlay */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-charcoal via-charcoal to-burgundy/30 mb-17 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FaCrown className="text-gold text-3xl sm:text-4xl md:text-5xl mx-auto mb-4 sm:mb-6" />
          <h2 className="font-gatheraz text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide mb-4 sm:mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-cream/60 font-gi text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            We have many more designs in our collection. Contact us for personalized recommendations or custom designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="./collection"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-gold text-gold font-gi text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-full text-center"
            >
              View All Products
            </Link>
            <a
              href="https://wa.me/918108328786?text=Hi! I'm looking for a specific crystal accessory design."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gold text-charcoal font-gi text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-cream transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 rounded-full shadow-lg shadow-gold/30"
            >
              <FaWhatsapp size={18} className="sm:hidden" />
              <FaWhatsapp size={20} className="hidden sm:block" />
              Request Custom Design
            </a>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-charcoal/90 backdrop-blur-md z-[9999] flex items-start md:items-center justify-center p-4 md:p-8 animate-fadeIn overflow-y-auto"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/30 bg-charcoal/50 text-cream/70 flex items-center justify-center hover:text-cream hover:border-cream hover:rotate-90 transition-all duration-300 z-[10000]"
          >
            <HiX size={20} className="md:hidden" />
            <HiX size={24} className="hidden md:block" />
          </button>

          <div
            className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-16 animate-slideUp py-12 md:py-0 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image - Left Side */}
            <div className="w-full md:w-3/5 relative animate-slideInLeft flex-shrink-0">
              <div className="relative group">
                <Image
                  src={`/best-seller/${selectedProduct.id}.webp`}
                  alt={selectedProduct.name}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 80vw, 60vw"
                  quality={80}
                  className="w-full max-w-[80vw] max-h-[50vh] md:max-w-full md:max-h-[85vh] mx-auto object-contain drop-shadow-2xl transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left animate-slideInRight px-4 md:px-0">
              {/* Best Seller Badge */}
              <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2 sm:mb-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <span className="px-2 sm:px-3 py-1 bg-gold/20 text-gold font-gi text-[10px] sm:text-xs uppercase tracking-widest rounded-full border border-gold/30">
                  Best Seller
                </span>
              </div>

              {/* Product Name */}
              <h2 className="font-gatheraz text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-4 sm:mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                {selectedProduct.name}
              </h2>

              {/* Price */}
              <p className="text-gold font-gatheraz text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Rs. {selectedProduct.price}
              </p>

              {/* Divider */}
              <div className="w-12 sm:w-16 h-px bg-gold/40 mb-4 sm:mb-8 mx-auto md:mx-0 animate-expandWidth" style={{ animationDelay: '0.4s' }}></div>

              {/* Description */}
              <p className="text-cream/60 font-gi text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                {selectedProduct.description}
              </p>

              {/* Product Details */}
              <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-base sm:text-lg md:text-xl tracking-widest">Material:</span>
                  <span className="text-cream/70 font-gi text-sm sm:text-base md:text-lg">{selectedProduct.material}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-base sm:text-lg md:text-xl tracking-widest">Compatibility:</span>
                  <span className="text-cream/70 font-gi text-sm sm:text-base md:text-lg">{selectedProduct.compatibility}</span>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <a
                href={`https://wa.me/918108328786?text=${encodeURIComponent(`Hello,

I am interested in purchasing the following best-selling product from Alee Creation's:

*Product Details*
Name: ${selectedProduct.name}
Price: Rs. ${selectedProduct.price}
Material: ${selectedProduct.material}
Compatibility: ${selectedProduct.compatibility}

Product Link: ${typeof window !== 'undefined' ? window.location.origin : ''}/products/${selectedProduct.id}.webp

Could you please confirm the availability and share the ordering process? I would also like to know about delivery options and estimated time.

Thank you.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-charcoal font-gi text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-cream transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: '0.7s' }}
              >
                <FaWhatsapp size={18} className="sm:hidden" />
                <FaWhatsapp size={20} className="hidden sm:block" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
