import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://dccidadu.org.pk";
  const paths=["/","/about","/leadership","/committee","/membership","/news","/events","/resources","/contact"];
  return paths.map(path=>({ url: base+path, lastModified: new Date(), changeFrequency: path==="/" ? "weekly" : "monthly", priority: path==="/" ? 1 : .7 }));
}