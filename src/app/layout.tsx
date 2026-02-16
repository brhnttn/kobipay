import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KobiPay - Şirket Ödemelerinizde Nakit Akışını Yönetin",
  description: "Tedarikçi faturalarınızı kredi kartı ile ödeyin, 40 güne varan vade avantajından yararlanın. Finylabs Teknoloji A.Ş. ürünüdür.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // BURASI DEĞİŞTİ: "scroll-smooth" eklendi
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}