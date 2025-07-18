'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useToast } from '@/hooks/use-toast';
import { copyToClipboard } from '../../lib/utils';
import { socialLinks, action, quickLinks } from '../../lib/data';
import { MailIcon } from '../ui/icons';

export default function Footer() {
    const { toast } = useToast();
    return (
        <footer className="flex w-full h-fit px-4 pt-12 md:pb-32 md:px-8 lg:px-16 justify-center items-center bg-background">
            <div className="flex flex-col max-w-3xl w-full gap-4 justify-between">
                <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-6 md:gap-0 pw-full">
                    <Image
                        src="/slash.svg"
                        className="w-12 h-12"
                        alt="logo"
                        width={60}
                        height={42.06}
                    />
                    <div className="flex flex-row gap-6 items-center">
                        <button
                            onClick={() => {
                                copyToClipboard('razan4944@gmail.com');
                                toast({
                                    title: 'Gotcha! Copied to clipboard',
                                    description: 'The email is ready to roll. Use it wisely! 😀',
                                });
                            }}
                            className="size-fit"
                        >
                            <MailIcon />
                        </button>

                        {socialLinks.map((maps, index) => (
                            <Link key={index} href={maps.href} className="size-fit">
                                {maps.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-between md:items-end h-full">
                    <div className="flex flex-col items-start md:gap-16 h-full justify-end">
                        <p className="hidden md:block font-thin text-sm text-center pt-3 md:text-left text-foreground">
                            &copy; 2025 Muhammad Razan. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 ">
                        <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-2">
                            <p className="font-medium text-foreground">Actions</p>
                            <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-2">
                                {action.map((maps, index) => (
                                    <Link
                                        key={index}
                                        href={maps.href}
                                        className="anim text-sm text-white/40 hover:text-white"
                                    >
                                        {maps.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-2">
                            <p className="font-medium text-foreground">Quick Links</p>
                            <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-2">
                                {quickLinks.map((maps, index) => (
                                    <Link
                                        key={index}
                                        href={maps.href}
                                        className="anim text-sm text-white/40 hover:text-white"
                                    >
                                        {maps.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="md:hidden font-thin text-sm text-center md:text-left py-12 text-foreground">
                    &copy; 2025 Muhammad Razan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
