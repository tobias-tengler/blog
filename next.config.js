/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
}

if (process.env.NODE_ENV === 'production') {
    nextConfig.basePath = "https://tobias-tengler.github.io/blog"
}

module.exports = nextConfig
