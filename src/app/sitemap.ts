import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/menu",
  "/menu/voorgerechten",
  "/menu/sushi",
  "/menu/dranken",
  "/menu/desserten",
  "/onze-bowls",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
