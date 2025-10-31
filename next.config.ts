import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/PET-VET', 
    trailingSlash: true,
    images: {
    unoptimized: true,
            remotePatterns: [
                {
                    protocol:'https',
                    hostname:'i.ytimg.com',
                    pathname:'/**'
                },
            ],
        },
};

export default nextConfig;




