import { motion } from "motion/react";
import { Bot, Workflow, BarChart3, Target } from "lucide-react";

const exhibits = [
  {
    Icon: Bot,
    title: "Conversational AI Builder",
    desc: "Drag, drop and deploy AI agents that mirror your brand's voice across every channel.",
  },
  {
    Icon: Workflow,
    title: "Visual Automation Studio",
    desc: "Compose triggers, AI branches and conversions on an infinite canvas.",
  },
  {
    Icon: BarChart3,
    title: "Realtime Analytics OS",
    desc: "A cinematic command center that surfaces insights the moment they happen.",
  },
  {
    Icon: Target,
    title: "Smart Audience Segments",
    desc: "Let AI cluster your audience by intent, sentiment and lifecycle stage.",
  },
];

export function Showcase() {
  return (
    <section id="features" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Product showcase</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
            A digital sculpture <br /> of <span className="text-gradient">automation</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            Each module of Nova is exhibited like a piece in a museum — purposeful,
            sculpted, and engineered to the millimeter.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {exhibits.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-3xl border border-border bg-surface p-8 overflow-hidden hover:shadow-float transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="grid place-items-center size-12 rounded-2xl bg-primary/10 text-primary mb-6">
                  <e.Icon className="size-6" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-3 text-muted-foreground">{e.desc}</p>

                <div className="mt-8 h-40 rounded-2xl border border-border bg-gradient-to-br from-muted to-surface relative overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <e.Icon className="size-16 text-primary/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
