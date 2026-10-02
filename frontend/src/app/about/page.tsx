import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { values } from "@/lib/content";

export const metadata: Metadata = { title: "About Us", description: "RootToRoof builds technology from the roots up: strong foundations, the right structure, solutions ready for growth." };

export default function About() {
  return (
    <>
      <PageIntro title="Building Technology From the Roots Up." text="Roots represent strong foundations. Roof represents the finished structure. Together, RootToRoof represents our approach to technology — understand the foundation, build the right structure, and create solutions that are ready for growth." />
      <Section className="!pt-4">
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard icon="custom" title="Mission" text="To help businesses, entrepreneurs, and individuals turn ideas into practical digital solutions." />
          <ServiceCard icon="growth" title="Vision" text="Technology that is built on strong foundations and supports long-term growth." delay={70} />
          <ServiceCard icon="check" title="Approach" text="Understand the requirement, design around it, build with care, and keep improving." delay={140} />
        </div>
        <h2 className="mb-5 mt-16 text-2xl sm:text-3xl">Our values</h2>
        <ul className="flex flex-wrap gap-2.5">
          {values.map((v) => <li key={v} className="rounded-full border border-line bg-white px-5 py-2.5 font-semibold text-navy">{v}</li>)}
        </ul>
      </Section>
      <CTASection />
    </>
  );
}
