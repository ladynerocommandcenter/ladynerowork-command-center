"use client"

import { useState } from "react"

// Deduplicated social/music links
const musicLinks = {
  spotify: "https://open.spotify.com/artist/1Joa3ujqQrsho3YGeth7X8",
  appleMusic: "https://music.apple.com/us/artist/lady-nero/1892912332",
  soundcloud: "https://soundcloud.com/ladynero/sets/lady-nero-strategic-takeover",
  audiomack: "https://audiomack.com/ladynero100",
  distrokid: "https://distrokid.com/hyperfollow/ladynero/her-ertha-god-goat-mode-20",
}

const videos = [
  {
    id: "Yn_JMSTYr4g",
    title: "Lady Nero - Official Video",
  },
  {
    id: "thndlZV-pJg",
    title: "Lady Nero - Music Video",
  },
]

const releases = [
  {
    title: "Her Ertha God (GOAT Mode 2.0)",
    type: "Single",
    year: "2025",
    link: musicLinks.distrokid,
  },
  {
    title: "Strategic Takeover",
    type: "Album",
    year: "2024",
    link: musicLinks.soundcloud,
  },
  {
    title: "Command & Conquer",
    type: "EP",
    year: "2024",
    link: musicLinks.spotify,
  },
]

export function MusicSection() {
  const [activeTab, setActiveTab] = useState<"streaming" | "videos">("videos")

  return (
    <section id="music" className="relative py-24 md:py-32 px-6 md:px-12 paisley-accent">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          The Sound
        </p>
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-[0.1em] text-foreground mb-6">
          MUSIC
        </h2>
        <p className="font-[family-name:var(--font-montserrat)] font-light text-muted-foreground max-w-xl leading-relaxed">
          Military precision meets southern soul. Experience the sound that commands attention 
          and moves nations.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex gap-4 border-b border-border/30">
          <button
            onClick={() => setActiveTab("videos")}
            className={`pb-4 px-2 font-[family-name:var(--font-oswald)] text-sm tracking-[0.15em] uppercase transition-colors ${
              activeTab === "videos"
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab("streaming")}
            className={`pb-4 px-2 font-[family-name:var(--font-oswald)] text-sm tracking-[0.15em] uppercase transition-colors ${
              activeTab === "streaming"
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Streaming
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === "videos" ? (
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative border border-border/30 hover:border-primary/50 transition-all duration-300 bg-card/30"
              >
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 border-t border-border/30">
                  <h3 className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-foreground">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {releases.map((release, index) => (
              <a
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                key={release.title}
                className="group relative bg-card/50 border border-border/30 p-6 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Album Art Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-secondary to-background mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c0c0c0]/5 to-transparent" />
                  <div className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-foreground mb-1">
                      {release.title}
                    </h3>
                    <p className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {release.type} &bull; {release.year}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Streaming Platform Links */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Spotify */}
          <a
            href={musicLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-3 border border-border/50 text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.1em] uppercase text-xs hover:border-[#1DB954] hover:text-[#1DB954] transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Spotify
          </a>

          {/* Apple Music */}
          <a
            href={musicLinks.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-3 border border-border/50 text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.1em] uppercase text-xs hover:border-[#fc3c44] hover:text-[#fc3c44] transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.36-2.155-1.268a2.007 2.007 0 01-.14-.413c-.18-.947.165-1.807 1.003-2.302.327-.193.69-.32 1.059-.384.434-.074.87-.138 1.303-.212.27-.046.472-.177.548-.456a.844.844 0 00.03-.252v-4.413c0-.235-.098-.393-.335-.449-.147-.034-.296-.058-.446-.08l-3.297-.535a.84.84 0 00-.187-.022c-.235 0-.4.142-.432.378-.016.13-.024.262-.024.393v6.574c0 .384-.048.762-.217 1.113-.31.64-.832 1.019-1.52 1.184-.29.07-.585.106-.882.125-1.026.063-1.86-.276-2.32-1.269a1.835 1.835 0 01-.176-.682c-.065-.664.088-1.26.55-1.753.326-.348.734-.571 1.188-.71.39-.118.79-.188 1.187-.265.192-.038.382-.082.57-.133.235-.065.37-.225.392-.468.005-.053.008-.106.008-.16V6.67c0-.264.087-.453.326-.558.106-.047.216-.085.328-.113l5.46-1.21c.173-.038.35-.065.525-.09.224-.032.405.086.468.303.02.066.03.137.03.208v4.893z"/>
            </svg>
            Apple
          </a>

          {/* SoundCloud */}
          <a
            href={musicLinks.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-3 border border-border/50 text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.1em] uppercase text-xs hover:border-[#ff5500] hover:text-[#ff5500] transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899 1.79c-.053 0-.09.034-.095.087l-.189 1.369.189 1.33c.006.051.044.086.095.086.053 0 .09-.035.097-.086l.213-1.33-.213-1.369c-.007-.052-.044-.087-.097-.087zm1.778-.943c-.06 0-.104.045-.116.103l-.21 1.899.21 1.85c.012.058.056.103.116.103.059 0 .102-.045.116-.103l.237-1.85-.237-1.899c-.014-.058-.057-.103-.116-.103zm.89-.132c-.068 0-.12.053-.13.12l-.194 2.031.194 1.963c.01.067.062.12.13.12s.12-.053.132-.12l.218-1.963-.218-2.031c-.012-.067-.064-.12-.132-.12zm.903-.203c-.076 0-.134.058-.145.134l-.178 2.234.178 2.057c.011.076.069.134.145.134.075 0 .132-.058.144-.134l.202-2.057-.202-2.234c-.012-.076-.069-.134-.144-.134zm.901-.027c-.082 0-.144.063-.157.145l-.16 2.261.16 2.121c.013.082.075.145.157.145.08 0 .143-.063.156-.145l.184-2.121-.184-2.261c-.013-.082-.076-.145-.156-.145zm.91.214c-.087 0-.156.066-.167.152l-.145 2.047.145 2.061c.011.086.08.152.167.152.085 0 .153-.066.166-.152l.164-2.061-.164-2.047c-.013-.086-.081-.152-.166-.152zm1.816-1.913c-.065 0-.13.03-.175.08-.031.034-.052.078-.055.128l-.12 3.653.12 2.17c.003.05.024.094.055.128.045.049.11.08.175.08.064 0 .13-.031.175-.08.031-.034.051-.078.055-.128l.136-2.17-.136-3.653c-.004-.05-.024-.094-.055-.128a.234.234 0 00-.175-.08zm-.901.296c-.088 0-.161.067-.175.155l-.128 3.445.128 2.138c.014.088.087.155.175.155.087 0 .159-.067.174-.155l.144-2.138-.144-3.445c-.015-.088-.087-.155-.174-.155zm1.801-1.173c-.097 0-.18.078-.188.175l-.104 4.232.104 2.156c.008.097.091.175.188.175.096 0 .178-.078.187-.175l.118-2.156-.118-4.232c-.009-.097-.091-.175-.187-.175zm.903-.106c-.106 0-.193.086-.2.192l-.087 4.338.087 2.18c.007.106.094.192.2.192.105 0 .191-.086.199-.192l.099-2.18-.099-4.338c-.008-.106-.094-.192-.199-.192zm.902-.1c-.113 0-.204.091-.21.203l-.071 4.438.071 2.2c.006.112.097.203.21.203.112 0 .203-.091.21-.203l.08-2.2-.08-4.438c-.007-.112-.098-.203-.21-.203zm1.808-.92a.254.254 0 00-.191.084c-.04.044-.063.103-.065.165l-.051 5.358.051 2.2c.002.062.025.121.065.165a.254.254 0 00.191.084.254.254 0 00.192-.084c.039-.044.063-.103.065-.165l.058-2.2-.058-5.358a.224.224 0 00-.065-.165.254.254 0 00-.192-.084zm-.903.472c-.12 0-.218.098-.224.218l-.054 4.886.054 2.19c.006.12.104.218.224.218.119 0 .216-.098.223-.218l.061-2.19-.061-4.886c-.007-.12-.104-.218-.223-.218zm1.807-.752a.28.28 0 00-.21.093.28.28 0 00-.072.18l-.035 5.565.035 2.17a.28.28 0 00.072.18.28.28 0 00.21.093.28.28 0 00.21-.093.28.28 0 00.072-.18l.04-2.17-.04-5.565a.28.28 0 00-.072-.18.28.28 0 00-.21-.093zm.903-.162a.303.303 0 00-.228.102.303.303 0 00-.078.197l-.018 5.727.018 2.134a.303.303 0 00.078.197.303.303 0 00.228.102.303.303 0 00.228-.102.303.303 0 00.078-.197l.02-2.134-.02-5.727a.303.303 0 00-.078-.197.303.303 0 00-.228-.102zm3.493.87c-.453 0-.885.089-1.278.25-.213-2.426-2.254-4.328-4.742-4.328-.581 0-1.14.109-1.651.307-.191.074-.241.149-.244.296v8.506c.004.154.13.278.287.29h7.628a2.927 2.927 0 002.929-2.922 2.927 2.927 0 00-2.929-2.399z"/>
            </svg>
            SoundCloud
          </a>

          {/* Audiomack */}
          <a
            href={musicLinks.audiomack}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-3 border border-border/50 text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.1em] uppercase text-xs hover:border-[#ffa200] hover:text-[#ffa200] transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.787a.738.738 0 01-1.012.256c-2.769-1.69-6.251-2.073-10.36-1.136a.738.738 0 01-.33-1.44c4.492-1.025 8.345-.584 11.446 1.308a.738.738 0 01.256 1.012zm1.574-3.36a.923.923 0 01-1.264.303c-3.166-1.947-7.998-2.511-11.74-1.375a.923.923 0 01-.535-1.767c4.275-1.298 9.587-.668 13.236 1.575a.923.923 0 01.303 1.264zm.136-3.5c-3.8-2.257-10.068-2.464-13.695-1.363a1.107 1.107 0 11-.643-2.12c4.16-1.264 11.078-1.02 15.449 1.577a1.107 1.107 0 01-1.11 1.907z"/>
            </svg>
            Audiomack
          </a>

          {/* DistroKid */}
          <a
            href={musicLinks.distrokid}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-3 border border-border/50 text-muted-foreground font-[family-name:var(--font-oswald)] tracking-[0.1em] uppercase text-xs hover:border-foreground hover:text-foreground transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            All Platforms
          </a>
        </div>
      </div>
    </section>
  )
}
