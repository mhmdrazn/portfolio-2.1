import React from 'react';
import { ReactNode } from "react";

interface Paragraph {
    text: ReactNode;
}

const Paragraph: React.FC<Paragraph> = ({ text }) => {
    return (
        <h1 className='anim text-background/50 hover:text-background text-xs md:text-sm w-fit text-justify'>
            {text}
        </h1>
    );
};

export default Paragraph;