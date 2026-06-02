"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface CinematicIntroProps {
  onComplete: () => void
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState(0)
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasStartedRef = useRef(false)

  const fullTexts = [
    "Initializing Lady Nero Protocol...",
    "System Online",
    "Welcome to the Empire"
  ]

  const startAudio = useCallback(() => {
    if (audioRef.current && !hasStartedRef.current) {
      hasStartedRef.current = true
      audioRef.current.volume = 0.3
      audioRef.current.play().catch(() => {
        // Audio autoplay blocked - that's fine
      })
    }
  }, [])

  useEffect(() => {
    // Try to start audio on any interaction
    const handleInteraction = () => startAudio()
    window.addEventListener('click', handleInteraction, { once: true })
    window.addEventListener('touchstart', handleInteraction, { once: true })
    window.addEventListener('keydown', handleInteraction, { once: true })
    
    // Also try immediately
    startAudio()

    return () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }
  }, [startAudio])

  useEffect(() => {
    if (phase >= fullTexts.length) {
      // Fade out and complete
      const timeout = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause()
        }
        onComplete()
      }, 1500)
      return () => clearTimeout(timeout)
    }

    // Typewriter effect
    const currentFullText = fullTexts[phase]
    let charIndex = 0
    setText("")

    const typeInterval = setInterval(() => {
      if (charIndex < currentFullText.length) {
        setText(currentFullText.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        // Move to next phase after delay
        setTimeout(() => {
          setPhase(p => p + 1)
        }, phase === 0 ? 1500 : 1000)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [phase, onComplete])

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-1000 ${phase >= fullTexts.length ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Ambient audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQYDHIjeli8GAHO51pxKAwBmr9STNwMAXKPOizYDAFqjzok3AwBZosyJOAMAWqLMijoDAFqizIs8AwBaosyLQAMAWqLMikcDAFqizItPAwBaosyLWgMAWqLMi2cDAFqizIt2AwBaosyLhwMAWqLMi5kDAFqizIutAwBaosyLwAMAWqLMi9IDAFqizIviAwBaosyL8AMAWqLMi/wDAFqizIsFBABaosyLDQQAWqLMixMEAFqizIsXBABaosyLGgQAWqLMixsEAFqizIsbBABaosyLGgQAWqLMixgEAFqizIsVBABaosyLEQQAWqLMiwwEAFqizIsGBABaosyL/wMAWqLMi/cDAFqizIvuAwBaosyL5AMAWqLMi9kDAFqizIvNAwBaosyLwAMAWqLMi7IDAFqizIujAwBaosyLlAMAWqLMi4QDAFqizIt0AwBaosyLZAMAWqLMi1QDAFqizItEAwBaosyLNAMAWqLMiyUDAFqizIsXAwBaosyLCQMAWqLMi/wCAFqizIvwAgBaosyL5QIAWqLMi9sCAFqizIvSAgBaosyLywIAWqLMi8UCAFqizIvAAgBaosyLvQIAWqLMi7sCAFqizIu6AgBaosyLuwIAWqLMi70CAFqizIvAAgBaosyLxQIAWqLMi8sCAFqizIvSAgBaosyL2wIAWqLMi+UCAFqizIvwAgBaosyL/AIAWqLMiwkDAFqizIsXAwBaosyLJQMAWqLMizQDAFqizItEAwBaosyLVAMAWqLMi2QDAFqizIt0AwBaosyLhAMAWqLMi5QDAFqizIujAwBaosyLsgMAWqLMi8ADAFqizIvNAwBaosyL2QMAWqLMi+QDAFqizIvuAwBaosyL9wMAWqLMi/8DAFqizIsFBABaosyLCwQAWqLMixAEAFqizIsUBABaosyLFwQAWqLMixkEAFqizIsaBABaosyLGgQAWqLMixkEAFqizIsXBABaosyLFAQAWqLMixAEAFqizIsLBABaosyLBQQAWqLMi/8DAFqizIv3AwBaosyL7gMAWqLMi+QDAFqizIvZAwBaosyLzQMAWqLMi8ADAFqizIuyAwBaosyLowMAWqLMi5QDAFqizIuEAwBaosyLdAMAWqLMi2QDAFqizItUAwBaosyLRAMAWqLMizQDAFqizIslAwBaosyLFwMAWqLMiwkDAFqizIv8AgBaosyL8AIAWqLMi+UCAFqizIvbAgBaosyL0gIAWqLMi8sCAFqizIvFAgBaosyLwAIAWqLMi70CAFqizIu7AgBaosyLugIAWqLMi7sCAFqizIu9AgBaosyLwAIAWqLMi8UCAFqizIvLAgBaosyL0gIAWqLMi9sCAFqizIvlAgBaosyL8AIAWqLMi/wCAFqizIsJAwBaosyLFwMAWqLMiyUDAFqizIs0AwBaosyLRAMAWqLMi1QDAFqizItkAwBaosyLdAMAWqLMi4QDAFqizIuUAwBaosyLowMAWqLMi7IDAFqizIvAAwBaosyLzQMAWqLMi9kDAFqizIvkAwBaosyL7gMAWqLMi/cDAFqizIv/AwBaosyLBQQAWqLMiwsEAFqizIsQBABaosyLFAQAWqLMixcEAFqizIsZBABaosyLGgQAWqLMixoEAFqizIsZBABaosyLFwQAWqLMixQEAFqizIsQBABaosyLCwQAWqLMiwUEAA==" type="audio/wav" />
      </audio>

      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Radar sweep in background */}
      <div className="radar-sweep opacity-10" />

      {/* Metallic grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192, 192, 192, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192, 192, 192, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="text-center px-6 relative z-10">
        {/* Protocol text */}
        <div className="intro-text">
          {phase === 0 && (
            <p className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.3em] uppercase text-[#888] mb-4">
              [ CLASSIFIED ACCESS ]
            </p>
          )}
          
          <h1 className={`font-[family-name:var(--font-bebas)] tracking-[0.15em] text-foreground ${
            phase === 0 ? 'text-2xl md:text-4xl' : 
            phase === 1 ? 'text-4xl md:text-6xl text-primary' : 
            'text-5xl md:text-7xl'
          }`}>
            {text}
            <span className={`protocol-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
          </h1>

          {phase === 2 && text === fullTexts[2] && (
            <div className="mt-8 animate-in fade-in duration-500">
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-primary/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Lady Nero Protocol Active
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-8 h-1 rounded-full transition-all duration-500 ${
                i <= phase ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30" />
    </div>
  )
}
