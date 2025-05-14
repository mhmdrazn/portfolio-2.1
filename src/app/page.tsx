"use client"

import Image from "next/image";
import Link from "next/link";
import AvatarStatus from "@/components/ui/avatarstatus";
import Chat from "@/components/sections/chat";
import Template from "@/components/ui/template";
import Paragraph from "@/components/ui/paragraph";
// import Spotify from "@/components/sections/spotify";
// import TrackCard from "@/components/sections/track";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { 
  socialLinksDark, 
  techStacks, 
  expNow, 
  features } 
from "@/lib/data";
import { 
  BentoGrid, 
  BentoCard } 
from "@/components/ui/bento";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FeaturedProjects = features.slice(0, 2);

console.log("Refresh Token:", process.env.SPOTIFY_REFRESH_TOKEN);

const blog = [
  {
    title: "Mechanisms of Computer Memory Retention",
    description: "Memory is one of the important elements in a computer that has a central role in processing data and programs. We can liken this memory to computer memory. Its function is to store data that will be used by the computer when operating.",
    href: "https://medium.com/@mhmdrazn/bagaimana-cara-komputer-mengingat-a9aaed85e3ad",
    image: "/blog/memory.webp"
  },
  {
    title: "Advanced CPU Design: Architectural Considerations and Innovations",
    description: "If we develop a small program for our CPU that allows division of two numbers by repeatedly performing subtraction, the process would look like this: for example, to divide 16 by 4, we repeatedly subtract 4 from 16 until we reach zero or a negative number.",
    href: "https://medium.com/@mhmdrazn/bagaimana-desain-cpu-tingkat-lanjut-edd82fddb158",
    image: "/blog/cpu.webp"
  },
]

export default function Home() {
  return (
    <main 
      className='flex flex-col min-h-screen w-full justify-start,
      p-6 pt-8 md:p-12 lg:p-20 items-center gap-12'>

      <Template>
        <div className="flex flex-col gap-4 items-start w-full justify-start">
          <AvatarStatus/>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-lg">
              Muhammad Razan
            </h1>
            <p
              className="anim text-background/70 text-xs md:text-sm">
              A student by day, a creative thinker, and a moody writer by night. 
              Sometimes do design, sometimes code, and sometimes write. 
            </p>
          </div>  
          
          <div className="flex flex-wrap gap-5">
            {socialLinksDark.map((index, key) => {
              return (
                <Link 
                  className="flex flex-col gap-3" 
                  key={key} 
                  href={index.href}>
                  <div className="w-5 h-5 text-background/50 hover:text-background anim">
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {index.icon}
                        </TooltipTrigger>
                        <TooltipContent className="dark px-2 py-1 text-xs" showArrow={false}>
                          {index.name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Template>


      <Template>
        <h1
          className="text-md font-semibold">
          About Me
        </h1>
        
        <Paragraph text={"I'm Muhammad Razan, but you can call me Razan. Currently an undergraduate Information Systems student @ITS. I'm a curious designer, coder, and maybe even a storyteller (though I’m not so sure about that, lol). I have a strong interest in Product Management, Software Development, and Design. Based in Surabaya, Indonesia."}/> 
        
        <div className='flex flex-col items-start justify-center w-full'>
          <h1
            className="text-xs text-background/70">
            Still curious? Ask me anything.
          </h1>
          <Chat/>
        </div>
      </Template>
{/* 
      <Spotify/> */}
      {/* <TrackCard/> */}

      <Template>
        <h1
          className="text-md font-semibold">
          Where I am right now?
        </h1>
        
        <div className="flex flex-col items-start justify-start">
          {expNow.map((index, key) => (
            <div key={key} className="flex flex-row w-fit items-center text-sm font-medium">
              <p className="text-xs min-w-32 text-background/70 font-normal">
                {index.time}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <Paragraph text={index.position}/>
                <Link href={index.link}>
                  <Image 
                    src={index.company}
                    alt={index.link} 
                    height={15} 
                    className="h-12"
                    width={55}></Image>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Template>

      <Template>
        <h1
          className="font-semibold">
          Toolkit and Weapons
        </h1>
        
        <Paragraph text={"When I'm not busy saving the digital world one pixel at a time, I arm myself with these tools. Think of me as a digital superhero, but instead of a cape, I wear a hoodie, and instead of a shield, I wield a keyboard. Here’s what’s in my utility belt."}/>

        <div className="pt-3 flex flex-col gap-2 w-full overflow-hidden">
          <InfiniteSlider durationOnHover={125} gap={24}>
            <div className="flex flex-row gap-8">
              {techStacks.map((index, key) => (
                <div key={key} className="flex flex-row gap-2 items-center text-xs text-background/70 anim h-6">
                  <div className="w-4 h-4">
                    {index.icon}  
                  </div>
                  {index.name}
                </div>
              ))}
            </div> 
          </InfiniteSlider>
        </div>
      </Template>

      <Template>
        <div
          className="text-md font-semibold flex flex-row justify-between w-full items-center">
          Read my mind
          <Link className="text-background/70 hover:text-background text-xs anim w-fit" href={"https://medium.com/@mhmdrazn"}>See more</Link>
        </div>
        <div className="flex flex-col gap-2">
          {blog.map((index, key) => (
            <Link href={index.href} key={key}>
              <div className="w-full border h-24 overflow-clip rounded-lg items-center group hover:shadow-sm flex flex-row gap-5 hover:bg-foreground/50 anim">
                <div className="flex flex-col md:p-5 p-2 justify-start pl-4 group-hover:pl-7 anim w-3/5 md:w-2/3">
                  <h1 className="line-clamp-1 text-sm font-semibold text-background">
                    {index.title}
                  </h1>
                  <p className="line-clamp-2 text-background/70 text-xs font-thin">
                    {index.description}
                  </p>
                </div>
                <Image src={index.image} alt={index.title} width={210} height={70} className="w-2/5 h-24 md:w-1/3 object-cover group-hover:scale-110 anim"
                  style={{ maskImage: "linear-gradient(to right, transparent 0%, #000 70%)" }}/>
              </div>
            </Link>    
          ))}
        </div>
      </Template>

      <Template>
        <div
          className="text-md font-semibold flex flex-row justify-between w-full items-center">
          Side Projects
          <Link className="text-xs anim text-background/70 hover:text-background w-fit hover:text-background/" href={"/projects"}>See more</Link>
        </div>
        <Paragraph text={"These are my passion projects, where I turn caffeine into code and dreams into apps. Think of them as my digital children, sometimes dysfunctional, but always full of potential."}/>
        <BentoGrid className="w-xl">
          {FeaturedProjects.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </Template>

      <Template>
        <div
          className="text-md font-semibold flex flex-row justify-between w-full items-center">
          Credits
        </div>
        <h1 className="text-background/50 text-xs md:text-sm w-fit text-justify">This page was crafted by Razan, drawing inspiration from <span className="text-background/70 anim hover:text-background"><Link href={"https://msaf.tech"}>@msaf.tech</Link></span>. Some components are sourced from <span className="text-background/70 anim hover:text-background"><Link href={"https://ui.msaf.tech"}>ui.msaf.tech.</Link></span></h1>
      </Template>
    </main>
  );
}
