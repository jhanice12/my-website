import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import LogoMarquee from "@/components/LogoMarquee";
import { ArrowRight } from "lucide-react";

const values = [
  { title: "Loyalty-first means user-first", body: "Every mechanic we design, every reward system we build, and every framework we recommend starts with one question — does this create genuine value for the user? A loyalty program that serves the brand but frustrates the user is not a loyalty program. It is a churn accelerator." },
  { title: "Innovation without ego", body: "We test, iterate, and evolve constantly. If something is not working, we change it. Seniority does not protect bad ideas here." },
  { title: "Bridging brands and users", body: "The best loyalty programs create something neither party could have alone — a relationship with real mutual value. ReadyLab exists in that space. We build the bridge between what brands need and what users want, and we keep it standing loop after loop." },
];

const About = () => {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-4xl">
            <SectionLabel>About ReadyLab</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">Built on Experience. Driven by a Better Idea.</h1>
            <p className="lead mt-8 max-w-2xl">ReadyLab exists because the loyalty industry needed a platform that could close the loop — not just open one. We built it from the ground up, drawing on decades of direct experience in gaming, fintech, and digital commerce across Asia Pacific.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-border bg-transparent hover:bg-secondary px-7 h-12">
                <Link to="/solutions">See Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="display-lg mt-6 text-balance">Loyalty Is About People. Not Transactions.</h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              <p>The best loyalty programs do not feel like programs. They feel like experiences — natural, rewarding, and worth showing up for. The worst ones feel like spreadsheets. Users collect points they never redeem, ignore the push notifications, and quietly disappear.</p>
              <p>ReadyLab was built to solve that problem. The team behind ReadyLab has spent years building engagement programs, launching loyalty platforms, and growing user bases across some of the most competitive digital markets in Asia Pacific.</p>
              <p>We have seen what works. We have seen what sounds good in a pitch deck but fails in the field. And we have seen the same gap appear in market after market — platforms that generate transactions but cannot generate loyalty.</p>
              <p>The gap is always the same. There is no loop. Users enter, transact, and leave. Nothing pulls them back in. <span className="text-foreground">ReadyLab closes that loop.</span></p>
              <p>The name says it: <span className="text-foreground">"ready"</span> — always prepared to innovate, build, and push what loyalty can be. <span className="text-foreground">"lab"</span> — a mindset of continuous testing, learning, and improvement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-rl py-20 md:py-32 grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-surface p-10 md:p-14">
            <SectionLabel>Mission</SectionLabel>
            <h2 className="display-md mt-6 text-balance">To Redefine Customer Loyalty Through Closed-Loop Engagement.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">ReadyLab's mission is to give every brand the tools to build loyalty that works. Not loyalty that looks good in a report. Loyalty that changes behavior, builds habits, and keeps users coming back because the experience is genuinely worth it.</p>
          </div>
          <div className="bg-surface p-10 md:p-14">
            <SectionLabel>Vision</SectionLabel>
            <h2 className="display-md mt-6 text-balance">A World Where Every Brand Interaction Earns Something Worth Keeping.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">The future of loyalty is not a points balance. It is a relationship. ReadyLab's vision is a world where brands compete on the quality of their engagement — where users choose platforms not just for the product but for the experience of being a loyal participant in something that rewards them meaningfully. We are building the infrastructure for that world. One closed loop at a time.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-32">
          <div className="max-w-3xl">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">The Principles Behind Every Loop We Build.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary tracking-[0.2em]">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-medium">{v.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-rl py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="display-lg mt-6 text-balance">Built by People Who Have Run This at Scale.</h2>
            <p className="lead mt-6">The ReadyLab team brings direct, hands-on experience from some of the most recognised names in gaming, fintech, and digital commerce across the region. We have built what we are now selling — and we built it at scale, in real markets, with real users. That experience is not a credential. It is a design principle. Every feature in ReadyLab exists because someone on this team has seen what happens when that feature is missing.</p>
          </div>
          <div className="mt-16">
            <LogoMarquee />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="display-xl text-balance">Ready to Build Loyalty That Closes the Loop?</h2>
            <p className="lead mt-6">ReadyLab is actively partnering with brands, platforms, and operators across fintech, e-commerce, and telcos who are ready to move beyond the points program.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-7 h-12">
                <Link to="/contact-us">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-border bg-transparent hover:bg-secondary px-7 h-12">
                <Link to="/solutions">See Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
