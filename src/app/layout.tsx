import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"
import { FloatingDock } from "@/components/ui/floating-dock";
import { dock } from "@/lib/data";
import Footer from "@/components/footer";

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
        <div
          className="fixed bottom-0 right-4 transform -translate-x-1/2 my-8 rounded-2xl w-fit h-fit justify-center items-center 
          md:left-1/2 md:transform md:-translate-x-1/2 md:my-8 "
        >
          <FloatingDock items={dock} />
        </div>
        <Footer/>
      </body>
    </html>
  );
}
