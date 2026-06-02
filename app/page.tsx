"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MusicSection } from "@/components/music-section"
import { FashionSection } from "@/components/fashion-section"
import { BooksSection } from "@/components/books-section"
import { MilitiaSection } from "@/components/militia-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { CinematicIntro } from "@/components/cinematic-intro"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [lensFlares, setLensFlares] = useState<{ id: number; x: number; y: number }[]>([])
  const audioContextRef = useRef<AudioContext | null>(null)
  const flareIdRef = useRef(0)

  // Handle scroll for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle mouse movement for motion-responsive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Create lens flare on hover interactions
  const createLensFlare = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('button, a, [role="button"]')) {
      const id = flareIdRef.current++
      setLensFlares(prev => [...prev, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setLensFlares(prev => prev.filter(f => f.id !== id))
      }, 600)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("mouseenter", createLensFlare, true)
    return () => window.removeEventListener("mouseenter", createLensFlare, true)
  }, [createLensFlare])

  // Hover sound effect
  const playHoverSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    }
    const ctx = audioContextRef.current
    if (ctx.state === 'suspended') {
      ctx.resume()
    }

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)
    
    oscillator.frequency.setValueAtTime(800, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1)
    
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
    
    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.1)
  }, [])

  // Add hover sound to interactive elements
  useEffect(() => {
    if (showIntro) return

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a[href], [role="button"]')) {
        playHoverSound()
      }
    }

    document.addEventListener("mouseenter", handleHover, true)
    return () => document.removeEventListener("mouseenter", handleHover, true)
  }, [showIntro, playHoverSound])

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <>
      {/* Cinematic Intro Sequence */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      <main 
        className="relative min-h-screen bg-background overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* 3D Paisley overlay throughout site */}
        <div className="paisley-3d" />

        {/* Dynamic lighting sweep */}
        <div className="lighting-sweep" />

        {/* Radar sweep background */}
        <div 
          className="radar-sweep"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
          }}
        />

        {/* Lens flares */}
        {lensFlares.map(flare => (
          <div
            key={flare.id}
            className="lens-flare active"
            style={{ left: flare.x, top: flare.y }}
          />
        ))}

        {/* Metallic grid that reveals on interaction */}
        <div 
          className="metallic-grid"
          style={{
            opacity: Math.abs(mousePosition.x) > 5 || Math.abs(mousePosition.y) > 5 ? 0.1 : 0,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />

        {/* Parallax sections wrapper */}
        <div 
          className="relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <Navigation />
          
          <div className="parallax-section" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <HeroSection />
          </div>
          
          <div className="section-divider my-0" />
          
          <div className="parallax-section" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
            <MusicSection />
          </div>
          
          <div className="section-divider my-0" />
          
          <div className="parallax-section" style={{ transform: `translateY(${scrollY * -0.03}px)` }}>
            <FashionSection />
          </div>
          
          <div className="section-divider my-0" />
          
          <div className="parallax-section" style={{ transform: `translateY(${scrollY * -0.02}px)` }}>
            <BooksSection />
          </div>
          
          <div className="section-divider my-0" />
          
          <div className="parallax-section" style={{ transform: `translateY(${scrollY * -0.01}px)` }}>
            <MilitiaSection />
          </div>
          
          <div className="section-divider my-0" />
          
          <BookingSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
