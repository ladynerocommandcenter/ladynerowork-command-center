import Link from "next/link"

// Deduplicated social links
const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/ladynero100",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
  },
  { 
    name: "X", 
    href: "https://x.com/GeneralLadyNero",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com/@ladynero_2tm",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
  },
  { 
    name: "TikTok", 
    href: "https://www.tiktok.com/@lady.nero2",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" 
  },
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/LadyNero",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" 
  },
  { 
    name: "Snapchat", 
    href: "https://www.snapchat.com/add/ladynero2ttm",
    icon: "M12.017.012c.434.006.87.037 1.294.1 1.417.21 2.705.73 3.84 1.546.17.122.336.25.496.385.52.438.986.937 1.39 1.49.544.744.97 1.57 1.26 2.452.235.714.377 1.456.42 2.212.02.335.013.67-.02 1.004-.025.26-.06.52-.106.776-.035.195-.076.389-.122.582-.024.1-.05.2-.08.298.16.08.326.152.497.215.35.13.716.223 1.09.27.21.025.422.036.633.034.147-.002.293-.01.44-.022l.148-.014c.09-.01.176.04.21.124.028.068.03.146.007.218-.036.113-.104.213-.195.29-.143.12-.296.23-.46.325-.295.173-.607.32-.93.44-.155.057-.313.107-.473.15-.085.023-.17.043-.256.06l-.114.02c-.003.04-.01.078-.02.117-.053.208-.125.41-.215.605-.112.24-.254.466-.422.67-.31.377-.698.688-1.135.91-.276.14-.568.25-.87.328-.367.094-.745.148-1.125.16-.22.008-.44.002-.66-.018-.235.42-.505.82-.81 1.194-.464.567-1.01 1.063-1.62 1.472-.42.28-.866.52-1.336.716-.518.216-1.058.382-1.61.498-.617.13-1.248.197-1.882.2-.634.003-1.267-.055-1.888-.176-.557-.108-1.102-.266-1.627-.472-.474-.186-.926-.417-1.35-.69-.617-.397-1.173-.882-1.65-1.44-.31-.362-.586-.752-.828-1.164-.222.02-.444.025-.667.017-.382-.012-.762-.066-1.132-.16-.303-.078-.597-.188-.875-.33-.44-.222-.83-.532-1.142-.91-.17-.205-.313-.43-.426-.672-.09-.194-.162-.397-.215-.604-.01-.04-.017-.08-.02-.12l-.114-.02c-.086-.018-.172-.038-.257-.06-.16-.044-.318-.094-.473-.15-.323-.12-.635-.267-.93-.44-.164-.095-.318-.205-.46-.325-.092-.077-.16-.177-.196-.29-.023-.072-.02-.15.007-.218.034-.085.12-.135.21-.124l.148.014c.147.013.294.02.44.022.212.002.423-.01.633-.035.374-.046.74-.14 1.09-.27.17-.062.337-.134.498-.214-.03-.1-.056-.198-.08-.298-.046-.193-.087-.387-.122-.582-.046-.257-.08-.517-.106-.777-.033-.334-.04-.67-.02-1.004.043-.756.185-1.498.42-2.212.29-.883.716-1.708 1.26-2.453.404-.552.87-1.05 1.39-1.49.16-.134.326-.262.496-.384 1.135-.816 2.423-1.336 3.84-1.546.424-.063.86-.094 1.294-.1h.032z" 
  },
  { 
    name: "Pinterest", 
    href: "https://www.pinterest.com/ladyneroofficial/",
    icon: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" 
  },
  { 
    name: "Linktree", 
    href: "https://linktr.ee/ladynero2TM",
    icon: "M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2.226V8.121h5.909l-4.2-4.005 2.324-2.38 4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z" 
  },
]

const musicPlatforms = [
  { name: "Spotify", href: "https://open.spotify.com/artist/1Joa3ujqQrsho3YGeth7X8" },
  { name: "Apple Music", href: "https://music.apple.com/us/artist/lady-nero/1892912332" },
  { name: "SoundCloud", href: "https://soundcloud.com/ladynero/sets/lady-nero-strategic-takeover" },
  { name: "Audiomack", href: "https://audiomack.com/ladynero100" },
]

export function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-border/30 paisley-accent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.2em] text-foreground">
                LADY NERO
              </span>
            </Link>
            <p className="font-[family-name:var(--font-montserrat)] font-light text-muted-foreground max-w-sm leading-relaxed mb-6">
              Music. Fashion. Literature. Leadership.<br />
              Built in Atlanta. Respected worldwide.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-border/50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] uppercase text-muted-foreground">
                2 Tight Militia &bull; #TeamGreyAndBlue
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-foreground mb-6">
              NAVIGATE
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Music", href: "#music" },
                { label: "Fashion", href: "#fashion" },
                { label: "Books", href: "#books" },
                { label: "Militia", href: "#militia" },
                { label: "Booking", href: "#booking" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-[family-name:var(--font-oswald)] text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Stream Music */}
          <div>
            <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-foreground mb-6">
              STREAM
            </h4>
            <nav className="space-y-3">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-[family-name:var(--font-oswald)] text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {platform.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <p className="font-[family-name:var(--font-montserrat)] text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Lady Nero Empire. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-border/50 text-muted-foreground hover:border-primary hover:text-foreground transition-all duration-300"
                aria-label={social.name}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
