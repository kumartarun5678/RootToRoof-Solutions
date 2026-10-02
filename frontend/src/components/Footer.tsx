import Link from "next/link";
import { nav, site } from "@/lib/content";
import Logo from "./Logo";

const serviceLinks = ["Website Development", "Web Applications", "Mobile Apps", "CRM", "Automation", "Consulting"];

export default function Footer() {
  const missing = (v: string, label: string) => v || `[${label}]`;
  return (
    <footer className="bg-deep pb-7 pt-16 text-[.95rem] text-slate-400">
      <div className="mx-auto w-[min(1160px,100%-40px)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 font-bold text-fresh">{site.tagline}</p>
            <p className="mt-2 max-w-xs">Technology consulting and digital solutions designed around your business.</p>
            {site.socials.length > 0 && (
              <ul className="mt-4 flex gap-4">
                {site.socials.map((s) => (
                  <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-fresh">{s.name}</a></li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="mb-3 text-base text-white">Company</h3>
            <ul className="space-y-2">
              {nav.filter((n) => n.href !== "/").map((n) => (
                <li key={n.href}><Link href={n.href} className="hover:text-fresh">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-base text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (<li key={s}><Link href="/services" className="hover:text-fresh">{s}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-base text-white">Contact</h3>
            <ul className="space-y-2">
              <li>Email: {missing(site.email, "Company email")}</li>
              <li>Phone: {missing(site.phone, "Company phone")}</li>
              <li>Location: {missing(site.location, "Location")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6">
          <span>© 2026 RootToRoof Solutions. All rights reserved.</span>
          <span><Link href="/privacy" className="hover:text-fresh">Privacy Policy</Link> | <Link href="/terms" className="hover:text-fresh">Terms &amp; Conditions</Link></span>
        </div>
      </div>
    </footer>
  );
}
