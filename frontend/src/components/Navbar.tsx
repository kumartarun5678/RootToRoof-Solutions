"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/content";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-offwhite/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-[min(1160px,100%-40px)] items-center justify-between">
        <Link href="/" aria-label="RootToRoof Solutions home" onClick={() => setOpen(false)}><Logo /></Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={path === n.href ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[.95rem] font-semibold transition hover:bg-brand/10 hover:text-brand ${path === n.href ? "bg-brand/10 text-brand" : "text-navy"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block"><Button href="/contact" className="!px-5 !py-2.5">Let&apos;s Talk →</Button></div>
        <button className="grid h-11 w-11 place-items-center rounded-xl border border-line text-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-offwhite px-5 pb-6 pt-3 md:hidden">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3.5 text-lg font-semibold text-navy hover:bg-brand/10">{n.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-3"><Button href="/contact">Let&apos;s Talk →</Button></div>
        </nav>
      )}
    </header>
  );
}
