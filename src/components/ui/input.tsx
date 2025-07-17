import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<'input'> & { placeholders?: string[] }
>(({ className, type, placeholders = [], ...props }, ref) => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    useEffect(() => {
        if (placeholders.length > 0) {
            const interval = setInterval(() => {
                setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [placeholders]);

    return (
        <div className="relative w-full">
            <input
                type={type}
                className={cn(
                    'h-9 w-full border text-sm border-input shadow-sm hover:bg-foreground/80 hover:anim-slow rounded-lg bg-transparent p-2 text-background/40 placeholder-background/50 focus:outline-none focus:border-input',
                    className
                )}
                ref={ref}
                {...props}
            />
            <AnimatePresence mode="wait">
                {!props.value && placeholders.length > 0 && (
                    <motion.p
                        initial={{
                            y: 5,
                            opacity: 0,
                        }}
                        key={`current-placeholder-${currentPlaceholder}`}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -15,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'linear',
                        }}
                        className="absolute top-1/4 left-3 transform -translate-y-1/2 text-sm text-background/50 pointer-events-none"
                    >
                        {placeholders[currentPlaceholder]}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
});

Input.displayName = 'Input';

export { Input };
