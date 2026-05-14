const brands = ["Notion", "Linear", "Vercel", "Loom", "Figma", "Framer", "Stripe", "Slack", "Shopify", "HubSpot"];

export function Logos() {
  return (
    <section className="py-16 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Powering 12,000+ teams across the globe
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 marquee w-max">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="text-2xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition">
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "2.4B", v: "Messages automated" },
            { k: "98.7%", v: "Reply accuracy" },
            { k: "<400ms", v: "Avg response time" },
            { k: "47", v: "Native integrations" },
          ].map((m) => (
            <div key={m.k} className="text-center">
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">{m.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
