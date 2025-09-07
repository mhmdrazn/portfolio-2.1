'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { GuestbookWithUser } from '@/query/guest';
import { formatDistanceToNow } from 'date-fns';

type GuestbookCardProps = {
    entry: GuestbookWithUser;
    index: number;
};

const GuestCard = ({ entry, index }: GuestbookCardProps) => {
    const delay = index * 0.1;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24, filter: 'blur(32px)' }}
            animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                    delay,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                },
            }}
            className={cn(
                'group relative flex flex-col justify-end overflow-hidden rounded-lg w-full cursor-pointer',
                'transition-all duration-500 ease-in-out',
                'backdrop-blur-sm hover:border hover:border-background/10 hover:px-3 hover:py-3'
            )}
        >
            <div className="pointer-events-none z-10 flex transform-gpu flex-col transition-all duration-500 ease-in-out">
                <div className="flex-row gap-4 justify-start items-center w-full transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex max-h-0 group-hover:max-h-20 overflow-hidden group-hover:mb-3">
                    <Image
                        src={entry.user?.avatar_url || '/icons/github.svg'}
                        alt={entry.user?.avatar_url || 'User Avatar'}
                        width={36}
                        height={36}
                        className="origin-left top-0 transform-gpu text-neutral-700 rounded-xl"
                    />

                    <div>
                        <h3 className="text-sm font-semibold text-background">
                            {entry.user?.name || 'Orang Baik'}
                        </h3>
                        {/* <p className='text-xs font-thin text-background/60'>{entry.created_at}</p> */}
                        <p className="text-xs font-thin text-background/60">
                            {formatDistanceToNow(new Date(entry.created_at), { addSuffix: true })}
                        </p>
                    </div>
                </div>

                <div className="p-3 bg-background/5 rounded-lg">
                    <p className="max-w-lg md:text-sm text-xs text-background/75 overflow-hidden">
                        {entry.content}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export { GuestCard };
