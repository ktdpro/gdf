/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Add other configurations here as needed
    // For example, for images:
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
             {
                protocol: 'https',
                hostname: 'placehold.co',
            },
             {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
};

export default nextConfig;
