"use client"

import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Command Bodysuit",
    category: "Bodysuit",
    price: 185,
    description: "Military-grade luxury bodysuit with tactical seaming",
  },
  {
    id: 2,
    name: "Militia Hoodie",
    category: "Hoodie",
    price: 145,
    description: "Premium heavyweight hoodie with embroidered insignia",
  },
  {
    id: 3,
    name: "Grey Matter Tee",
    category: "T-Shirt",
    price: 75,
    description: "Limited edition drop with reflective print",
  },
  {
    id: 4,
    name: "Empire Joggers",
    category: "Pants",
    price: 125,
    description: "Technical joggers with custom hardware",
  },
  {
    id: 5,
    name: "Tactical Cap",
    category: "Accessories",
    price: 55,
    description: "Structured cap with metal insignia",
  },
  {
    id: 6,
    name: "Atlanta Bomber",
    category: "Jacket",
    price: 295,
    description: "Satin bomber with embroidered back panel",
  },
]

const categories = ["All", "Bodysuit", "Hoodie", "T-Shirt", "Pants", "Jacket", "Accessories"]

export function FashionSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="fashion" className="relative py-24 md:py-32 px-6 md:px-12 bg-card/30">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Look
        </p>
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-[0.1em] text-foreground mb-6">
          FASHION
        </h2>
        <p className="font-[family-name:var(--font-montserrat)] font-light text-muted-foreground max-w-xl leading-relaxed">
          Luxury meets tactical. Each piece commands presence and demands respect. 
          Designed for leaders, worn by the elite.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto mb-12 overflow-x-auto pb-4">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary/20 text-foreground border border-primary/50"
                  : "bg-transparent text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-background border border-border/30 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image Placeholder */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-secondary/30 to-background overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-border/50 rounded-full flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bebas)] text-3xl text-muted-foreground/30">
                      LN
                    </span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-background/90 backdrop-blur border border-primary/50 font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-foreground hover:bg-primary/20 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-oswald)] text-lg text-foreground">
                    ${product.price}
                  </span>
                  <button className="px-4 py-2 border border-border text-muted-foreground font-[family-name:var(--font-oswald)] text-xs tracking-[0.1em] uppercase hover:border-primary hover:text-foreground transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:bg-primary/20 transition-all duration-300 cta-glow"
          >
            Shop Full Collection
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
