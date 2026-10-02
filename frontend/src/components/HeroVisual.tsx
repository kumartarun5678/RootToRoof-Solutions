const nodes = [
  { x: 40, y: 58, label: "Website" }, { x: 320, y: 58, label: "Mobile App" },
  { x: 20, y: 270, label: "CRM" }, { x: 340, y: 270, label: "Automation" }, { x: 180, y: 350, label: "Cloud" },
];

export default function HeroVisual() {
  return (
    <svg className="hero-float h-auto w-full" viewBox="0 0 480 440" role="img" aria-label="Diagram: an idea flows through a core platform to website, mobile app, CRM, automation and cloud">
      <g stroke="#2E8B57" strokeWidth="2" strokeDasharray="5 6" fill="none" opacity=".7">
        <path d="M240 220 100 90M240 220 380 90M240 220 80 300M240 220 400 300M240 220 240 380" />
      </g>
      <circle cx="240" cy="220" r="62" fill="#0B1F33" />
      <circle cx="240" cy="220" r="62" fill="none" stroke="#4CAF70" strokeWidth="2" opacity=".5" />
      <path d="M240 190l-26 24h8v20h36v-20h8z" fill="#2E8B57" />
      <path d="M240 234v14M240 242l-9 7M240 242l9 7" stroke="#4CAF70" strokeWidth="3" strokeLinecap="round" fill="none" />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width="120" height="62" rx="16" fill="#fff" stroke="#E5EAE7" />
          <circle cx={n.x + 28} cy={n.y + 31} r="9" fill="#2E8B57" opacity=".15" />
          <circle cx={n.x + 28} cy={n.y + 31} r="4" fill="#2E8B57" />
          <text x={n.x + 46} y={n.y + 36} fill="#0B1F33" fontSize="13" fontWeight="700">{n.label}</text>
        </g>
      ))}
      <text x="240" y="30" textAnchor="middle" fill="#52606D" fontSize="13" fontWeight="600">Idea → Technology → Digital product</text>
    </svg>
  );
}
