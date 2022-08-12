const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})

module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  async redirects() {
    return [
      {
        source: '/tutorial/:slug*',
        destination: '/tutorials/:slug*', // Matched parameters can be used in the destination
        permanent: true
      },
      {
        source: '/tutorials/deploy-to-heroku',
        destination: '/tutorials/connect-any-application',
        permanent: true
      },
      {
        source: '/v1/vitess-operator/:match*',
        destination: 'https://github.com/chatty-cloud/vitess-operator/tree/main/docs',
        permanent: true
      },
      {
        source: '/v1/:match*',
        destination: '/',
        permanent: true
      },
      {
        source: '/reference/chatty-cloud-security',
        destination: '/reference/secure-connections',
        permanent: true
      }
    ]
  }
}
