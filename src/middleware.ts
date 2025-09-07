import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    if (req.headers.get('host') === 'course.localhost:3000') {
        // Rewrite to /course route
        url.pathname = `/course${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}
