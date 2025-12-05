'use client';

import React from 'react';
import Paragraph from '@/components/ui/paragraph';
import Template from '@/components/ui/template';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';

const blog = [
    {
        title: 'Week 1 - Introduction to IT Service Management',
        description:
            'This week introduced the foundations of ITSM. Service management means the difference between products and services, and the concepts of utility and warranty.',
        href: '/course/itsm/week1',
        image: '/itsm/week1-itsm.jpg',
    },
    {
        title: 'Week 2 - The Four Dimensions of Service Management',
        description:
            'The focus shifted to the four dimensions: Organization and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.',
        href: '/course/itsm/week2',
        image: '/itsm/week2-itsm.jpg',
    },
    {
        title: 'Week 3 - Service Value System and ITIL Management Practices',
        description:
            'Week 3 moved deeper into the Service Value System (SVS), one of the central models in ITIL 4.',
        href: '/course/itsm/week3',
        image: '/itsm/week3-itsm.jpg',
    },
    {
        title: 'Week 4 - Service Desk and Incident Management',
        description:
            'Explored the Service Desk as the single point of contact in ITSM, highlighting its processes, types, KPIs, and its vital role in communication and trust.',
        href: '/course/itsm/week4',
        image: '/itsm/week4-itsm.jpg',
    },
    {
        title: 'Week 5 - Problem Management',
        description:
            'Focused on Problem Management, emphasizing root cause analysis, workarounds, the KEDB, and the balance between reactive and proactive practices.',
        href: '/course/itsm/week5',
        image: '/itsm/week5-itsm.jpg',
    },
    {
        title: 'Week 6 - ServiceNow Pre-Lab Stepping Into the Incident Lifecycle',
        description:
            'A transition week bridging ITIL concepts with hands-on ServiceNow platform experience. Built a Personal Developer Instance and walked through a complete incident lifecycle across different roles.',
        href: '/course/itsm/week6',
        image: '/itsm/week6-itsm.jpg',
    },
    {
        title: 'Week 7 - Group Simulation ServiceNow Incident Lifecycle',
        description:
            'A hands-on simulation using ServiceNow where a group acted as IT service professionals, transforming incident data into live ITIL-compliant tickets.',
        href: '/course/itsm/week7',
        image: '/itsm/week7-itsm.jpg',
    },
    {
        title: 'Week 8 - Midterm Examination',
        description: 'No class session. This week was dedicated to the midterm examination period.',
        href: null,
        image: null,
    },
    {
        title: 'Week 9 - No Class Session',
        description: 'No class this week.',
        href: null,
        image: null,
    },
    {
        title: 'Week 10 - Change, Release & Configuration Management',
        description:
            'Navigating the Backbone of Service Transition. Stepped into the shoes of CAB members, Release Managers, and Configuration Managers to understand how Change, Release, and CMDB practices work together.',
        href: '/course/itsm/week10',
        image: '/itsm/week10-itsm.jpg',
    },
    {
        title: 'Week 11 - Change & Problem Management Simulation',
        description:
            'Where Theory Finally Became Muscle Memory. Stepped into the Change Manager role driving RFCs through workflow states, and performed RCA on real enterprise problem scenarios.',
        href: '/course/itsm/week11',
        image: '/itsm/week11-itsm.jpg',
    },
    {
        title: 'Week 12 - No Class Session',
        description: 'No class this week.',
        href: null,
        image: null,
    },
    {
        title: 'Week 13 - Ensuring Services Perform, Stay Available, and Meet the Promise',
        description:
            'When ITSM Becomes About Reliability and Trust. Explored Availability Management, Capacity and Performance Management, Service Level Management, and Service Catalogue Management.',
        href: '/course/itsm/week13',
        image: '/itsm/week13-itsm.jpg',
    },
    {
        title: 'Week 14 - Event & Knowledge Management',
        description:
            'When ITSM Becomes About Awareness and Collective Memory. Explored Event Management as the early warning system and Knowledge Management as the continuous improvement loop.',
        href: '/course/itsm/week14',
        image: '/itsm/week14-itsm.jpg',
    },
];

const docs = [
    {
        week: 'Week 1',
        date: '18 September 2025',
        items: [
            {
                href: '/itsm/5026231174_Week1.pdf',
                title: '📄 Week 1 Homework',
            },
        ],
    },
    {
        week: 'Week 2',
        date: '25 September 2025',
        items: [
            {
                href: '/itsm/5026231174_Week2.pdf',
                title: '📄 Week 2 Class Activity',
            },
        ],
    },
    {
        week: 'Week 3',
        date: '2 October 2025',
        items: [
            {
                href: '/itsm/5026231174_Week3.pdf',
                title: '📄 Week 3 Class Activity',
            },
        ],
    },
    {
        week: 'Week 4',
        date: '9 October 2025',
        items: [
            {
                href: '/itsm/5026231174_Week4.pdf',
                title: '📄 Week 4 Class Activity',
            },
            {
                href: '/itsm/Week4_Lab1.xlsx',
                title: '📄 Week 4 Lab 01 (Group)',
            },
        ],
    },
    {
        week: 'Week 5',
        date: '16 October 2025',
        items: [
            {
                href: '/itsm/5026231174_Week5.pdf',
                title: '📄 Week 5 Class Activity',
            },
            {
                href: '/itsm/Week5_Lab.xlsx',
                title: '📄 Week 5 Lab 02 (Group)',
            },
            {
                href: '/itsm/Week5_Report.pdf',
                title: '📄 Week 5 Lab Report (Group)',
            },
        ],
    },
    {
        week: 'Week 6',
        date: '30 October 2025',
        items: [
            {
                href: '/itsm/5026231174_Week6.pdf',
                title: '📄 Week 6 Class Activity',
            },
        ],
    },
    {
        week: 'Week 7',
        date: '6 November 2025',
        items: [
            {
                href: '/itsm/Week7_Report.pdf',
                title: '📄 Week 7 Lab Report (Group)',
            },
        ],
    },
    {
        week: 'Week 10',
        date: '27 November 2025',
        items: [
            {
                href: '/itsm/5026231174_Week10.pdf',
                title: '📄 Week 10 Class Activity',
            },
        ],
    },
    {
        week: 'Week 11',
        date: '17 November 2025',
        items: [
            {
                href: '/itsm/5026231174_Week11.pdf',
                title: '📄 Week 11 Class Activity',
            },
        ],
    },
    {
        week: 'Week 13',
        date: '17 November 2025',
        items: [
            {
                href: '/itsm/5026231174_Week13.pdf',
                title: '📄 Week 13 Class Activity',
            },
        ],
    },
    {
        week: 'Week 14',
        date: 'December 2025',
        items: [
            {
                href: '/itsm/5026231174_Week14.pdf',
                title: '📄 Week 14 Class Activity',
            },
        ],
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
                        {blog.map((index, key) =>
                            index.href ? (
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
                            ) : (
                                <div
                                    key={key}
                                    className={`w-full border ${index.image ? 'h-24' : 'h-16'} overflow-clip rounded-lg items-center group flex flex-row gap-5 bg-foreground/5 opacity-60 cursor-default`}
                                >
                                    <div
                                        className={`flex flex-col md:p-5 p-2 justify-start pl-4 ${index.image ? 'w-3/5 md:w-2/3' : 'w-full'}`}
                                    >
                                        <h1 className="line-clamp-1 text-sm font-semibold text-background">
                                            {index.title}
                                        </h1>
                                        <p className="line-clamp-2 text-background/70 text-xs font-thin">
                                            {index.description}
                                        </p>
                                    </div>
                                    {index.image && (
                                        <Image
                                            src={index.image}
                                            alt={index.title}
                                            width={210}
                                            height={70}
                                            className="w-full h-24 md:w-1/3 object-cover"
                                            style={{
                                                maskImage:
                                                    'linear-gradient(to right, transparent 0%, #000 70%)',
                                            }}
                                        />
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </Template>

                <Template>
                    <div className="text-md font-semibold flex flex-row justify-between w-full items-center">
                        Work Documents
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                        {docs.map((docGroup) => (
                            <div
                                key={docGroup.week}
                                className="w-full border overflow-clip rounded-lg group hover:shadow-sm flex flex-col hover:bg-foreground/50 anim"
                            >
                                <div className="flex flex-col md:p-5 p-2 justify-start pl-4 group-hover:pl-7 anim">
                                    <h1 className="line-clamp-1 text-sm font-semibold text-background">
                                        {docGroup.week}
                                    </h1>
                                    <p className="line-clamp-1 text-background/70 text-xs font-thin">
                                        {docGroup.date}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 px-4 pb-3">
                                    {docGroup.items.map((item, itemKey) => (
                                        <Button
                                            variant={'outline'}
                                            className="w-full justify-start text-xs h-auto py-2 px-3 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors duration-150 text-left"
                                            key={itemKey}
                                        >
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full text-left"
                                            >
                                                {item.title}
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Template>
            </Template>
        </main>
    );
}

export default Page;
