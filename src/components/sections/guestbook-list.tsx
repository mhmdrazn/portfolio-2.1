'use client';

import { useGuestbook } from "@/query/guest";
import { GuestCard } from "./guest-card";
import { Button } from "@/components/ui/button";

const Error = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex h-fit w-full max-w-lg flex-col gap-y-4">
    <div>
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col">
          <p className="text-sm font-semibold md:text-sm">Anonymous</p>
          <span className="text-xs text-muted-foreground">404</span>
        </div>
      </div>
      <Button
        onClick={onRetry}
        className="mt-2.5 h-[18px] w-fit rounded-sm px-0"
        variant={"link"}
      >
        Try again?
      </Button>
    </div>
  </div>
);

const GuestbookList = () => {
    const { data: guests, isLoading, error, refetch} = useGuestbook();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Error onRetry={() => refetch()} />;
    }

    if (!guests || guests.length === 0) {
        return <div>No entries yet. Be the first to sign the guestbook!</div>;
    }

    console.log("Guestbook entries:", guests);
    
    return (
      <div className="w-full space-y-4">
        {guests.map((entry, index) => (
          <GuestCard key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    );  
  
};

export { GuestbookList };