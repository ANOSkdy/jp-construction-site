import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "建設株式会社 | 日本の職人による高品質な建築",
  description: "日本国内の建設会社のコーポレートサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <a
          href="#main-content"
          className="skip-link z-50"
        >
          メインコンテンツにスキップ
        </a>
        <Header />
        <main
          id="main-content"
          className="pt-16 min-h-[calc(100vh-4rem)]"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
