import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ngozi - Premium Curated Products | Instant WhatsApp Checkout",
  description:
    "Shop premium curated gear for bold lifestyles. Explore hot sales, best sellers, popular picks, and more with instant WhatsApp checkout. Fast, secure, and convenient shopping experience.",
  keywords:
    "curated products, instant checkout, WhatsApp shopping, premium gear, best sellers",
  authors: [{ name: "Ngozi" }],
  creator: "Ngozi",
  publisher: "Ngozi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://princ.github.io/ngozi-site",
    siteName: "Ngozi",
    title: "Ngozi - Premium Curated Products | Instant WhatsApp Checkout",
    description:
      "Shop premium curated gear for bold lifestyles with instant WhatsApp checkout.",
    images: [
      {
        url: "https://princ.github.io/ngozi-site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ngozi Store - Premium Curated Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngozi - Premium Curated Products | Instant WhatsApp Checkout",
    description:
      "Shop premium curated gear for bold lifestyles with instant WhatsApp checkout.",
    images: ["https://princ.github.io/ngozi-site/og-image.jpg"],
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
  alternates: {
    canonical: "https://princ.github.io/ngozi-site",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
