import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MessageSquare, Sparkles, Instagram, Facebook, Send, MessageCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Scroll-synced cinematic timeline pinned to the hero
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=180%",
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
        defaults: { ease: "power2.out" },
      });

      // Act 1 — copy recedes, atmosphere deepens
      tl.to(
        ".hero-copy",
        { y: -60, opacity: 0.0, filter: "blur(8px)", duration: 1 },
        0
      )
        .to(
          ".hero-bg-grid",
          { opacity: 0.15, scale: 1.08, duration: 1 },
          0
        )
        .to(
          ".hero-radial",
          { opacity: 0.4, scale: 1.2, duration: 1 },
          0
        )
        .to(
          ".hero-rays line",
          { attr: { "stroke-opacity": 0.6 }, duration: 1, stagger: 0.01 },
          0
        );

      // Act 2 — wings sweep into focus, core sculpture forms
      tl.fromTo(
        ".hero-left",
        { x: -40, y: 30, rotate: -6, opacity: 1 },
        { x: 0, y: -10, rotate: -2, scale: 1.05, duration: 1.2 },
        0.4
      )
        .fromTo(
          ".hero-right",
          { x: 40, y: 30, rotate: 6, opacity: 1 },
          { x: 0, y: -10, rotate: 2, scale: 1.05, duration: 1.2 },
          0.4
        )
        .fromTo(
          ".hero-core",
          { scale: 1, rotate: 0 },
          { scale: 1.35, rotate: 45, duration: 1.4 },
          0.5
        )
        .to(
          ".hero-core-glow",
          { scale: 1.6, opacity: 0.9, duration: 1.4 },
          0.5
        );

      // Act 3 — sculpture locks in, command center reveals
      tl.to(
        ".hero-left",
        { x: -80, y: -40, scale: 0.92, opacity: 0.35, filter: "blur(2px)", duration: 1 },
        1.6
      )
        .to(
          ".hero-right",
          { x: 80, y: -40, scale: 0.92, opacity: 0.35, filter: "blur(2px)", duration: 1 },
          1.6
        )
        .to(
          ".hero-core",
          { scale: 0.85, rotate: 90, y: -40, duration: 1 },
          1.6
        )
        .fromTo(
          ".hero-command",
          { y: 120, opacity: 0, scale: 0.94, filter: "blur(10px)" },
          { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 },
          1.7
        )
        .fromTo(
          ".hero-command .cmd-row",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          1.9
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative pt-36 pb-24 overflow-hidden min-h-screen">
      {/* background flourishes */}
      <div className="hero-bg-grid absolute inset-0 -z-10 grid-bg radial-fade opacity-60" />
      <div className="hero-radial absolute inset-x-0 top-0 h-[700px] -z-10" style={{ background: "var(--gradient-radial)" }} />

      {/* radiating connector lines */}
      <svg className="hero-rays absolute inset-0 -z-10 w-full h-full opacity-70" preserveAspectRatio="none" viewBox="0 0 1440 900">
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 720;
          const y = 520;
          const angle = (i / 18) * Math.PI * 2;
          const r = 900;
          return (
            <line
              key={i}
              x1={x}
              y1={y}
              x2={x + Math.cos(angle) * r}
              y2={y + Math.sin(angle) * r}
              stroke="currentColor"
              strokeOpacity={0.25}
              strokeWidth="1"
              className="text-primary"
            />
          );
        })}
      </svg>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-primary" />
            New · GPT-powered engagement engine v3
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-7 font-display font-bold tracking-[-0.04em] text-balance text-[clamp(2.6rem,7.5vw,6rem)] leading-[0.95]"
          >
            Your <span className="pill-highlight">AI Co-Pilot</span> for
            <br className="hidden sm:block" /> Social Media Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty"
          >
            Orchestrate conversations, campaigns and conversions across every channel —
            powered by an AI that learns your brand voice and never sleeps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-medium shadow-[0_20px_50px_-15px_var(--primary)] hover:translate-y-[-1px] transition"
            >
              Get Started
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-base font-medium hover:bg-muted transition">
              Watch demo
            </a>
          </motion.div>
        </div>

        {/* Floating product showcase */}
        <div className="relative mt-20 h-[420px] sm:h-[460px]">
          {/* center sparkle node */}
          <div className="hero-core absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform">
            <div className="relative">
              <div className="hero-core-glow absolute inset-0 -z-10 rounded-3xl bg-primary blur-2xl opacity-50" />
              <div className="grid place-items-center size-24 rounded-3xl bg-gradient-to-br from-[oklch(0.78_0.2_50)] to-[oklch(0.65_0.25_28)] text-primary-foreground shadow-[0_30px_60px_-20px_var(--primary)]">
                <Sparkles className="size-10" />
              </div>
            </div>
          </div>

          {/* Left: Engagement Dashboard */}
          <div className="hero-left absolute left-0 sm:left-4 top-12 w-[300px] sm:w-[380px] will-change-transform">
            <DashboardCard />
          </div>

          {/* Right: Multi-platform */}
          <div className="hero-right absolute right-0 sm:right-4 top-6 w-[280px] sm:w-[360px] will-change-transform">
            <PlatformCard />
          </div>

          {/* Act 3 reveal: Command Center */}
          <div className="hero-command absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl opacity-0 will-change-transform">
            <CommandCenter />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandCenter() {
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-float text-left">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center size-9 rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </div>
          <div>
            <div className="text-sm font-semibold">Nova Command Center</div>
            <div className="text-[11px] text-muted-foreground">Live · all channels synced</div>
          </div>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-success/10 text-success font-medium">● Online</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: "Replies sent", v: "12,438", d: "+18%" },
          { label: "Avg. response", v: "1.2s", d: "−0.4s" },
          { label: "Conversion", v: "31.7%", d: "+2.8%" },
        ].map((s) => (
          <div key={s.label} className="cmd-row rounded-2xl border border-border bg-surface p-4">
            <div className="text-[11px] text-muted-foreground">{s.label}</div>
            <div className="mt-1 text-xl font-bold tracking-tight">{s.v}</div>
            <div className="text-[11px] text-success font-medium mt-0.5">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="cmd-row mt-3 rounded-2xl border border-border bg-surface p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold">Active conversations</div>
          <div className="flex gap-1.5 text-muted-foreground">
            <Instagram className="size-3.5" /><Facebook className="size-3.5" /><MessageCircle className="size-3.5" /><Send className="size-3.5" />
          </div>
        </div>
        <div className="space-y-2">
          {[
            { who: "Ayesha · IG", msg: "Is the linen shirt back in stock?" },
            { who: "Marco · WA", msg: "Can you ship to Milan by Friday?" },
            { who: "Priya · Messenger", msg: "Loved the campaign 🙌" },
          ].map((c) => (
            <div key={c.who} className="flex items-center justify-between text-xs rounded-xl bg-muted/60 px-3 py-2">
              <span className="font-medium">{c.who}</span>
              <span className="text-muted-foreground truncate ml-3">{c.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 grid place-items-center size-10 rounded-xl bg-primary text-primary-foreground shadow-lg z-10">
        <MessageSquare className="size-5" />
      </div>
      <div className="glass-strong rounded-2xl p-5 shadow-float text-left">
        <div className="text-primary font-semibold text-sm mb-3">AI-Powered Engagement Dashboard</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-surface p-3">
            <div className="text-[11px] text-muted-foreground">Message Volume</div>
            <div className="text-success text-sm font-semibold mt-1">+35% Today</div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3">
            <div className="text-[11px] text-muted-foreground">Conversational UI</div>
            <div className="mt-1 flex flex-col gap-1">
              <div className="self-end text-[10px] bg-primary text-primary-foreground rounded-full px-2 py-0.5">Hi Rana 👋</div>
              <div className="self-start text-[10px] bg-muted rounded-full px-2 py-0.5">How can I help?</div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 col-span-2">
            <div className="text-[11px] text-muted-foreground mb-1">Sentiment Analysis</div>
            <div className="flex items-center gap-2 text-base">
              <span>😊</span><span>😐</span><span>😍</span>
              <div className="ml-auto h-1.5 flex-1 max-w-[120px] rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[78%] bg-primary" />
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 col-span-2">
            <div className="text-[11px] text-muted-foreground">AI generated</div>
            <div className="text-sm font-semibold mt-0.5">Daily Summary ▾</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformCard() {
  const icons = [
    { Icon: Instagram, pos: "top-3 left-6" },
    { Icon: Send, pos: "top-3 right-6" },
    { Icon: MessageCircle, pos: "bottom-6 left-3" },
    { Icon: Facebook, pos: "bottom-6 right-3" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-5 shadow-float text-left">
      <div className="text-primary font-semibold text-sm mb-3">Multi-Platform Support</div>
      <div className="relative h-44 rounded-xl border border-border bg-surface overflow-hidden">
        <svg className="absolute inset-0 w-full h-full text-primary/40">
          <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" className="dash-line" />
          <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" className="dash-line" />
          <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" className="dash-line" />
          <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" className="dash-line" />
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-lg">
          <Sparkles className="size-5" />
        </div>
        {icons.map(({ Icon, pos }, i) => (
          <div key={i} className={`absolute ${pos} size-9 rounded-full bg-surface border border-border grid place-items-center shadow-sm`}>
            <Icon className="size-4 text-foreground" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="text-[11px] text-muted-foreground">Performance</div>
          <svg viewBox="0 0 100 30" className="w-full h-8 mt-1">
            <path d="M0 22 Q20 18 35 20 T70 8 T100 4" fill="none" stroke="var(--primary)" strokeWidth="2" />
          </svg>
        </div>
        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="text-[11px] text-muted-foreground">Charts</div>
          <div className="flex items-end gap-1 h-8 mt-1">
            {[40, 65, 50, 80, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-primary" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
