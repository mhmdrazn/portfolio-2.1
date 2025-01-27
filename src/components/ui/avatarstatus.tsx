"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const badgeMotion = {
    rest: {
        width: 16,
        height: 16,
    },
    hover: {
        width: 100,
        height: 20,
        transition: {
            duration: 0.2,
        },
    },
};

const textMotion = {
    rest: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

const AvatarStatus = () => {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group/status relative h-fit w-fit cursor-default rounded-full border border-background/10"
        >
        <Avatar className="md:h-12 md:w-12 w-10 h-10">
            <AvatarImage
            src="https://github.com/mhmdrazn.png"
            alt="Razan's avatar"
            />
            <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <motion.div
            variants={badgeMotion}
            className="absolute bottom-0 left-8 overflow-hidden w-fit rounded-full flex justify-center items-center bg-green-500 text-xs font-medium text-white"
        >
            <motion.span variants={textMotion} className="md:text-xs text-[10px]">
            On Vacancy 🏄‍♂️
            </motion.span>
        </motion.div>
        </motion.div>
    );
};

export default AvatarStatus;