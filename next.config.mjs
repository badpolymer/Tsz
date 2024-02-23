/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
 
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? 'https://badpolymer.github.io/Tsz' : undefined,
    basePath: '/Tsz',
    experimental: {}
};

export default nextConfig;
