"use client";

import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/supabase/client";

export type UserProfile = {
  id: string;
  name: string | null;
  avatar_url: string | null;
};

export type GuestbookWithUser = {
  id: string;
  created_at: string;
  content: string;
  user: UserProfile | null;
};

const fetchGuestbook = async (): Promise<GuestbookWithUser[]> => {
  try {
    console.log("fetchGuestbook called");

    const supabase = createClient();

    const { data: guestbook, error: guestbookError } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (guestbookError) throw guestbookError;

    console.log("Raw guestbook:", guestbook);

    const userIds: string[] = Array.from(
      new Set(
        guestbook
          .map((item) => item.user)
          .filter((id): id is string => Boolean(id))
      )
    );

    if (!userIds.length) {
      return guestbook.map((item) => ({
        id: String(item.id),
        content: item.content,
        created_at: item.created_at,
        user: null,
      }));
    }

    const { data: users, error: usersError } = await supabase
      .from("profile")
      .select("id, avatar_url, name")
      .in("id", userIds);

    if (usersError) throw usersError;

    const userMap = users?.reduce(
      (acc, user) => ({ ...acc, [user.id]: user }),
      {} as Record<string, UserProfile>
    ) || {};

    console.log("Mapped users:", userMap);

    return guestbook.map((item) => ({
      id: String(item.id),
      content: item.content,
      created_at: item.created_at,
      user: item.user ? userMap[item.user] || null : null,
    }));
  } catch (err) {
    console.error("Error in fetchGuestbook:", err);
    throw err;
  }
};


export const useGuestbook = () => {
  return useQuery({
    queryKey: ["guestbook"],
    queryFn: fetchGuestbook,
    // staleTime: 1000 * 60 * 5,
    // gcTime: 1000 * 60 * 10,
    // retry: 2,
    staleTime: 0,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};