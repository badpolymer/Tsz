/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
 
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? 'https://badpolymer.github.io/Tsz' : undefined,
    basePath: isProd ? '/Tsz' : undefined,
    experimental: {}
};

export default nextConfig;
