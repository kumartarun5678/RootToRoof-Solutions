import Button from "./Button";

export default function CTASection() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto w-[min(1160px,100%-40px)]">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-deep p-8 sm:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(76,175,112,.35),transparent_70%)]" />
          <div className="relative">
            <h2 className="max-w-xl text-3xl text-white sm:text-5xl">Have an Idea? Let&apos;s Build It.</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              Tell us what you&apos;re trying to build, improve, or automate. We&apos;ll help you explore the right technology solution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Start a Conversation →</Button>
              <Button href="/services" variant="onDark">View Our Services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
