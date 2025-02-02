import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { ReactLenis } from "@/lib/lenis";
import "./globals.css";
import Footer from "@/components/sections/footer";
import Dock from "@/components/ui/dock";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Razan | Personal Website",
  description: "UI/UX and Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning 
    className=" overflow-y-auto [&::-webkit-scrollbar]:w-0">
      <ReactLenis root>
        <body className={figtree.className}>
          {children}
          <Toaster />
            <div 
            className="fixed bottom-0 left-1/2 transform -translate-x-1/2 my-8 w-fit h-fit justify-center items-center">
            <Dock/>
            </div>
          <Footer/>
        </body>
      </ReactLenis>
    </html>
  );
}
