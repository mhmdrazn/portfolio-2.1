import React from 'react'

import {
    Disclosure,
    DisclosureContent,
    DisclosureTrigger,
} from '../ui/disclosure';
import { Separator } from '../ui/separator';
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from './paragraph'
import { Button } from './button'
import { experiences } from '@/lib/data';
import { ExternalIcon } from './icons';

function Card() {
    return (
        <div className='flex flex-col gap-1'>
            {experiences.map((experience) => (
                <Disclosure key={experience.position} className='w-full rounded-xl hover:inner-border hover:shadow-md hover:anim anim-fast hover:inner-border-zinc-200 p-4'>
                    <DisclosureTrigger>
                        <div className='flex flex-row gap-5 items-center'>
                            <Image 
                                src={experience.img} 
                                alt={experience.company}
                                height={56} 
                                width={56} 
                                className='rounded-xl border border-slate-200'/>
                            <div className='w-full'>
                                <p className='text-base font-medium'>{experience.company}</p>
                                <div className='flex flex-row justify-between'>
                                    <Paragraph text={experience.position}></Paragraph>
                                    <p className='anim text-background/50 hover:text-background text-xs'>{experience.date}</p>
                                </div>
                            </div>
                        </div>
                    </DisclosureTrigger>
                    <DisclosureContent>
                        <div className='overflow-hidden pb-3 flex flex-col pt-4 gap-3'>
                            <p className='text-xs text-background/70'>{experience.description}</p>
                            <div className='flex flex-col'>
                                <p className='text-xs text-background/70'>Key Responsibilities</p>
                                {experience.job?.map((jobItem, index) => {
                                    return <li key={index} className='text-xs text-background/70'>{jobItem}</li>
                                })}
                            </div>
                            <Link href={experience.link} className='flex flex-row gap-1 items-center'>
                                <Button className='anim hover:text-background text-xs w-fit rounded-lg' variant={'ghost'}><ExternalIcon/>Discover  {experience.company}</Button>
                            </Link> 
                        </div>
                    </DisclosureContent>
                </Disclosure>
            ))}
        </div>
    )
}

export default Card