"use client"

import Image from "next/image"

const logos = [
  { image: "/images/canva.png", name: "Canva Pro" },
  { image: "/images/chatgpt.png", name: "ChatGPT" },
  { image: "/images/spotify.png", name: "Spotify" },
  { image: "/images/youtube.png", name: "YouTube" },
  { image: "/netflix.jpg", name: "Netflix" },
  { image: "/images/veo3.png", name: "VEO 3" },
  { image: "/images/picsart.png", name: "Picsart" },
  { image: "/images/capcut.png", name: "CapCut" },
  { image: "/images/sora.png", name: "Sora 2" },
]

export function LogoCarousel() {
  return (
    <div className="w-full py-6 md:py-8 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll-left items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 md:mx-5 flex flex-col items-center gap-1.5 md:gap-2 group cursor-pointer"
            >
              <div className="relative w-[52px] h-[52px] md:w-[68px] md:h-[68px] rounded-[14px] md:rounded-[18px] overflow-hidden shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-110">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 52px, 68px"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
