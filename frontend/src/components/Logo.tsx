export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 font-extrabold tracking-tight">
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#0B1F33" stroke={light ? "#ffffff30" : "none"} />
        <path d="M16 6 6 15h3v4h14v-4h3z" fill="#2E8B57" />
        <path d="M16 19v8M16 23l-4 3M16 23l4 3" stroke="#4CAF70" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <span className={light ? "text-white" : "text-navy"}>RootToRoof Solutions</span>
    </span>
  );
}
