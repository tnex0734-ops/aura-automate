import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Logos } from "@/components/site/Logos";
import { Showcase } from "@/components/site/Showcase";
import { Integrations } from "@/components/site/Integrations";
import { DashboardSection } from "@/components/site/Dashboard";
import { WorkflowSection } from "@/components/site/Workflow";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova.ai — Your AI Co-Pilot for Social Media Automation" },
      { name: "description", content: "Nova orchestrates conversations, campaigns and conversions across every channel — powered by an AI that learns your brand voice and never sleeps." },
      { property: "og:title", content: "Nova.ai — AI Co-Pilot for Social Media Automation" },
      { property: "og:description", content: "Autonomous engagement across WhatsApp, Instagram, Facebook, LinkedIn and more." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Logos />
      <Showcase />
      <Integrations />
      <DashboardSection />
      <WorkflowSection />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
