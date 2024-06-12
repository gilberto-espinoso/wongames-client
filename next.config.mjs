/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

export default nextConfig
