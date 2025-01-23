import React from 'react'
import GuestForm from '@/components/form/guest-form'
import { createClient } from '@/supabase/server'

async function Guest() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.error('Error fetching user:', error);
    }

    return (
        <section className='flex flex-col min-h-screen justify-start p-6 pt-8 md:p-12 lg:p-20 items-center'> 
            <div className='md:max-w-2xl max-w-md w-full h-fit flex flex-col gap-2'>
                <h1 className='font-medium text-xl md:text-3xl'>
                    Drop your <span className='lora-font'>footnotes</span>
                </h1>
                <p className='font-medium text-sm text-justify anim text-background/70 hover:text-background'>
                    Post a message and let everyone see your thoughts. Share whatever on your mind and be part of the fun.
                </p>
                <GuestForm user={user} />
            </div>
        </section>
    )
}

export default Guest