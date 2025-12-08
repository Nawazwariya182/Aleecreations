"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  material: string;
  compatibility: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    { id: 1, name: "Pearl Blossom Charm", price: 599, description: "Elegant pearl-inspired charm with delicate blossom details. Perfect for adding a touch of sophistication to your phone.", material: "Premium crystals, Alloy base", compatibility: "All phone models" },
    { id: 2, name: "Crystal Butterfly", price: 449, description: "Beautiful butterfly design adorned with sparkling crystals. A symbol of transformation and grace.", material: "Austrian crystals, Gold-plated", compatibility: "Universal fit" },
    { id: 3, name: "Golden Loop Chain", price: 399, description: "Classic golden chain with intricate loop design. Timeless elegance for your device.", material: "18K gold-plated brass", compatibility: "All smartphones" },
    { id: 4, name: "Rose Quartz Drop", price: 549, description: "Genuine rose quartz crystal drop pendant. Known for its loving energy and soft pink hue.", material: "Natural rose quartz, Sterling silver", compatibility: "Universal" },
    { id: 5, name: "Amber Glow Pendant", price: 499, description: "Warm amber-toned crystal pendant that catches light beautifully. Creates a stunning glow effect.", material: "Amber crystals, Brass setting", compatibility: "All devices" },
    { id: 6, name: "Diamond Sparkle Set", price: 799, description: "Luxurious set featuring diamond-cut crystals. Maximum sparkle for those who love to shine.", material: "Premium cut crystals, Platinum finish", compatibility: "All phone models" },
    { id: 7, name: "Lavender Dream", price: 379, description: "Soft lavender crystals in a dreamy arrangement. Calming and beautiful.", material: "Amethyst crystals, Silver base", compatibility: "Universal fit" },
    { id: 8, name: "Moonstone Ring", price: 649, description: "Mystical moonstone ring charm with ethereal glow. Perfect for lunar lovers.", material: "Natural moonstone, Sterling silver", compatibility: "All smartphones" },
    { id: 9, name: "Jade Leaf Charm", price: 429, description: "Delicate jade leaf design symbolizing growth and prosperity. Brings good fortune.", material: "Genuine jade, Gold-plated", compatibility: "Universal" },
    { id: 10, name: "Sapphire Wave", price: 699, description: "Deep blue sapphire crystals in a flowing wave pattern. Ocean-inspired elegance.", material: "Sapphire crystals, White gold finish", compatibility: "All devices" },
    { id: 11, name: "Opal Teardrop", price: 529, description: "Mesmerizing opal teardrop with rainbow iridescence. Each piece is unique.", material: "Natural opal, Platinum setting", compatibility: "All phone models" },
    { id: 12, name: "Citrine Sunburst", price: 459, description: "Bright citrine crystals arranged in a radiant sunburst. Brings warmth and positivity.", material: "Natural citrine, Gold-plated brass", compatibility: "Universal fit" },
  ];

  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="w-full bg-cream py-8 md:py-10">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12 px-4 md:px-8">
        <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-gatheraz text-charcoal tracking-widest mb-2 md:mb-4">Our Collection</h2>
        <p className="text-taupe text-base sm:text-lg md:text-xl lg:text-2xl font-gi">Handcrafted crystal accessories for your device</p>
      </div>

      {/* Masonry Grid - images retain original size */}
      <div className="columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-x-1 space-y-1 px-1">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative w-full overflow-hidden group cursor-pointer break-inside-avoid border border-cream/50 hover:z-10"
            onClick={() => setSelectedProduct(product)}
          >
            <Image
              src={`/products/${product.id}.webp`}
              alt={`Crystal accessory ${product.id}`}
              width={500}
              height={500}
              className="w-full border-taupe border-2 h-auto max-h-[85vh] rounded-lg object-cover transition-all duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300" />
            {/* Name - top left with white glass pill */}
            <div className="absolute top-2 sm:top-3 md:top-4 lg:top-5 xl:top-6 left-2 sm:left-3">
              <span className="px-2 sm:px-3 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded-full bg-white/30 backdrop-blur-xl font-gatheraz text-gold text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl tracking-wider md:tracking-widest shadow-lg border border-white/50">
                {product.name}
              </span>
            </div>
            {/* Price - bottom right with frosted glass pill */}
            <div className="absolute bottom-4 sm:bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-6 2xl:bottom-8 right-2 sm:right-3 md:right-4 lg:right-4 xl:right-5">
              <span className="px-3 sm:px-4 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 rounded-full bg-gold/30 backdrop-blur-xl text-charcoal font-gi text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-3xl shadow-lg border border-gold/50 backdrop-saturate-150 font-semibold">
                ₹ {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Collections Button */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
        <Link 
          href="/collection"
          className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 border-2 border-charcoal text-charcoal font-gi text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-charcoal hover:text-cream transition-all duration-300 rounded-full"
        >
          View All Collections
        </Link>
      </div>

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
            className="max-w-7xl w-full md:h-[90vh] flex flex-col md:flex-row items-center gap-4 md:gap-0 animate-slideUp py-12 md:py-0 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image - Left Side */}
            <div className="w-full md:w-3/5 md:h-full relative animate-slideInLeft px-4 md:px-0 flex items-center justify-center flex-shrink-0">
              <div className="relative group md:h-full flex items-center justify-center">
                <Image
                  src={`/products/${selectedProduct.id}.webp`}
                  alt={selectedProduct.name}
                  width={800}
                  height={800}
                  className="w-full max-w-[80vw] max-h-[50vh] md:max-w-full md:max-h-[85vh] object-contain drop-shadow-2xl transition-transform duration-500 rounded-lg"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left animate-slideInRight px-4 md:px-0">
              {/* Brand Tag */}
              <p className="text-gold/70 font-gi text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                Alee Creation&apos;s
              </p>

              {/* Product Name */}
              <h2 className="font-gatheraz text-3xl sm:text-4xl md:text-3xl lg:text-6xl text-cream tracking-wide mb-4 sm:mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                {selectedProduct.name}
              </h2>
              
              {/* Price */}
              <p className="text-gold font-gatheraz text-2xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 animate-fadeInUp tracking-wider" style={{ animationDelay: '0.3s' }}>
                ₹ {selectedProduct.price}
              </p>

              {/* Divider */}
              <div className="w-12 sm:w-16 h-px bg-gold/40 mb-6 sm:mb-8 mx-auto md:mx-0 animate-expandWidth" style={{ animationDelay: '0.4s' }}></div>

              {/* Description */}
              <p className="text-cream/60 font-gi text-sm sm:text-base md:text-sm leading-relaxed mb-6 sm:mb-10 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                {selectedProduct.description}
              </p>

              {/* Product Details */}
              <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-base sm:text-md md:text-md tracking-widest">Material:</span>
                  <span className="text-cream/70 font-gi text-sm sm:text-base md:text-sm">{selectedProduct.material}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-base sm:text-md md:text-md tracking-widest">Compatibility:</span>
                  <span className="text-cream/70 font-gi text-sm sm:text-base md:text-sm">{selectedProduct.compatibility}</span>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <a 
                href={`https://wa.me/918108328786?text=${encodeURIComponent(`Hello,

I am interested in purchasing the following product from Alee Creation's:

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
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-charcoal font-gi text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-cream hover:scale-105 transition-all duration-300 animate-fadeInUp"
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
    </section>
  );
}
