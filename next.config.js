/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["photos.google.com", "photos.app.goo.gl"]
  }
}

module.exports = nextConfig
