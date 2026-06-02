"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atlanta Skyline Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Stylized skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-20">
          <svg
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMax slice"
          >
            {/* Atlanta skyline silhouette */}
            <path
              d="M0 400V300H60V250H80V300H120V200H160V300H200V280H240V300H280V150H300V100H320V150H340V300H400V220H440V300H500V180H520V120H540V180H560V300H620V250H660V300H720V160H740V80H760V160H780V300H840V270H880V300H940V190H960V140H980V190H1000V300H1060V240H1100V300H1160V170H1180V90H1200V170H1220V300H1280V260H1320V300H1380V220H1420V300H1440V400H0Z"
              fill="url(#skylineGradient)"
            />
            <defs>
              <linearGradient id="skylineGradient" x1="720" y1="80" x2="720" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c0c0c0" stopOpacity="0.6" />
                <stop offset="1" stopColor="#2d2d2d" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Command Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 glow-effect pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Subtitle */}
        <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Atlanta&apos;s Entertainment Empire
        </p>

        {/* Main Title */}
        <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl lg:text-[12rem] tracking-[0.1em] leading-none text-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 headline-glow cursor-default">
          LADY NERO
        </h1>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-montserrat)] font-light text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Music. Fashion. Literature. Leadership.<br />
          Built in Atlanta. Respected worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <a
            href="#music"
            className="cta-interactive px-8 py-3 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:bg-primary/20 hover:border-primary transition-all duration-300"
          >
            Stream Now
          </a>
          <a
            href="#fashion"
            className="cta-interactive px-8 py-3 border border-border bg-card/50 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:border-foreground transition-all duration-300"
          >
            Shop Collection
          </a>
          <a
            href="#militia"
            className="cta-interactive px-8 py-3 border border-border text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:border-foreground hover:text-foreground transition-all duration-300"
          >
            Join the Movement
          </a>
        </div>

        {/* Badge */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-2 border border-border/50 rounded-full animate-in fade-in duration-1000 delay-700">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.2em] uppercase text-muted-foreground">
            2 Tight Militia • #TeamGreyAndBlue
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in duration-1000 delay-1000">
        <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
