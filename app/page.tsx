import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Occasions from "./components/Occasions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Products />
      {/* Divider */}
      <div className="w-9/10 mx-auto h-px bg-taupe mb-6"></div>
      <Occasions />
      <Footer />
    </div>
  );
}
