import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: "Process", description: "Discover, plan, design, build, launch and support: how RootToRoof delivers digital solutions." };

export default function Process() {
  return (
    <>
      <PageIntro title="How We Work" text="A clear five-step process, from first conversation to ongoing support." />
      <Section className="!pt-4"><ProcessTimeline /></Section>
      <CTASection />
    </>
  );
}
