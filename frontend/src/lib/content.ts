export const site = {
  name: "RootToRoof Solutions",
  tagline: "Strong Foundations. Brighter Tomorrows.",
  description:
    "RootToRoof Solutions provides technology consulting and custom digital solutions including websites, web applications, mobile apps, CRM systems, business software, and automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "",
  socials: [
    { name: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "" },
    { name: "GitHub", url: process.env.NEXT_PUBLIC_GITHUB_URL ?? "" },
    { name: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "" },
  ].filter((s) => s.url),
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  { icon: "web", title: "Website Development", text: "Modern, responsive websites designed to represent your business and convert visitors into customers." },
  { icon: "app", title: "Web Applications", text: "Custom web applications built around your business workflows." },
  { icon: "mobile", title: "Mobile Apps", text: "User-friendly mobile applications for Android and iOS." },
  { icon: "crm", title: "Custom CRM", text: "CRM systems designed to manage customers, leads, sales, and business operations." },
  { icon: "software", title: "Business Software", text: "Custom software designed to solve specific business problems." },
  { icon: "auto", title: "Automation", text: "Automate repetitive tasks and improve business efficiency." },
  { icon: "consult", title: "Technology Consulting", text: "Get guidance on choosing the right technology and building the right solution." },
  { icon: "custom", title: "Custom Solutions", text: "Have a unique requirement? We can design and build a solution around it." },
];

export const features = [
  { icon: "consult", title: "Understand", text: "We start by understanding your business and requirements." },
  { icon: "design", title: "Design", text: "We design a practical solution around your needs." },
  { icon: "app", title: "Build", text: "We develop reliable and scalable technology." },
  { icon: "growth", title: "Grow", text: "We continue to improve and support your digital solution." },
];

export const why = [
  { icon: "check", title: "Requirement First", text: "We focus on understanding the actual problem before choosing the technology." },
  { icon: "software", title: "Custom Built", text: "Solutions are designed around your business instead of forcing your workflow into a generic product." },
  { icon: "growth", title: "Scalable", text: "Built with future growth in mind." },
  { icon: "heart", title: "Long-Term Support", text: "We can continue to improve, maintain, and support your digital systems." },
];

export const journey = [
  ["Idea", "A need worth solving"], ["Planning", "Scope and approach"], ["Design", "Clear, usable flows"],
  ["Development", "Built and tested"], ["Launch", "Live and supported"], ["Growth", "Improved over time"],
];

export const steps = [
  { title: "Discover", text: "Understand your business, goals, requirements, and challenges." },
  { title: "Plan", text: "Define the solution, features, technology, and project scope." },
  { title: "Design", text: "Create a clean and user-friendly experience." },
  { title: "Build", text: "Develop, test, and refine the solution." },
  { title: "Launch & Support", text: "Deploy the solution and provide ongoing support and improvements." },
];

export const tech = ["React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Cloud platforms"];

export const values = ["Clarity", "Reliability", "Innovation", "Partnership", "Continuous Improvement"];

export const faqs = [
  { q: "What type of projects do you work on?", a: "Websites, web and mobile apps, CRM systems, business software, automation and integrations, from small to large." },
  { q: "Can you build a custom CRM?", a: "Yes. We design CRM systems around how you manage customers, leads and sales." },
  { q: "Can you build both websites and mobile apps?", a: "Yes. We can build either or both, sharing one backend where it makes sense." },
  { q: "Do you provide ongoing support?", a: "Yes. We can maintain, improve and support your systems after launch." },
  { q: "Can you work with an existing system?", a: "Yes. We can review it and extend or integrate it through APIs." },
];

export const needOptions = ["Website", "Web application", "Mobile app", "Custom CRM", "Business software", "Automation", "Consulting", "Something else"];
