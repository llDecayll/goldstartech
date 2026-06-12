import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.goldstartech.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Goldstar Tech | Digital Marketing & Software Development Agency in Bangalore",
    template: "%s | Goldstar Tech",
  },
  description:
    "Goldstar Tech is a Bangalore-based digital marketing and software development agency serving India, the UK, UAE, USA, Canada, Australia and New Zealand. Web design, SEO, AEO/GEO, paid media, mobile apps and AI solutions.",
  keywords: [
    "digital marketing agency Bangalore",
    "web design and development company",
    "SEO services India",
    "social media marketing agency",
    "mobile app development Bangalore",
    "software product development",
    "AEO GEO agency",
    "AI marketing solutions",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Goldstar Tech",
    title: "Goldstar Tech — Digital Marketing & Software Development Agency",
    description:
      "Growth engineered with precision. Web design, SEO, paid media, apps and AI solutions from Bangalore to the world.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldstar Tech — Digital Marketing & Software Development Agency",
    description:
      "Growth engineered with precision. Web design, SEO, paid media, apps and AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Goldstar Tech",
  url: SITE_URL,
  email: "hello@goldstartech.com",
  telephone: "+91-98765-43210",
  description:
    "Digital marketing and software development agency headquartered in Bangalore, India, serving clients across healthcare, real estate, agri-tech, solar energy, hospitality and retail.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: ["IN", "GB", "AE", "US", "CA", "AU", "NZ"],
  sameAs: [
    "https://www.linkedin.com/company/goldstartech",
    "https://www.instagram.com/goldstartech",
    "https://www.facebook.com/goldstartech",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;650;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
