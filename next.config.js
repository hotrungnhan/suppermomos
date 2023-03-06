const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTwin(nextConfig)
