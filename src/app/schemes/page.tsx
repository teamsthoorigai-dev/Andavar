import type { Metadata } from "next";
import SchemesHero from "@/components/schemes/SchemesHero";
import SchemeCards from "@/components/schemes/SchemeCards";
import EmpaneledList from "@/components/schemes/EmpaneledList";
import NoSchemeSection from "@/components/schemes/NoSchemeSection";
import CounterQuestions from "@/components/schemes/CounterQuestions";

export const metadata: Metadata = {
  title: "Schemes & Insurance | Shri Andavar Eye Care and Retina Centre",
  description: "Information about CMCHIS, Pensioners Health Scheme, and other private insurances accepted at Shri Andavar Eye Care.",
};

export default function SchemesPage() {
  return (
    <>
      <SchemesHero />
      <SchemeCards />
      <EmpaneledList />
      <NoSchemeSection />
    </>
  );
}
