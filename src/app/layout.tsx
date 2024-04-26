import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Road Transit delivery",
  description:
    "Road Transit delivery | Moves anything into any direction you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
