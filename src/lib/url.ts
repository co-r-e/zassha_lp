import { withBasePath } from "@/lib/basePath";

const fallbackSiteUrl = "https://co-r-e.net";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteUrl = rawSiteUrl && rawSiteUrl.length > 0 ? rawSiteUrl : fallbackSiteUrl;

export const withSiteUrl = (path: string) => {
  const resolvedPath = withBasePath(path);
  return `${siteUrl}${resolvedPath}`;
};

export const metadataBase = new URL(siteUrl);
