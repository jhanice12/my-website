import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";

const cards = [
  { title: "Strategy and Consulting", body: "Custom loyalty frameworks built around your market, users, and the behaviors you want to drive.", to: "/strategy-consulting" },
  { title: "Gamification and Engagement", body: "Missions, leaderboards, streaks, and play-to-earn mechanics that turn passive users into active participants.", to: "/gamification-engagement" },
  { title: "Platform and Integration", body: "API and SDK-ready infrastructure that connects to your existing product to power the full loyalty loop.", to: "/platform-integration" },
];

const flow = [
  { step: "Step 1", title: "Strategy and Consulting", role: "Defines the loop" },
  { step: "Step 2", title: "Gamification and Engagement", role: "Powers the loop" },
  { step: "Step 3", title: "Platform and Integration", role: "Runs the loop" },
];

const builtFor = [
  { title: "Financial and Payment Apps", tag: "Fintech", body: "Build daily habits between transactions with missions and voucher rewards." },
  { title: "Retail and Commerce Platforms", tag: "E-Commerce", body: "Keep shoppers active between purchase cycles with gamified challenges and rewards." },
  { title: "Subscription and Service Platforms", tag: "Telcos", body: "Reduce churn by turning subscribers into an engaged loyalty community." },
];

const Solutions = () => {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-4xl">
            <SectionLabel>Our Solutions</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">Everything You Need to Close the Loop.</h1>
            <p className="lead mt-8 max-w-2xl">Strategy, gamification, and platform infrastructure — working together as one closed-loop loyalty system.</p>
            <Button asChild size="lg" className="mt-10 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
              <Link to="/contact-us">Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>What We Build</SectionLabel>
              <h2 className="display-lg mt-6 text-balance">Three Capabilities. One Closed Loop.</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Each solution area works independently or together — depending on where you are and where you want to go.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <Link key={c.title} to={c.to} className="group p-8 border border-border bg-surface hover:border-primary transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-medium">{c.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
                <div className="mt-10 inline-flex items-center gap-2 text-sm text-primary font-medium">
                  Explore <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>The Full Loop</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Each Solution Is a Stage in the Loop.</h2>
            <p className="lead mt-6">Strategy defines it. Gamification powers it. Platform runs it. All three designed to work together.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border relative">
            {flow.map((f, i) => (
              <div key={f.step} className="bg-background p-8 md:p-10 relative">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">{f.step}</span>
                <h3 className="mt-4 font-display text-xl font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.role}</p>
                <span className="absolute top-8 right-8 font-display text-4xl text-border">0{i + 1}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-primary font-mono uppercase tracking-[0.2em]">
            <ArrowDown className="h-4 w-4" /> Retention — The outcome
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Built For</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Built for Any Platform That Has Users Worth Keeping.</h2>
            <p className="lead mt-6">ReadyLab works across industries. If your platform depends on users coming back, the closed-loop loyalty system was built for you.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {builtFor.map((b) => (
              <div key={b.title} className="p-8 border border-border bg-surface">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary border border-primary/40 px-2 py-1">{b.tag}</span>
                <h3 className="mt-6 font-display text-xl font-medium">{b.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground italic">These are examples. ReadyLab works for any platform where user retention drives growth.</p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="display-xl mt-6 text-balance">Not Sure Where to Start?</h2>
            <p className="lead mt-6">
              Most partners come knowing they have a retention problem but not knowing which layer to fix first. That is exactly what our strategy consultation is for. Start there — and we will map the right solution to your situation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-border bg-transparent hover:bg-secondary px-7 h-12">
                <Link to="/platform-integration">See the Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
