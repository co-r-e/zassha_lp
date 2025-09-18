/** @type {import('next').NextConfig} */
const nextConfig = (() => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
  const normalizedBasePath = basePath && basePath !== "/" ? (basePath.startsWith("/") ? basePath : `/${basePath}`) : "";

  return {
    reactStrictMode: true,
    images: {
      unoptimized: true
    },
    ...(normalizedBasePath
      ? {
          basePath: normalizedBasePath,
          assetPrefix: `${normalizedBasePath}/`
        }
      : {})
  };
})();

module.exports = nextConfig;
