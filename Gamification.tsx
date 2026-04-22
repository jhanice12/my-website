import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Target, Flame, Trophy, BarChart3, Gamepad2, Award } from "lucide-react";

const mechanics = [
  { icon: Target, title: "Missions and Task Challenges", body: "Time-bound objectives that give users a clear goal and a clear reward. Missions drive specific behaviors — app logins, product trials, referrals, content engagement — and keep users oriented toward the next action." },
  { icon: Flame, title: "Streaks and Daily Actions", body: "Consistency mechanics that reward users for showing up repeatedly. Streaks create habit loops — the longer the streak, the stronger the motivation to protect it." },
  { icon: Trophy, title: "Leaderboards and Competitions", body: "Social ranking systems that introduce healthy competition among users. Leaderboards motivate participation without requiring head-to-head interaction." },
  { icon: BarChart3, title: "Progress Bars and Milestones", body: "Visual progress systems that show users exactly how far they have come and how far they need to go. Progress visibility is one of the most reliable drivers of task completion." },
  { icon: Gamepad2, title: "Play-to-Earn Games", body: "Hypercasual and instant win games that make every session feel rewarding. Users earn EXP and Gems through gameplay — adding an entertainment layer to the loyalty loop." },
  { icon: Award, title: "Badges and Achievement Unlocks", body: "Recognition mechanics that reward users for reaching milestones. Badges create social proof within the platform and give users a sense of identity tied to their engagement history." },
];

const Gamification = () => {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-4xl">
            <SectionLabel>Gamification and Engagement</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">Loyalty That Feels Like a Game People Want to Play.</h1>
            <p className="lead mt-8 max-w-2xl">Gamification is not decoration. It is the architecture of behavior change. ReadyLab designs interactive engagement systems that make participation feel natural, progress feel meaningful, and rewards feel worth earning.</p>
            <Button asChild size="lg" className="mt-10 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
              <Link to="/contact-us">See How It Works <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Beyond Points and Badges</SectionLabel>
              <h2 className="display-lg mt-6 text-balance">Gamification Is Not About Making Things Fun. It Is About Making Things Sticky.</h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              <p>The goal is not to entertain your users. The goal is to build the habits that keep them coming back — completing missions, hitting streaks, climbing leaderboards, and redeeming vouchers that reinforce the loop.</p>
              <p>ReadyLab designs engagement systems grounded in behavioral psychology and game design — not gimmicks. Every mechanic we build has a purpose. Every reward has a reason. And every interaction is designed to pull the user back into the next cycle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">The Mechanics That Power the Loop.</h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {mechanics.map((m, i) => (
              <div key={m.title} className="bg-background p-8 md:p-10 group hover:bg-surface-elevated transition-colors">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 border border-primary/40 flex items-center justify-center text-primary">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-[0.2em]">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{m.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <SectionLabel>Dual-Currency Engine</SectionLabel>
          <h2 className="display-lg mt-6 text-balance max-w-3xl">Two Currencies. One Purpose. Keep the Loop Moving.</h2>

          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              <p>ReadyLab's reward system runs on two currencies — EXP and Gems. EXP measures engagement and progress. Gems are the reward unit exchanged for vouchers inside the platform.</p>
              <p>Users earn EXP by completing any action — missions, games, streaks. Gems are awarded for higher-value behaviors, keeping the most meaningful rewards tied to the deepest engagement.</p>
              <p className="text-foreground">Every Gem redeemed for a voucher completes the loop — and triggers the start of the next one.</p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="border border-border p-6 bg-surface">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Currency 01</div>
                <div className="mt-6 font-display text-5xl font-medium">EXP</div>
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">Engagement and progress</p>
              </div>
              <div className="border border-primary/50 p-6 bg-primary/5" style={{ boxShadow: "var(--shadow-glow)" }}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Currency 02</div>
                <div className="mt-6 font-display text-5xl font-medium text-primary">Gems</div>
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">Redeemable for vouchers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="display-xl text-balance">Ready to Build Engagement That Sticks?</h2>
            <p className="lead mt-6">ReadyLab designs gamification systems that fit your product — not the other way around. Every mechanic is chosen for your audience, built for your platform, and measured against your retention targets.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default Gamification;
