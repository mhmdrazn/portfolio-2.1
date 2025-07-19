import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'min-h-[120px] w-full border text-sm border-input shadow-sm hover:bg-foreground/80 hover:anim-slow rounded-lg bg-transparent p-2 text-background/70 placeholder-background/50 focus:outline-none focus:border-input',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';

export { Textarea };
