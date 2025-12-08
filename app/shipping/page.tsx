"use client";

import { FaWhatsapp, FaStore, FaCheckCircle } from "react-icons/fa";
import { HiLocationMarker, HiClock, HiIdentification, HiPhone, HiShieldCheck } from "react-icons/hi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShippingInfo() {
  const pickupSteps = [
    {
      step: "1",
      title: "Place Your Order",
      description: "Contact us on WhatsApp to place your order and complete payment",
    },
    {
      step: "2",
      title: "Order Confirmation",
      description: "You'll receive an Order ID and confirmation message on WhatsApp",
    },
    {
      step: "3",
      title: "We Prepare Your Order",
      description: "Your crystal accessory is carefully prepared and kept ready",
    },
    {
      step: "4",
      title: "Ready for Pickup",
      description: "We'll notify you when your order is ready to be picked up",
    },
    {
      step: "5",
      title: "Visit Our Shop",
      description: "Come to our store with your Order ID or registered name",
    },
    {
      step: "6",
      title: "Collect Your Order",
      description: "Show your Order ID or name to collect your beautiful crystal accessory",
    },
  ];

  const shopInfo = [
    {
      icon: HiLocationMarker,
      title: "Shop Address",
      content: "Ruchi Shoes, Shop No 22-23-24-25, Harihar Shopping Centre, Parekh Road, opposite The Mall, Malad, Mumbai, Maharashtra 400064",
    },
    {
      icon: HiClock,
      title: "Shop Timings",
      content: "Sunday to Saturday: 10:00 AM - 8:00 PM",
    },
    {
      icon: HiPhone,
      title: "Contact Number",
      content: "+91 8108328786 | +91 79773 18179",
    },
    {
      icon: HiIdentification,
      title: "What to Bring",
      content: "Your Order ID (shared on WhatsApp) or the name used while placing the order",
    },
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
            Store Pickup Only
          </p>
          <h1 className="font-gatheraz text-6xl md:text-8xl text-cream tracking-wide mb-6">
            Pickup Info
          </h1>
          <p className="text-cream/70 font-gi text-xl max-w-2xl leading-relaxed">
            We don&apos;t do online delivery. Visit our shop to pick up your order with your Order ID or name.
          </p>
        </div>
      </section>

      {/* No Online Delivery Notice */}
      <section className="w-full py-12 px-8 bg-burgundy/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-burgundy/20">
            <FaStore className="text-burgundy text-4xl mx-auto mb-4" />
            <h3 className="font-gatheraz text-2xl text-charcoal tracking-wide mb-4">
              In-Store Pickup Only
            </h3>
            <p className="text-taupe font-gi text-lg leading-relaxed">
              We currently do not offer online shipping or home delivery. All orders must be picked up from our store in Mumbai. This allows us to ensure each piece is handed over in perfect condition and gives you a chance to see our beautiful collection in person!
            </p>
          </div>
        </div>
      </section>

      {/* How to Pickup Section */}
      <section className="w-full bg-charcoal py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Simple Process
            </p>
            <h2 className="font-gatheraz text-4xl md:text-5xl text-cream tracking-wide">
              How to Pick Up Your Order
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pickupSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 border border-gold/20 rounded-xl hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-gatheraz text-lg text-charcoal">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-gatheraz text-2xl text-cream tracking-wider mb-2">
                      {step.title}
                    </h4>
                    <p className="text-cream/60 font-gi text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Information */}
      <section className="w-full py-24 px-8 mb-[-100px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Find Us
            </p>
            <h2 className="font-gatheraz text-4xl md:text-5xl text-charcoal tracking-wide">
              Our Shop Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {shopInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-cream"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-gold text-xl" />
                </div>
                <div>
                  <h4 className="font-gatheraz text-3xl tracking-wider text-charcoal mb-2">{info.title}</h4>
                  <p className="text-taupe font-gi text-base leading-relaxed">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full py-16 px-8 bg-cream/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
              Location
            </p>
            <h2 className="font-gatheraz text-4xl text-charcoal tracking-wide">
              Find Us on Map
            </h2>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-cream">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1566!2d72.8448789!3d19.1872489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e31584d1d9%3A0x1c3b65bce713771b!2sRuchi%20Shoes!5e1!3m2!1sen!2sin!4v1701936000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Ruchi+Shoes/@19.1872489,72.8448789,1566m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7b6e31584d1d9:0x1c3b65bce713771b!8m2!3d19.1872439!4d72.8474538!16s%2Fg%2F1tdmnj9m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream font-gi text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-full"
            >
              <HiLocationMarker size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="w-full py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gold/20">
            <h3 className="font-gatheraz text-2xl text-charcoal tracking-wide mb-6 text-center">
              Important Notes for Pickup
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                <p className="text-taupe font-gi text-base">
                  Please bring your <strong>Order ID</strong> (shared on WhatsApp) or the <strong>name</strong> you used while placing the order.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                <p className="text-taupe font-gi text-base">
                  Orders can only be collected during our shop timings: Sunday to Saturday, 10:00 AM - 8:00 PM.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                <p className="text-taupe font-gi text-base">
                  If someone else is picking up on your behalf, please inform us in advance on WhatsApp with their name.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                <p className="text-taupe font-gi text-base">
                  Orders will be kept for 7 days from the ready-for-pickup notification. Please collect within this period.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <HiShieldCheck className="text-gold mt-1 flex-shrink-0" />
                <p className="text-taupe font-gi text-base">
                  We recommend checking your order at the shop before leaving to ensure everything is perfect.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-charcoal via-charcoal to-burgundy/30 py-20 px-8 mb-17">
        <div className="max-w-4xl mx-auto text-center">
          <FaStore className="text-gold text-5xl mx-auto mb-6" />
          <h2 className="font-gatheraz text-3xl md:text-4xl text-cream tracking-wide mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-cream/60 font-gi text-lg mb-10 max-w-xl mx-auto">
            Contact us on WhatsApp to order. We&apos;ll let you know when it&apos;s ready for pickup!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918108328786?text=Hi! I'd like to place an order for pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-charcoal font-gi text-sm uppercase tracking-[0.2em] hover:bg-cream transition-all duration-300 rounded-full shadow-lg shadow-gold/30"
            >
              <FaWhatsapp size={20} />
              Place an Order
            </a>
            <a
              href="https://wa.me/918108328786?text=Hi! I'd like to check my order status for pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-gold text-gold font-gi text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-full"
            >
              <HiIdentification size={20} />
              Check Order Status
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
