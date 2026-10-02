import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Services", description: "Websites, web applications, mobile apps, custom CRM, business software, automation and technology consulting." };

export default function Services() {
  return (
    <>
      <PageIntro title="Services" text="Practical technology solutions for modern businesses. We understand your requirement first, then build the right solution." />
      <Section className="!pt-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} learnMore delay={(i % 3) * 70} />)}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
