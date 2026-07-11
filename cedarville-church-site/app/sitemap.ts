import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.cedarvillenaz.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/beliefs",
    "/ministries",
    "/calendar",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
