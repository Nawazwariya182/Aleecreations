"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  SKU: string;
  price: number;
  description: string;
  material: string;
  compatibility: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Gilded Amber Butterfly",
      SKU: "CHCRLX001-GD",
      price: 599,
      description: "Faceted amber crystals with a delicate butterfly accent for a touch of whimsy.",
      material: "Faceted crystal glass beads, acrylic butterfly accent, silver-tone metal crimp, black nylon lanyard string",
      compatibility: "All phone models",
    },
    {
      id: 4,
      name: "Amber Radiance Loop",
      SKU: "CHCRLX004-GD",
      price: 549,
      description: "A seamless loop of sparkling faceted amber crystals with a vintage allure.",
      material: "Faceted amber crystal beads, silver-tone metal jump rings, metal crimp, black nylon lanyard string",
      compatibility: "Universal",
    },
    {
      id: 5,
      name: "Opulent Pearl Butterfly",
      SKU: "CHPLCT005-WH",
      price: 499,
      description: "Lustrous pearls and clear beads with a silver butterfly for a romantic touch.",
      material: "Assorted faux pearls, clear faceted beads, silver-tone metal butterfly charm, metal crimps, white nylon lanyard string",
      compatibility: "All devices",
    },
    {
      id: 6,
      name: "Amber Gold Cascade",
      SKU: "LSCRLX006-GD",
      price: 799,
      description: "A continuous strand of faceted amber crystals radiating a warm, golden glow.",
      material: "Faceted amber crystal beads, silver-tone metal spring O-ring, metal crimp caps, durable internal beading wire",
      compatibility: "All phone models",
    },
    {
      id: 7,
      name: "Heirloom Pearl Bow",
      SKU: "CHPLLX007-WH",
      price: 379,
      description: "Lustrous pearls with crystal accents and charming bow motifs for timeless elegance.",
      material: "Faux pearl beads (round, heart, bow, flower shapes), clear acrylic tube beads, silver-tone seed beads, silver-tone metal crimp, black nylon lanyard string",
      compatibility: "Universal fit",
    },
    {
      id: 8,
      name: "Ginkgo Leaf Luster",
      SKU: "CHACLX008-ML",
      price: 449,
      description: "Exquisite iridescent ginkgo leaf charm with a soft, ethereal glow.",
      material: "Iridescent acrylic pendant, clear spherical bead, silver-tone metal chain, jump rings, metal crimp, black nylon lanyard string",
      compatibility: "Universal fit",
    },
    {
      id: 9,
      name: "Amber Gold Ensemble",
      SKU: "STCRLX009-GD",
      price: 649,
      description: "Luxurious crossbody lanyard and wristlet set crafted from shimmering amber-gold crystals.",
      material: "Faceted Crystal Beads, silver-tone metal spring O-ring, black nylon lanyard string",
      compatibility: "All smartphones",
    },
    {
      id: 10,
      name: "Amber Monarch Drop",
      SKU: "CHCRLX010-GD",
      price: 699,
      description: "Vertical drop of faceted amber crystals flowing into delicate butterfly beads.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy based lobster clasp, black nylon lanyard string",
      compatibility: "All devices",
    },
    {
      id: 11,
      name: "Pearl & Shell Embrace",
      SKU: "CHPLLX011-GD",
      price: 529,
      description: "Lustrous pearl loop enclosing cascading chains and delicate shell petals.",
      material: "Faux Pearls, Gold-tone Metal Alloy Lobster Clasp, Acrylic Shell Petals, Gold-tone Chains and Charms",
      compatibility: "All phone models",
    },
    {
      id: 12,
      name: "Prismatic Gem Charm",
      SKU: "CHCRCT012-ML",
      price: 459,
      description: "Eclectic mix of colorful crystals and geometric beads for a playful bohemian look.",
      material: "Mixed Crystal & Glass Beads, Silver-tone Metal Alloy spring O-ring,High Quality Wire",
      compatibility: "Universal fit",
    },
    {
      id: 13,
      name: "Aurora Grace Charm",
      SKU: "CHCRLX013-ML",
      price: 679,
      description: "Ethereal crystals with an Aurora Borealis finish centering on a delicate butterfly.",
      material: "Iridescent Crystal Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "All phone models",
    },
    {
      id: 14,
      name: "Golden Teardrop Elegance",
      SKU: "CHCRLX014-GD",
      price: 599,
      description: "Dazzling amber-gold beads flowing into butterflies and a shimmering teardrop.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "Universal fit",
    },
  ];

  const closeModal = () => setSelectedProduct(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedProduct) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedProduct]);

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
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProduct(product)}
            role="button"
            tabIndex={0}
            aria-label={`View ${product.name} - ₹${product.price}`}
          >
            <Image
              src={`/products/${product.id}.webp`}
              alt={`${product.name} - ${product.description.split('.')[0]}`}
              width={500}
              height={500}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              quality={75}
              className="w-full border-taupe border-2 h-auto max-h-[85vh] rounded-lg object-cover transition-all duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300" />
            {/* Name - top left with white glass pill */}
            <div className="absolute top-2 sm:top-3 md:top-4 lg:top-5 xl:top-6 left-2 sm:left-3">
              <span className="px-2 sm:px-3 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded-full bg-white/30 backdrop-blur-xl font-gatheraz text-gold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl tracking-wider md:tracking-widest shadow-lg border border-white/50">
                {product.name}
              </span>
            </div>
            {/* Price - bottom right with frosted glass pill */}
            <div className="absolute bottom-4 sm:bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-6 2xl:bottom-8 right-2 sm:right-3 md:right-4 lg:right-4 xl:right-5">
              <span className="px-3 sm:px-4 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2.5 xl:py-3 rounded-full bg-gold/30 backdrop-blur-xl text-charcoal font-gi text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl shadow-lg border border-gold/50 backdrop-saturate-150 font-semibold">
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
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            aria-label="Close product details"
            className="fixed top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/30 bg-charcoal/50 text-cream/70 flex items-center justify-center hover:text-cream hover:border-cream hover:rotate-90 transition-all duration-300 z-[10000]"
          >
            <HiX size={20} className="md:hidden" />
            <HiX size={24} className="hidden md:block" />
          </button>

          <div 
            className="max-w-7xl w-full md:h-[90vh] flex flex-col md:flex-row items-center gap-4 md:gap-16 animate-slideUp py-12 md:py-0 my-auto px-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image - Left Side */}
            <div className="w-full md:w-1/2 lg:w-3/5 md:h-full relative animate-slideInLeft px-4 md:px-0 flex items-center justify-center">
              <div className="relative group md:h-full flex items-center justify-center">
                <Image
                  src={`/products/${selectedProduct.id}.webp`}
                  alt={selectedProduct.name}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 80vw, 50vw"
                  quality={80}
                  className="w-full max-w-[80vw] max-h-[50vh] md:max-w-[50vw] lg:max-w-[45vw] md:max-h-[80vh] object-contain drop-shadow-2xl transition-transform duration-500 rounded-lg"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center text-center md:text-left animate-slideInRight px-4 md:px-0 md:min-w-[320px] lg:min-w-[380px]">
              {/* Brand Tag */}
              <p className="text-gold/70 font-gi text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                Alee Creation&apos;s
              </p>

              {/* Product Name */}
              <h2 id="product-modal-title" className="font-gatheraz text-3xl sm:text-4xl md:text-3xl lg:text-6xl text-cream tracking-wide mb-4 sm:mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
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
                  <span className="text-gold/80 font-gatheraz text-base sm:text-md md:text-md tracking-widest">SKU:</span>
                  <span className="text-cream/70 font-gi text-sm sm:text-base md:text-sm tracking-wide">{selectedProduct.SKU}</span>
                </div>
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
SKU: ${selectedProduct.SKU}
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
