import Image from "next/image";
import Link from "next/link";
import MusicCard from "../ui/music";
import { currentPlaying } from "@/lib/spotify";
import { useEffect, useState } from "react";
import { Track } from "@/lib/types";

const TrackCard = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        currentPlaying().then(setTracks);
    }, []);

    return (
        <div className="md:max-w-lg max-w-md w-full h-fit flex flex-col items-start gap-6 mt-8">
            <h1
                className="text-md font-semibold">
                Currently Playing
            </h1>
            {tracks.map((track) => (
                <Link
                    href={track.external_urls.spotify}
                    aria-label={track.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={track.id}
                    className="flex items-center gap-x-4"
                >
                <div className="relative size-12 shrink-0 overflow-hidden rounded-sm bg-red">
                    <MusicCard imageUrl={track.album.images[0].url} alt={track.name}/>
                    <Image
                    src={track.album.images[0].url}
                    alt={track.album.name}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <h3 className="line-clamp-1 text-sm font-semibold">{track.name}</h3>
                    <p className="line-clamp-1 text-xs text-muted-foreground">
                    {track.artists[0].name}
                    </p>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default TrackCard;