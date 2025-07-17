import React from 'react';

interface HeadingProps {
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
    return <h1 className="text-md font-semibold">{text}</h1>;
};

export default Heading;
