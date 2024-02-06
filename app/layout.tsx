import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Siljoq - Homepage",
  description:
    "Explore the latest fashion trends at Siljoq - Your premier destination for stylish and affordable clothing. From casual essentials to runway-inspired looks, discover a curated collection of men's and women's apparel. Elevate your wardrobe with quality fabrics, on-trend designs, and exceptional value. Shop with confidence and enjoy fast shipping, easy returns, and personalized style recommendations. Stay fashion-forward with Siljoq - Where Your Style Takes Center Stage!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  );
}
