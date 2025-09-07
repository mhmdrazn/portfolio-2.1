import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <div className="md:max-w-lg max-w-md w-full h-fit flex flex-col items-start gap-2">
            {children}
        </div>
    );
};

export default Section;
