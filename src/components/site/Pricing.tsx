import { Check } from "lucide-react";
import { motion } from "motion/react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    desc: "For solo operators exploring automation.",
    features: ["1,000 AI messages / mo", "3 channels", "Basic dashboard", "Community support"],
  },
  {
    name: "Studio",
    price: "$79",
    desc: "For growing teams scaling engagement.",
    features: ["50,000 AI messages / mo", "All channels", "Advanced analytics", "Workflow studio", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For brands operating at planetary scale.",
    features: ["Unlimited messages", "Custom AI training", "SOC 2 + SSO", "Dedicated success team", "99.99% SLA"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Pricing</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
            Sculpted for <span className="text-gradient">every scale</span>.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                t.featured
                  ? "bg-foreground text-background shadow-float"
                  : "border border-border bg-surface hover:shadow-soft"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground text-xs font-medium px-3 py-1">
                  Most popular
                </div>
              )}
              <div className="text-sm font-medium opacity-80">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{t.price}</span>
                {t.price !== "Custom" && <span className="opacity-60">/mo</span>}
              </div>
              <p className={`mt-3 text-sm ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`size-4 mt-0.5 shrink-0 ${t.featured ? "text-primary-glow" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full py-3 text-sm font-medium transition ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {t.price === "Custom" ? "Talk to sales" : "Start free trial"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
