import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { ReactLenis } from "@/lib/lenis";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Footer from "@/components/sections/footer";
import Dock from "@/components/ui/dock";
import NextTopLoader from "nextjs-toploader";

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
          <NextTopLoader
              color="#181C14"
              initialPosition={0.08}
              easing="ease"
              speed={300}
              showSpinner={false}
              height={4}
              shadow="0 0 20px #181C14, 0 0 15px #181C14"
              zIndex={100}
            />
          <div className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-full bg-gradient-to-b from-white to-transparent md:h-12 lg:h-16" />
          {children}
          <Analytics/>
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
