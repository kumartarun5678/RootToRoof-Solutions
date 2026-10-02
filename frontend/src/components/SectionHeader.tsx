import Reveal from "./Reveal";

export default function SectionHeader({ title, text, as: Tag = "h2" }: { title: string; text?: string; as?: "h1" | "h2" }) {
  return (
    <Reveal className="mb-11 max-w-2xl">
      <Tag className={Tag === "h1" ? "text-4xl sm:text-6xl leading-[1.08]" : "text-3xl sm:text-5xl leading-[1.12]"}>{title}</Tag>
      {text && <p className="mt-4 text-lg leading-relaxed">{text}</p>}
    </Reveal>
  );
}
