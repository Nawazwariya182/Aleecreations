"use client";

import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 8108328786",
      link: "tel:+918108328786",
    },
    {
      icon: HiMail,
      title: "Email",
      value: "aleenascrystal@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=aleenascrystal@gmail.com",
      external: true,
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Mumbai, India",
      link: null,
    },
    {
      icon: HiClock,
      title: "Business Hours",
      value: "Sun - Sat: 10AM - 8PM",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaInstagram, name: "Instagram", href: "https://www.instagram.com/alee__creation_s?igsh=bG5nbGVneWRlaGRl", color: "hover:bg-pink-500" },
    { icon: FaWhatsapp, name: "WhatsApp", href: "https://wa.me/918108328786", color: "hover:bg-green-500" },
    { icon: FaYoutube, name: "YouTube", href: "https://youtube.com/@alee_creations?si=oi1JgrX_FUdT-tEe", color: "hover:bg-red-500" },
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
            Get In Touch
          </p>
          <h1 className="font-gatheraz text-6xl md:text-8xl text-cream tracking-wide mb-6">
            Contact Us
          </h1>
          <p className="text-cream/70 font-gi text-xl max-w-2xl leading-relaxed">
            We&apos;d love to hear from you. Reach out for inquiries, custom orders, or just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 px-8 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info Side */}
            <div>
              <p className="text-gold font-gi text-sm tracking-[0.3em] uppercase mb-4">
                Reach Out
              </p>
              <h2 className="font-gatheraz text-4xl md:text-5xl text-charcoal tracking-wide mb-6">
                Let&apos;s Connect
              </h2>
              <div className="w-16 h-px bg-gold mb-8"></div>
              
              <p className="text-taupe font-gi text-lg leading-relaxed mb-10">
                Have a question about our products? Want to place a custom order? Or just want to share your love for crystals? We&apos;re here for you!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-cream hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="font-gatheraz text-2xl text-charcoal mb-1 tracking-wider">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.external ? "_blank" : undefined}
                          rel={info.external ? "noopener noreferrer" : undefined}
                          className="text-taupe font-gi text-base hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-taupe font-gi text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="font-gatheraz text-xl text-charcoal mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold ${social.color} hover:text-white hover:border-transparent transition-all duration-300`}
                      title={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Side */}
            <div className="bg-charcoal rounded-3xl p-10 lg:p-12 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FaWhatsapp className="text-green-400 text-4xl" />
                </div>
                
                <h3 className="font-gatheraz text-3xl md:text-4xl text-cream tracking-wide mb-4">
                  Quick Response on WhatsApp
                </h3>
                
                <p className="text-cream/60 font-gi text-base leading-relaxed mb-8 max-w-md mx-auto">
                  For the fastest response, reach out to us on WhatsApp. We typically reply within minutes during business hours!
                </p>

                <a
                  href="https://wa.me/918108328786?text=Hi! I'd like to inquire about your crystal accessories."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-green-500 text-white font-gi text-sm uppercase tracking-[0.2em] hover:bg-green-400 transition-all duration-300 rounded-full shadow-lg shadow-green-500/30"
                >
                  <FaWhatsapp size={22} />
                  Chat on WhatsApp
                </a>

                <div className="mt-10 pt-10 border-t border-cream/10">
                  <p className="text-cream/40 font-gi text-sm mb-4">Or send us a message about:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href="https://wa.me/918108328786?text=Hi! I'd like to place a custom order."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gold/30 text-gold font-gi text-xs uppercase tracking-wider rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
                    >
                      Custom Order
                    </a>
                    <a
                      href="https://wa.me/918108328786?text=Hi! I need help choosing a product."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gold/30 text-gold font-gi text-xs uppercase tracking-wider rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
                    >
                      Product Help
                    </a>
                    <a
                      href="https://wa.me/918108328786?text=Hi! I'd like to know about bulk orders."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gold/30 text-gold font-gi text-xs uppercase tracking-wider rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
                    >
                      Bulk Orders
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Map/Location Section */}
      <section className="w-full bg-charcoal mb-17 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <HiLocationMarker className="text-gold text-4xl mx-auto mb-4" />
          <h3 className="font-gatheraz text-2xl text-cream tracking-wide mb-2">
            Based in Mumbai, India
          </h3>
          <p className="text-cream/60 font-gi text-base">
            Shipping crystal elegance across the nation
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
