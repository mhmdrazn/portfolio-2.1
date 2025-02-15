import React from 'react';
import { Metadata } from 'next';
import { BentoGrid, BentoCard } from '@/components/ui/bento';
import { features } from "@/lib/data";
import Template from "@/components/ui/template";
import Paragraph from "@/components/ui/paragraph";

export const metadata : Metadata = {
    title: 'Projects',
}

function Projects() {
    return (
        <main className='flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center gap-16'>
            <Template>
                <h1
                className="text-md font-semibold">
                Projects
                </h1>
                <Paragraph text={"These are the things I’ve been cooking up. Some just starting out, some all polished up. Take a scroll, maybe you’ll find something cool!"}/>
                <BentoGrid className="w-xl">
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </Template>
        </main>
    );
}

export default Projects;