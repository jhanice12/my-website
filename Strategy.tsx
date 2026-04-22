import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

const areas = [
  { title: "Custom Loyalty Frameworks", body: "We design the full loyalty architecture — earning rules, reward structures, user segments, and engagement triggers — tailored to your market, your product, and the behaviors you want to reinforce. Every framework is built to close the loop: Engage, Earn, Redeem, Repeat." },
  { title: "Insights and Planning Support", body: "Every recommendation we make is grounded in data. We work with your user behavior data, industry benchmarks, and business KPIs to identify the highest-impact loyalty mechanics for your specific audience — before a single line of code is written." },
  { title: "Full-Funnel Loyalty Design", body: "Retention starts at acquisition. We design loyalty strategies that cover the full user journey — from onboarding and first engagement through to long-term retention and voucher redemption — so no stage of the loop is left unaddressed." },
];

const deliverables = [
  { num: "01", title: "Loyalty Framework Document", body: "A complete blueprint of your loyalty program — mechanics, reward logic, user journey maps, and engagement triggers. Ready to hand to your product and engineering teams." },
  { num: "02", title: "User Behavior Audit", body: "An analysis of your current engagement patterns — where users drop off, which actions drive retention, and which reward types are most likely to motivate your specific audience." },
  { num: "03", title: "KPI and Success Metrics", body: "Clear definitions of what success looks like — engagement rate, redemption rate, retention lift, and loop completion rate — so you can measure whether the program is working." },
  { num: "04", title: "Roadmap and Prioritisation", body: "A phased implementation plan that tells you what to build first, what to build next, and what to save for scale — so you can launch lean and grow the loop over time." },
];

const Strategy = () => {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-4xl">
            <SectionLabel>Strategy and Consulting</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">Loyalty That Works Starts With a Strategy That Fits.</h1>
            <p className="lead mt-8 max-w-2xl">Most loyalty programs fail not because of technology but because of design. ReadyLab works with your team to build loyalty frameworks grounded in your market, your users, and the behaviors you actually want to drive.</p>
            <Button asChild size="lg" className="mt-10 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
              <Link to="/contact-us">Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Why Strategy Matters</SectionLabel>
              <h2 className="display-lg mt-6 text-balance">A Template Is Someone Else's Answer to Someone Else's Problem.</h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              <p>Off-the-shelf loyalty programs are built for average users in average markets. Your users are not average. Your market is not average.</p>
              <p>ReadyLab's strategy work starts from scratch every time. We study your market, audit your current engagement patterns, and design a loyalty framework built around what your business actually needs — not what worked for someone else.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Strategy Built Around Your Business Goals.</h2>
          </div>

          <div className="mt-16 space-y-px bg-border">
            {areas.map((a, i) => (
              <div key={a.title} className="bg-background p-8 md:p-12 grid md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-1 font-mono text-sm text-primary tracking-[0.2em]">0{i + 1}</div>
                <h3 className="md:col-span-4 font-display text-2xl font-medium">{a.title}</h3>
                <p className="md:col-span-7 text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Clarity Before You Build Anything.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
            {deliverables.map((d) => (
              <div key={d.num} className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary tracking-[0.2em]">{d.num}</span>
                <h3 className="mt-5 font-display text-xl font-medium">{d.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="display-xl text-balance">Start With the Strategy. Build With Confidence.</h2>
            <p className="lead mt-6">Whether you are designing your first loyalty program or rebuilding one that stopped working, ReadyLab's strategy consultation gives you the clarity to move fast and build right.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default Strategy;
