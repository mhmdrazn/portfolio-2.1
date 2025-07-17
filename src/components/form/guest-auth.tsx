'use client';

import React from 'react';
import Image from 'next/image';
import AuthMutation from '@/mutation/auth.mutation';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';
import { Textarea } from '@/components/ui/textarea';

const GuestForm = ({ user }: { user: User | null }) => {
    const { githubMutation, googleMutation, signOutMutation } = AuthMutation();

    const authProviders = [
        {
            provider: 'github' as const,
            mutation: githubMutation,
            label: 'Sign in with GitHub',
            icon: '/icons/github.svg',
        },
        {
            provider: 'google' as const,
            mutation: googleMutation,
            label: 'Sign in with Google',
            icon: '/icons/google.svg',
        },
    ];

    const handleSignIn = (provider: 'github' | 'google') => {
        if (provider === 'github') {
            githubMutation.mutate();
        } else if (provider === 'google') {
            googleMutation.mutate();
        }
    };

    const handleSignOut = () => {
        signOutMutation.mutate();
    };

    return (
        <div className="flex flex-col gap-4 h-fit pt-4 max-w-2xl w-full">
            {user ? (
                <div className="flex flex-col gap-3 items-end w-full">
                    <Textarea placeholder="Your message" className="w-full h-fit" />
                    <div className="flex w-full gap-2">
                        <Button>Send</Button>
                    </div>
                    <div
                        className="text-xs font-normal anim text-background/70 hover:text-background w-fit hover:text-background/ hover:cursor-pointer"
                        onClick={handleSignOut}
                    >
                        Logout
                    </div>
                </div>
            ) : (
                <div className="flex flex-row md:flex-row md:gap-6 gap-2 w-full">
                    {authProviders.map(({ provider, mutation, label, icon }) => (
                        <Button
                            key={provider}
                            variant={'outline'}
                            className="flex items-center gap-2"
                            onClick={() => handleSignIn(provider)}
                        >
                            <Image src={icon} alt={`${provider} icon`} width={16} height={16} />
                            {mutation.status === 'pending' ? `Signing in...` : label}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GuestForm;
