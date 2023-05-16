/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: true,
        appDir: true,
        swcPlugins: [["next-superjson-plugin"]]
    },
}

module.exports = nextConfig
