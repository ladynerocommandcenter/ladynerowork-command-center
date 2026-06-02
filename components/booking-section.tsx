"use client"

import { useState } from "react"

const inquiryTypes = [
  "Booking Request",
  "Press Inquiry",
  "Collaboration",
  "Speaking Engagement",
  "Other",
]

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    budget: "",
    date: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <section id="booking" className="relative py-24 md:py-32 px-6 md:px-12">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Work With Us
        </p>
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-[0.1em] text-foreground mb-6">
          BOOKING
        </h2>
        <p className="font-[family-name:var(--font-montserrat)] font-light text-muted-foreground max-w-xl leading-relaxed">
          For performances, appearances, collaborations, and press inquiries. 
          Let&apos;s create something legendary together.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info + Press Kit */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="p-8 border border-border/30 bg-card/20">
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-foreground mb-6">
                DIRECT CONTACT
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    Management
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-foreground">
                    management@ladynero.com
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    Press
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-foreground">
                    press@ladynero.com
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    General
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-foreground">
                    hello@ladynero.com
                  </p>
                </div>
              </div>
            </div>

            {/* Press Kit Download */}
            <div className="p-8 border border-primary/30 bg-primary/5">
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-foreground mb-4">
                PRESS KIT
              </h3>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-muted-foreground mb-6">
                Download official photos, bio, logos, and technical rider for your event.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:bg-primary/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Press Kit
              </a>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-4 p-4 border border-border/30">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-muted-foreground">
                Average response time: 24-48 hours
              </p>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-12 border border-primary/30 bg-primary/5 text-center">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-primary rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-foreground mb-4">
                  MESSAGE RECEIVED
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-muted-foreground mb-6">
                  Thank you for reaching out. Our team will review your inquiry and respond within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="$XX,XXX - $XX,XXX"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-card/50 border border-border/50 text-foreground font-[family-name:var(--font-montserrat)] placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your event, project, or inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase hover:bg-primary/20 transition-all duration-300 cta-glow"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
