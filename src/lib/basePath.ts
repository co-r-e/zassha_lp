const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

export const basePath = rawBasePath && rawBasePath !== "/" ? (rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`) : "";

export const withBasePath = (assetPath: string) => {
  if (!assetPath.startsWith("/")) {
    throw new Error(`withBasePath expects an absolute path starting with '/'. Received: ${assetPath}`);
  }

  return basePath ? `${basePath}${assetPath}` : assetPath;
};
