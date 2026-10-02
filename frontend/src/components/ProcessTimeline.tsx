import { steps } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProcessTimeline() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title}>
          <Reveal delay={i * 80} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-white p-6">
              <span className="mb-2 block text-3xl font-extrabold text-brand">0{i + 1}</span>
              <h3 className="mb-2 text-lg">{s.title}</h3>
              <p className="text-[.93rem] leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
