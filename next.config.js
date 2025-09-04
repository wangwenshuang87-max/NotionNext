const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  basePath: '/blog', // 如果不需要子目录部署，这行可以删掉
  assetPrefix: isProd ? '/blog/' : '',
  images: {
    domains: ['www.notion.so', 'images.unsplash.com', 'yourcdn.com']
  }
}
