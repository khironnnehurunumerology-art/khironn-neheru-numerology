import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://khironnnehuru.com"),

  title: {
    default: "Dr. Khironn Neheru | Numerologist",
    template: "%s | Dr. Khironn Neheru",
  },

  description:
    "Dr. Khironn Neheru is a numerologist with more than 23 years of experience, continuing a family legacy that began in 1987 and serving clients across 71 countries.",

  keywords: [
    "Dr. Khironn Neheru",
    "Khironn Neheru",
    "Numerologist",
    "Numerology Consultation",
    "Numerology Expert",
    "Numerology Reading",
    "Phone Consultation",
    "Video Consultation",
    "Direct Numerology Consultation",
  ],

  authors: [
    {
      name: "Dr. Khironn Neheru",
    },
  ],

  creator: "Dr. Khironn Neheru",

  icons: {
    icon: "/khironn-neheru.png",
    shortcut: "/khironn-neheru.png",
    apple: "/khironn-neheru.png",
  },

  openGraph: {
    title: "Dr. Khironn Neheru | Numerologist",
    description:
      "Discover the power of numbers with Dr. Khironn Neheru. Numerology consultation based on your individual numerological profile.",
    url: "https://khironnnehuru.com",
    siteName: "Dr. Khironn Neheru",
    images: [
      {
        url: "/khironn-neheru.png",
        width: 1200,
        height: 630,
        alt: "Dr. Khironn Neheru - Numerologist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Khironn Neheru | Numerologist",
    description:
      "Numerology consultation with Dr. Khironn Neheru.",
    images: ["/khironn-neheru.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}