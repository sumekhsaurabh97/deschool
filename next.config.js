/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;

module.exports = {
  reactStrictMode:true, 
  swcMinify: true,
  images: {
    domains: [
      "project-mynt.s3.ap-south-1.amazonaws.com",
      "deschoolonline-staging.s3.ap-south-1.amazonaws.com",
      "deschoolonline-production.s3.ap-south-1.amazonaws.com",
      "deschool-stagingbucket-new.s3.ap-south-1.amazonaws.com",
    ],
  },
  
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}:slug*`,
      },
    ];
  }
};