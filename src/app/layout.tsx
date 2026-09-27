import type { Metadata } from "next";
import { Manrope, Noto_Sans_JP } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader/SiteHeader";
import { SkipLink } from "@/components/ui/SkipLink/SkipLink";

import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "北陸精密テクノ株式会社｜制作準備中",
  description:
    "北陸精密テクノ株式会社のコーポレートサイトは、現在実装準備中です。",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${manrope.variable}`}>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
