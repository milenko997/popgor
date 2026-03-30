import type { Metadata } from "next";
import "./globals.css";
import './globals.scss';
import { Outfit, DM_Sans } from "next/font/google";
import ScrollEffects from "@/components/providers/scrollEffects";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stovarište građevinskog materijala Petrovaradin | PopGor",
  description: "Sve za gradnju na jednom mestu - stovarište u Petrovaradinu sa širokim asortimanom materijala i brzom isporukom.",
  openGraph: {
    title: 'Stovarište građevinskog materijala Petrovaradin | PopGor',
    description: 'Sve za gradnju na jednom mestu - stovarište u Petrovaradinu sa širokim asortimanom materijala i brzom isporukom.',
    url: 'https://popgor.rs/',
    siteName: 'PopGor',
    type: 'website',
  },
  metadataBase: new URL('https://popgor.rs/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${dmSans.variable} antialiased`}
      >
        <ScrollEffects>{children}</ScrollEffects>
      </body>
    </html>
  );
}
