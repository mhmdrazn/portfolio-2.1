import React, { ReactNode } from "react";

interface TemplateProps {
    children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
    return (
        <div className="md:max-w-xl max-w-md w-full h-fit flex flex-col items-start gap-4 mt-8">
            {children}
        </div>
    );
};

export default Template;
