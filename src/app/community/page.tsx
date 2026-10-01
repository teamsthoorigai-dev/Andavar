import type { Metadata } from "next";
import CommunityHero from "@/components/community/CommunityHero";
import CommunityCamps from "@/components/community/CommunityCamps";

export const metadata: Metadata = {
  title: "Community & CSR | Shri Andavar Eye Care and Retina Centre",
  description: "Learn about our community outreach, free eye camps, and social impact initiatives across Tamil Nadu.",
  alternates: { canonical: "/community/" },
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <CommunityCamps />
    </>
  );
}
