/** @type {import('next').NextConfig} */
export const nextConfig = {
    images: {
        domains: ['i.scdn.co'],
    },
};

const config = {
    async redirects() {
        return [
            {
                source: '/',
                destination:
                    'https://drive.google.com/file/d/1WVJ5-pqrk1eJ-9xwmy85yQmLBzwmlbSm/view?usp=sharing',
                permanent: true,
                has: [
                    {
                        type: 'host',
                        value: 'portfolio-mhmdrazn.com',
                    },
                ],
            },
            {
                source: '/',
                destination: 'https://meet.google.com/puk-viay-guc',
                permanent: true,
                has: [
                    {
                        type: 'host',
                        value: 'meet-mhmdrazn.com',
                    },
                ],
            },
        ];
    },
};

export default config;
