/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'a0.muscache.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoiZGxveW9sYSIsImEiOiJjbDQ4b2ZkOHIwanIzM2twOGw0c2VydzMzIn0.WmFQntuy7fd2ivdJo52dSQ',
  },
};

module.exports = nextConfig;
