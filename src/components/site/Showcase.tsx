import { motion } from "motion/react";
import {
  MessageSquare, Boxes, BarChart3, Users, ArrowRight,
  Zap, Sparkles, Clock, Send, UserCheck, Flame, AlertTriangle, UserPlus, ShoppingBag, PackageSearch,
} from "lucide-react";

/* ---------- Per-card preview visuals ---------- */

function ChatFlowPreview() {
  return (
    <div className="relative w-full h-full rounded-2xl border border-border bg-surface overflow-hidden p-4">
      {/* window header */}
      <div className="flex items-center gap-2 pb-3 border-b border-border">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-amber-400/70" />
        <span className="size-2 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] font-medium text-foreground/80">Chat Flow</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-600">
          <span className="size-1.5 rounded-full bg-emerald-500" /> Live
        </span>
      </div>

      <div className="flex gap-3 pt-4 h-[calc(100%-2.25rem)]">
        {/* channel rail */}
        <div className="flex flex-col items-center gap-2 pt-1">
          {[
            { c: "bg-emerald-500", l: "W" },
            { c: "bg-gradient-to-br from-pink-500 to-orange-400", l: "I" },
            { c: "bg-blue-500", l: "M" },
            { c: "bg-sky-400", l: "T" },
          ].map((x, i) => (
            <div key={i} className={`size-6 rounded-full ${x.c} grid place-items-center text-[9px] text-white font-bold shadow-sm`}>{x.l}</div>
          ))}
          <div className="size-6 rounded-full border border-dashed border-border grid place-items-center text-muted-foreground text-xs">+</div>
        </div>

        {/* nodes */}
        <div className="flex-1 flex flex-col items-stretch gap-2 relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="50%" y1="14%" x2="50%" y2="40%" className="dash-line" stroke="var(--primary)" strokeWidth="1" opacity="0.5"/>
            <line x1="50%" y1="48%" x2="50%" y2="72%" className="dash-line" stroke="var(--primary)" strokeWidth="1" opacity="0.5"/>
          </svg>
          <div className="rounded-lg border border-border bg-surface px-2.5 py-1.5 flex items-center gap-2 shadow-sm">
            <div className="size-5 rounded-md bg-primary/15 text-primary grid place-items-center"><Sparkles className="size-3" /></div>
            <div className="leading-tight">
              <div className="text-[10px] font-semibold">AI Agent</div>
              <div className="text-[9px] text-muted-foreground">Welcome Message</div>
            </div>
          </div>
          <div className="self-center rounded-full bg-muted text-[10px] px-3 py-1 border border-border">How can I help you today?</div>
          <div className="rounded-lg border border-border bg-surface px-2.5 py-1.5 flex items-center gap-2 shadow-sm">
            <div className="size-5 rounded-md bg-primary/15 text-primary grid place-items-center"><ShoppingBag className="size-3" /></div>
            <div className="text-[10px] font-medium">Recommend Products</div>
          </div>
          <div className="rounded-lg border border-border bg-surface px-2.5 py-1.5 flex items-center gap-2 shadow-sm">
            <div className="size-5 rounded-md bg-primary/15 text-primary grid place-items-center"><PackageSearch className="size-3" /></div>
            <div className="text-[10px] font-medium">Track My Order</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview() {
  return (
    <div className="relative w-full h-full rounded-2xl border border-border bg-surface overflow-hidden p-4">
      <div className="flex items-center gap-2 pb-3 border-b border-border">
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
      </div>
      <div className="flex gap-3 pt-4 h-[calc(100%-2.25rem)]">
        <div className="flex flex-col gap-2 pt-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="size-5 rounded-md bg-muted border border-border" />
          ))}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2 relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="40%" y1="18%" x2="40%" y2="50%" className="dash-line" stroke="var(--primary)" strokeWidth="1" opacity="0.6"/>
            <line x1="40%" y1="50%" x2="40%" y2="82%" className="dash-line" stroke="var(--primary)" strokeWidth="1" opacity="0.6"/>
            <line x1="40%" y1="50%" x2="80%" y2="30%" className="dash-line" stroke="var(--primary)" strokeWidth="1" opacity="0.6"/>
            <line x1="40%" y1="50%" x2="80%" y2="70%" className="dash-line" stroke="var(--primary)" strokeWidth="1" opacity="0.6"/>
          </svg>
          {[
            { I: Zap, t: "Trigger", s: "New Message", col: 1, row: 1 },
            { I: Send, t: "Action", s: "Send Message", col: 2, row: 1 },
            { I: Sparkles, t: "AI Decision", s: "Intent Recognition", col: 1, row: 2 },
            { I: UserCheck, t: "Condition", s: "User Engaged", col: 2, row: 2 },
            { I: Clock, t: "Delay", s: "Wait 2 mins", col: 1, row: 3 },
          ].map((n, i) => (
            <div
              key={i}
              style={{ gridColumn: n.col, gridRow: n.row }}
              className="relative z-10 rounded-lg border border-border bg-surface px-2 py-1.5 flex items-center gap-2 shadow-sm"
            >
              <div className="size-5 rounded-md bg-primary/15 text-primary grid place-items-center"><n.I className="size-3" /></div>
              <div className="leading-tight">
                <div className="text-[10px] font-semibold">{n.t}</div>
                <div className="text-[9px] text-muted-foreground">{n.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="relative w-full h-full rounded-2xl border border-border bg-surface overflow-hidden p-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Messages", v: "24.8K", d: "23%" },
          { l: "Engagement", v: "18.4%", d: "14%" },
          { l: "Conversions", v: "3.6K", d: "8%" },
        ].map((s, i) => (
          <div key={i} className="rounded-lg border border-border bg-background px-2 py-1.5">
            <div className="text-[9px] text-muted-foreground">{s.l}</div>
            <div className="text-sm font-semibold tracking-tight">{s.v}</div>
            <div className="text-[9px] text-emerald-600">▲ {s.d}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-lg border border-border bg-background p-2 h-[58%] relative">
        <div className="text-[9px] text-muted-foreground mb-1">Engagement Over Time</div>
        <svg viewBox="0 0 200 70" className="w-full h-[70%]">
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,55 C20,50 35,40 55,42 C75,44 90,30 115,22 C140,14 160,28 200,10 L200,70 L0,70 Z" fill="url(#lineGrad)"/>
          <path d="M0,55 C20,50 35,40 55,42 C75,44 90,30 115,22 C140,14 160,28 200,10" fill="none" stroke="var(--primary)" strokeWidth="1.5"/>
          <circle cx="115" cy="22" r="3" fill="var(--primary)"/>
        </svg>
        <div className="absolute right-3 top-5 rounded-md bg-surface border border-border px-1.5 py-0.5 text-[9px] shadow-sm">
          <div className="font-semibold">High</div>
          <div className="text-primary">8.6K</div>
        </div>
      </div>
    </div>
  );
}

function AudiencePreview() {
  return (
    <div className="relative w-full h-full rounded-2xl border border-border bg-surface overflow-hidden">
      {/* faux globe dots */}
      <div className="absolute inset-0 grid-bg opacity-30 radial-fade" />
      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 160">
        <ellipse cx="100" cy="80" rx="70" ry="70" fill="none" stroke="var(--primary)" strokeOpacity="0.2"/>
        <ellipse cx="100" cy="80" rx="70" ry="30" fill="none" stroke="var(--primary)" strokeOpacity="0.2"/>
        <ellipse cx="100" cy="80" rx="40" ry="70" fill="none" stroke="var(--primary)" strokeOpacity="0.2"/>
        {Array.from({ length: 30 }).map((_, i) => {
          const a = (i / 30) * Math.PI * 2;
          const r = 50 + (i % 4) * 6;
          return <circle key={i} cx={100 + Math.cos(a) * r} cy={80 + Math.sin(a) * r * 0.6} r="1" fill="var(--primary)" opacity="0.5"/>;
        })}
      </svg>
      {[
        { I: Flame, t: "High Intent", s: "2.4K Users", pos: "top-3 left-1/2 -translate-x-1/2", color: "text-orange-500 bg-orange-500/10" },
        { I: Users, t: "Loyal Customers", s: "5.7K Users", pos: "top-1/3 right-3", color: "text-violet-500 bg-violet-500/10" },
        { I: AlertTriangle, t: "At Risk", s: "1.2K Users", pos: "bottom-1/3 left-3", color: "text-amber-500 bg-amber-500/10" },
        { I: UserPlus, t: "New Leads", s: "3.8K Users", pos: "bottom-3 right-6", color: "text-blue-500 bg-blue-500/10" },
      ].map((n, i) => (
        <div key={i} className={`absolute ${n.pos} rounded-lg border border-border bg-surface/95 backdrop-blur px-2 py-1 flex items-center gap-1.5 shadow-sm`}>
          <div className={`size-5 rounded-md grid place-items-center ${n.color}`}><n.I className="size-3" /></div>
          <div className="leading-tight">
            <div className="text-[10px] font-semibold">{n.t}</div>
            <div className="text-[9px] text-muted-foreground">{n.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const exhibits = [
  { Icon: MessageSquare, title: "Conversational AI Builder", desc: "Drag, drop and deploy AI agents that mirror your brand's voice across every channel.", Preview: ChatFlowPreview },
  { Icon: Boxes, title: "Visual Automation Studio", desc: "Compose triggers, AI branches and conversions on an infinite canvas.", Preview: WorkflowPreview },
  { Icon: BarChart3, title: "Realtime Analytics OS", desc: "A cinematic command center that surfaces insights the moment they happen.", Preview: AnalyticsPreview },
  { Icon: Users, title: "Smart Audience Segments", desc: "Let AI cluster your audience by intent, sentiment and lifecycle stage.", Preview: AudiencePreview },
];

export function Showcase() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">✦ Product showcase</p>
          <h2 className="mt-4 text-4xl md:text-6xl tracking-[-0.02em] leading-[1.02]">
            A digital sculpture <br /> of <span className="pill-highlight">automation.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl font-sans">
            Each module of Nova is exhibited like a piece in a museum — purposeful, sculpted, and engineered to the millimeter.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {exhibits.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl glass p-6 overflow-hidden hover:shadow-float transition-all duration-500 min-h-[340px]"
            >
              <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-primary-glow/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-5 h-full">
                {/* Left: text */}
                <div className="flex flex-col">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="grid place-items-center size-11 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all"
                  >
                    <e.Icon className="size-5" />
                  </motion.div>
                  <h3 className="text-2xl tracking-tight leading-tight">{e.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground font-sans">{e.desc}</p>
                  <div className="mt-auto pt-6">
                    <motion.button
                      whileHover={{ x: 4, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      aria-label={`Learn more about ${e.title}`}
                      className="grid place-items-center size-10 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-colors"
                    >
                      <ArrowRight className="size-4" />
                    </motion.button>
                  </div>
                </div>
                {/* Right: preview */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -0.6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="relative h-56 md:h-auto md:min-h-[260px] [&>div]:transition-all [&>div]:duration-500 group-hover:[&>div]:shadow-float group-hover:[&>div]:border-primary/30"
                >
                  <e.Preview />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
