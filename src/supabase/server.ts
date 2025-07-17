import { Database } from '@/supabase/types';

import { cookies } from 'next/headers';

import { type CookieOptions, createServerClient } from '@supabase/ssr';

const createServerClientWithKey = (key: string) => {
    // cookies() returns a Promise, so we need to handle it asynchronously
    return createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, {
        cookies: {
            async get(name: string) {
                const cookieStore = await cookies();
                return cookieStore.get(name)?.value;
            },
            async set(name: string, value: string, options: CookieOptions) {
                try {
                    const cookieStore = await cookies();
                    cookieStore.set({ name, value, ...options });
                } catch (error) {
                    // The `set` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                }
            },
            async remove(name: string, options: CookieOptions) {
                try {
                    const cookieStore = await cookies();
                    cookieStore.set({ name, value: '', ...options });
                } catch (error) {
                    // The `delete` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                }
            },
        },
    });
};

export const createClient = () => {
    return createServerClientWithKey(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
};

export const createAdminClient = () => {
    return createServerClientWithKey(process.env.SUPABASE_SERVICE_ROLE_KEY!);
};
