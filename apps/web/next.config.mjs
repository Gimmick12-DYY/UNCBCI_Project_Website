/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/collaborators',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/research',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/pis',
        destination: '/people',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
