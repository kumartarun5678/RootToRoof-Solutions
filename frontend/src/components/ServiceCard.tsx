import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";

type Props = { icon: string; title: string; text: string; learnMore?: boolean; delay?: number };

export default function ServiceCard({ icon, title, text, learnMore, delay }: Props) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card">
        <Icon name={icon} />
        <h3 className="mb-2 text-lg">{title}</h3>
        <p className="text-[.97rem] leading-relaxed">{text}</p>
        {learnMore && (
          <Link href="/contact" className="mt-4 inline-block font-bold text-brand hover:underline">
            Learn More <span aria-hidden>→</span><span className="sr-only"> about {title}</span>
          </Link>
        )}
      </article>
    </Reveal>
  );
}
