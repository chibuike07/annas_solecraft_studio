import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna's Kitchen - Authentic Nigerian Igbo Delicacies | Order on WhatsApp",
  description:
    "Savor the taste of authentic Nigerian Igbo delicacies from Anna's Kitchen. Fresh local meals, soups, swallows, and more with instant WhatsApp ordering. Fast delivery and excellent taste.",
  keywords:
    "Nigerian food, Igbo delicacies, Anna's Kitchen, local food, Nigerian meals, WhatsApp food order",
  authors: [{ name: "Anna's Kitchen" }],
  creator: "Anna's Kitchen",
  publisher: "Anna's Kitchen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chibuike07.github.io/anns_delicacies",
    siteName: "Anna's Kitchen",
    title: "Anna's Kitchen - Authentic Nigerian Igbo Delicacies",
    description:
      "Shop premium curated gear for bold lifestyles with instant WhatsApp checkout.",
    images: [
      {
        url: "https://chibuike07.github.io/anns_delicacies/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anna's Kitchen - Nigerian Igbo Delicacies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna's Kitchen - Authentic Nigerian Igbo Delicacies",
    description:
      "Savor authentic Nigerian Igbo delicacies from Anna's Kitchen with instant WhatsApp ordering.",
    images: ["https://chibuike07.github.io/anns_delicacies/og-image.jpg"],
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
    canonical: "https://chibuike07.github.io/anns_delicacies",
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
