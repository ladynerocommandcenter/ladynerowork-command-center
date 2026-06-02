"use client"

import { useEffect, useRef, useState } from "react"

export default function ComingSoon() {
  const [gridActive, setGridActive] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState("")
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const audioInitialized = useRef(false)

  // Countdown to a target date (30 days from now for demo)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)
    
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }
    
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // Grid reveal on hover/touch
  useEffect(() => {
    const handleInteraction = () => setGridActive(true)
    const handleLeave = () => setGridActive(false)
    
    document.addEventListener("mousemove", handleInteraction)
    document.addEventListener("touchstart", handleInteraction)
    document.addEventListener("mouseleave", handleLeave)
    
    return () => {
      document.removeEventListener("mousemove", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  // Audio setup
  useEffect(() => {
    if (audioInitialized.current) return
    
    const AudioContext = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext
    if (!AudioContext) return

    let audioContext: AudioContext | null = null
    let droneOsc: OscillatorNode | null = null
    let pulseOsc: OscillatorNode | null = null

    const createAmbientSound = (ctx: AudioContext) => {
      const drone = ctx.createOscillator()
      const droneGain = ctx.createGain()
      drone.type = "sine"
      drone.frequency.value = 55
      droneGain.gain.value = 0.03
      drone.connect(droneGain)
      droneGain.connect(ctx.destination)
      
      const pulse = ctx.createOscillator()
      const pulseGain = ctx.createGain()
      pulse.type = "sine"
      pulse.frequency.value = 30
      pulseGain.gain.value = 0
      pulse.connect(pulseGain)
      pulseGain.connect(ctx.destination)
      
      const now = ctx.currentTime
      for (let i = 0; i < 100; i++) {
        const beatTime = now + i * 1.5
        pulseGain.gain.setValueAtTime(0, beatTime)
        pulseGain.gain.linearRampToValueAtTime(0.04, beatTime + 0.05)
        pulseGain.gain.linearRampToValueAtTime(0, beatTime + 0.15)
        pulseGain.gain.setValueAtTime(0, beatTime + 0.25)
        pulseGain.gain.linearRampToValueAtTime(0.025, beatTime + 0.3)
        pulseGain.gain.linearRampToValueAtTime(0, beatTime + 0.4)
      }
      
      drone.start()
      pulse.start()
      
      return { drone, pulse }
    }

    const startSound = () => {
      if (audioInitialized.current) return
      audioInitialized.current = true
      
      audioContext = new AudioContext()
      if (audioContext.state === "suspended") {
        audioContext.resume().then(() => {
          const { drone, pulse } = createAmbientSound(audioContext!)
          droneOsc = drone
          pulseOsc = pulse
        })
      } else {
        const { drone, pulse } = createAmbientSound(audioContext)
        droneOsc = drone
        pulseOsc = pulse
      }
      
      document.removeEventListener("click", startSound)
      document.removeEventListener("touchstart", startSound)
    }

    document.addEventListener("click", startSound)
    document.addEventListener("touchstart", startSound)

    return () => {
      document.removeEventListener("click", startSound)
      document.removeEventListener("touchstart", startSound)
      if (droneOsc) droneOsc.stop()
      if (pulseOsc) pulseOsc.stop()
      if (audioContext) audioContext.close()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your backend
    alert(`Welcome to the Command Center, soldier. ${email} has been registered.`)
    setEmail("")
    setShowEmailForm(false)
  }

  const formatNumber = (n: number) => n.toString().padStart(2, "0")

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Metallic grid overlay - reveals on hover */}
      <div className={`metallic-grid ${gridActive ? "active" : ""}`} />
      
      {/* Animated metallic gradient background */}
      <div className="metallic-bg absolute inset-0" />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Paisley overlay pattern */}
      <div 
        className="paisley-overlay absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-8 0-15 12-15 25s7 25 15 25c-4 0-8-6-8-15 0-6 2-12 5-15-3 3-5 7-5 10 0 5 3 10 8 10 6 0 12-8 12-20S38 5 30 5zm0 8c4 0 8 8 8 17s-4 17-8 17c2 0 4-4 4-10 0-4-1-8-3-10 2 2 3 5 3 7 0 3-2 7-5 7-4 0-7-5-7-14s3-14 8-14z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      
      {/* Command center glow effect */}
      <div className="glow-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent rounded-full pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-[800px] px-6">
          {/* Brand name - Bebas Neue */}
          <h1 
            className="text-[#d9d9d9] text-[1.2rem] md:text-[1.4rem] tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            LADY NERO
          </h1>
          
          {/* Main headline - Bebas Neue, oversized */}
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-transparent via-[#a0a0a0]/20 to-transparent" />
            <h2 
              className="relative text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.95] tracking-[0.08em] uppercase text-white mb-2"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              COMMAND CENTER
            </h2>
            <span 
              className="radar-pulse relative inline-block text-[2rem] md:text-[3rem] lg:text-[3.5rem] tracking-[0.15em] uppercase text-[#c0c0c0]"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              LOADING
            </span>
          </div>

          {/* Countdown - T-minus */}
          <div className="mt-8 mb-6">
            <p 
              className="text-[#888] text-[0.75rem] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              SYSTEM ACTIVATION IN T-MINUS
            </p>
            <div 
              className="flex items-center justify-center gap-2 md:gap-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              {[
                { value: countdown.days, label: "DAYS" },
                { value: countdown.hours, label: "HRS" },
                { value: countdown.minutes, label: "MIN" },
                { value: countdown.seconds, label: "SEC" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 md:gap-4">
                  <div className="text-center">
                    <span className="countdown-ticker block text-[2rem] md:text-[3rem] text-white tracking-wider">
                      {formatNumber(item.value)}
                    </span>
                    <span 
                      className="block text-[0.6rem] md:text-[0.7rem] text-[#666] tracking-[0.2em]"
                      style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {i < 3 && <span className="text-[#444] text-[1.5rem] md:text-[2rem] -mt-4">:</span>}
                </div>
              ))}
            </div>
          </div>
          
          {/* Subhead - Montserrat thin */}
          <p 
            className="leading-relaxed text-[#b8b8b8] text-[0.9rem] md:text-[1rem] font-extralight tracking-wide"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Luxury military-grade entertainment empire under construction.
            <br />
            <span className="text-[#a0a0a0]">Music. Fashion. Literature. Leadership.</span>
            <br />
            Built in Atlanta. Respected worldwide.
          </p>
          
          {/* CTA Button */}
          {!showEmailForm ? (
            <button
              onClick={() => setShowEmailForm(true)}
              className="cta-glow mt-8 px-8 py-3.5 border border-[#555] bg-[#1a1a1a]/80 rounded text-[0.85rem] tracking-[0.15em] uppercase text-[#e0e0e0] font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#777] hover:text-white"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              JOIN THE COMMAND CENTER
            </button>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="slide-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email, soldier"
                required
                className="w-full sm:flex-1 px-4 py-3 bg-[#1a1a1a]/90 border border-[#444] rounded text-[0.85rem] text-white placeholder-[#666] focus:outline-none focus:border-[#888] transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#c0c0c0] text-[#111] rounded text-[0.8rem] tracking-[0.1em] uppercase font-semibold transition-all duration-300 hover:bg-white"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                ENLIST
              </button>
            </form>
          )}
          
          {/* Tagline - Oswald */}
          <div 
            className="inline-block mt-8 px-5 py-2.5 border border-[#555] rounded-full text-[0.8rem] tracking-[0.12em] uppercase text-[#c8c8c8] font-semibold"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            2 Tight Militia • #TeamGreyAndBlue
          </div>

          {/* Social Icons - tactical fade in */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            {/* Instagram */}
            <a href="https://www.instagram.com/ladynero100" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="https://x.com/GeneralLadyNero" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com/@ladynero_2tm" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@lady.nero2" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/LadyNero" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Snapchat */}
            <a href="https://www.snapchat.com/add/ladynero2ttm" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017.012c.434.006.87.037 1.294.1 1.417.21 2.705.73 3.84 1.546.17.122.336.25.496.385.52.438.986.937 1.39 1.49.544.744.97 1.57 1.26 2.452.235.714.377 1.456.42 2.212.02.335.013.67-.02 1.004-.025.26-.06.52-.106.776-.035.195-.076.389-.122.582-.024.1-.05.2-.08.298.16.08.326.152.497.215.35.13.716.223 1.09.27.21.025.422.036.633.034.147-.002.293-.01.44-.022l.148-.014c.09-.01.176.04.21.124.028.068.03.146.007.218-.036.113-.104.213-.195.29-.143.12-.296.23-.46.325-.295.173-.607.32-.93.44-.155.057-.313.107-.473.15-.085.023-.17.043-.256.06l-.114.02c-.003.04-.01.078-.02.117-.053.208-.125.41-.215.605-.112.24-.254.466-.422.67-.31.377-.698.688-1.135.91-.276.14-.568.25-.87.328-.367.094-.745.148-1.125.16-.22.008-.44.002-.66-.018-.235.42-.505.82-.81 1.194-.464.567-1.01 1.063-1.62 1.472-.42.28-.866.52-1.336.716-.518.216-1.058.382-1.61.498-.617.13-1.248.197-1.882.2-.634.003-1.267-.055-1.888-.176-.557-.108-1.102-.266-1.627-.472-.474-.186-.926-.417-1.35-.69-.617-.397-1.173-.882-1.65-1.44-.31-.362-.586-.752-.828-1.164-.222.02-.444.025-.667.017-.382-.012-.762-.066-1.132-.16-.303-.078-.597-.188-.875-.33-.44-.222-.83-.532-1.142-.91-.17-.205-.313-.43-.426-.672-.09-.194-.162-.397-.215-.604-.01-.04-.017-.08-.02-.12l-.114-.02c-.086-.018-.172-.038-.257-.06-.16-.044-.318-.094-.473-.15-.323-.12-.635-.267-.93-.44-.164-.095-.318-.205-.46-.325-.092-.077-.16-.177-.196-.29-.023-.072-.02-.15.007-.218.034-.085.12-.135.21-.124l.148.014c.147.013.294.02.44.022.212.002.423-.01.633-.035.374-.046.74-.14 1.09-.27.17-.062.337-.134.498-.214-.03-.1-.056-.198-.08-.298-.046-.193-.087-.387-.122-.582-.046-.257-.08-.517-.106-.777-.033-.334-.04-.67-.02-1.004.043-.756.185-1.498.42-2.212.29-.883.716-1.708 1.26-2.453.404-.552.87-1.05 1.39-1.49.16-.134.326-.262.496-.384 1.135-.816 2.423-1.336 3.84-1.546.424-.063.86-.094 1.294-.1h.032z"/>
              </svg>
            </a>
            {/* Linktree */}
            <a href="https://linktr.ee/ladynero2TM" target="_blank" rel="noopener noreferrer" className="tactical-icon text-[#666] hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2.226V8.121h5.909l-4.2-4.005 2.324-2.38 4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"/>
              </svg>
            </a>
          </div>
          
          {/* Sound indicator */}
          <p 
            className="mt-6 text-[0.65rem] text-[#555] tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Click anywhere for audio experience
          </p>
        </div>
      </div>
      
      {/* Scan line effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />
    </div>
  )
}
