import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Muhammad Razan | Hipster",
  description: "UI/UX Designer and Junior Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning className="scroll-smooth">
      <body className={figtree.className}>
        {children}
      </body>
    </html>
  );
}
