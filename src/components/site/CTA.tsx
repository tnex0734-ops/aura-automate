import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          The future of <br /> engagement is <span className="pill-highlight">autonomous</span>.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Join the brands operating their entire social presence from one cinematic command center.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium shadow-[0_20px_50px_-15px_var(--primary)] hover:translate-y-[-1px] transition"
          >
            Start for free
            <ArrowRight className="size-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-4 text-base font-medium hover:bg-muted transition">
            Book a demo
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">No credit card · 14-day trial · Cancel anytime</p>
      </div>
    </section>
  );
}
