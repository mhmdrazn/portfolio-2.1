import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 w-full whitespace-nowrap rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-25 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90 w-full',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 w-full',
                outline:
                    'border border-input shadow-sm hover:bg-foreground/80 hover:anim-slow hover:text-accent-foreground w-full',
                secondary:
                    'bg-background/20 text-secondary-foreground shadow-sm hover:bg-secondary/80 w-full',
                ghost: 'hover:bg-accent hover:text-accent-foreground w-full',
                link: 'text-primary hover:anim underline-offset-4 hover:underline w-full w-full',
            },
            size: {
                default: 'h-9 px-4 py-2 w-full',
                sm: 'h-8 rounded-md px-3 text-xs w-full',
                lg: 'h-10 rounded-md px-8 w-full',
                icon: 'h-9 w-9 w-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
