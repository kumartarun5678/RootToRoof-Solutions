import { journey } from "@/lib/content";
import Reveal from "./Reveal";

export default function Journey({ withText = true }: { withText?: boolean }) {
  return (
    <Reveal>
      <ol className="grid gap-0 md:grid-cols-6">
        {journey.map(([t, d]) => (
          <li key={t} className="relative pb-7 pl-10 md:pb-0 md:pl-0 md:pr-3 md:pt-9">
            <span className="absolute left-0 top-0.5 h-[18px] w-[18px] rounded-full bg-brand ring-[5px] ring-brand/20" aria-hidden />
            <span className="absolute bottom-0 left-2 top-5 w-0.5 bg-line md:bottom-auto md:left-0 md:right-0 md:top-2 md:h-0.5 md:w-auto" aria-hidden />
            <b className="block text-navy">{t}</b>
            {withText && <span className="text-sm">{d}</span>}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
