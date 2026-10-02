import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3.5 font-bold transition duration-200 hover:-translate-y-0.5 w-full sm:w-auto disabled:opacity-60 disabled:hover:translate-y-0";
const variants = {
  primary: "border-transparent bg-brand text-white shadow-lg shadow-brand/30 hover:bg-[#26774a]",
  secondary: "border-line bg-transparent text-navy hover:border-brand",
  onDark: "border-white/25 text-white hover:border-fresh",
};

export default function Button({ children, href, variant = "primary", className = "", ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  return href ? (
    <Link href={href} className={cls}>{children}</Link>
  ) : (
    <button className={cls} {...rest}>{children}</button>
  );
}
