import { Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass-strong w-full max-w-6xl rounded-full pl-5 pr-2 py-2 flex items-center justify-between shadow-soft">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid place-items-center size-8 rounded-xl bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)]">
            <Sparkles className="size-4" />
          </span>
          <span>Nova<span className="text-primary">.ai</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Login
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Start for free
          </a>
        </div>
      </nav>
    </header>
  );
}
