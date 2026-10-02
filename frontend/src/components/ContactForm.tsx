"use client";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { needOptions, site } from "@/lib/content";
import Button from "./Button";

type Errors = Record<string, string>;
const field = "w-full rounded-xl border bg-offwhite px-3.5 py-3 text-navy";

function validate(d: FormData): Errors {
  const e: Errors = {};
  const v = (k: string) => String(d.get(k) ?? "").trim();
  if (!v("name")) e.name = "Enter your name.";
  if (!v("email")) e.email = "Enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) e.email = "Enter a valid email, like name@company.com.";
  if (v("phone") && !/^[+\d][\d\s()-]{6,}$/.test(v("phone"))) e.phone = "Enter a valid phone number.";
  if (!v("service")) e.service = "Choose what you need.";
  if (v("details").length < 20) e.details = "Add a little more detail (at least 20 characters).";
  return e;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "fail">("idle");

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      (form.querySelector(`[name="${Object.keys(errs)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.status === 400) {
        const body = await res.json();
        setErrors(body.errors ?? {});
        setState("idle");
        return;
      }
      if (!res.ok) throw new Error();
      form.reset();
      setState("done");
    } catch {
      setState("fail");
    }
  }

  const f = (name: string, label: string, props: InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
      <input id={name} name={name} className={`${field} ${errors[name] ? "border-red-600" : "border-line"}`}
        aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} {...props} />
      {errors[name] && <p id={`${name}-err`} className="mt-1 text-sm text-red-700">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Project inquiry" className="grid gap-5 rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {f("name", "Name", { autoComplete: "name" })}
        {f("email", "Email", { type: "email", autoComplete: "email" })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {f("phone", "Phone", { type: "tel", autoComplete: "tel" })}
        {f("company", "Company", { autoComplete: "organization" })}
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy">What do you need?</label>
        <select id="service" name="service" defaultValue="" className={`${field} ${errors.service ? "border-red-600" : "border-line"}`} aria-invalid={!!errors.service}>
          <option value="" disabled>Select an option</option>
          {needOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-700">{errors.service}</p>}
      </div>
      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-navy">Project details</label>
        <textarea id="details" name="details" rows={5} className={`${field} ${errors.details ? "border-red-600" : "border-line"}`} aria-invalid={!!errors.details} />
        {errors.details && <p className="mt-1 text-sm text-red-700">{errors.details}</p>}
      </div>
      {f("budget", "Budget (optional)", { placeholder: "A range, or “not sure yet”" })}
      <Button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send Inquiry →"}</Button>
      <div role="status" aria-live="polite">
        {state === "done" && <p className="rounded-xl border border-brand bg-brand/10 p-4 text-navy">Thanks. We received your inquiry and will get back to you.</p>}
        {state === "fail" && <p className="rounded-xl border border-red-600 bg-red-50 p-4 text-red-800">We couldn&apos;t send your inquiry. Check your connection and try again{site.email ? `, or email ${site.email}` : ""}.</p>}
      </div>
    </form>
  );
}
