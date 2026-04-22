import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionLabel from "@/components/SectionLabel";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

const tabs = ["All", "Thought Leadership", "Product Updates", "Industry News", "Events"];

const articles = [
  { cat: "Thought Leadership", title: "Why Your Loyalty Program Is an Open Loop (And How to Close It)", desc: "Most loyalty programs end at the first redemption. Here is why that is the problem — and what closing the loop actually looks like.", date: "April 2026" },
  { cat: "Product Updates", title: "Introducing the ReadyLab Closed-Loop Platform", desc: "A full walkthrough of the Engage, Earn, Redeem, Repeat system — and what it means for brands building loyalty in 2026.", date: "April 2026" },
  { cat: "Industry News", title: "The State of Loyalty in Asia Pacific: What the Data Says in 2026", desc: "77% of loyalty program members go inactive within 12 months. Here is what the latest research says about why — and what works.", date: "March 2026" },
  { cat: "Thought Leadership", title: "Gamification Is Not a Feature. It Is an Architecture.", desc: "The difference between loyalty programs that retain and ones that churn comes down to how engagement is designed — not how many points you offer.", date: "March 2026" },
  { cat: "Events", title: "Meet ReadyLab — Book a Meeting With Our Team", desc: "The ReadyLab team is available for meetings and demos. Book a session to see the closed-loop loyalty platform in action.", date: "February 2026" },
  { cat: "Industry News", title: "Beyond Points: How Voucher Redemption Is Reshaping Loyalty", desc: "Why voucher-based rewards outperform discount-led programs — and how ReadyLab's redemption system is built around this insight.", date: "February 2026" },
];

const matches = (tab: string, cat: string) => {
  if (tab === "All") return true;
  if (tab === "Product Updates") return cat === "Product Updates" || cat === "Product Update";
  return cat === tab.replace(/s$/, "") || cat === tab;
};

const News = () => {
  const [active, setActive] = useState("All");

  const filtered = articles.filter((a) => matches(active, a.cat));

  const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Subscribed. Welcome aboard.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-28">
          <div className="max-w-4xl">
            <SectionLabel>News and Updates</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">Insights, Updates, and Ideas on Loyalty That Works.</h1>
            <p className="lead mt-8 max-w-2xl">Thought leadership, product news, and industry commentary from the team building the closed-loop loyalty platform.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-12">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] border transition-all ${
                  active === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {filtered.map((a) => (
              <article key={a.title} className="bg-background p-8 group cursor-pointer hover:bg-surface transition-colors flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary border border-primary/40 px-2 py-1">{a.cat}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h2 className="mt-6 font-display text-xl font-medium leading-snug">{a.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{a.desc}</p>
                <div className="hairline mt-8 pt-5 flex items-center justify-between text-xs text-muted-foreground font-mono uppercase tracking-[0.18em]">
                  <span>ReadyLab Team</span>
                  <span>{a.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-rl py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="display-lg text-balance">Get Loyalty Insights Delivered to Your Inbox.</h2>
            <p className="lead mt-6">No spam. Just practical thinking on gamification, retention, and what is actually working in loyalty right now.</p>

            <form onSubmit={onSubscribe} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input type="email" required placeholder="you@company.com" className="rounded-none bg-background border-border h-12 flex-1" />
              <Button type="submit" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7">Subscribe</Button>
            </form>
            <p className="mt-5 text-xs text-muted-foreground">By subscribing you agree to ReadyLab's Privacy Policy. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
