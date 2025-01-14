import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
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
import { Footer } from "./components/layout/Footer";
import { WppButton } from "./components/ui/WppButton";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="alternate icon" href="/favicon-96x96.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <WppButton />
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
