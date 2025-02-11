"use client"

import { IconSend } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { socialLinksDark, techStacks, expNow, features } from "@/lib/data";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { TextMorph } from "@/components/ui/text-morph";
import { BentoGrid , BentoCard } from "@/components/ui/bento";
import { useState } from 'react';
import Image from "next/image";
import AvatarStatus from "@/components/ui/avatarstatus";
import Link from "next/link";
import Template from "@/components/ui/template";
import Paragraph from "@/components/ui/paragraph";
import { Input } from "@/components/ui/input";
import MusicCard from "@/components/ui/music";

const FeaturedProjects = features.slice(0, 2);

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
  const [text, setText] = useState('');
  return (
    <main className='flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center gap-16'>

      <Template>
        <div className="flex flex-col gap-3 items-start w-full justify-start">
          <AvatarStatus/>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-lg">
              Muhammad Razan
            </h1>
            <p
              className="anim text-background/70 text-xs md:text-sm">
              A student by day, a creative thinker, and a moody writer by night. Sometimes do design, sometimes code, and sometimes write. 
            </p>
          </div>  

          <div className="flex flex-row gap-10">
            {socialLinksDark.map((index, key) => {
              return (
                <Link className="flex flex-row gap-3" key={key} href={index.href}>
                  <Button variant={"link"} className="anim p-0 text-background/70 text-xs">
                    {index.icon}
                    {index.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        {/* <SwipeButton className="border">Book a call</SwipeButton> */} 
      </Template>


      <Template>
        <h1
          className="text-md font-semibold">
          About Me
        </h1>
        
        <Paragraph text={"I'm Muhammad Razan, but you can call me Razan. Currently an undergraduate Information Systems student @ITS. I'm a curious designer, coder, and maybe even a storyteller (though I’m not so sure about that, lol). I have a strong interest in Product Management, Software Development, and Design. Based in Surabaya, Indonesia."}/> 
        
        <div className='flex flex-col items-start justify-center gap-1 w-full'>
          <h1
            className="text-xs text-background/70">
            Still curious? Ask me anything.
          </h1>

          <TextMorph className='text-lg font-semibold text-background/70'>
            {text}
          </TextMorph>
          
          <div className="flex flex-row gap-2 w-full">
            <Input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Type your text here'
              />
            <Button variant={"outline"} className="w-fit"><IconSend/></Button>
          </div>
        </div>
      </Template>

      <Template>
        <h1
          className="text-md font-semibold">
          Currently Playing
        </h1>
        <div className="flex flex-row gap-4 items-center justify-center">
          <MusicCard></MusicCard>
          <div className="flex flex-col">
            <p className="font-medium">Riptide - Vance Joy</p>
            <p className="text-xs text-background/70">Open in spotify</p>
          </div>
        </div>
      </Template>

      <Template>
        <h1
          className="text-md font-semibold">
          Where I am right now?
        </h1>
        
        <div className="flex flex-col items-start justify-start">
          {expNow.map((index, key) => (
            <div key={key} className="flex flex-row w-fit items-center text-sm font-medium">
              <p className="text-xs min-w-32 text-background/70 font-normal">{index.time}</p>
              <div className="flex flex-row gap-4 items-center">
                <Paragraph text={index.position}/>
                <Link href={index.link}>
                  <Image src={index.company} alt={index.link} height={15} width={55}></Image>
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
                <div className="flex flex-col p-4 justify-start pl-6 group-hover:pl-8 anim w-4/5 md:w-2/3">
                  <h1 className="line-clamp-1 text-sm font-semibold text-background">
                    {index.title}
                  </h1>
                  <p className="line-clamp-2 text-background/70 text-xs font-thin">
                    {index.description}
                  </p>
                </div>
                <Image src={index.image} alt={index.title} width={210} height={70} className="w-1/5 h-24 md:w-1/3 object-cover group-hover:scale-110 anim"
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
    </main>
  );
}
