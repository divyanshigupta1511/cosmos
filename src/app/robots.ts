import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://cosmosbrandflow.in/sitemap.xml",

    host: "https://cosmosbrandflow.in",
  };
}