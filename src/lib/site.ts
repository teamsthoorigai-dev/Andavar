// Preferred public origin. Canonicals, the sitemap and robots.txt are built from this,
// and public/.htaccess 301-redirects www / http / index.html requests to it.
export const SITE_URL = "https://shriandavareyecare.in";

export const HOSPITAL_NAME = "Shri Andavar Eye Care and Retina Centre";

export const HOSPITAL_PHONE = "+91-4259-221000";

export const HOSPITAL_MAP_URL =
  "https://maps.google.com/?q=Shri+Andavar+Eye+Care+and+Retina+Centre+Palladam+Road+Pollachi";

// Every indexable page, with the trailing slash the static export serves (trailingSlash: true).
export const PAGE_PATHS = [
  "/",
  "/about/",
  "/treatments/",
  "/cataract-surgery/",
  "/retina-care/",
  "/diabetic-eye-care/",
  "/glaucoma/",
  "/our-surgeons/",
  "/schemes/",
  "/gallery/",
  "/community/",
  "/patient-stories/",
] as const;
