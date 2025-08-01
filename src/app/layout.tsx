import type { Metadata } from "next";
import { Figtree, Nunito, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  fallback: ["system-ui", "arial"],
});

const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-figtree",
  fallback: ["system-ui", "arial"],
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-nunito",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Netzet Test App",
  description: "Created as part of the second stage of netzet interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${urbanist.variable} ${figtree.variable} ${nunito.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
