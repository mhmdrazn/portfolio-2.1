"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import Paragraph from "./paragraph";

export const TextGenerateEffect = ({
        words,
        className,
        filter = true,
        duration = 0.5,
        isParagraph,
    }: {
        words: string;
        className?: string;
        filter?: boolean;
        duration?: number;
        isParagraph?: boolean;
    }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
        animate(
        "span",
        {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        },
        {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
        }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
        <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
            return (
                <motion.span
                key={word + idx}
                className="dark:text-white text-background opacity-0"
                style={{
                    filter: filter ? "blur(5px)" : "none",
                }}
                >
                {word}{" "}
                </motion.span>
            );
            })}
        </motion.div>
        );
    };

    return (
        <div>
            {isParagraph ? (
                <Paragraph text={renderWords()}/>
            ) : (
                <div className={cn("font-semibold", className)}>
                    <div className="mt-4">
                        <div className=" dark:text-white text-background text-3xl">
                        {renderWords()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
