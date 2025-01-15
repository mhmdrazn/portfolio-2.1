import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Hola Razan!",
  description: "UI/UX and Product Designer",
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
        <Toaster />
      </body>
    </html>
  );
}
