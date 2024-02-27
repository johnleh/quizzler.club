/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        //TODO: add secret when making JWT
        secret: ''
    },
    publicRuntimeConfig: {
        baseUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://quizzler.club'
    }
    
}

module.exports = nextConfig
