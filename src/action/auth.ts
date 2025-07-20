'use client';

import { createClient } from '@/supabase/client';

type AuthResult = { data: string } | { error: string };

const signInWithProvider = async (provider: 'github' | 'google'): Promise<AuthResult> => {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${location.origin}/auth/callback`,
        },
    });

    if (error) {
        console.log(`OAuth sign in with ${provider} failed:`, error);
        return { error: error.message };
    }

    return { data: `Wait for a moment...` };
};

export const signInWithGithub = () => signInWithProvider('github');
export const signInWithGoogle = () => signInWithProvider('google');

export const signOut = async (): Promise<AuthResult> => {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log('Sign out failed:', error);
        return { error: error.message };
    }

    location.reload();

    return { data: 'Signed out successfully' };
};
