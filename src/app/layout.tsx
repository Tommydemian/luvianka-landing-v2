import type { Metadata, ResolvingMetadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { createClient } from "@prismicio/client";
import "./app.css";

import { Oswald, Source_Sans_3, Grand_Hotel } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["600", "700"],
  display: "swap",
});
const src_sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-src-sans",
  weight: ["400", "700"],
  display: "swap",
});
const grand_hotel = Grand_Hotel({
  subsets: ["latin"],
  variable: "--font-grand-hotel",
  weight: ["400"],
  display: "swap",
});

// components:
import { Header } from "@/app/components/layout/Header";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(repositoryName);
  const page = await client.getSingle("settings");
  return {
    title: page.data.site_title || "Luvianka",
    description:
      page.data.meta_description ||
      "Luvianka, los mejores fiambres del mercado.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${src_sans.variable} ${grand_hotel.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
