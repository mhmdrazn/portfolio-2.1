import React from 'react'

import Image from 'next/image'
import { Button } from '../ui/button'
import { User } from '@supabase/supabase-js'
import { Textarea } from "@/components/ui/textarea"

const login = [
    {
        providers: 'google',
        action: 'googleSignIn',
        label: 'Sign in with Google',
        icon: '/icons/google.svg'
    },
    {
        providers: 'github',
        action: 'githubSignIn',
        label: 'Sign in with GitHub',
        icon: '/icons/github.svg'
    },
]

const GuestForm = ({ user } : {user: User | null}) => {
    return (    
        <div className='felx flex-col gap-4 h-fit pt-4 max-w-2xl w-full'>
            {user ? 
                <div className='flex flex-col gap-3 items-end w-full'>
                    <Textarea placeholder='Your message' className='w-full h-fit'/>
                    <Button className='w-fit h-fit'>
                        Submit
                    </Button>
                </div>
                    :
                <div className='flex flex-row md:flex-row md:gap-6 gap-2 w-full'>
                    {login.map((provider, index) => (   
                        <Button type='submit' variant={'secondary'} key={index} className='w-full gap-3'>
                            <Image
                                src={provider.icon}
                                alt={provider.action}
                                width={16}
                                height={16}
                            >
                            </Image>
                            {provider.label}
                        </Button>
                    ))}
                </div>}
        </div>
    )
}

export default GuestForm