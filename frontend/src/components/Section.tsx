export default function Section({ children, alt = false, className = "" }: { children: React.ReactNode; alt?: boolean; className?: string }) {
  return (
    <section className={`py-16 sm:py-24 ${alt ? "border-y border-line bg-white" : ""} ${className}`}>
      <div className="mx-auto w-[min(1160px,100%-40px)]">{children}</div>
    </section>
  );
}
