"use client";

import { useState } from "react";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: string;
  faqs: FAQItem[];
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "Ordering & Payment",
      icon: "🛒",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "You can place an order by browsing our collection on the website and clicking 'Inquire on WhatsApp' on any product you like. We'll guide you through the ordering process personally on WhatsApp.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept UPI payments, bank transfers, and cash payment at the time of pickup. Payment details will be shared on WhatsApp when you place your order.",
        },
        {
          question: "Do I need to pay in advance?",
          answer: "Yes, we require full payment in advance to confirm your order. Once payment is received, we'll start preparing your crystal accessory.",
        },
        {
          question: "Can I cancel my order after payment?",
          answer: "Orders can be cancelled within 24 hours of payment for a full refund. After 24 hours, cancellations are subject to a 10% processing fee. Custom orders cannot be cancelled once work has begun.",
        },
        {
          question: "Do you offer Cash on Delivery?",
          answer: "We don't offer Cash on Delivery for online orders. However, you can pay cash at the time of pickup from our store.",
        },
      ],
    },
    {
      title: "Products & Quality",
      icon: "💎",
      faqs: [
        {
          question: "Are the crystals real?",
          answer: "We use high-quality crystals and stones in our accessories. Each product description specifies the materials used.",
        },
        {
          question: "How long do the accessories last?",
          answer: "With proper care, our crystal accessories can last for more than 3 months. We recommend avoiding water exposure, storing them safely when not in use, and handling them gently to maintain their sparkle and quality.",
        },
        {
          question: "Are all products handmade?",
          answer: "Yes! Every single piece is handcrafted with love and attention to detail. This means each accessory is unique and may have slight variations that add to its charm.",
        },
        {
          question: "Do you offer custom designs?",
          answer: "Absolutely! We love creating custom pieces. Share your vision with us on WhatsApp, and we'll work together to design something special just for you. Custom orders typically take 5-7 days to complete.",
        },
        {
          question: "Will the crystals fade or lose their shine?",
          answer: "Our crystals are of premium quality and won't fade under normal use. To maintain their shine, avoid exposure to harsh chemicals, perfumes, and prolonged sunlight. Clean gently with a soft dry cloth.",
        },
      ],
    },
    {
      title: "Pickup & Delivery",
      icon: "📍",
      faqs: [
        {
          question: "Do you offer home delivery?",
          answer: "Currently, we only offer in-store pickup from our shop at Ruchi Shoes, Harihar Shopping Centre, Malad, Mumbai. This allows us to ensure each piece is handed over in perfect condition.",
        },
        {
          question: "Where is your shop located?",
          answer: "Our shop is located at Ruchi Shoes, Shop No 22-23-24-25, Harihar Shopping Centre, Parekh Road, opposite The Mall, Malad, Mumbai, Maharashtra 400064.",
        },
        {
          question: "What are your shop timings?",
          answer: "We're open Monday to Saturday, 10:00 AM to 7:00 PM. We're closed on Sundays.",
        },
        {
          question: "How will I know when my order is ready?",
          answer: "Once your order is ready for pickup, we'll send you a WhatsApp message with all the details. Please wait for this confirmation before visiting the shop.",
        },
        {
          question: "Can someone else pick up my order?",
          answer: "Yes! Just inform us on WhatsApp with the name of the person who will be collecting the order. They'll need to provide the Order ID or your name at the time of pickup.",
        },
        {
          question: "How long do I have to pick up my order?",
          answer: "Orders are kept for 7 days from the ready-for-pickup notification. Please collect within this period. If you need more time, let us know on WhatsApp.",
        },
      ],
    },
    {
      title: "Returns & Exchange",
      icon: "🔄",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer returns within 10 days of pickup. The product must be unused, in original condition, with the tag intact and original packaging. Customized items cannot be returned.",
        },
        {
          question: "Can I exchange my product?",
          answer: "Yes, we allow one-time exchange within 10 days of pickup. The original tag must not be removed, and the product must be in unused condition. Exchange is subject to product availability.",
        },
        {
          question: "What if my product breaks?",
          answer: "We offer a 1-month breakage policy. If your crystal accessory breaks within 1 month of purchase due to manufacturing defects, we'll replace it. Photo proof and Order ID are required. Breakage due to misuse is not covered.",
        },
        {
          question: "How do I request a return or exchange?",
          answer: "Contact us on WhatsApp with your Order ID and reason for return/exchange. We'll review your request and guide you through the process. All returns and exchanges must be done in-person at our shop.",
        },
        {
          question: "Will I get a refund for returned items?",
          answer: "Yes, approved returns will receive a full refund via the original payment method within 3-5 business days after we receive and inspect the returned product.",
        },
      ],
    },
    {
      title: "Care & Maintenance",
      icon: "✨",
      faqs: [
        {
          question: "How do I clean my crystal accessory?",
          answer: "Gently wipe with a soft, dry cloth. Avoid using water, cleaning solutions, or abrasive materials. For stubborn dirt, use a slightly damp cloth and dry immediately.",
        },
        {
          question: "Can I wear it in water?",
          answer: "We recommend removing your crystal accessory before swimming, showering, or any water activities. Water can damage the metal components and affect the crystal's shine over time.",
        },
        {
          question: "How should I store my accessory?",
          answer: "Store in a cool, dry place away from direct sunlight. Keep in a soft pouch or the original packaging to prevent scratches. Avoid storing with other jewelry that might scratch the crystals.",
        },
        {
          question: "Will perfume damage the crystals?",
          answer: "Yes, perfumes, lotions, and harsh chemicals can dull the crystals and damage metal finishes. Apply these products before putting on your accessory, and avoid direct contact.",
        },
      ],
    },
    {
      title: "Gifting",
      icon: "🎁",
      faqs: [
        {
          question: "Do you offer gift packaging?",
          answer: "Yes! All our products come in beautiful packaging that's perfect for gifting. If you need special gift wrapping, let us know when placing your order.",
        },
        {
          question: "Can I add a personal message?",
          answer: "Absolutely! We can include a handwritten note with your gift. Just share the message with us on WhatsApp when ordering.",
        },
        {
          question: "Can I buy a gift for someone else to pick up?",
          answer: "Yes! Place the order in your name and let us know who will be picking it up. We'll ensure the gift is ready and beautifully packaged for them.",
        },
        {
          question: "Do you offer gift cards?",
          answer: "Currently, we don't have gift cards, but you can purchase a product as a gift and let the recipient pick it up. Contact us for special gifting arrangements.",
        },
      ],
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
            Help Center
          </p>
          <h1 className="font-gatheraz text-6xl md:text-8xl text-cream tracking-wide mb-6">
            FAQs
          </h1>
          <p className="text-cream/70 font-gi text-xl max-w-2xl leading-relaxed">
            Find answers to commonly asked questions about our products, ordering, and policies
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="w-full py-24 px-8 mb-[-100px]">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="font-gatheraz text-3xl text-charcoal tracking-wide">
                  {category.title}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${catIndex}-${faqIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-xl shadow-md border border-cream overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors duration-200"
                      >
                        <span className="font-gi text-lg text-charcoal pr-4">
                          {faq.question}
                        </span>
                        <FaChevronDown
                          className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="w-full h-px bg-cream mb-4"></div>
                          <p className="text-taupe font-gi text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="w-full bg-gradient-to-br from-charcoal via-charcoal to-burgundy/30 py-20 px-8 mb-17">
        <div className="max-w-4xl mx-auto text-center">
          <HiQuestionMarkCircle className="text-gold text-6xl mx-auto mb-6" />
          <h2 className="font-gatheraz text-3xl md:text-4xl text-cream tracking-wide mb-4">
            Still Have Questions?
          </h2>
          <p className="text-cream/60 font-gi text-lg mb-10 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? We&apos;re always happy to help!
          </p>
          <a
            href="https://wa.me/918108328786?text=Hi! I have a question that's not covered in your FAQs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-charcoal font-gi text-sm uppercase tracking-[0.2em] hover:bg-cream transition-all duration-300 rounded-full shadow-lg shadow-gold/30"
          >
            <FaWhatsapp size={20} />
            Ask Us on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
