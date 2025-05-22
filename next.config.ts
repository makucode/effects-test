import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                pathname: "**",
            },
            {
                protocol: "http",
                hostname: "picsum.photos",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
