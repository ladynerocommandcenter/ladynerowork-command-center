"use client"

import { useState } from "react"

const tenets = [
  {
    number: "01",
    title: "Loyalty Above All",
    description: "Stand with your unit. Never abandon your post.",
  },
  {
    number: "02", 
    title: "Excellence in Execution",
    description: "Every mission, every task—delivered with precision.",
  },
  {
    number: "03",
    title: "Respect the Chain",
    description: "Honor the structure. Trust the leadership.",
  },
  {
    number: "04",
    title: "Protect the Brand",
    description: "You represent the Empire at all times.",
  },
  {
    number: "05",
    title: "Build, Don&apos;t Destroy",
    description: "Create opportunities. Elevate others.",
  },
]

export function MilitiaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Recruitment form submitted:", formData)
  }

  return (
    <section id="militia" className="relative py-24 md:py-32 px-6 md:px-12 bg-card/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary rounded-full" />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 relative">
        <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Movement
        </p>
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-[0.1em] text-foreground mb-6">
          2 TIGHT MILITIA
        </h2>
        <p className="font-[family-name:var(--font-montserrat)] font-light text-muted-foreground max-w-xl leading-relaxed">
          More than fans. More than followers. We are a unit bound by vision, 
          loyalty, and the relentless pursuit of excellence. #TeamGreyAndBlue
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Tenets */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-foreground mb-8">
              THE CODE
            </h3>
            <div className="space-y-6">
              {tenets.map((tenet) => (
                <div
                  key={tenet.number}
                  className="flex gap-6 p-6 border-l-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="font-[family-name:var(--font-bebas)] text-4xl text-primary/30">
                    {tenet.number}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-foreground mb-1">
                      {tenet.title}
                    </h4>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-muted-foreground">
                      {tenet.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Recruitment Form */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-foreground mb-8">
              ENLIST NOW
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  City / Location
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Atlanta, GA"
                  required
                />
              </div>

              <div>
                <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Why Do You Want to Join?
                </label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us your story..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase hover:bg-primary/20 transition-all duration-300 cta-glow"
              >
                Submit Application
              </button>

              <p className="font-[family-name:var(--font-montserrat)] text-xs text-muted-foreground text-center">
                By enlisting, you agree to uphold the Code and represent the Empire with honor.
              </p>
            </form>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Active Members" },
            { value: "48", label: "States Represented" },
            { value: "12", label: "Countries" },
            { value: "2019", label: "Founded" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl text-primary">
                {stat.value}
              </span>
              <p className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
