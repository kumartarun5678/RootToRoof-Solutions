import SectionHeader from "./SectionHeader";

export default function PageIntro({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto w-[min(1160px,100%-40px)] pb-6 pt-14 sm:pt-20">
      <SectionHeader as="h1" title={title} text={text} />
    </div>
  );
}
