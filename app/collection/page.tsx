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
    { id: 1, name: "Pearl Blossom Charm", price: 599, description: "Elegant pearl-inspired charm with delicate blossom details. Perfect for adding a touch of sophistication to your phone.", material: "Premium crystals, Alloy base", compatibility: "All phone models", category: "Charms" },
    { id: 2, name: "Crystal Butterfly", price: 449, description: "Beautiful butterfly design adorned with sparkling crystals. A symbol of transformation and grace.", material: "Austrian crystals, Gold-plated", compatibility: "Universal fit", category: "Charms" },
    { id: 3, name: "Golden Loop Chain", price: 399, description: "Classic golden chain with intricate loop design. Timeless elegance for your device.", material: "18K gold-plated brass", compatibility: "All smartphones", category: "Charms" },
    { id: 4, name: "Rose Quartz Drop", price: 549, description: "Genuine rose quartz crystal drop pendant. Known for its loving energy and soft pink hue.", material: "Natural rose quartz, Sterling silver", compatibility: "Universal", category: "Charms" },
    { id: 5, name: "Amber Glow Pendant", price: 499, description: "Warm amber-toned crystal pendant that catches light beautifully. Creates a stunning glow effect.", material: "Amber crystals, Brass setting", compatibility: "All devices", category: "Charms" },
    { id: 6, name: "Diamond Sparkle Set", price: 799, description: "Luxurious set featuring diamond-cut crystals. Maximum sparkle for those who love to shine.", material: "Premium cut crystals, Platinum finish", compatibility: "All phone models", category: "Long Strip Charms" },
    { id: 7, name: "Lavender Dream", price: 379, description: "Soft lavender crystals in a dreamy arrangement. Calming and beautiful.", material: "Amethyst crystals, Silver base", compatibility: "Universal fit", category: "Charms" },
    { id: 8, name: "Moonstone Ring", price: 649, description: "Mystical moonstone ring charm with ethereal glow. Perfect for lunar lovers.", material: "Natural moonstone, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 9, name: "Jade Leaf Charm", price: 429, description: "Delicate jade leaf design symbolizing growth and prosperity. Brings good fortune.", material: "Genuine jade, Gold-plated", compatibility: "Universal", category: "Sets" },
    { id: 10, name: "Sapphire Wave", price: 699, description: "Deep blue sapphire crystals in a flowing wave pattern. Ocean-inspired elegance.", material: "Sapphire crystals, White gold finish", compatibility: "All devices", category: "Charms" },
    { id: 11, name: "Opal Teardrop", price: 529, description: "Mesmerizing opal teardrop with rainbow iridescence. Each piece is unique.", material: "Natural opal, Platinum setting", compatibility: "All phone models", category: "Charms" },
    { id: 12, name: "Citrine Sunburst", price: 459, description: "Bright citrine crystals arranged in a radiant sunburst. Brings warmth and positivity.", material: "Natural citrine, Gold-plated brass", compatibility: "Universal fit", category: "Charms" },
    { id: 13, name: "Emerald Elegance", price: 679, description: "Stunning emerald green crystals with sophisticated design. Perfect for nature lovers.", material: "Emerald crystals, Gold-plated", compatibility: "All phone models", category: "Charms" },
    { id: 14, name: "Ruby Heart", price: 599, description: "Passionate ruby-inspired heart charm. A symbol of love and devotion.", material: "Ruby crystals, Rose gold finish", compatibility: "Universal fit", category: "Charms" },
    { id: 15, name: "Pearl Cascade", price: 549, description: "Elegant cascading pearl arrangement. Timeless beauty for your device.", material: "Freshwater pearls, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 16, name: "Topaz Twist", price: 479, description: "Warm topaz crystals in a twisted design. Brings joy and abundance.", material: "Natural topaz, Brass setting", compatibility: "Universal", category: "Charms" },
    { id: 17, name: "Aquamarine Dream", price: 629, description: "Serene aquamarine crystals reminiscent of ocean waves. Calming and refreshing.", material: "Aquamarine crystals, Silver base", compatibility: "All devices", category: "Charms" },
    { id: 18, name: "Garnet Glory", price: 559, description: "Deep red garnet crystals with fiery brilliance. Symbol of passion and energy.", material: "Natural garnet, Gold-plated brass", compatibility: "All phone models", category: "Long Strip Charms" },
    { id: 19, name: "Turquoise Treasure", price: 489, description: "Beautiful turquoise stone with unique patterns. Each piece is one of a kind.", material: "Natural turquoise, Sterling silver", compatibility: "Universal fit", category: "Charms" },
    { id: 20, name: "Peridot Paradise", price: 519, description: "Vibrant green peridot crystals. Brings prosperity and good fortune.", material: "Natural peridot, Gold-plated", compatibility: "All smartphones", category: "Charms" },
    { id: 21, name: "Coral Charm", price: 449, description: "Delicate coral-inspired design with warm tones. Ocean-inspired elegance.", material: "Coral crystals, Rose gold finish", compatibility: "Universal", category: "Charms" },
    { id: 22, name: "Onyx Elegance", price: 579, description: "Sophisticated black onyx with sleek design. Perfect for minimalist lovers.", material: "Natural onyx, Platinum setting", compatibility: "All devices", category: "Charms" },
    { id: 23, name: "Tanzanite Twilight", price: 749, description: "Rare tanzanite crystals with mesmerizing purple-blue hue. Truly unique.", material: "Tanzanite crystals, White gold finish", compatibility: "All phone models", category: "Long Strip Charms" },
    { id: 24, name: "Malachite Magic", price: 529, description: "Stunning green malachite with natural swirl patterns. Symbol of transformation.", material: "Natural malachite, Gold-plated brass", compatibility: "Universal fit", category: "Charms" },
    { id: 25, name: "Lapis Luxe", price: 599, description: "Royal blue lapis lazuli with golden flecks. Ancient stone of wisdom.", material: "Natural lapis lazuli, Gold-plated", compatibility: "All smartphones", category: "Charms" },
    { id: 26, name: "Alexandrite Aura", price: 829, description: "Color-changing alexandrite crystals. Magical and mysterious.", material: "Lab-created alexandrite, Platinum finish", compatibility: "Universal", category: "Charms" },
    { id: 27, name: "Kunzite Kiss", price: 569, description: "Soft pink kunzite crystals. Stone of emotion and love.", material: "Natural kunzite, Rose gold finish", compatibility: "All devices", category: "Charms" },
    { id: 28, name: "Spinel Sparkle", price: 619, description: "Brilliant spinel crystals in various colors. Versatile and stunning.", material: "Natural spinel, Sterling silver", compatibility: "All phone models", category: "Charms" },
    { id: 29, name: "Iolite Illusion", price: 549, description: "Violet-blue iolite crystals. Stone of vision and creativity.", material: "Natural iolite, Gold-plated brass", compatibility: "Universal fit", category: "Charms" },
    { id: 30, name: "Chrysoprase Charm", price: 499, description: "Apple green chrysoprase with calming energy. Fresh and vibrant.", material: "Natural chrysoprase, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 31, name: "Sunstone Glow", price: 539, description: "Sparkling sunstone with aventurescence effect. Brings warmth and vitality.", material: "Natural sunstone, Gold-plated", compatibility: "Universal", category: "Charms" },
    { id: 32, name: "Rhodonite Rose", price: 479, description: "Pink and black rhodonite with elegant patterns. Stone of compassion.", material: "Natural rhodonite, Rose gold finish", compatibility: "All devices", category: "Charms" },
    { id: 33, name: "Fluorite Fantasy", price: 459, description: "Multi-colored fluorite with rainbow hues. Clears mental fog.", material: "Natural fluorite, Sterling silver", compatibility: "All phone models", category: "Charms" },
    { id: 34, name: "Prehnite Peace", price: 489, description: "Soft green prehnite with calming presence. Stone of unconditional love.", material: "Natural prehnite, Gold-plated brass", compatibility: "Universal fit", category: "Charms" },
    { id: 35, name: "Howlite Harmony", price: 399, description: "White howlite with grey veining. Promotes patience and calm.", material: "Natural howlite, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 36, name: "Labradorite Light", price: 649, description: "Magical labradorite with stunning iridescence. Stone of transformation.", material: "Natural labradorite, Gold-plated", compatibility: "Universal", category: "Charms" },
    { id: 37, name: "Carnelian Courage", price: 469, description: "Warm orange carnelian with vibrant energy. Boosts confidence.", material: "Natural carnelian, Brass setting", compatibility: "All devices", category: "Charms" },
    { id: 38, name: "Agate Artistry", price: 439, description: "Banded agate with natural patterns. Each piece is unique.", material: "Natural agate, Sterling silver", compatibility: "All phone models", category: "Charms" },
    { id: 39, name: "Jasper Journey", price: 419, description: "Earthy jasper with grounding energy. Stone of endurance.", material: "Natural jasper, Gold-plated brass", compatibility: "Universal fit", category: "Charms" },
    { id: 40, name: "Tiger Eye Power", price: 509, description: "Golden tiger eye with silky luster. Stone of courage and protection.", material: "Natural tiger eye, Gold-plated", compatibility: "All smartphones", category: "Charms" },
    { id: 41, name: "Aventurine Luck", price: 459, description: "Green aventurine with sparkling inclusions. Stone of opportunity.", material: "Natural aventurine, Sterling silver", compatibility: "Universal", category: "Charms" },
    { id: 42, name: "Smoky Quartz", price: 489, description: "Elegant smoky quartz with grounding energy. Clears negativity.", material: "Natural smoky quartz, Platinum finish", compatibility: "All devices", category: "Charms" },
    { id: 43, name: "Clear Crystal", price: 529, description: "Pure clear quartz crystal. Master healer and energy amplifier.", material: "Natural clear quartz, Sterling silver", compatibility: "All phone models", category: "Charms" },
    { id: 44, name: "Obsidian Shield", price: 449, description: "Black obsidian with protective energy. Shields against negativity.", material: "Natural obsidian, Gold-plated brass", compatibility: "Universal fit", category: "Charms" },
    { id: 45, name: "Hematite Strength", price: 429, description: "Metallic hematite with grounding power. Stone of the mind.", material: "Natural hematite, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 46, name: "Sodalite Serenity", price: 479, description: "Deep blue sodalite with white streaks. Enhances intuition.", material: "Natural sodalite, Gold-plated", compatibility: "Universal", category: "Charms" },
    { id: 47, name: "Amazonite Dream", price: 519, description: "Turquoise-green amazonite with soothing energy. Stone of hope.", material: "Natural amazonite, Sterling silver", compatibility: "All devices", category: "Long Strip Charms" },
    { id: 48, name: "Lepidolite Calm", price: 499, description: "Purple lepidolite with natural mica sparkle. Reduces stress.", material: "Natural lepidolite, Rose gold finish", compatibility: "All phone models", category: "Charms" },
    { id: 49, name: "Bloodstone Vitality", price: 469, description: "Green bloodstone with red spots. Stone of courage and vitality.", material: "Natural bloodstone, Gold-plated brass", compatibility: "Universal fit", category: "Bag Pins" },
    { id: 50, name: "Unakite Unity", price: 439, description: "Pink and green unakite. Balances emotions and spirituality.", material: "Natural unakite, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 51, name: "Kyanite Clarity", price: 559, description: "Blue kyanite with natural striations. Aligns all chakras.", material: "Natural kyanite, Gold-plated", compatibility: "Universal", category: "Charms" },
    { id: 52, name: "Selenite Purity", price: 489, description: "Pure white selenite with ethereal glow. Cleanses energy.", material: "Natural selenite, Sterling silver", compatibility: "All devices", category: "Bag Pins" },
    { id: 53, name: "Moldavite Mystery", price: 899, description: "Rare moldavite with cosmic origins. Stone of rapid transformation.", material: "Natural moldavite, Platinum setting", compatibility: "All phone models", category: "Bag Pins" },
    { id: 54, name: "Unakite Unity", price: 439, description: "Pink and green unakite. Balances emotions and spirituality.", material: "Natural unakite, Sterling silver", compatibility: "All smartphones", category: "Charms" },
    { id: 55, name: "Kyanite Clarity", price: 559, description: "Blue kyanite with natural striations. Aligns all chakras.", material: "Natural kyanite, Gold-plated", compatibility: "Universal", category: "Charms" },
    { id: 56, name: "Selenite Purity", price: 489, description: "Pure white selenite with ethereal glow. Cleanses energy.", material: "Natural selenite, Sterling silver", compatibility: "All devices", category: "Charms" },
    { id: 57, name: "Moldavite Mystery", price: 899, description: "Rare moldavite with cosmic origins. Stone of rapid transformation.", material: "Natural moldavite, Platinum setting", compatibility: "All phone models", category: "Charms" }, 
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
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
            className="max-w-7xl w-full md:h-[90vh] flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-12 animate-slideUp py-10 sm:py-12 md:py-0 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image - Left Side */}
            <div className="w-full md:w-3/5 md:h-full relative animate-slideInLeft px-2 sm:px-4 md:px-0 flex items-center justify-center flex-shrink-0">
              <div className="relative group md:h-full flex items-center justify-center">
                <Image
                  src={`/products/${selectedProduct.id}.webp`}
                  alt={selectedProduct.name}
                  width={800}
                  height={800}
                  className="w-full max-w-[85vw] sm:max-w-[80vw] max-h-[40vh] sm:max-h-[45vh] md:max-w-full md:max-h-[85vh] object-contain drop-shadow-2xl transition-transform duration-500 rounded-md sm:rounded-lg"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left animate-slideInRight px-3 sm:px-4 md:px-0">
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
