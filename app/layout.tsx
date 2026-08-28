import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dr. Khironn Neheru | Numerologist",
  description:
    "Dr. Khironn Neheru is a numerologist with more than 23 years of experience, continuing a family legacy that began in 1987 and serving clients across 71 countries.",
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