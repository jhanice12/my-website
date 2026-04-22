import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import LoopMark from "@/components/LoopMark";
import LogoMarquee from "@/components/LogoMarquee";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  { num: "01", title: "Engage", sub: "Missions and Tasks", body: "Challenges and games give users a reason to participate — not just transact. Every interaction is an entry point into the loop." },
  { num: "02", title: "Earn", sub: "EXP and Gems", body: "Actions convert into visible rewards through our dual-currency system. Progress feels real and worth pursuing." },
  { num: "03", title: "Redeem", sub: "Voucher Redemption", body: "Users exchange earned rewards for vouchers inside the platform. Seamless and fully compliant across all markets." },
  { num: "04", title: "Repeat", sub: "Loop Closes", body: "Every voucher redeemed triggers the next mission. Retention happens by design — not by chance." },
];

const stats = [
  { figure: "77%", label: "of loyalty program members go inactive within 12 months" },
  { figure: "5×", label: "more expensive to acquire a new customer than retain one" },
  { figure: "43%", label: "of companies say gamification is their top engagement lever" },
];

const solutions = [
  { title: "Strategy and Consulting", body: "Every loyalty framework built around your market, your users, and the behaviors you want to drive. Not a template from a previous client.", to: "/strategy-consulting" },
  { title: "Gamification and Engagement", body: "Leaderboards, streaks, missions, and play-to-earn mechanics that turn passive users into active participants. Designed to fit your product, not replace it.", to: "/gamification-engagement" },
  { title: "Platform and Integration", body: "API and SDK-ready loyalty infrastructure. Modular, scalable, and built to connect to your app or web platform fast.", to: "/platform-integration" },
];

const proofs = [
  { title: "The loop closes", body: "Every voucher redeemed triggers re-engagement — pulling users back into the next mission, challenge, and reward cycle." },
  { title: "Behavior drives rewards", body: "Users earn by doing — tasks, games, streaks, milestones. This builds habits, not just purchase cycles. Habits are what retention is made of." },
  { title: "One platform. Every stage", body: "From the first mission to the hundredth voucher redemption — one closed loop, fully managed, no fragmented tools." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Closed-Loop Loyalty Platform</SectionLabel>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                className="display-xl mt-6 text-balance"
              >
                The Closed-Loop Gamified <span className="text-primary">Loyalty Platform.</span>
              </motion.h1>
              <p className="lead mt-8 max-w-2xl text-pretty">
                ReadyLab helps brands turn one-time users into loyal, active participants — through missions, rewards, and voucher redemption that keeps them coming back. Built for fintech, e-commerce, and telcos that are done with loyalty programs that don't retain.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                  <Link to="/contact-us">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-border bg-transparent hover:bg-secondary px-7 h-12">
                  <Link to="/platform-integration">See the Platform</Link>
                </Button>
              </div>

              <div className="mt-16 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Engage · Earn · Redeem · Repeat
              </div>
            </div>

            <div className="lg:col-span-5">
              <LoopMark className="mx-auto max-w-[480px] aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* THE LOYALTY GAP */}
      <section className="border-t border-border bg-surface">
        <div className="container-rl py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>The Loyalty Gap</SectionLabel>
              <h2 className="display-lg mt-6 text-balance">
                Your Users Show Up. Getting Them to Stay Is the Hard Part.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              <p>Traditional loyalty programs reward spending. Users collect points they never redeem, ignore push notifications, and churn quietly. The program runs. The customer retention doesn't follow.</p>
              <p>Points without purpose don't build habits. Rewards without relevance don't drive behavior. Most brands are running an open loop. Users enter, transact, and disappear. There is no mechanism pulling them back in.</p>
              <p className="text-foreground">ReadyLab closes that loop.</p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 border-t border-border">
            {stats.map((s) => (
              <div key={s.figure} className="border-b md:border-b-0 md:border-r last:border-r-0 border-border p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl font-medium text-primary">{s.figure}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Source: Industry benchmarks, 2026</p>
        </div>
      </section>

      {/* HOW READYLAB WORKS */}
      <section className="border-t border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>How ReadyLab Works</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Engage. Earn. Redeem. Repeat.</h2>
            <p className="lead mt-6">Four stages. One continuous loop. Retention by design.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {stages.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background p-8 md:p-10 group hover:bg-surface transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary tracking-[0.2em]">{s.num}</span>
                  <div className="h-px w-12 bg-border group-hover:bg-primary transition-colors" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.sub}</p>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="border-t border-border bg-surface">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Our Solutions</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Built for Brands That Want More Than a Points Program.</h2>
            <p className="lead mt-6">ReadyLab is a full-stack customer engagement platform — strategy, gamification, and loyalty infrastructure in one place.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group flex flex-col justify-between p-8 border border-border bg-background hover:border-primary transition-all"
              >
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight">{s.title}</h3>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
                <div className="mt-10 inline-flex items-center gap-2 text-sm text-primary font-medium">
                  Learn More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RETENTION BY DESIGN */}
      <section className="border-t border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Retention by Design</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Most Loyalty Platforms Stop at Redemption. We Start There.</h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {proofs.map((p, i) => (
              <div key={p.title} className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary tracking-[0.2em]">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-medium">{p.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-t border-border bg-surface">
        <div className="container-rl py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Built by People Who Have Run This at Scale.</h2>
            <p className="lead mt-6">
              Direct experience from recognised names in gaming, fintech, and digital commerce across Asia Pacific. We built ReadyLab because we knew what was missing — and we knew exactly how to build it.
            </p>
          </div>
          <div className="mt-16">
            <LogoMarquee />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="display-xl mt-6 text-balance">Ready to Close the Loop?</h2>
            <p className="lead mt-6">
              Whether you are starting from scratch or replacing what stopped working — ReadyLab gives you strategy, gamification, and platform infrastructure in one closed loop.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-border bg-transparent hover:bg-secondary px-7 h-12">
                <Link to="/contact-us">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
