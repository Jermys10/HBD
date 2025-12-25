export function FloatingElements() {
  const pawPrints = [
    { top: "12%", left: "16%", delay: "0s", size: "36px" },
    { top: "32%", left: "78%", delay: "0.8s", size: "44px" },
    { top: "68%", left: "12%", delay: "1.4s", size: "40px" },
    { top: "76%", left: "72%", delay: "2s", size: "34px" },
  ]

  const bambooLeaves = [
    { top: "18%", left: "6%", delay: "0.4s" },
    { top: "42%", left: "88%", delay: "1.2s" },
    { top: "72%", left: "46%", delay: "0.8s" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Balloons */}
      <div className="absolute top-10 left-10 balloon opacity-30">
        <div className="w-8 h-10 rounded-full relative" style={{ background: "var(--gradient-primary)" }}>
          <div className="w-0.5 h-16 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute top-20 right-20 balloon opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-8 rounded-full relative" style={{ background: "var(--gradient-secondary)" }}>
          <div className="w-0.5 h-12 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute top-1/3 left-20 balloon opacity-25" style={{ animationDelay: '2s' }}>
        <div className="w-5 h-7 rounded-full relative" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))" }}>
          <div className="w-0.5 h-10 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute top-1/2 right-10 balloon opacity-35" style={{ animationDelay: '0.5s' }}>
        <div className="w-7 h-9 rounded-full relative" style={{ background: "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)))" }}>
          <div className="w-0.5 h-14 bg-muted-foreground/20 absolute top-full left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Red panda paw prints */}
      {pawPrints.map((paw, index) => (
        <div
          key={index}
          className="paw-print absolute text-5xl opacity-35"
          style={{
            top: paw.top,
            left: paw.left,
            animation: `float 4s ease-in-out ${paw.delay} infinite`,
            fontSize: paw.size,
          }}
        >
          🐾
        </div>
      ))}

      {/* Bamboo leaves to frame the theme */}
      {bambooLeaves.map((leaf, index) => (
        <div
          key={index}
          className="bamboo-leaf absolute opacity-70"
          style={{
            top: leaf.top,
            left: leaf.left,
            animationDelay: leaf.delay,
          }}
        />
      ))}

      {/* Confetti Particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="confetti absolute w-2 h-2 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div 
            className="w-full h-full rounded-sm"
            style={{
              backgroundColor: [
                'hsl(var(--primary))',
                'hsl(var(--secondary))',
                'hsl(var(--accent))',
                'hsl(32 82% 70%)'
              ][i % 4]
            }}
          />
        </div>
      ))}
    </div>
  )
}