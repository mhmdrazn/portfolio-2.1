import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./icons";
import Link from "next/link";
import Image from "next/image";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  background: ReactNode;
  desc: string;
  href: string;
  logo:  string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[13rem] md:auto-rows-[17rem] grid-cols-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  desc,
  href,
  logo,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 h-48 md:h-64 flex flex-col justify-end overflow-hidden rounded-lg w-full border",
      className,
    )}
    {...props}
  >
    {background}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 md:p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Image src={logo} alt={logo} width={24} height={24} className="origin-left top-0 transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-lg font-semibold text-background">
        {name}
      </h3>
      <p className="max-w-lg md:text-sm text-xs text-background/50">{desc}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Link href={href}>
        <Button variant="ghost" size="sm" className="pointer-events-auto w-fit">
          See Prototype
          <ArrowRightIcon/>
        </Button>
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
