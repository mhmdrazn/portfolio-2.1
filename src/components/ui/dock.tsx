'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    IconSmartHome,
    IconCategory2,
    IconCarouselHorizontal,
    IconSignature,
    IconNotebook,
    IconCalendarTime,
} from '@tabler/icons-react';
import Link from 'next/link';

const tabs = [
    { id: 1, label: 'Home', icon: <IconSmartHome className="h-full w-full" />, href: '/' },
    {
        id: 2,
        label: 'Journey',
        icon: <IconCarouselHorizontal className="h-full w-full" />,
        href: '/journey',
    },
    {
        id: 3,
        label: 'Projects',
        icon: <IconCategory2 className="h-full w-full" />,
        href: '/projects',
    },
    {
        id: 4,
        label: 'Retrospective',
        icon: <IconNotebook className="h-full w-full" />,
        href: '/retrospective',
    },
    {
        id: 5,
        label: 'Guestroom',
        icon: <IconSignature className="h-full w-full" />,
        href: '/guest',
    },
    {
        id: 6,
        label: 'Book a call',
        icon: <IconCalendarTime className="h-full w-full" />,
        href: 'https://cal.com/hola-razan',
    },
];

const Dock = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex rounded-2xl border bg-popover p-1 shadow-md">
            {tabs.map((tab) => (
                <Link href={tab.href} key={tab.id}>
                    <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                            activeTab === tab.id ? 'text-background' : 'text-muted-foreground/70'
                        } group/dock relative h-10 w-10 p-3 text-sm transition-all duration-500 ease-in-out focus-visible:outline-none`}
                        style={{
                            WebkitTapHighlightColor: 'transparent',
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="dock-bubble"
                                className="absolute inset-0 z-10 rounded-[12px] bg-primary/40 mix-blend-difference outline-none ring-0 dark:bg-primary/80"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.icon}
                        <span className="absolute -top-8 left-1/2 hidden md:block -translate-x-1/2 -translate-y-2 scale-75 rounded-md border bg-popover p-1 px-1.5 text-[10px] font-medium leading-none text-background opacity-0 transition-all duration-200 ease-in-out group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-hover/dock:opacity-100">
                            {tab.label}
                        </span>
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Dock;
