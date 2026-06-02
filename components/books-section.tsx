"use client"

const books = [
  {
    id: 1,
    title: "The Command Manual",
    subtitle: "Leadership Lessons from the Empire",
    year: "2024",
    description: "A manifesto on building empires, commanding respect, and leading with purpose. Essential reading for the modern strategist.",
    chapters: 12,
  },
  {
    id: 2,
    title: "Grey & Blue",
    subtitle: "Poetry from the Trenches",
    year: "2023",
    description: "Raw, unfiltered verses that capture the struggle, triumph, and vision of building a movement from the ground up.",
    chapters: 48,
  },
  {
    id: 3,
    title: "Atlanta Rising",
    subtitle: "A Memoir",
    year: "2022",
    description: "The untold story of building an entertainment empire in the heart of the South. From vision to victory.",
    chapters: 18,
  },
]

export function BooksSection() {
  return (
    <section id="books" className="relative py-24 md:py-32 px-6 md:px-12">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Words
        </p>
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-[0.1em] text-foreground mb-6">
          LITERATURE
        </h2>
        <p className="font-[family-name:var(--font-montserrat)] font-light text-muted-foreground max-w-xl leading-relaxed">
          Words that inspire, instruct, and ignite. The literary arm of the empire delivers 
          knowledge with the same precision as our music.
        </p>
      </div>

      {/* Books Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="group flex flex-col md:flex-row gap-8 p-8 border border-border/30 bg-card/20 hover:border-primary/30 hover:bg-card/40 transition-all duration-500"
            >
              {/* Book Cover Placeholder */}
              <div className="flex-shrink-0 w-full md:w-48">
                <div className="aspect-[2/3] bg-gradient-to-br from-secondary to-background border border-border/50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center px-4">
                    <span className="font-[family-name:var(--font-bebas)] text-xl text-muted-foreground/50 block">
                      LADY
                    </span>
                    <span className="font-[family-name:var(--font-bebas)] text-3xl text-foreground/30">
                      NERO
                    </span>
                  </div>
                  {/* Spine detail */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/20" />
                </div>
              </div>

              {/* Book Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.2em] uppercase text-primary">
                      {book.year}
                    </span>
                    <span className="w-8 h-px bg-border" />
                    <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {book.chapters} Chapters
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl tracking-wider text-foreground mb-2">
                    {book.title}
                  </h3>
                  <p className="font-[family-name:var(--font-montserrat)] font-light italic text-muted-foreground mb-4">
                    {book.subtitle}
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {book.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <button className="px-6 py-3 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:bg-primary/20 transition-all duration-300">
                    Read Excerpt
                  </button>
                  <button className="px-6 py-3 border border-border text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:border-foreground hover:text-foreground transition-all duration-300">
                    Purchase
                  </button>
                </div>
              </div>

              {/* Index Number */}
              <div className="hidden lg:flex items-start">
                <span className="font-[family-name:var(--font-bebas)] text-8xl text-border/30 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Literary CTA */}
        <div className="mt-16 p-8 border border-border/30 bg-gradient-to-r from-card/50 to-transparent">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-foreground mb-2">
                JOIN THE READING CIRCLE
              </h4>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-muted-foreground">
                Exclusive early access to new releases, signed editions, and literary events.
              </p>
            </div>
            <button className="flex-shrink-0 px-8 py-4 border border-primary/50 bg-primary/10 text-foreground font-[family-name:var(--font-oswald)] tracking-[0.15em] uppercase text-sm hover:bg-primary/20 transition-all duration-300 cta-glow">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
