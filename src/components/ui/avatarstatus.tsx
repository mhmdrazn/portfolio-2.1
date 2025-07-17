'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const badgeMotion = {
  rest: {
    width: 16,
    height: 16,
  },
  hover: {
    width: 60,
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
      className="group/status relative h-fit w-fit cursor-default rounded-3xl border border-background/10"
    >
      <Avatar className="w-16 h-16">
        <AvatarImage src="https://github.com/mhmdrazn.png" alt="Razan's avatar" />
      </Avatar>
      <motion.div
        variants={badgeMotion}
        className="absolute bottom-0 left-12 overflow-hidden w-fit rounded-full flex justify-center items-center border-2 border-white bg-green-500 text-xs font-medium text-white"
      >
        <motion.span variants={textMotion} className="md:text-xs text-[10px]">
          Online
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default AvatarStatus;
