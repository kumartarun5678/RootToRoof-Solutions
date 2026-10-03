
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title =
  "RootToRoof Solutions | Technology Consulting & Digital Solutions";

const description =
  "RootToRoof Solutions provides technology consulting and digital solutions, including websites, web applications, mobile apps, CRM systems, automation, and custom software for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: title,
    template: "%s | RootToRoof Solutions",
  },

  description,

  keywords: [
    "technology consulting",
    "technology consulting company",
    "IT consulting services",
    "digital solutions",
    "digital transformation",
    "web development",
    "website development",
    "web application development",
    "mobile app development",
    "CRM development",
    "custom software development",
    "business automation",
    "software development company",
    "IT solutions",
    "RootToRoof Solutions",
  ],

  authors: [
    {
      name: "RootToRoof Solutions",
      url: site.url,
    },
  ],

  creator: "RootToRoof Solutions",
  publisher: "RootToRoof Solutions",

  applicationName: "RootToRoof Solutions",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: "RootToRoof Solutions",
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RootToRoof Solutions - Technology Consulting & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "googleea49ae0fd21f672a",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}