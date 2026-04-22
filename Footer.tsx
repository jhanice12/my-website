import { Link } from "react-router-dom";
import logo from "@/assets/readylab-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-rl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="ReadyLab logo" className="h-9 w-auto" />
              <span className="font-display text-lg tracking-[0.18em] font-semibold uppercase text-foreground">
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-light">
              Engage. Earn. Redeem. Repeat.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">Platform</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/solutions" className="text-foreground hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link to="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/news" className="text-foreground hover:text-primary transition-colors">News and Updates</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact-us" className="text-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">Copyright 2026 ReadyLab. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Closed-Loop Loyalty Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
