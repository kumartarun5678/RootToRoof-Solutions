import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <section className="py-14 sm:py-20">
      <article className="mx-auto w-[min(760px,100%-40px)] space-y-4 leading-relaxed">
        <h1 className="text-4xl sm:text-5xl">Privacy Policy</h1>
        <p><em>Placeholder policy. Have it reviewed by a legal professional before launch.</em></p>
        <h2 className="pt-4 text-xl">Information we collect</h2>
        <p>We collect the details you submit through the contact form, such as name, email, phone, company and project details.</p>
        <h2 className="pt-4 text-xl">How we use it</h2>
        <p>We use this information to respond to your inquiry and discuss your project. We do not sell your personal information.</p>
        <h2 className="pt-4 text-xl">Your choices</h2>
        <p>You can ask us to access, correct or delete the information you shared by contacting us at [Company email].</p>
      </article>
    </section>
  );
}
