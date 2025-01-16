import React from 'react'
import GuestForm from '@/components/form/guest-form'

function Guest() {
    return (
        <section className='w-full h-screen flex flex-col gap-6 justify-start p-6 pt-8 md:p-12 lg:p-20 items-center text-foreground bg-background'> 
            <div className='md:max-w-2xl max-w-md w-full h-fit flex flex-col gap-2'>
                <h1 className='font-bold text-xl md:text-3xl text-foreground'>
                    Guestbook
                </h1>
                <p className='font-medium text-xs text-justify anim text-foreground/70 hover:text-foreground'>
                    Hi welcome! <br />Share your thoughts or say hello, or just want to r
                </p>
                <GuestForm/>
            </div>
        </section>
    )
}

export default Guest