import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Poppins } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Djire Ange Fortune — le CodeurAuChapeau",
  description:
    "Développeur Full-Stack. Je conçois des produits web rapides, fiables et soignés — du back-end à l'interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${poppins.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
