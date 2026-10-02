import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import Journey from "@/components/Journey";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: "Solutions", description: "From simple websites to complete CRM and automation platforms, we move from idea to implementation." };

export default function Solutions() {
  return (
    <>
      <PageIntro title="From Simple Ideas to Complete Digital Systems" text="Projects come in different sizes. We can work on a simple business website or a complete CRM and automation platform." />
      <Section className="!pt-4">
        <Journey />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <ServiceCard icon="web" title="Start small" text="A focused website or a single workflow tool that solves one problem well." />
          <ServiceCard icon="auto" title="Connect systems" text="Link your existing tools through APIs so data flows without manual work." delay={70} />
          <ServiceCard icon="crm" title="Build the platform" text="CRM, web app, mobile app and automation working together as one system." delay={140} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
