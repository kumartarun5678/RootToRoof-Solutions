const paths: Record<string, string> = {
  web: "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 9h18M8 21h8",
  app: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6",
  mobile: "M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2",
  crm: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-4 3-6 6-6s6 2 6 6M16 11a3 3 0 1 0 0-6M18 14c2 .6 3 2.4 3 5",
  software: "M4 20V8l8-5 8 5v12zM9 20v-6h6v6",
  auto: "M4 12a8 8 0 0 1 14-5l2-2v6h-6l2.4-2.4A5 5 0 0 0 7 12M20 12a8 8 0 0 1-14 5l-2 2v-6h6l-2.4 2.4A5 5 0 0 0 17 12",
  consult: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 8v5M12 16h.01",
  custom: "M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z",
  design: "M12 3v18M12 8l-5-3M12 13l5-3",
  growth: "M3 17l6-6 4 4 8-8M15 7h6v6",
  check: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12l3 3 5-6",
  heart: "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z",
};

export default function Icon({ name }: { name: string }) {
  return (
    <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={paths[name] ?? paths.custom} />
      </svg>
    </div>
  );
}
