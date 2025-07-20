'use client';

import { signInWithGithub, signInWithGoogle, signOut } from '@/action/auth';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

const AuthMutation = () => {
    const { toast } = useToast();
    const githubMutation = useMutation({
        mutationFn: signInWithGithub,
        onSuccess: (response) => {
            if ('error' in response) {
                toast({
                    title: 'Error',
                    description: response.error,
                    variant: 'destructive',
                });
            } else {
                toast({
                    title: 'Signing with GitHub',
                    description: response.data,
                    variant: 'default',
                });
            }
        },

        onError: () => {
            toast({
                title: 'Error',
                description: 'An error occurred while signing in with GitHub.',
                variant: 'destructive',
            });
        },
    });

    const googleMutation = useMutation({
        mutationFn: signInWithGoogle,
        onSuccess: (response) => {
            if ('error' in response) {
                toast({
                    title: 'Error',
                    description: response.error,
                    variant: 'destructive',
                });
            } else {
                toast({
                    title: 'Signing with Google',
                    description: response.data,
                    variant: 'default',
                });
            }
        },

        onError: () => {
            toast({
                title: 'Error',
                description: 'An error occurred while signing in with Google.',
                variant: 'destructive',
            });
        },
    });

    const signOutMutation = useMutation({
        mutationFn: signOut,
        onSuccess: (response) => {
            if ('error' in response) {
                toast({
                    title: 'Error',
                    description: response.error,
                    variant: 'destructive',
                });
            } else {
                toast({
                    title: 'Success',
                    description: response.data,
                    variant: 'default',
                });
            }
        },

        onError: () => {
            toast({
                title: 'Error',
                description: 'An error occurred while signing in with Google.',
                variant: 'destructive',
            });
        },
    });

    return {
        githubMutation,
        googleMutation,
        signOutMutation,
    };
};

export default AuthMutation;
