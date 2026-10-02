import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Tell us what you want to build, improve or automate. We'll help you find the right solution." };

export default function Contact() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid w-[min(1160px,100%-40px)] items-start gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl leading-[1.1] sm:text-6xl">Let&apos;s Talk About Your Project</h1>
          <p className="mt-4 text-lg">Tell us what you need. We&apos;ll reply to explore the right solution with you.</p>
          <div className="my-7 rounded-2xl border border-line bg-white p-6">
            <h2 className="mb-1 text-lg">Prefer email?</h2>
            {site.email ? <a className="font-semibold text-brand hover:underline" href={`mailto:${site.email}`}>{site.email}</a> : <p>[Company email]</p>}
          </div>
          <h2 className="mb-4 mt-10 text-2xl">Common questions</h2>
          <FAQ />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
