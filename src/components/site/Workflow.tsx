import { motion } from "motion/react";
import { Zap, Brain, MessageCircle, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  { Icon: Zap, title: "Trigger", desc: "Customer sends a DM, comment or event fires." },
  { Icon: Brain, title: "AI Reasoning", desc: "Nova classifies intent, sentiment, urgency in <400ms." },
  { Icon: MessageCircle, title: "Engage", desc: "Personalized reply across the right channel." },
  { Icon: TrendingUp, title: "Convert", desc: "Hand-off to checkout, booking, or human agent." },
  { Icon: BarChart3, title: "Learn", desc: "Every interaction trains the next response." },
];

export function WorkflowSection() {
  return (
    <section className="py-24 md:py-32 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Automation flow</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
            From signal to <span className="text-gradient">sale</span>.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative grid place-items-center size-24 mx-auto rounded-3xl glass-strong shadow-float">
                  <s.Icon className="size-9 text-primary" />
                  <div className="absolute -top-2 -right-2 grid place-items-center size-7 rounded-full bg-foreground text-background text-xs font-semibold">
                    {i + 1}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
