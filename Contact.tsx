import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionLabel from "@/components/SectionLabel";
import { toast } from "sonner";
import { ArrowRight, Mail } from "lucide-react";

const steps = [
  { num: "01", title: "We review your enquiry", body: "Every submission is read by a real team member. We look at your platform, goals, and the challenge you are solving." },
  { num: "02", title: "We follow up within 1 business day", body: "A ReadyLab team member will reach out to learn more and determine the best next step." },
  { num: "03", title: "We map the right solution", body: "Strategy, gamification, platform integration — or all three. We recommend the right starting point before any commitment." },
];

const reassurance = [
  { title: "Responds in 1 business day", body: "Every enquiry is reviewed by a real team member — not an automated system." },
  { title: "No commitment required", body: "We will tell you honestly if ReadyLab is the right fit before any next step." },
  { title: "Built for your market", body: "ReadyLab understands the regulatory and cultural context of APAC and global markets." },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Enquiry sent. We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-28">
          <div className="max-w-4xl">
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="display-xl mt-6 text-balance">Let's Build Something That Keeps Users Coming Back.</h1>
            <p className="lead mt-8 max-w-2xl">Tell us about your platform and your retention goals. Our team will review your enquiry and follow up within one business day.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-rl py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-medium">What happens next</h2>
              <div className="mt-10 space-y-8">
                {steps.map((s) => (
                  <div key={s.num} className="flex gap-5">
                    <div className="font-mono text-sm text-primary tracking-[0.2em] pt-1">{s.num}</div>
                    <div>
                      <h3 className="font-display text-lg font-medium">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hairline mt-12 pt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
                <a href="mailto:hello@readylab.co" className="mt-3 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" /> hello@readylab.co
                </a>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              <div className="border border-border bg-surface p-8 md:p-10">
                <h2 className="font-display text-2xl font-medium">Tell Us About Your Platform.</h2>

                <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field id="firstName" label="First Name" required />
                  <Field id="lastName" label="Last Name" required />
                  <Field id="email" label="Work Email" type="email" required wide />
                  <Field id="company" label="Company / Platform Name" required wide />

                  <div className="md:col-span-2">
                    <Label className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">Industry</Label>
                    <Select>
                      <SelectTrigger className="mt-2 rounded-none bg-background border-border h-11">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fintech">Fintech / Financial Services</SelectItem>
                        <SelectItem value="ecom">E-Commerce / Retail</SelectItem>
                        <SelectItem value="telco">Telco / Subscription Services</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <Label className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">What are you trying to solve?</Label>
                    <Textarea
                      className="mt-2 rounded-none bg-background border-border min-h-[120px]"
                      placeholder="e.g. We have low DAU between transactions. We want to build a loyalty loop that brings users back daily."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">How did you hear about ReadyLab?</Label>
                    <Select>
                      <SelectTrigger className="mt-2 rounded-none bg-background border-border h-11">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="event">Event or Conference</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-4 mt-2">
                    <Button type="submit" disabled={submitting} className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-12 w-full md:w-auto md:self-start px-7">
                      {submitting ? "Sending…" : <>Send Enquiry <ArrowRight className="ml-2 h-4 w-4" /></>}
                    </Button>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      By submitting this form you agree to ReadyLab's Privacy Policy. Your information will be used solely to respond to your enquiry and will not be shared with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-rl py-16 md:py-20 grid md:grid-cols-3 gap-px bg-border">
          {reassurance.map((r, i) => (
            <div key={r.title} className="bg-surface p-8">
              <span className="font-mono text-xs text-primary tracking-[0.2em]">0{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-medium">{r.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const Field = ({ id, label, type = "text", required, wide }: { id: string; label: string; type?: string; required?: boolean; wide?: boolean }) => (
  <div className={wide ? "md:col-span-2" : ""}>
    <Label htmlFor={id} className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
      {label}{required && <span className="text-primary"> *</span>}
    </Label>
    <Input id={id} type={type} required={required} className="mt-2 rounded-none bg-background border-border h-11" />
  </div>
);

export default Contact;
