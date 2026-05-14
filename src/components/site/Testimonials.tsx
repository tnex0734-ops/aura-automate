import { motion } from "motion/react";

const items = [
  {
    quote: "Nova replaced four tools and a part-time team. Our reply time fell from hours to seconds.",
    name: "Amelia Chen",
    role: "Head of Growth, Lumen",
  },
  {
    quote: "It feels like hiring a senior strategist that ships every conversation perfectly on-brand.",
    name: "Marcus Reid",
    role: "Founder, North Studio",
  },
  {
    quote: "The dashboard alone is worth it — the automation is the cherry on a very expensive cake.",
    name: "Priya Natarajan",
    role: "VP Marketing, Orbital",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Loved by operators</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
            Words from <br /> the <span className="text-gradient">command center</span>.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-surface p-8 hover:shadow-float transition"
            >
              <div className="text-5xl text-primary leading-none">"</div>
              <blockquote className="mt-2 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
