const withImages = require('next-images')

module.exports = withImages({
    images: {
        disableStaticImages: true,
    },
    // output: 'export',
    trailingSlash: true,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // nextConfig:{
    //     output: 'export',
    //     assetPrefix: './',
    //     trailingSlash: true,
    // },
})