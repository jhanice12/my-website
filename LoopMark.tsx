import { motion } from "framer-motion";

/** Animated closed-loop signature mark. */
const LoopMark = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(270 50% 60%)" />
            <stop offset="100%" stopColor="hsl(285 55% 55%)" />
          </linearGradient>
        </defs>
        {/* outer ring */}
        <circle cx="200" cy="200" r="170" fill="none" stroke="hsl(var(--hairline))" strokeWidth="1" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="hsl(var(--hairline))" strokeWidth="1" />
        <circle cx="200" cy="200" r="90" fill="none" stroke="hsl(var(--hairline))" strokeWidth="1" />

        {/* progress arc */}
        <motion.circle
          cx="200" cy="200" r="170"
          fill="none"
          stroke="url(#loopGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1068"
          initial={{ strokeDashoffset: 1068 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          transform="rotate(-90 200 200)"
        />

        {/* rotating dot */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="370" cy="200" r="6" fill="hsl(270 50% 60%)" />
        </motion.g>
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="330" cy="200" r="3" fill="hsl(270 50% 60% / 0.6)" />
        </motion.g>

        {/* stage labels */}
        {["Engage", "Earn", "Redeem", "Repeat"].map((label, i) => {
          const angle = (i * 90 - 90) * (Math.PI / 180);
          const x = 200 + Math.cos(angle) * 170;
          const y = 200 + Math.sin(angle) * 170;
          return (
            <g key={label}>
              <circle cx={x} cy={y} r="4" fill="hsl(var(--background))" stroke="hsl(270 50% 60%)" strokeWidth="2" />
              <text
                x={x}
                y={y - 14}
                textAnchor="middle"
                className="fill-foreground"
                style={{ fontFamily: "JetBrains Mono", fontSize: 11, letterSpacing: "0.15em" }}
              >
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* center */}
        <text x="200" y="195" textAnchor="middle" className="fill-foreground" style={{ fontFamily: "Space Grotesk", fontSize: 18, fontWeight: 500 }}>
          Closed Loop
        </text>
        <text x="200" y="218" textAnchor="middle" className="fill-muted-foreground" style={{ fontFamily: "JetBrains Mono", fontSize: 10, letterSpacing: "0.2em" }}>
          BY DESIGN
        </text>
      </svg>
    </div>
  );
};

export default LoopMark;
