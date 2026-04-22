import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/playbook", "/proposal", "/invoicing"],
    },
    sitemap: "https://adrconsultancy.ca/sitemap.xml",
  };
}
