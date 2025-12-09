"use client";

import Image from "next/image";
import { useState } from "react";
import { HiX, HiSearch, HiFilter } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Product {
  id: number;
  name: string;
  SKU: string;
  price: number;
  description: string;
  material: string;
  compatibility: string;
  category: string;
}

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const products: Product[] = [
    {
      id: 1,
      name: "Gilded Amber Butterfly",
      SKU: "CHCRLX001-GD",
      price: 599,
      description: "Faceted amber crystals with a delicate butterfly accent for a touch of whimsy.",
      material: "Faceted crystal glass beads, acrylic butterfly accent, silver-tone metal crimp, black nylon lanyard string",
      compatibility: "All phone models",
      category: "Charms"
    },
    {
      id: 4,
      name: "Amber Radiance Loop",
      SKU: "CHCRLX004-GD",
      price: 549,
      description: "A seamless loop of sparkling faceted amber crystals with a vintage allure.",
      material: "Faceted amber crystal beads, silver-tone metal jump rings, metal crimp, black nylon lanyard string",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 5,
      name: "Opulent Pearl Butterfly",
      SKU: "CHPLCT005-WH",
      price: 499,
      description: "Lustrous pearls and clear beads with a silver butterfly for a romantic touch.",
      material: "Assorted faux pearls, clear faceted beads, silver-tone metal butterfly charm, metal crimps, white nylon lanyard string",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 6,
      name: "Amber Gold Cascade",
      SKU: "LSCRLX006-GD",
      price: 799,
      description: "A continuous strand of faceted amber crystals radiating a warm, golden glow.",
      material: "Faceted amber crystal beads, silver-tone metal spring O-ring, metal crimp caps, durable internal beading wire",
      compatibility: "All phone models",
      category: "Long Strip Charms"
    },
    {
      id: 7,
      name: "Heirloom Pearl Bow",
      SKU: "CHPLLX007-WH",
      price: 379,
      description: "Lustrous pearls with crystal accents and charming bow motifs for timeless elegance.",
      material: "Faux pearl beads (round, heart, bow, flower shapes), clear acrylic tube beads, silver-tone seed beads, silver-tone metal crimp, black nylon lanyard string",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 8,
      name: "Ginkgo Leaf Luster",
      SKU: "CHACLX008-ML",
      price: 449,
      description: "Exquisite iridescent ginkgo leaf charm with a soft, ethereal glow.",
      material: "Iridescent acrylic pendant, clear spherical bead, silver-tone metal chain, jump rings, metal crimp, black nylon lanyard string",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 9,
      name: "Amber Gold Ensemble",
      SKU: "STCRLX009-GD",
      price: 649,
      description: "Luxurious crossbody lanyard and wristlet set crafted from shimmering amber-gold crystals.",
      material: "Faceted Crystal Beads, silver-tone metal spring O-ring, black nylon lanyard string",
      compatibility: "All smartphones",
      category: "Sets"
    },
    {
      id: 10,
      name: "Amber Monarch Drop",
      SKU: "CHCRLX010-GD",
      price: 699,
      description: "Vertical drop of faceted amber crystals flowing into delicate butterfly beads.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy based lobster clasp, black nylon lanyard string",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 11,
      name: "Pearl & Shell Embrace",
      SKU: "CHPLLX011-GD",
      price: 529,
      description: "Lustrous pearl loop enclosing cascading chains and delicate shell petals.",
      material: "Faux Pearls, Gold-tone Metal Alloy Lobster Clasp, Acrylic Shell Petals, Gold-tone Chains and Charms",
      compatibility: "All phone models",
      category: "Charms"
    },
    {
      id: 12,
      name: "Prismatic Gem Charm",
      SKU: "CHCRCT012-ML",
      price: 459,
      description: "Eclectic mix of colorful crystals and geometric beads for a playful bohemian look.",
      material: "Mixed Crystal & Glass Beads, Silver-tone Metal Alloy spring O-ring,High Quality Wire",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 13,
      name: "Aurora Grace Charm",
      SKU: "CHCRLX013-ML",
      price: 679,
      description: "Ethereal crystals with an Aurora Borealis finish centering on a delicate butterfly.",
      material: "Iridescent Crystal Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "All phone models",
      category: "Charms"
    },
    {
      id: 14,
      name: "Golden Teardrop Elegance",
      SKU: "CHCRLX014-GD",
      price: 599,
      description: "Dazzling amber-gold beads flowing into butterflies and a shimmering teardrop.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 16,
      name: "Bespoke Pastel Charm",
      SKU: "CHACPS016-PS",
      price: 549,
      description: "Personalized pastel beads and pearls with whimsical accents. Includes custom name.",
      material: "Acrylic Beads, Faux Pearls, Alphabet block beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 17,
      name: "Lavender Reverie",
      SKU: "CHPLFL017-PL",
      price: 629,
      description: "Gradient purple tones with pearls, butterflies, and flowers for a romantic touch.",
      material: "Faux Pearls, Acrylic Beads, Purple Stone/Glass Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 18,
      name: "Amber Gold Chain",
      SKU: "LSCRLX018-GD",
      price: 559,
      description: "Chic wearable accessory with shimmering faceted amber-gold crystal beads.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy Spring O-ring, High Quality Wire",
      compatibility: "All phone models",
      category: "Long Strip Charms"
    },
    {
      id: 19,
      name: "Iridescent Conch",
      SKU: "CHRSLX019-WH",
      price: 489,
      description: "Sculpted conch shell with iridescent finish and a classic white pearl.",
      material: "Iridescent Resin Seashell, Faux Pearl, Silver-tone Metal Alloy spring O-ring, High Quality Wire",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 20,
      name: "Azure Custom Charm",
      SKU: "CHCRCT020-BL",
      price: 519,
      description: "Luminous cyan beads and pearls with silver butterflies. Personalized with name.",
      material: "Cat's Eye Glass Beads, Faux Pearls, Acrylic heart and stars Silver-tone Metal Alloy Chain, black nylon lanyard string",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 21,
      name: "Crystal Ringlet",
      SKU: "CHCRMN021-WH",
      price: 449,
      description: "Compact loop of clear crystals accented with a dainty white bow.",
      material: "Faceted Crystal/Acrylic Beads, Resin Bow, Metal Balls, Silver-tone Metal Alloy Lobster Clasp, High Quality Wire",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 22,
      name: "Midnight Aurora Band",
      SKU: "CHCRLX022-BK",
      price: 579,
      description: "Sophisticated mix of dark metallic and iridescent crystals for contrast and shine.",
      material: "Faceted Dark and Light Crystal Beads, High Quality Wire, Silver-tone Metal Alloy O-ring",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 23,
      name: "Pearlescent Chain",
      SKU: "LSPLLX023-WH",
      price: 749,
      description: "Romantic long chain of pearls, crystals, and charming butterfly and heart beads.",
      material: "Faux small and big Pearls, Acrylic star, butterfly and heart Beads, Silver-tone Metal Alloy lobster clasp, High Quality Wire",
      compatibility: "All phone models",
      category: "Long Strip Charms"
    },
    {
      id: 24,
      name: "Iridescent Bow Ring",
      SKU: "CHCRLX024-ML",
      price: 529,
      description: "Large faceted iridescent beads forming a ring, adorned with a cute white bow.",
      material: "Faceted Acrylic/Crystal Beads, Resin Bow, Silver-tone Metal Alloy clasp, black nylon lanyard string, High Quality Wire",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 25,
      name: "Gilded Amber Bow",
      SKU: "CHCRLX025-GD",
      price: 599,
      description: "Handcrafted bow motif strung with faceted amber-gold crystals.",
      material: "Faceted Crystal Beads, Small Crystal Beads Silver-tone Metal Alloy Lobster clasp, Metal Heart tag, Metal Balls, High Quality Wire/Cord",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 26,
      name: "Prismatic Bow Wristlet",
      SKU: "CHCRLX026-ML",
      price: 829,
      description: "Statement handcrafted bow of iridescent crystals catching light from every angle.",
      material: "Faceted Crystal Beads, Small Crystal Beads, Silver-tone Metal Alloy Lobster Clasp, High Quality Wire",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 27,
      name: "Bronze Mist Bow",
      SKU: "CHCRLX027-BZ",
      price: 569,
      description: "Elegant loose bow silhouette in rich, smoky bronze-purple faceted crystals.",
      material: "Faceted Crystal/Glass Beads, Silver-tone Metal Alloy Claw Clasp, High Quality Wire",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 28,
      name: "Holographic Monarch",
      SKU: "CHACCT028-ML",
      price: 619,
      description: "Large transparent butterfly pendant with a mesmerizing color-shifting finish.",
      material: "Iridescent Acrylic/Resin Butterfly, Faceted Crystal/Beads, Lab made Pearl, Black Nylon lanyard string, High Quality Wire",
      compatibility: "All phone models",
      category: "Charms"
    },
    {
      id: 29,
      name: "Festive Pastel Custom",
      SKU: "CHACPS029-PS",
      price: 549,
      description: "Festive mix of pastel beads and pearls with a large iridescent bow. Custom text.",
      material: "Matte Acrylic Beads, Faux Pearls, Iridescent Resin Bow, Nylon Lanyard String, High Quality Wire, Alphabet Block Beads",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 30,
      name: "Crystalline Wristlet",
      SKU: "CHCRMN030-WH",
      price: 499,
      description: "Classic loop of clear faceted crystals mimicking the sparkle of diamonds.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy, Nylon Cord",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 31,
      name: "Luminous Band",
      SKU: "CHCRLX031-ML",
      price: 539,
      description: "Sparkling faceted crystals in blue, amber, or clear. Elevates everyday carry.",
      material: "Faceted Crystal Beads, Silver-tone Metal Alloy claw clasp, High Quality Wire",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 34,
      name: "Amber Cascade Butterfly",
      SKU: "CHACCT034-GD",
      price: 489,
      description: "Holographic butterfly centerpiece with cascading strands of crystal beads.",
      material: "Iridescent Acrylic/Resin Butterfly, Faceted Crystal Beads, Nylon Cord Lanyard String, High Quality Wire",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 35,
      name: "Azure Bow Charm",
      SKU: "CHCRCT035-BL",
      price: 399,
      description: "Sparkling blue crystals adorned with a clear holographic bow.",
      material: "Faceted Crystal Beads, Resin Bow, Nylon Cord Lanyard String, High Quality Wire",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 36,
      name: "Golden Cascade Butterfly",
      SKU: "CHCRLX036-GD",
      price: 649,
      description: "Holographic butterfly atop cascading strands of faceted golden beads.",
      material: "Faceted Metallic Beads, Iridescent Acrylic Butterfly, Nylon Cord Lanyard String, High Quality Wire",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 37,
      name: "Pink Butterfly Duo",
      SKU: "CHPLCT037-PK",
      price: 469,
      description: "Double-strand design with classic pearls and pink crystals with butterfly beads.",
      material: "Faux Pearls, Pink Crystal Beads, Acrylic Butterflies, Silver-tone Metal Alloy",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 39,
      name: "Purple Heart Butterfly",
      SKU: "CHCRCT039-PL",
      price: 419,
      description: "Translucent holographic butterfly with purple beads, pearls, and silver chains.",
      material: "Faceted Crystal/Glass Beads, Acrylic Butterfly, Bows and Hearts, Silver-tone Chain, Nylon Cord Lanyard String, High Quality Wire",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 40,
      name: "Oceanic Wristlet",
      SKU: "CHACCT040-BL",
      price: 509,
      description: "Refreshing mix of large ocean-blue beads and white pearls with a heart accent.",
      material: "Acrylic Beads, Faux Pearls, Silver-tone Metal Alloy O-ring, High Quality Wire",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 41,
      name: "Pastel Spectrum Ring",
      SKU: "CHPLPS041-PS",
      price: 459,
      description: "Compact ring of rainbow pastel pearls topped with a glossy white bow.",
      material: "Pastel Faux Pearls, Resin Bow, Silver-tone Metal Alloy small claw clasp, High Quality Wire, Metal Balls",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 42,
      name: "Gilded Shell Wristlet",
      SKU: "CHCRLX042-GD",
      price: 489,
      description: "Faceted champagne-gold beads accented with an iridescent shell charm.",
      material: "Faceted Crystal Beads, Iridescent Resin Shell, Silver-tone Metal Alloy o-ring, High Quality Wire",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 43,
      name: "Amber Gold Band",
      SKU: "CHCRLX043-GD",
      price: 529,
      description: "Continuous loop of faceted amber-gold crystals with a cluster of butterfly beads.",
      material: "Faceted Droplet Shaped Crystal Beads, Acrylic Butterflies, Silver-tone Metal Alloy O-ring, High Quality Wire",
      compatibility: "All phone models",
      category: "Charms"
    },
    {
      id: 44,
      name: "Holo Bow Ring",
      SKU: "CHRSCT044-ML",
      price: 449,
      description: "Ring of clear beads topped with a stunning color-reflecting holographic bow.",
      material: "Faceted Acrylic/Crystal Beads, Holographic Resin Bow, Silver-tone Metal Alloy Lobster Clasp, High Quality Wire",
      compatibility: "Universal fit",
      category: "Charms"
    },
    {
      id: 45,
      name: "Kawaii Kitty Collection",
      SKU: "STRSCT045-PS",
      price: 429,
      description: "Kawaii resin charms featuring Hello Kitty in playful pastel designs.",
      material: "Resin, Nylon Cord, Metal Hardware",
      compatibility: "All smartphones",
      category: "Sets"
    },
    {
      id: 51,
      name: "Bespoke Pastel Pin",
      SKU: "BPPLPS051-PS",
      price: 559,
      description: "Silver safety pin with dangling pearls and pastel beads. Personalized name.",
      material: "Silver-tone Safety Pin, Faux Pearls, Acrylic Beads, Metal Charms, High Quality Wire",
      compatibility: "All Clothing item or bags",
      category: "Bag Pins"
    },
    {
      id: 52,
      name: "Noir Initial Pin",
      SKU: "BPCRLX052-BK",
      price: 489,
      description: "Sleek silver pin with jet-black crystals and white block initial letters.",
      material: "Silver-tone Safety Pin, Faceted Crystal/Glass Beads, Acrylic Letter Beads",
      compatibility: "All Clothing item or bags",
      category: "Bag Pins"
    },
    {
      id: 53,
      name: "Victory Soccer Pin",
      SKU: "BPCRLX053-BK",
      price: 899,
      description: "Silver pin with ceramic soccer bead and black crystals. Personalized name.",
      material: "Silver-tone Safety Pin, Ceramic/Acrylic Beads and Soccer, Faceted Crystals, Acrylic Letter Beads, High Quality Wire",
      compatibility: "All Clothing item or bags", 
      category: "Bag Pins" 
    },
    {
      id: 54,
      name: "Crystalline Bow",
      SKU: "CHCRMN054-WH",
      price: 439,
      description: "Pristine loop of clear faceted beads topped with a transparent butterfly knot.",
      material: "Faceted Acrylic/Crystal Beads, Nylon Cord Lanyard String, Resin Bow, High Quality Wire",
      compatibility: "All smartphones",
      category: "Charms"
    },
    {
      id: 55,
      name: "Lavender Mist Bow",
      SKU: "CHCRLX055-PL",
      price: 559,
      description: "Lovely wristlet of faceted lavender beads accented with a purple ribbon bow.",
      material: "Faceted Acrylic/Crystal Beads, Nylon Cord Lanyard String, Resin Bow, High Quality Wire",
      compatibility: "Universal",
      category: "Charms"
    },
    {
      id: 56,
      name: "Rosé Bow Charm",
      SKU: "CHCRLX056-PK",
      price: 489,
      description: "Delicate wrist loop of soft pink beads finished with a matching bow.",
      material: "Faceted Acrylic/Crystal Beads, Nylon Cord Lanyard String, Resin Bow, High Quality Wire",
      compatibility: "All devices",
      category: "Charms"
    },
    {
      id: 57,
      name: "Glacial Blue Knot",
      SKU: "CHCRLX057-BL",
      price: 899,
      description: "Faceted light blue beads shimmering like ice, detailed with a blue butterfly knot.",
      material: "Faceted Acrylic/Crystal Beads, Nylon Cord Lanyard String, Resin Bow, High Quality Wire",
      compatibility: "All phone models",
      category: "Charms"
    },
  ];

  const categories = ["All", "Charms", "Long Strip Charms", "Sets", "Bag Pins"];

  const closeModal = () => setSelectedProduct(null);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] overflow-hidden">
        <Image
          src="/products/0.webp"
          alt="Collection"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-cream" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
          <p className="text-gold font-gi text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4">
            Explore Our
          </p>
          <h1 className="font-gatheraz text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-cream tracking-wide mb-2 sm:mb-4">
            Collection
          </h1>
          <p className="text-cream/70 font-gi text-sm sm:text-base md:text-xl max-w-2xl">
            Discover our complete range of handcrafted crystal accessories
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full bg-cream py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8 border-b border-taupe/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search and Sort Row */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-stretch gap-3 sm:gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <HiSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-taupe text-base sm:text-lg" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white border border-taupe/30 rounded-full text-charcoal font-gi text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Sort */}
              <div className="relative w-full xs:w-auto sm:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full px-4 sm:px-6 py-2.5 sm:py-3 pr-10 bg-white border border-taupe/30 rounded-full text-charcoal font-gi text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  <option value="default">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
                <HiFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-taupe text-sm pointer-events-none" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full font-gi text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${selectedCategory === category
                    ? "bg-gold text-charcoal"
                    : "bg-white border border-taupe/30 text-taupe hover:border-gold hover:text-gold"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-taupe font-gi text-[10px] sm:text-xs md:text-sm mt-3 sm:mt-4">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-6 sm:py-8 md:py-12 px-3 sm:px-6 md:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-md sm:rounded-lg md:rounded-xl overflow-hidden shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-cream active:scale-[0.98]"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-cream/50 to-white">
                    <Image
                      src={`/products/${product.id}.webp`}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-1.5 sm:top-2 md:top-3 left-1.5 sm:left-2 md:left-3">
                      <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-white/80 backdrop-blur-sm rounded-full text-charcoal font-gi text-[8px] sm:text-[10px] md:text-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-2 sm:p-3 md:p-4 lg:p-5">
                    <h3 className="font-gatheraz text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl text-charcoal tracking-wide mb-0.5 sm:mb-1 md:mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gold font-gatheraz text-sm sm:text-base md:text-lg lg:text-xl">
                      ₹ {product.price}
                    </p>
                    <p className="text-taupe font-gi text-[9px] sm:text-[10px] md:text-xs mt-1 sm:mt-1.5 md:mt-2 line-clamp-2 hidden sm:block">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 sm:py-12 md:py-16">
              <p className="text-taupe font-gi text-sm sm:text-base md:text-lg mb-3 sm:mb-4">No products found</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gold text-charcoal font-gi text-xs sm:text-sm uppercase tracking-widest hover:bg-cream transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-charcoal/90 backdrop-blur-md z-[9999] flex items-start md:items-center justify-center p-2 sm:p-4 md:p-8 animate-fadeIn overflow-y-auto"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-cream/30 bg-charcoal/80 text-cream/70 flex items-center justify-center hover:text-cream hover:border-cream hover:rotate-90 transition-all duration-300 z-[10000]"
          >
            <HiX size={16} className="sm:hidden" />
            <HiX size={20} className="hidden sm:block md:hidden" />
            <HiX size={24} className="hidden md:block" />
          </button>

          <div
            className="max-w-7xl w-full md:h-[90vh] flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-16 animate-slideUp py-10 sm:py-12 md:py-0 my-auto px-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image - Left Side */}
            <div className="w-full md:w-1/2 lg:w-3/5 md:h-full relative animate-slideInLeft px-2 sm:px-4 md:px-0 flex items-center justify-center">
              <div className="relative group md:h-full flex items-center justify-center">
                <Image
                  src={`/products/${selectedProduct.id}.webp`}
                  alt={selectedProduct.name}
                  width={800}
                  height={800}
                  className="w-full max-w-[85vw] sm:max-w-[80vw] max-h-[40vh] sm:max-h-[45vh] md:max-w-[50vw] lg:max-w-[45vw] md:max-h-[80vh] object-contain drop-shadow-2xl transition-transform duration-500 rounded-md sm:rounded-lg"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center text-center md:text-left animate-slideInRight px-3 sm:px-4 md:px-0 md:min-w-[320px] lg:min-w-[380px]">
              {/* Category & Brand Tag */}
              <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-gold/20 text-gold font-gi text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider sm:tracking-widest rounded-full border border-gold/30">
                  {selectedProduct.category}
                </span>
                <span className="text-gold/70 font-gi text-[9px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  Alee Creation&apos;s
                </span>
              </div>

              {/* Product Name */}
              <h2 className="font-gatheraz text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-cream tracking-wide mb-2 sm:mb-4 md:mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                {selectedProduct.name}
              </h2>

              {/* Price */}
              <p className="text-gold font-gatheraz text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8 animate-fadeInUp tracking-wider" style={{ animationDelay: '0.3s' }}>
                ₹ {selectedProduct.price}
              </p>

              {/* Divider */}
              <div className="w-10 sm:w-12 md:w-16 h-px bg-gold/40 mb-4 sm:mb-6 md:mb-8 mx-auto md:mx-0 animate-expandWidth" style={{ animationDelay: '0.4s' }}></div>

              {/* Description */}
              <p className="text-cream/60 font-gi text-xs sm:text-sm md:text-sm leading-relaxed mb-4 sm:mb-6 md:mb-10 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                {selectedProduct.description}
              </p>

              {/* Product Details */}
              <div className="space-y-1.5 sm:space-y-2 md:space-y-4 mb-4 sm:mb-6 md:mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col md:flex-row md:items-center gap-0.5 sm:gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-sm sm:text-base md:text-md tracking-widest">SKU:</span>
                  <span className="text-cream/70 font-gi text-xs sm:text-sm md:text-sm tracking-wide">{selectedProduct.SKU}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-0.5 sm:gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-sm sm:text-base md:text-md tracking-widest">Material:</span>
                  <span className="text-cream/70 font-gi text-xs sm:text-sm md:text-sm">{selectedProduct.material}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-0.5 sm:gap-1 md:gap-4">
                  <span className="text-gold/80 font-gatheraz text-sm sm:text-base md:text-md tracking-widest">Compatibility:</span>
                  <span className="text-cream/70 font-gi text-xs sm:text-sm md:text-sm">{selectedProduct.compatibility}</span>
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
Category: ${selectedProduct.category}

Product Link: ${typeof window !== 'undefined' ? window.location.origin : ''}/products/${selectedProduct.id}.webp

Could you please confirm the availability and share the ordering process? I would also like to know about delivery options and estimated time.

Thank you.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gold text-charcoal font-gi text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] hover:bg-cream hover:scale-105 active:scale-95 transition-all duration-300 animate-fadeInUp rounded-sm"
                style={{ animationDelay: '0.7s' }}
              >
                <FaWhatsapp size={14} className="sm:hidden" />
                <FaWhatsapp size={18} className="hidden sm:block md:hidden" />
                <FaWhatsapp size={20} className="hidden md:block" />
                <span className="hidden xs:inline">Inquire on</span> WhatsApp
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
