import { withBasePath } from "@/lib/basePath";

const fallbackSiteOrigin = "https://co-r-e.net";
const rawSiteOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteUrl = rawSiteOrigin && rawSiteOrigin.length > 0 ? rawSiteOrigin : fallbackSiteOrigin;

const basePathRoot = withBasePath("/");

export const withSiteUrl = (path: string) => {
  const resolvedPath = withBasePath(path);
  return `${siteUrl}${resolvedPath}`;
};

export const canonicalSiteUrl = withSiteUrl("/").replace(/\/$/, "");

export const metadataBase = new URL(`${siteUrl}${basePathRoot}`);
