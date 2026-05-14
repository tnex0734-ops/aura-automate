import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-10">
        <div>
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid place-items-center size-8 rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span>Nova<span className="text-primary">.ai</span></span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The autonomous engagement layer for modern brands.
          </p>
        </div>
        {[
          { title: "Product", items: ["Features", "Integrations", "Pricing", "Changelog"] },
          { title: "Company", items: ["About", "Customers", "Careers", "Contact"] },
          { title: "Resources", items: ["Docs", "Guides", "Blog", "Status"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold">{c.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Nova.ai — All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Security</a>
        </div>
      </div>
    </footer>
  );
}
