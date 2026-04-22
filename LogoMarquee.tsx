const logos = ["Goama", "Asiasoft", "MatchMove", "IAHGames", "YuuZoo", "Cocone", "Monosense"];

const LogoMarquee = ({ label = "Our team comes from:" }: { label?: string }) => {
  return (
    <div className="space-y-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
        {logos.map((name) => (
          <div
            key={name}
            className="font-display text-xl md:text-2xl font-medium text-muted-foreground/70 hover:text-foreground transition-colors tracking-tight"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
