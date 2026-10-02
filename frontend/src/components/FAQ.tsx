import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-xl border border-line bg-white px-5 py-4">
          <summary className="cursor-pointer font-bold text-navy">{f.q}</summary>
          <p className="mt-3 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
