import React, { ReactNode } from "react";

interface TemplateProps {
    children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
    return (
        <div className="md:max-w-lg max-w-md w-full h-fit flex flex-col items-start gap-6 mt-8">
            {children}
        </div>
    );
};

export default Template;
