import Button from "@/components/Button";
import HeroVisual from "@/components/HeroVisual";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import Journey from "@/components/Journey";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { features, services, why, tech } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="bg-[radial-gradient(900px_420px_at_85%_0,rgba(46,139,87,.12),transparent_70%)] py-14 sm:py-24">
        <div className="mx-auto grid w-[min(1160px,100%-40px)] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h1 className="text-5xl leading-[1.05] sm:text-7xl">Turning Ideas Into Digital Solutions.</h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed">
              From websites and mobile apps to custom CRM systems and business automation, we build technology solutions designed around your needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Start Your Project →</Button>
              <Button href="/services" variant="secondary">Explore Services</Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Section alt>
        <SectionHeader title="Technology Built Around Your Business" text="Every business has different requirements. Instead of forcing your business into a fixed solution, we understand your goals, processes, and challenges and build technology around them." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => <ServiceCard key={f.title} {...f} delay={i * 70} />)}
        </div>
      </Section>

      <Section>
        <SectionHeader title="What We Build" text="Practical technology solutions for modern businesses." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} learnMore delay={(i % 4) * 70} />)}
        </div>
      </Section>

      <Section alt>
        <SectionHeader title="From Simple Ideas to Complete Digital Systems" text="Whether you need a simple business website or a complete CRM and automation platform, we can help you move from idea to implementation." />
        <Journey />
      </Section>

      <Section>
        <SectionHeader title="Why Work With Us?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => <ServiceCard key={w.title} {...w} delay={i * 70} />)}
        </div>
      </Section>

      <Section alt>
        <SectionHeader title="How We Work" />
        <ProcessTimeline />
      </Section>

      <Section>
        <SectionHeader title="Technology That Fits the Solution" text="We choose tools after we understand the problem. These are technologies we can work with, not a fixed stack." />
        <Reveal>
          <ul className="flex flex-wrap gap-2.5">
            {tech.map((t) => <li key={t} className="rounded-full border border-line bg-white px-4 py-2.5 font-semibold text-navy">{t}</li>)}
          </ul>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
