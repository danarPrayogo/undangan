import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/data/wedding";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: weddingData.seo.title,
  description: weddingData.seo.description,
  metadataBase: new URL(weddingData.seo.url),
  openGraph: {
    title: weddingData.seo.title,
    description: weddingData.seo.description,
    url: weddingData.seo.url,
    siteName: "Undangan Pernikahan Digital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: weddingData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `Undangan Pernikahan ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: weddingData.seo.title,
    description: weddingData.seo.description,
    images: [weddingData.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-montserrat bg-darkwine text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
