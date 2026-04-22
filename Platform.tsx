import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Plug, Coins, Ticket, Target, Layers, LineChart } from "lucide-react";

const caps = [
  { icon: Plug, title: "API and SDK Integration", body: "Connect ReadyLab to your app, web platform, or mini program via REST API or native SDK. Quick setup, clean documentation, and integration support from our team. Built to launch in weeks, not quarters." },
  { icon: Coins, title: "EXP and Gem Reward Engine", body: "The dual-currency system that powers earning and redemption. Fully configurable earning rules, reward triggers, and Gem allocation logic — designed around your user behaviors and business KPIs." },
  { icon: Ticket, title: "Voucher Redemption System", body: "Users exchange Gems for vouchers inside the platform. The redemption catalogue, partner voucher inventory, and redemption flow are all managed within ReadyLab — fully compliant across all markets with no cash or monetary conversion." },
  { icon: Target, title: "Mission and Challenge Engine", body: "The backend logic that powers missions, tasks, streaks, and challenges. Create, schedule, and manage engagement campaigns without engineering tickets." },
  { icon: Layers, title: "Modular Architecture", body: "Launch with the components you need today. Add gamification mechanics, new reward types, or expanded integration points as your program grows." },
  { icon: LineChart, title: "Analytics and Loop Reporting", body: "Real-time visibility into engagement rate, mission completion, redemption rate, and loop performance. Track which mechanics drive the most retention." },
];

const steps = [
  { num: "Step 1", title: "Connect", body: "Integrate ReadyLab via API or SDK into your existing platform. Our technical team supports the full integration process — from documentation to go-live testing." },
  { num: "Step 2", title: "Configure", body: "Set up your earning rules, mission logic, reward catalogue, and voucher redemption flow. No custom development required for standard configurations." },
  { num: "Step 3", title: "Launch", body: "Go live with your closed-loop loyalty program. Monitor performance in real time, iterate on mechanics based on user behavior, and scale the program as your user base grows." },
];

const Platform = () => {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-4xl">
            <SectionLabel>Platform and Integration</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">The Infrastructure That Keeps the Loop Running.</h1>
            <p className="lead mt-8 max-w-2xl">ReadyLab's platform is built for speed, scale, and flexibility. API and SDK-ready, modular by design, and built to connect to your existing product — so you can launch fast and grow the loyalty loop without rebuilding what you already have.</p>
            <Button asChild size="lg" className="mt-10 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
              <Link to="/contact-us">Request a Technical Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Technical Foundation</SectionLabel>
              <h2 className="display-lg mt-6 text-balance">Designed for Product Teams That Move Fast.</h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              <p>Loyalty infrastructure should not slow your product down. ReadyLab's platform is built API-first — meaning it plugs into your existing stack without requiring a rebuild.</p>
              <p>Whether you are connecting a fintech app, an e-commerce platform, or a branded mini program, ReadyLab integrates at the layer that makes sense for your architecture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>What's Inside</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Everything the Loop Needs. Nothing It Doesn't.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {caps.map((c, i) => (
              <div key={c.title} className="bg-background p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 border border-primary/40 flex items-center justify-center text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-[0.2em]">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{c.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Getting Started</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Three Steps to a Running Loop.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {steps.map((s) => (
              <div key={s.num} className="bg-background p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{s.num}</span>
                <h3 className="mt-5 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="display-xl text-balance">Ready to See the Platform in Action?</h2>
            <p className="lead mt-6">ReadyLab's technical team can walk you through the integration process, the reward engine, and the full closed-loop architecture — tailored to your specific stack and use case.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Request a Technical Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-border bg-transparent hover:bg-secondary px-7 h-12">
                <Link to="/solutions">See All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Platform;
