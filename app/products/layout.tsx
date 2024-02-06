import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Siljoq - Products",
  description:
    "Discover our latest products.",
};

export default function ProductLayout({
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
