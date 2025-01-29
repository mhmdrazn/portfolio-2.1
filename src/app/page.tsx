"use client"

import AvatarStatus from "@/components/ui/avatarstatus";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconPhoneRinging, IconBriefcaseFilled, IconFileCertificate } from "@tabler/icons-react";
import { TextEffect } from "@/components/ui/texteffect";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { socialLinksDark } from "@/lib/data";
import Template from "@/components/ui/template";
import P from "@/components/ui/paragraph";
import Paragraph from "@/components/ui/paragraph";

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
    className="px-4 py-2 border anim rounded-xl w-fit hover:px-5 hover:bg-foreground/70 md:text-sm text-xs flex flex-row gap-2 hover:text-background text-background/60 items-center group"
  >
    <Icon
      className="opacity-0 animate-wiggle hidden group-hover:block group-hover:opacity-100"
      strokeWidth={2}
      width={16}
      height={16}
    />
    {label}
  </Link>
);

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center'>
      
      <Template>
        {/* <h1 className="lora-font text-5xl mb-10">Design, Develop, Delight</h1> */}  
        <div>
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
              A student by day, a creative thinker, and a moody writer by night. Passionate about product development. Sometimes do design, sometimes code, and sometimes write. 
            </TextEffect>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
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
        <Separator/>
        <div className="flex flex-row gap-2">
          {links.map((link, index) => (
            <AnimatedLink key={index} {...link} />
          ))}
        </div>
      </Template>


      <Template>
        <TextEffect 
          preset='fade-in-blur' 
          speedReveal={1.1} 
          speedSegment={0.3}
          className="text-md font-semibold">
          About Me
        </TextEffect>
        <Paragraph text={"I'm Muhammad Razan, but you can call me Razan. I'm a curious designer, coder, and maybe even a storyteller (though I’m not so sure about that, lol). I have a strong interest in Product Management, Software Development, and Design. Based in Surabaya, Indonesia."}/> 
        <Paragraph text={"Currently an undergraduate student @ITS majoring Information Systems"}/> 
      </Template>

      <Template>
        <h1 className="text-md font-semibold">He<span className="lora-font">re</span>’s Wh<span className="lora-font">at</span> I’ve Be<span className="lora-font">en</span> Up To.</h1>
      </Template>
    </main>
  );
}
