import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-9 w-full border text-sm border-input shadow-sm hover:bg-foreground/80 hover:anim-slow rounded-lg bg-transparent p-2 text-background/40 placeholder-background/50 focus:outline-none focus:border-input",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
