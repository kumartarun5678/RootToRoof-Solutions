import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Errors = Record<string, string>;
type Inquiry = {
  name: string; email: string; phone: string; company: string;
  service: string; details: string; budget: string;
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function validate(body: Record<string, unknown>): { data: Inquiry; errors: Errors } {
  const data: Inquiry = {
    name: str(body.name), email: str(body.email), phone: str(body.phone), company: str(body.company),
    service: str(body.service), details: str(body.details), budget: str(body.budget),
  };
  const e: Errors = {};
  if (!data.name) e.name = "Enter your name.";
  else if (data.name.length > 100) e.name = "Name is too long.";
  if (!data.email) e.email = "Enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 150)
    e.email = "Enter a valid email, like name@company.com.";
  if (data.phone && !/^[+\d][\d\s()-]{6,}$/.test(data.phone)) e.phone = "Enter a valid phone number.";
  if (data.company.length > 150) e.company = "Company name is too long.";
  if (!data.service) e.service = "Choose what you need.";
  else if (data.service.length > 100) e.service = "Choose what you need.";
  if (!data.details) e.details = "Add some project details.";
  else if (data.details.length < 20 || data.details.length > 4000)
    e.details = "Add a little more detail (at least 20 characters).";
  if (data.budget.length > 100) e.budget = "Budget is too long.";
  return { data, errors: e };
}

const nz = (s: string) => s || "-";

async function sendInquiry(r: Inquiry) {
  const body = [
    `Name: ${r.name}`, `Email: ${r.email}`, `Phone: ${nz(r.phone)}`, `Company: ${nz(r.company)}`,
    `Needs: ${r.service}`, `Budget: ${nz(r.budget)}`, "", r.details, "",
  ].join("\n");

  const to = process.env.INQUIRY_TO;
  const host = process.env.SMTP_HOST;
  if (!to || !host) {
    console.log("New inquiry (email not configured, logged only):\n" + body);
    return;
  }
  const transport = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS ?? "" } : undefined,
  });
  await transport.sendMail({
    from: process.env.INQUIRY_FROM ?? "no-reply@localhost",
    to,
    replyTo: r.email,
    subject: `New inquiry: ${r.service} from ${r.name}`.replace(/[\r\n]+/g, " "),
    text: body,
  });
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ errors: { details: "Invalid request." } }, { status: 400 });
  }
  if (!json || typeof json !== "object") {
    return NextResponse.json({ errors: { details: "Invalid request." } }, { status: 400 });
  }
  const { data, errors } = validate(json as Record<string, unknown>);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 400 });

  try {
    await sendInquiry(data);
  } catch (err) {
    console.error("Failed to send inquiry email", err);
    return NextResponse.json({ message: "Could not send inquiry" }, { status: 502 });
  }
  return NextResponse.json({ message: "Inquiry received" }, { status: 202 });
}
