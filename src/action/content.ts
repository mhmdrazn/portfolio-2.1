'use server';

import { createClient } from '@/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addContent(formData: FormData) {
    const content = formData.get('content') as string;

    if (content.length < 5) {
        return { error: 'Content must be at least 5 characters.' };
    }

    if (content.length > 120) {
        return { error: 'Content must be less than 120 characters.' };
    }

    try {
        const supabase = createClient();
        const { data: user, error: userError } = await supabase.auth.getUser();

        if (userError || !user.user){
            return { error: 'User not authenticated.' };
        }
        
        await supabase.from('profile').upsert({
            id: user.user.id,
            name: user.user.user_metadata?.full_name || '',
            avatar_url: user.user.user_metadata?.avatar_url || ''
        });

        const { error } = await supabase.from('guestbook').insert({
            content: content.trim(),
            user: user.user.id,
        });

        if (error) {
            console.error('Error adding content:', error);
            return { error: 'An unexpected error occurred.' };
        }

        revalidatePath('/guest');
        return { data: 'Content added successfully.' };
        
    } catch (error) {
        console.error('Error adding content:', error);
        return { error: 'An unexpected error occurred.' };
    }
}
