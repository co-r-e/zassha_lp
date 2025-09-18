const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

export const withBasePath = (assetPath: string) => {
  if (!assetPath.startsWith("/")) {
    throw new Error(`withBasePath expects an absolute path starting with '/'. Received: ${assetPath}`);
  }

  if (!basePath || basePath === "/") {
    return assetPath;
  }

  return `${basePath.startsWith("/") ? basePath : `/${basePath}`}${assetPath}`;
};
