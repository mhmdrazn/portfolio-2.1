"use client"

import AvatarStatus from "@/components/ui/avatarstatus";
import Heading from '@/components/ui/heading'
import Paragraph from "@/components/ui/paragraph";

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen w-full justify-start p-4 pt-8 md:p-12 lg:p-20 items-center'>
      
      <div className='md:max-w-2xl max-w-md w-full h-fit flex flex-row items-center gap-5'>
        <AvatarStatus/>
        <div className="flex flex-col">
          <h1 className="font-medium text-base text-background anim">Muhammad Razan</h1>
          <Paragraph text="UI/UX Designer/Product Designer"></Paragraph>
        </div>
      </div>
    </main>
  );
}
