import { createClient } from '@/supabase/server';
import React from 'react';
import { Metadata } from 'next';
import Template from '@/components/ui/template';
import GuestForm from '@/components/form/guest-auth';

export const metadata: Metadata = {
    title: 'Guest',
};

const Page = async () => {
    const supabase = createClient();
    const { data: users } = await supabase.auth.getUser();

    return (
        <main className="flex flex-col min-h-screen w-full justify-start p-6 pt-8 md:p-12 lg:p-20 items-center gap-16">
            <Template>
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-2xl md:text-3xl font-normal w-full text-left">
                        Lets <span className="anim lora-font">See...</span> who was{' '}
                        <span className="lora-font">Here</span>
                    </h1>

                    <br />

                    <div className="text-md font-medium flex flex-row justify-between w-full items-center">
                        Do you want to say hi?
                    </div>

                    <GuestForm user={users.user} />
                </div>
            </Template>
        </main>
    );
};

export default Page;
