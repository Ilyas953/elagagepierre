import type { MetadataRoute } from "next";
import { data } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: data.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
