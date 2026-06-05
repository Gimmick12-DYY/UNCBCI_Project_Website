/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/collaborators',
        destination: '/partners',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
