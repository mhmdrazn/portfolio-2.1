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
        <section className='w-full h-screen flex flex-col gap-6 justify-start p-6 pt-8 md:p-12 lg:p-20 items-center text-foreground bg-background'> 
            <div className='md:max-w-2xl max-w-md w-full h-fit flex flex-col gap-2'>
                <h1 className='font-bold text-xl md:text-3xl text-foreground'>
                    Drop your footnotes &gt;&lt;
                </h1>
                <p className='font-medium text-sm text-justify anim text-foreground/70 hover:text-foreground'>
                    Post a message and let everyone see your thoughts. Share whatever on your mind and be part of the fun.
                </p>
                <GuestForm user={user} />
            </div>
        </section>
    )
}

export default Guest