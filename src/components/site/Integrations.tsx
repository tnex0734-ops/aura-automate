import { motion } from "motion/react";
import { Instagram, Facebook, Send, MessageCircle, Slack, Twitter, Linkedin, ShoppingBag, Sparkles, Zap } from "lucide-react";

const platforms = [
  { Icon: MessageCircle, label: "WhatsApp", angle: 0 },
  { Icon: Instagram,     label: "Instagram", angle: 36 },
  { Icon: Facebook,      label: "Facebook", angle: 72 },
  { Icon: Send,          label: "Telegram", angle: 108 },
  { Icon: Slack,         label: "Slack", angle: 144 },
  { Icon: Twitter,       label: "X/Twitter", angle: 180 },
  { Icon: Linkedin,      label: "LinkedIn", angle: 216 },
  { Icon: ShoppingBag,   label: "Shopify", angle: 252 },
  { Icon: Zap,           label: "HubSpot", angle: 288 },
  { Icon: Sparkles,      label: "Discord", angle: 324 },
];

export function Integrations() {
  return (
    <section id="platform" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Omnichannel</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
            One brain. <br /> Every <span className="text-gradient">channel</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Nova plugs into the platforms your customers already live on — and keeps the
            conversation continuous across every one of them.
          </p>
        </div>

        <div className="relative mt-20 mx-auto max-w-2xl aspect-square">
          {/* concentric rings */}
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="absolute inset-0 rounded-full border border-primary/20"
              style={{ transform: `scale(${0.5 + n * 0.18})` }}
            />
          ))}

          {/* center hub */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary blur-3xl opacity-60 pulse-glow" />
              <div className="grid place-items-center size-28 rounded-3xl bg-gradient-to-br from-[oklch(0.78_0.2_50)] to-[oklch(0.65_0.25_28)] text-primary-foreground shadow-[0_40px_80px_-20px_var(--primary)]">
                <Sparkles className="size-12" />
              </div>
            </div>
          </motion.div>

          {/* nodes */}
          {platforms.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const r = 42; // %
            const x = 50 + Math.cos(rad) * r;
            const y = 50 + Math.sin(rad) * r;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="relative grid place-items-center size-14 rounded-2xl glass-strong shadow-soft hover:scale-110 transition-transform">
                  <p.Icon className="size-6 text-foreground" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                  {p.label}
                </div>
              </motion.div>
            );
          })}

          {/* connection lines */}
          <svg className="absolute inset-0 w-full h-full text-primary/40 pointer-events-none">
            {platforms.map((p, i) => {
              const rad = (p.angle * Math.PI) / 180;
              const r = 42;
              const x = 50 + Math.cos(rad) * r;
              const y = 50 + Math.sin(rad) * r;
              return (
                <line key={i} x1="50%" y1="50%" x2={`${x}%`} y2={`${y}%`} stroke="currentColor" className="dash-line" strokeWidth="1" />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
