"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  image: string
  price: number
  features: string[]
  highlight?: string
  affiliateLink: string
}

export function ProductCard({ name, image, price, features, highlight, affiliateLink }: ProductCardProps) {
  const highlightStyles: Record<string, string> = {
    "MAIS VENDIDO": "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    "PREMIUM": "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    "NOVIDADE": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  }

  return (
    <Card className="group relative overflow-hidden glass-card-hover h-full flex flex-col rounded-3xl">
      {highlight && (
        <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
          <Badge className={`${highlightStyles[highlight] || "bg-primary text-primary-foreground"} font-bold text-[10px] md:text-xs px-2.5 md:px-3 py-1 shadow-lg`}>
            {highlight}
          </Badge>
        </div>
      )}

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Logo */}
        <div className="relative h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-5 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-transform duration-300">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain p-1" />
        </div>

        {/* Title & Price */}
        <div className="text-center space-y-2 md:space-y-3 mb-4 md:mb-5">
          <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">{name}</h3>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="text-xs text-muted-foreground">R$</span>
            <span className="text-4xl md:text-5xl font-extrabold text-gradient-blue">{price.toString().replace('.', ',')}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-[11px] md:text-xs text-primary font-medium">Pagamento único anual</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2.5 md:space-y-3 pt-4 md:pt-5 border-t border-white/10 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary" />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="w-full bg-gradient-blue hover:opacity-90 text-white font-bold glow-button mt-5 md:mt-6 text-sm md:text-base py-5 md:py-6 rounded-xl group/btn"
        >
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            Garantir Acesso Anual
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </Card>
  )
}
