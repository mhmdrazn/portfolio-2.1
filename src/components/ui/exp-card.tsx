import React from 'react'

import {
    Disclosure,
    DisclosureContent,
    DisclosureTrigger,
} from '../ui/disclosure';
import { Separator } from '../ui/separator';
import Image from 'next/image'
import Paragraph from './paragraph'
import { experiences } from '@/lib/data';

function Card() {
    return (
        <div className='flex flex-col gap-3'>
            {experiences.map((experience) => (
                <Disclosure key={experience.position} className='w-full rounded-xl hover:inner-border hover:shadow-md hover:anim anim-fast hover:inner-border-zinc-200 p-4'>
                    <DisclosureTrigger>
                        <div className='flex flex-row gap-5 items-center'>
                            <Image 
                                src={experience.img} 
                                alt={experience.company}
                                height={56} 
                                width={56} 
                                className='rounded-lg border border-slate-200'/>
                            <div className='w-full'>
                                <p className='text-base font-medium'>{experience.company}</p>
                                <div className='flex flex-row justify-between'>
                                    <Paragraph text={experience.position}></Paragraph>
                                    <Paragraph text={experience.date}></Paragraph>
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
                                    return <p key={index} className='text-xs text-background/70'>{jobItem}</p>
                                })}
                            </div>
                        </div>
                    </DisclosureContent>
                </Disclosure>
            ))}
        </div>
    )
}

export default Card