"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconPhoneRinging, IconBriefcaseFilled, IconFileCertificate, IconSend } from "@tabler/icons-react";
import { TextEffect } from "@/components/ui/texteffect";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { socialLinksDark, techStacks, expNow, projects } from "@/lib/data";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { TextMorph } from "@/components/ui/text-morph";
import { useState } from 'react';
import Image from "next/image";

import AvatarStatus from "@/components/ui/avatarstatus";
import Link from "next/link";
import Template from "@/components/ui/template";
import Paragraph from "@/components/ui/paragraph";
import { Input } from "@/components/ui/input";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const links = [
  {
    href: "https://cal.com/hola-razan",
    icon: IconPhoneRinging,
    label: "Book a call",
  },
  {
    href: "https://www.papermark.io/view/cm5wdajh5000u14d79vznrkb1",
    icon: IconFileCertificate,
    label: "Resume",
  },
  {
    href: "https://www.papermark.io/view/cm5wdh7xe00061av5ktxo0aus",
    icon: IconBriefcaseFilled,
    label: "Portfolio",
  },
];

const AnimatedLink = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    className="px-4 py-2 border anim rounded-xl w-fit hover:bg-foreground/70 md:text-sm text-xs flex flex-row gap-2 hover:text-background text-background/60 items-center group"
  >
    <Icon
      className="anim-slow"
      strokeWidth={2}
      width={16}
      height={16}
    />
    {label}
  </Link>
);

export default function Home() {
  const [text, setText] = useState('');
  return (
    <main className='flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center gap-10'>
      
      <Template>
          <AvatarStatus/>

          <div className="flex flex-col gap-2">
            <TextGenerateEffect 
              isParagraph={false} 
              duration={1.3} 
              filter={true} 
              words={"Muhammad Razan"}/>
            <TextEffect 
              preset='fade-in-blur' 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="anim text-background/50 hover:text-background text-xs md:text-sm">
              A student by day, a creative thinker, and a moody writer by night. Sometimes do design, sometimes code, and sometimes write. 
            </TextEffect>
          </div>

          <div className="flex flex-wrap">
          {socialLinksDark.map((index, key) => {
            return (
              <Link className="flex flex-row gap-2" key={key} href={index.href}>
                <Button variant={"ghost"} className="text-background/50 text-xs py-1">
                  {index.icon}
                  {index.name}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row gap-2">
          {links.map((link, index) => (
            <AnimatedLink key={index} {...link} />
          ))}
        </div>

      </Template>

      <Template>
        <h1
          className="text-md font-semibold">
          About Me
        </h1>
        
        <Paragraph text={"I'm Muhammad Razan, but you can call me Razan. Currently an undergraduate Information Systems student @ITS. I'm a curious designer, coder, and maybe even a storyteller (though I’m not so sure about that, lol). I have a strong interest in Product Management, Software Development, and Design. Based in Surabaya, Indonesia."}/> 
        
        <div className='flex flex-col items-start justify-center gap-1 w-full'>
          <h1
            className="text-xs text-background/50">
            Still curious? Ask me anything.
          </h1>

          <TextMorph className='text-lg font-semibold text-background/50'>
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
          Where I am right now?
        </h1>
        
        <div className="flex flex-col items-start justify-start">
          {expNow.map((index, key) => (
            <div key={key} className="flex flex-row w-fit items-center text-sm font-medium">
              <p className="text-xs min-w-32 text-background/50 font-normal">{index.time}</p>
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
        
        <Paragraph text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie sit amet velit quis iaculis. Nam vel ultrices metus. Vestibulum in condimentum nisl. "}/>

        <div className="pt-3 flex flex-col gap-2 w-full overflow-hidden">
          <InfiniteSlider durationOnHover={125} gap={24}>
            <div className="flex flex-row gap-8">
              {techStacks.map((index, key) => (
                <div key={key} className="flex flex-row gap-2 items-center text-xs text-background/50 anim h-6">
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
        <h1
          className="text-md font-semibold">
          Side Project
        </h1>
        <Paragraph text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie sit amet velit quis iaculis. Nam vel ultrices metus. Vestibulum in condimentum nisl. "}/>
        <div className="flex flex-row w-full justify-between items-center">
          <Image src={'/projects/buangbijak.svg'} alt="buangbijak" height={20} width={125}></Image>
          <Image src={'/projects/uride.svg'} alt="buangbijak" height={10} width={60}></Image>
          <Image src={'/projects/aimo.svg'} alt="buangbijak" height={20} width={80}></Image>
        </div>
      </Template>

      <Template>
        <div
          className="text-md font-semibold flex flex-row justify-between w-full items-center">
          My Little Corner
          <Button variant={"ghost"} className="text-xs anim text-background/50 w-fit">See more</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((index, key) => (
            <div key={key} className="flex flex-col gap-3 w-fit">
              <div className="rounded-lg overflow-clip h-fit shadow-sm border">
                <Link href={index.href}>
                  <Image src={index.img} height={1000} width={1200} alt={index.title} className="saturate-50 hover:saturate-100 anim" unoptimized/>
                </Link>
              </div>  
              <p className="text-xs text-background  ">{index.title}</p>
            </div>
          ))}
        </div>
      </Template>
      <div className="text-xs flex flex-row text-background/50 anim w-auto gap-2">
        inspired by
        <Link href={"https://github.com/msafdev"} className="anim text-background/50 w-fit">
          @msafdev
        </Link>
        <Link href={"https://github.com/marcellinoco"} className="anim text-background/50 w-fit">
          @marcellino
        </Link>
      </div>
    </main>
  );
}
