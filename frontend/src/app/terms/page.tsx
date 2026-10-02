import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <section className="py-14 sm:py-20">
      <article className="mx-auto w-[min(760px,100%-40px)] space-y-4 leading-relaxed">
        <h1 className="text-4xl sm:text-5xl">Terms &amp; Conditions</h1>
        <p><em>Placeholder terms. Have them reviewed by a legal professional before launch.</em></p>
        <h2 className="pt-4 text-xl">Services</h2>
        <p>Project scope, timelines and pricing are agreed in writing before work begins.</p>
        <h2 className="pt-4 text-xl">Website use</h2>
        <p>Content on this website is provided for general information and may change without notice.</p>
        <h2 className="pt-4 text-xl">Contact</h2>
        <p>Questions about these terms can be sent to [Company email].</p>
      </article>
    </section>
  );
}
