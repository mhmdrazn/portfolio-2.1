import React from 'react';

interface Paragraph {
    text: string;
}

const Paragraph: React.FC<Paragraph> = ({ text }) => {
    return (
        <h1 className='anim text-background/50 hover:text-background text-xs md:text-sm'>
            {text}
        </h1>
    );
};

export default Paragraph;