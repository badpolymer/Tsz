/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
 
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? 'http://badpolymer.github.io/Tsz' : undefined,
    experimental: {}
};

export default nextConfig;
