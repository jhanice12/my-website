import SectionLabel from "@/components/SectionLabel";

const sections = [
  { n: "01", title: "Information We Collect", body: `We collect personal data that you voluntarily provide, including: full name, work email address, company or platform name, industry type, enquiry details submitted through our contact form, and newsletter subscription email. We also collect limited technical data automatically when you visit our website, including anonymised IP address, browser type and version, pages visited and time spent, and referring URL. We do not collect sensitive personal data such as financial information, identification numbers, or health data through this website.` },
  { n: "02", title: "How We Use Your Information", body: `We use the information collected to: respond to your enquiry and follow up on your submission, send newsletters or updates you have subscribed to, improve our website and understand how visitors interact with it, and comply with legal obligations. We do not use your personal data for automated decision-making or profiling.` },
  { n: "03", title: "Legal Basis for Processing", body: `Under Singapore's PDPA, we process your personal data based on your consent given when you submit a contact form or subscribe to our newsletter, and our legitimate interests in operating our business and responding to enquiries.` },
  { n: "04", title: "Data Sharing and Disclosure", body: `ReadyLab does not sell, rent, or trade your personal data to third parties. We may share your data with trusted service providers who assist us in operating our website and business, including email and CRM platforms, website analytics tools, and cloud hosting providers. All third-party providers are required to process your data only as instructed by ReadyLab and in compliance with applicable data protection laws. We may also disclose your data if required by law, regulation, or legal process.` },
  { n: "05", title: "Data Retention", body: `We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected. Contact form submissions are retained for up to 24 months from the date of submission. Newsletter subscriptions are retained until you unsubscribe. Website analytics data is retained for up to 12 months in anonymised form.` },
  { n: "06", title: "Data Security", body: `ReadyLab implements appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These measures include encrypted data transmission (HTTPS), access controls, and regular security reviews. No method of transmission over the internet is completely secure. While we take reasonable steps to protect your data, we cannot guarantee absolute security.` },
  { n: "07", title: "Your Rights Under the PDPA", body: `Under Singapore's PDPA, you have the right to access the personal data we hold about you, correct any inaccuracies in your personal data, withdraw your consent at any time, and request the deletion of your personal data, subject to legal retention requirements. To exercise any of these rights, please contact us at privacy@readylab.co. We will respond to your request within 30 days.` },
  { n: "08", title: "Cookies", body: `Our website uses cookies to improve your browsing experience and analyse site traffic. We use essential cookies required for the website to function and anonymised analytics cookies to help us understand how visitors use the site. You can control cookie preferences through your browser settings. Disabling cookies may affect your experience on the site.` },
  { n: "09", title: "Third-Party Links", body: `Our website may contain links to third-party websites. ReadyLab is not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.` },
  { n: "10", title: "Changes to This Policy", body: `ReadyLab may update this Privacy Policy from time to time. When we make material changes, we will update the Last Updated date at the top of this page. We encourage you to review this policy periodically.` },
];

const Privacy = () => {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-loop)" }} />
        <div className="container-rl relative py-20 md:py-28">
          <div className="max-w-4xl">
            <SectionLabel>Legal</SectionLabel>
            <h1 className="display-xl mt-6">Privacy Policy</h1>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Last updated: [Insert date before launch]</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-rl py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Contents</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.n}>
                      <a href={`#sec-${s.n}`} className="text-muted-foreground hover:text-primary transition-colors flex gap-3">
                        <span className="font-mono text-xs text-primary">{s.n}</span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#sec-11" className="text-muted-foreground hover:text-primary transition-colors flex gap-3">
                      <span className="font-mono text-xs text-primary">11</span>
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                ReadyLab Pte. Ltd. ("ReadyLab", "we", "us", or "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore. By using our website at readylab.co or submitting information through our contact form, you consent to the practices described in this policy.
              </p>

              <div className="mt-12 space-y-12">
                {sections.map((s) => (
                  <div key={s.n} id={`sec-${s.n}`} className="hairline pt-10 first:border-0 first:pt-0">
                    <span className="font-mono text-xs text-primary tracking-[0.2em]">SECTION {s.n}</span>
                    <h2 className="mt-3 font-display text-2xl font-medium">{s.title}</h2>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                ))}

                <div id="sec-11" className="hairline pt-10">
                  <span className="font-mono text-xs text-primary tracking-[0.2em]">SECTION 11</span>
                  <h2 className="mt-3 font-display text-2xl font-medium">Contact Us</h2>
                  <div className="mt-5 text-muted-foreground leading-relaxed space-y-1">
                    <p>ReadyLab Pte. Ltd.</p>
                    <p>Data Protection Contact: <a href="mailto:privacy@readylab.co" className="text-primary hover:underline">privacy@readylab.co</a></p>
                    <p>Website: readylab.co</p>
                    <p>Registered address: [Insert registered address before launch]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
