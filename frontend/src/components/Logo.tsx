export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 font-extrabold tracking-tight">
      <img
        src="/logo/logo.jpeg"
        alt="RootToRoof Solutions"
        width={410}
        height={40}
        className="h-10 w-10 rounded-lg object-contain"
      />

      <span className={light ? "text-white" : "text-navy"}>
        RootToRoof Solutions
      </span>
    </span>
  );
}