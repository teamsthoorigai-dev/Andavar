import type { MetadataRoute } from "next";
import { PAGE_PATHS, SITE_URL } from "@/lib/site";

// Required for `output: "export"` so the sitemap is written to out/sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_PATHS.map((path) => ({ url: `${SITE_URL}${path}` }));
}
