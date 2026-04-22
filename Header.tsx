import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/readylab-logo.png";

const navItems = [
  { label: "Solutions", to: "/solutions" },
  { label: "About Us", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact-us" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-rl flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="ReadyLab logo" className="h-8 md:h-9 w-auto" />
          <span className="font-display text-lg tracking-[0.18em] font-semibold uppercase text-foreground">
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-5">
            <Link to="/contact-us">Partner With Us</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-rl py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-base font-medium text-foreground py-2"
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
              <Link to="/contact-us">Partner With Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
