"use client";

import { FaWhatsapp, FaExchangeAlt, FaUndo, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HiShieldCheck, HiClock, HiExclamation, HiInformationCircle } from "react-icons/hi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ReturnsExchange() {
  const policies = [
    {
      icon: FaUndo,
      title: "Returns",
      highlight: "10 Days",
      description: "Return your product within 10 days of pickup if you're not satisfied",
      color: "bg-burgundy/10 border-burgundy/20",
      iconColor: "text-burgundy",
    },
    {
      icon: FaExchangeAlt,
      title: "Exchange",
      highlight: "One Time Only",
      description: "Exchange your product for a different design (one-time only)",
      color: "bg-gold/10 border-gold/20",
      iconColor: "text-gold",
    },
    {
      icon: HiShieldCheck,
      title: "Breakage Policy",
      highlight: "1 Month",
      description: "If your crystal accessory breaks within 1 month, we'll repair it",
      color: "bg-green-500/10 border-green-500/20",
      iconColor: "text-green-500",
    },
  ];

  const returnConditions = [
    "Product must be returned within 10 days of pickup",
    "Original tag must not be removed from the product",
    "Item must be unused and in original condition",
    "Original packaging must be intact",
    "Proof of purchase (Order ID or WhatsApp confirmation) required",
    "Customized or personalized items cannot be returned",
  ];

  const exchangeConditions = [
    "Exchange is allowed only once per order",
    "Customized or personalized items cannot be exchanged",
    "Request must be made within 10 days of pickup",
    "Original tag must not be removed from the product",
    "Original product must be in unused condition",
    "Exchange is subject to product availability",
    "Price difference (if any) must be paid at the time of exchange",
  ];

  const breakageConditions = [
    "Breakage must occur within 1 month of purchase",
    "Photo proof of the broken item is required",
    "Breakage due to misuse or intentional damage is not covered",
    "Original Order ID or proof of purchase is required",
    "Replacement will be the same design or equivalent value",
  ];

  const notCovered = [
    "Products with tag removed",
    "Products damaged due to misuse or negligence",
    "Normal wear and tear",
    "Products without valid Order ID or proof of purchase",
    "Items purchased more than 1 month ago (for breakage claims)",
    "Customized or personalized orders",
  ];

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-cream" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-6">
            Our Policies
          </p>
          <h1 className="font-gatheraz text-6xl md:text-8xl text-cream tracking-wide mb-6">
            Returns & Exchange
          </h1>
          <p className="text-cream/70 font-gi text-xl max-w-2xl leading-relaxed">
            Your satisfaction matters to us. Here&apos;s everything you need to know about our return and exchange policies.
          </p>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="w-full py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              At A Glance
            </p>
            <h2 className="font-gatheraz text-4xl md:text-5xl text-charcoal tracking-wide">
              Our Policy Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 shadow-lg border ${policy.color} text-center`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-md`}>
                  <policy.icon className={`${policy.iconColor} text-2xl`} />
                </div>
                <h3 className="font-gatheraz text-2xl text-charcoal tracking-wide mb-2">
                  {policy.title}
                </h3>
                <p className={`font-gatheraz text-4xl ${policy.iconColor} mb-4`}>
                  {policy.highlight}
                </p>
                <p className="text-taupe font-gi text-base">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="w-full bg-charcoal py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Detailed Information
            </p>
            <h2 className="font-gatheraz text-4xl md:text-5xl text-cream tracking-wide">
              Policy Details
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Return Policy */}
            <div className="bg-charcoal border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-burgundy/20 flex items-center justify-center">
                  <FaUndo className="text-burgundy" />
                </div>
                <h3 className="font-gatheraz text-2xl text-cream tracking-wide">
                  Return Policy
                </h3>
              </div>
              <ul className="space-y-3">
                {returnConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-gold mt-1 flex-shrink-0 text-sm" />
                    <p className="text-cream/70 font-gi text-sm">{condition}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exchange Policy */}
            <div className="bg-charcoal border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <FaExchangeAlt className="text-gold" />
                </div>
                <h3 className="font-gatheraz text-2xl text-cream tracking-wide">
                  Exchange Policy
                </h3>
              </div>
              <ul className="space-y-3">
                {exchangeConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-gold mt-1 flex-shrink-0 text-sm" />
                    <p className="text-cream/70 font-gi text-sm">{condition}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Breakage Policy */}
            <div className="bg-charcoal border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <HiShieldCheck className="text-green-500" />
                </div>
                <h3 className="font-gatheraz text-2xl text-cream tracking-wide">
                  Breakage Policy
                </h3>
              </div>
              <ul className="space-y-3">
                {breakageConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-gold mt-1 flex-shrink-0 text-sm" />
                    <p className="text-cream/70 font-gi text-sm">{condition}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Not Covered */}
      <section className="w-full py-24 px-8 mb-[-100px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-burgundy font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Please Note
            </p>
            <h2 className="font-gatheraz text-4xl text-charcoal tracking-wide">
              What&apos;s Not Covered
            </h2>
          </div>

          <div className="bg-burgundy/5 border border-burgundy/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <HiExclamation className="text-burgundy text-2xl" />
              <p className="text-charcoal font-gi text-lg font-medium">
                The following are not eligible for return, exchange, or replacement:
              </p>
            </div>
            <ul className="space-y-3">
              {notCovered.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaTimesCircle className="text-burgundy mt-1 flex-shrink-0" />
                  <p className="text-taupe font-gi text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to Request */}
      <section className="w-full py-16 px-8 bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Simple Process
            </p>
            <h2 className="font-gatheraz text-4xl text-charcoal tracking-wide">
              How to Request
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-gatheraz text-xl text-charcoal">1</span>
                </div>
                <h4 className="font-gatheraz text-xl text-charcoal mb-2">Contact Us</h4>
                <p className="text-taupe font-gi text-sm">
                  Message us on WhatsApp with your Order ID and reason for return/exchange
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-gatheraz text-xl text-charcoal">2</span>
                </div>
                <h4 className="font-gatheraz text-xl text-charcoal mb-2">Get Approval</h4>
                <p className="text-taupe font-gi text-sm">
                  We&apos;ll review your request and confirm the next steps
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-gatheraz text-xl text-charcoal">3</span>
                </div>
                <h4 className="font-gatheraz text-xl text-charcoal mb-2">Visit Our Shop</h4>
                <p className="text-taupe font-gi text-sm">
                  Bring the product to our store for return, exchange, or replacement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="w-full py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 flex items-start gap-4">
            <HiInformationCircle className="text-gold text-2xl flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-gatheraz text-xl text-charcoal mb-2">Important Note</h4>
              <p className="text-taupe font-gi text-base leading-relaxed">
                All returns, exchanges, and replacements must be done in-person at our shop. We do not offer pickup or delivery for return/exchange requests. Please bring the original product along with your Order ID or proof of purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-charcoal via-charcoal to-burgundy/30 py-20 px-8 mb-17">
        <div className="max-w-4xl mx-auto text-center">
          <FaExchangeAlt className="text-gold text-5xl mx-auto mb-6" />
          <h2 className="font-gatheraz text-3xl md:text-4xl text-cream tracking-wide mb-4">
            Need to Return or Exchange?
          </h2>
          <p className="text-cream/60 font-gi text-lg mb-10 max-w-xl mx-auto">
            Contact us on WhatsApp with your Order ID. We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918108328786?text=Hi! I'd like to request a return for my order. My Order ID is:"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-burgundy text-cream font-gi text-sm uppercase tracking-[0.2em] hover:bg-burgundy/80 transition-all duration-300 rounded-full shadow-lg"
            >
              <FaUndo size={18} />
              Request Return
            </a>
            <a
              href="https://wa.me/918108328786?text=Hi! I'd like to exchange my order. My Order ID is:"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-charcoal font-gi text-sm uppercase tracking-[0.2em] hover:bg-cream transition-all duration-300 rounded-full shadow-lg shadow-gold/30"
            >
              <FaExchangeAlt size={18} />
              Request Exchange
            </a>
            <a
              href="https://wa.me/918108328786?text=Hi! My crystal accessory broke and I'd like a replacement. My Order ID is:"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-gold text-gold font-gi text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-full"
            >
              <HiShieldCheck size={20} />
              Report Breakage
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
