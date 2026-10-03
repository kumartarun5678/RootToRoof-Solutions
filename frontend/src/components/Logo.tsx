export default function Logo({ light = false }: { light?: boolean }) {
  // Brand colours (switch to light variants on dark backgrounds)
  const navy = light ? "#ffffff" : "#12284c";
  const roots = light ? "#d9c7b2" : "#5a4636";
  const green = light ? "#9ccc5a" : "#5a9a35";

  return (
    <span
      className="flex items-center gap-2.5 select-none"
      aria-label="RootToRoof Solutions"
    >
      {/* Vector icon: house + sprouting leaf + roots (crisp at any size) */}
      <svg
        viewBox="24 12 50 48"
        className="h-11 w-auto shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rtr-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8bc34a" />
            <stop offset="1" stopColor="#3f8a2e" />
          </linearGradient>
        </defs>

        {/* Roof + chimney */}
        <path
          d="M39 24 L50 14.5 L72.5 33.5"
          fill="none"
          stroke={navy}
          strokeWidth="2.8"
          strokeLinejoin="miter"
        />
        <path d="M61 18.5 H65 V26.5 H61 Z" fill={navy} />

        {/* Window */}
        <g fill={navy}>
          <rect x="47.3" y="27.8" width="3.7" height="3.4" />
          <rect x="51.9" y="27.8" width="3.7" height="3.4" />
          <rect x="47.3" y="32.2" width="3.7" height="3.4" />
          <rect x="51.9" y="32.2" width="3.7" height="3.4" />
        </g>

        {/* Leaves */}
        <path
          d="M37.5 33 C37 38 40 40 44 41.5"
          fill="none"
          stroke={green}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M27 20 C34 19.5 39.5 25 37.5 33 C30 33 26 27 27 20 Z"
          fill="url(#rtr-leaf)"
        />
        <path
          d="M45.8 25 C45 30 42 33.5 38.5 34 C38 30 41 26 45.8 25 Z"
          fill="url(#rtr-leaf)"
        />

        {/* Roots */}
        <g fill="none" stroke={roots} strokeWidth="0.9" strokeLinecap="round">
          <path d="M50 41 L50 58" />
          <path d="M50 41.5 C44 42 36 42 29.5 45" />
          <path d="M50 41.5 C56 42 64 42 70.5 45" />
          <path d="M50 42 C46 48 42 52 40 56" />
          <path d="M50 42 C54 48 58 52 60 56" />
          <path d="M44.5 42.3 L40.5 48.5" />
          <path d="M55.5 42.3 L59.5 48.5" />
          <path d="M37 43 L33.5 48.5" />
          <path d="M63 43 L66.5 48.5" />
          <path d="M47.5 47 L44 55" />
          <path d="M52.5 47 L56 55" />
        </g>
      </svg>

      {/* Wordmark: RootToRoof Solutions */}
      <span className="whitespace-nowrap text-xl font-extrabold leading-none tracking-tight">
        <span style={{ color: navy }}>Root</span>
        <span style={{ color: green }}>To</span>
        <span style={{ color: navy }}>Roof</span>
        <span
          className="ml-1.5 font-semibold"
          style={{ color: navy, opacity: 0.8 }}
        >
          Solutions
        </span>
      </span>
    </span>
  );
}