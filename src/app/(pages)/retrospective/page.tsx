import React from 'react';
import { Metadata } from 'next';
import Template from '@/components/ui/template';

export const metadata: Metadata = {
    title: 'Retrospective',
};

function Journey() {
    return (
        <main className="flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center gap-16">
            <Template>
                <div className="flex flex-col gap-2"></div>
            </Template>
        </main>
    );
}

export default Journey;
