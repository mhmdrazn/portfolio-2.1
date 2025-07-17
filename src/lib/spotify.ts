'use server';

import { Track } from '@/lib/types';

const getAccessToken = async (): Promise<{ access_token: string }> => {
    console.log('Refresh Token:', process.env.SPOTIFY_REFRESH_TOKEN); // Debug log
    console.log('Client ID:', process.env.SPOTIFY_CLIENT_ID); // Debug log
    console.log('Client Secret:', process.env.SPOTIFY_CLIENT_SECRET); // Debug log

    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!refresh_token) {
        throw new Error('Refresh token is missing');
    }

    const authHeader = Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token,
        }).toString(),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to fetch access token:', errorData);
        throw new Error('Failed to fetch access token');
    }

    return response.json();
};

const topTracks = async (): Promise<Track[]> => {
    try {
        const { access_token } = await getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=3', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to fetch top tracks:', errorData);
            throw new Error('Failed to fetch top tracks');
        }

        const data = await response.json();
        return data.items as Track[];
    } catch (error) {
        console.error('Error in topTracks:', error);
        throw error;
    }
};

export const currentPlaying = topTracks;
