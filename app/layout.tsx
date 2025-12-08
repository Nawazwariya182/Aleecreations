import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BodyWrapper from "./components/BodyWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const blosta = localFont({
  src: "./fonts/BLOSTA.otf",
  variable: "--font-blosta",
});

const giRegular = localFont({
  src: "./fonts/GI-R.otf",
  variable: "--font-gi",
});

const gatheraz = localFont({
  src: "./fonts/Gatheraz.otf",
  variable: "--font-gatheraz",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aleecreations.live"),
  title: {
    default: "Alee Creation's - Handcrafted Crystal Phone Charms & Accessories in India",
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
  authors: [{ name: "Alee Creation's", url: "https://www.aleecreations.live" }],
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
    url: "https://www.aleecreations.live",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alee Creation's",
    image: "https://www.aleecreations.live/Others/logo.webp",
    description: "Handcrafted crystal phone charms and mobile accessories in Mumbai, India",
    url: "https://www.aleecreations.live",
    telephone: "+918108328786",
    email: "aleenascrystal@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.076,
      longitude: 72.8777,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.instagram.com/alee__creation_s",
      "https://youtube.com/@alee_creations",
    ],
    priceRange: "₹₹",
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
          offers: {
            "@type": "Offer",
            price: "599",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
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
          offers: {
            "@type": "Offer",
            price: "449",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
