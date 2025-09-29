import React from 'react';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

export const metadata: Metadata = {
    title: 'ITSM',
};

const blog = [
    {
        title: 'Week 1 – Introduction to IT Service Management',
        description:
            'This week introduced the foundations of ITSM. I explored what service management means, the difference between products and services, and the concepts of utility and warranty.',
        href: '/course/itsm/week1',
        image: '/itsm/week1-itsm.jpg',
    },
    {
        title: 'Week 2 – The Four Dimensions of Service Management',
        description:
            'The focus shifted to the four dimensions: Organization and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.',
        href: '/course/itsm/week2',
        image: '/itsm/week2-itsm.jpg',
    },
    {
        title: 'Week 3 – Service Value System and ITIL Management Practices',
        description:
            'In Week 3, we moved deeper into the Service Value System (SVS), one of the central models in ITIL 4.',
        href: '/course/itsm/week3',
        image: '/itsm/week3-itsm.jpg',
    },
    {
        title: 'Week 4 – Service Desk and Incident Management',
        description:
            'In Week 3, we moved deeper into the Service Value System (SVS), one of the central models in ITIL 4.',
        href: '/course/itsm/week4',
        image: '/itsm/week4-itsm.jpg',
    },
    {
        title: 'Week 5 – Service Value System and ITIL Management Practices',
        description:
            'In Week 3, we moved deeper into the Service Value System (SVS), one of the central models in ITIL 4.',
        href: '/course/itsm/week5',
        image: '/itsm/week5-itsm.jpg',
    },
];

const docs = [
    {
        href: '/itsm/5026231174_Week1.pdf',
        title: '📄 Week 1 Homework (PDF)',
    },
    {
        href: '/itsm/5026231174_Week2.pdf',
        title: '📄 Week 2 Class Assignment (PDF)',
    },
    {
        href: '/itsm/5026231174_Week3.pdf',
        title: '📄 Week 3 Class Assignment (PDF)',
    },
    {
        href: '/itsm/5026231174_Week4.pdf',
        title: '📄 Week 4 Class Assignment (PDF)',
    },
];

function Page() {
    return (
        <main className="flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center gap-12">
            <Template>
                <div className="flex flex-row gap-4 items-center">
                    <a href="/">
                        <Button variant={'outline'} className="w-fit">
                            <IconArrowLeft />
                        </Button>
                    </a>
                    Back to Home
                </div>

                <h1 className="font-semibold text-2xl">ITSM - IT Service Management</h1>
                <Paragraph
                    text={
                        'Welcome to my ITSM Portfolio. This page is the landing point for my journey through the IT Service Management course, where each week I reflect on what I have learned, share assignments and study cases, and connect theory to real-world applications.'
                    }
                />

                <Paragraph
                    text={
                        "My full name is Muhammad Razan Parisya Putra (5026231174), currently in ITSM B Class. I'm a 5th semester Information Systems undergraduate student @ITS. Here I write and present my works on IT Service Management course."
                    }
                />

                <hr className="border-t border-gray-300 w-full mt-4" />

                <Template>
                    <div className="text-md font-semibold flex flex-row justify-between w-full items-center">
                        Weekly Highlights
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
                                    <Image
                                        src={index.image}
                                        alt={index.title}
                                        width={210}
                                        height={70}
                                        className="w-full h-24 md:w-1/3 object-cover group-hover:scale-110 anim"
                                        style={{
                                            maskImage:
                                                'linear-gradient(to right, transparent 0%, #000 70%)',
                                        }}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </Template>

                <Template>
                    <div className="text-md font-semibold flex flex-row justify-between w-full items-center">
                        Work Documents
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        {docs.map((index, key) => (
                            <Button variant={'outline'} className="w-full" key={key}>
                                <a href={index.href} target="_blank" rel="noopener noreferrer">
                                    {index.title}
                                </a>
                            </Button>
                        ))}
                    </div>
                </Template>
            </Template>
        </main>
    );
}

export default Page;
