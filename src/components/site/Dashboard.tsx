import { motion } from "motion/react";
import { TrendingUp, Users, MessageSquare, Activity } from "lucide-react";

export function DashboardSection() {
  const bars = [40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 60, 78];
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg radial-fade opacity-50" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">AI Dashboard</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
            Your operating system <br /> for <span className="text-gradient">attention</span>.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-strong rounded-3xl p-6 shadow-float"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-primary/60" />
                <span className="size-2.5 rounded-full bg-success/60" />
              </div>
              <span className="text-sm text-muted-foreground">nova.ai / command-center</span>
            </div>
            <span className="text-xs text-muted-foreground">Live · updated 2s ago</span>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            {[
              { Icon: MessageSquare, label: "Conversations", v: "248,392", d: "+12.4%" },
              { Icon: Users, label: "Active Audience", v: "84,210", d: "+5.1%" },
              { Icon: TrendingUp, label: "Conversion", v: "31.7%", d: "+2.8%" },
              { Icon: Activity, label: "AI Accuracy", v: "98.7%", d: "+0.3%" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center size-9 rounded-xl bg-primary/10 text-primary">
                    <s.Icon className="size-4" />
                  </div>
                  <span className="text-xs text-success font-medium">{s.d}</span>
                </div>
                <div className="mt-4 text-2xl font-bold tracking-tight">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold">Engagement Performance</div>
                  <div className="text-xs text-muted-foreground">Last 12 months</div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground">Replies</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Conversions</span>
                </div>
              </div>
              <div className="flex items-end gap-2 h-44">
                {bars.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${b}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.05 }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary-glow"
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-sm font-semibold mb-1">AI Insight</div>
              <div className="text-xs text-muted-foreground mb-4">Generated 2 minutes ago</div>
              <p className="text-sm leading-relaxed">
                Instagram DMs are your highest-converting channel this week.
                Shifting <span className="text-primary font-medium">12% of campaign budget</span> there
                could lift revenue by an estimated <span className="text-primary font-medium">$48K</span>.
              </p>
              <button className="mt-5 w-full rounded-xl bg-foreground text-background py-2.5 text-sm font-medium hover:opacity-90 transition">
                Apply suggestion
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
