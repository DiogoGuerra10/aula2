/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '',
  //distDir: 'dist',
  //trailingSlash: false,
  //skipTrailingSlashRedirect: true,
};
 
export default nextConfig;

