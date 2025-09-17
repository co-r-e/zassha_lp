const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(repoBasePath
    ? {
        basePath: repoBasePath.startsWith("/") ? repoBasePath : `/${repoBasePath}`,
        assetPrefix: repoBasePath.startsWith("/") ? `${repoBasePath}/` : `/${repoBasePath}/`
      }
    : {})
};

module.exports = nextConfig;
