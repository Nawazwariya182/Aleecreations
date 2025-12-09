import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BodyWrapper from "./components/BodyWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const blosta = localFont({
  src: "./fonts/BLOSTA.otf",
  variable: "--font-blosta",
  display: "swap",
});

const giRegular = localFont({
  src: "./fonts/GI-R.otf",
  variable: "--font-gi",
  display: "swap",
});

const gatheraz = localFont({
  src: "./fonts/Gatheraz.otf",
  variable: "--font-gatheraz",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aleecreations.live"),
  title: {
    default: "Alee Creation's - Handcrafted Crystal Phone Charms & Accessories India",
    template: "%s | Alee Creation's",
  },
  description: "Shop premium handcrafted crystal phone charms, mobile accessories & keychains in Mumbai, India. Unique gemstone designs - Rose Quartz, Amethyst, Pearl charms. Free shipping. Order on WhatsApp.",
  keywords: [
    "crystal phone charms",
    "handmade phone accessories",
    "crystal mobile charms India",
    "phone charms Mumbai",
    "gemstone phone accessories",
    "rose quartz phone charm",
    "crystal keychain India",
    "handcrafted phone charms",
    "Alee Creations",
    "mobile phone charms online",
    "crystal accessories India",
    "phone strap charms",
    "aesthetic phone charms",
    "cute phone charms India",
  ],
  authors: [{ name: "Alee Creation's", url: "https://aleecreations.live" }],
  creator: "Alee Creation's",
  publisher: "Alee Creation's",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aleecreations.live",
    siteName: "Alee Creation's",
    title: "Alee Creation's - Handcrafted Crystal Phone Charms & Accessories",
    description: "Shop premium handcrafted crystal phone charms & mobile accessories in India. Unique gemstone designs. Order on WhatsApp.",
    images: [
      {
        url: "/Others/logo.webp",
        width: 800,
        height: 800,
        alt: "Alee Creation's Crystal Phone Charms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alee Creation's - Crystal Phone Charms India",
    description: "Premium handcrafted crystal phone charms & accessories. Shop unique gemstone designs in Mumbai, India.",
    images: ["/Others/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization schema - for brand recognition and social profiles
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aleecreations.live/#organization",
    name: "Alee Creation's",
    alternateName: ["Alee Creations", "AleeCreations", "Alee Creation"],
    url: "https://aleecreations.live",
    logo: {
      "@type": "ImageObject",
      url: "https://aleecreations.live/Others/logo.webp",
      width: 800,
      height: 800,
    },
    image: "https://aleecreations.live/Others/logo.webp",
    description: "Handcrafted crystal phone charms and mobile accessories. Premium gemstone designs including Rose Quartz, Amethyst, and Pearl charms. Based in Mumbai, India.",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Reshma Wariya",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8108328786",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
    sameAs: [
      "https://www.instagram.com/alee__creation_s",
      "https://youtube.com/@alee_creations",
      "https://wa.me/918108328786",
    ],
  };

  // WebSite schema - for sitelinks and search
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aleecreations.live/#website",
    name: "Alee Creation's",
    alternateName: "Alee Creations",
    url: "https://aleecreations.live",
    description: "Shop premium handcrafted crystal phone charms and mobile accessories in India",
    publisher: {
      "@id": "https://aleecreations.live/#organization",
    },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aleecreations.live/collection?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // SiteNavigationElement - for sitelinks
  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "All Collections",
        description: "Browse our complete collection of crystal phone charms and accessories",
        url: "https://aleecreations.live/collection",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Best Sellers",
        description: "Our most popular crystal phone charms loved by customers",
        url: "https://aleecreations.live/best-sellers",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "About Us",
        description: "Learn about Alee Creation's story and handcrafted process",
        url: "https://aleecreations.live/about",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Contact Us",
        description: "Get in touch with Alee Creation's for orders and inquiries",
        url: "https://aleecreations.live/contact",
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Shipping Info",
        description: "Shipping and delivery information for crystal phone charms",
        url: "https://aleecreations.live/shipping",
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "FAQs",
        description: "Frequently asked questions about our crystal accessories",
        url: "https://aleecreations.live/faq",
      },
    ],
  };

  // LocalBusiness schema - for local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aleecreations.live/#localbusiness",
    name: "Alee Creation's",
    image: [
      "https://aleecreations.live/Others/logo.webp",
      "https://aleecreations.live/products/1.webp",
      "https://aleecreations.live/products/2.webp",
      "https://aleecreations.live/products/3.webp",
    ],
    description: "Handcrafted crystal phone charms and mobile accessories in Mumbai, India. Premium gemstone designs including Rose Quartz, Amethyst, and Pearl charms.",
    url: "https://aleecreations.live",
    telephone: "+918108328786",
    email: "aleenascrystal@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No 22-23-24-25, Harihar Shopping Centre, Parekh Road",
      addressLocality: "Malad West, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.1868,
      longitude: 72.8489,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/alee__creation_s",
      "https://youtube.com/@alee_creations",
      "https://wa.me/918108328786",
    ],
    priceRange: "₹299 - ₹999",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Crystal Phone Charms Collection",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Phone Charms",
          itemListElement: [
            {
              "@type": "Offer",
              price: "299",
              priceCurrency: "INR",
              availability: "https://schema.org/InStoreOnly",
              itemOffered: {
                "@type": "Product",
                name: "Crystal Phone Charms",
                image: "https://aleecreations.live/products/1.webp",
                offers: {
                  "@type": "Offer",
                  price: "299",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStoreOnly",
                },
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Phone Lanyards",
          itemListElement: [
            {
              "@type": "Offer",
              price: "499",
              priceCurrency: "INR",
              availability: "https://schema.org/InStoreOnly",
              itemOffered: {
                "@type": "Product",
                name: "Crystal Phone Lanyards",
                image: "https://aleecreations.live/products/4.webp",
                offers: {
                  "@type": "Offer",
                  price: "499",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStoreOnly",
                },
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Return policy for structured data (10-day in-store return)
  const returnPolicy = {
    "@context": "https://schema.org",
    "@type": "MerchantReturnPolicy",
    "@id": "https://aleecreations.live/returns#return-policy",
    applicableCountry: "IN",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 10,
    returnMethod: "https://schema.org/ReturnInStore",
    returnFees: "https://schema.org/FreeReturn",
  };

  // Shipping details - In-store pickup only (no delivery)
  const shippingDetails = {
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: "INR",
    },
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "IN",
      addressRegion: ["MH"],
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 3,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "DAY",
      },
    },
  };

  // Store location for pickup
  const storeLocation = {
    "@type": "Place",
    name: "Ruchi Shoes - Alee Creation's",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No 22-23-24-25, Harihar Shopping Centre, Parekh Road",
      addressLocality: "Malad, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400064",
      addressCountry: "IN",
    },
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Crystal Phone Charms Collection",
    description: "Handcrafted crystal phone charms and mobile accessories",
    numberOfItems: 53,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Pearl Blossom Charm",
          description: "Elegant pearl-inspired charm with delicate blossom details",
          image: [
            "https://aleecreations.live/products/1.webp",
          ],
          sku: "CHCRLX001-GD",
          brand: {
            "@type": "Brand",
            name: "Alee Creation's",
          },
          offers: {
            "@type": "Offer",
            url: "https://aleecreations.live/collection",
            price: "599",
            priceCurrency: "INR",
            availability: "https://schema.org/InStoreOnly",
            availableAtOrFrom: storeLocation,
            itemCondition: "https://schema.org/NewCondition",
            hasMerchantReturnPolicy: {
              "@id": "https://aleecreations.live/returns#return-policy",
            },
            shippingDetails: shippingDetails,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Crystal Butterfly",
          description: "Beautiful butterfly design adorned with sparkling crystals",
          image: [
            "https://aleecreations.live/products/2.webp",
          ],
          sku: "CHCRCT002-GD",
          brand: {
            "@type": "Brand",
            name: "Alee Creation's",
          },
          offers: {
            "@type": "Offer",
            url: "https://aleecreations.live/collection",
            price: "449",
            priceCurrency: "INR",
            availability: "https://schema.org/InStoreOnly",
            availableAtOrFrom: storeLocation,
            itemCondition: "https://schema.org/NewCondition",
            hasMerchantReturnPolicy: {
              "@id": "https://aleecreations.live/returns#return-policy",
            },
            shippingDetails: shippingDetails,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Rose Quartz Heart Charm",
          description: "Romantic heart-shaped charm featuring genuine rose quartz crystals",
          image: [
            "https://aleecreations.live/products/3.webp",
          ],
          sku: "CHCRLX003-PK",
          brand: {
            "@type": "Brand",
            name: "Alee Creation's",
          },
          offers: {
            "@type": "Offer",
            url: "https://aleecreations.live/collection",
            price: "549",
            priceCurrency: "INR",
            availability: "https://schema.org/InStoreOnly",
            availableAtOrFrom: storeLocation,
            itemCondition: "https://schema.org/NewCondition",
            hasMerchantReturnPolicy: {
              "@id": "https://aleecreations.live/returns#return-policy",
            },
            shippingDetails: shippingDetails,
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Golden Butterfly Lanyard",
          description: "Luxurious gold-toned lanyard with butterfly crystal accents",
          image: [
            "https://aleecreations.live/products/4.webp",
          ],
          sku: "LSCRLX004-GD",
          brand: {
            "@type": "Brand",
            name: "Alee Creation's",
          },
          offers: {
            "@type": "Offer",
            url: "https://aleecreations.live/collection",
            price: "699",
            priceCurrency: "INR",
            availability: "https://schema.org/InStoreOnly",
            availableAtOrFrom: storeLocation,
            itemCondition: "https://schema.org/NewCondition",
            hasMerchantReturnPolicy: {
              "@id": "https://aleecreations.live/returns#return-policy",
            },
            shippingDetails: shippingDetails,
          },
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon - for Google search results logo */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="msapplication-TileColor" content="#2c2c2c" />
        <meta name="theme-color" content="#2c2c2c" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.1868;72.8489" />
        <meta name="ICBM" content="19.1868, 72.8489" />
        {/* Organization Schema - Brand recognition & social profiles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* WebSite Schema - Sitelinks searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Site Navigation - Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
        {/* LocalBusiness Schema - Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Return Policy Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(returnPolicy) }}
        />
        {/* Products Schema - Rich product results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${blosta.variable} ${giRegular.variable} ${gatheraz.variable} font-poppins antialiased`}
      >
        <BodyWrapper className="min-h-screen">
          {children}
        </BodyWrapper>
      </body>
    </html>
  );
}
