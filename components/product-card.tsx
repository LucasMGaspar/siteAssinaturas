"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
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
  return (
    <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 h-full flex flex-col">
      {highlight && (
        <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
          <Badge className="bg-primary text-primary-foreground font-semibold text-[10px] md:text-xs px-2 md:px-2.5 py-0.5">{highlight}</Badge>
        </div>
      )}

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="relative h-16 w-16 md:h-20 md:w-20 mx-auto mb-3 md:mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>

        <div className="text-center space-y-1.5 md:space-y-2 mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-foreground">{name}</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl md:text-4xl font-bold text-primary">R${price}</span>
            <span className="text-sm md:text-base text-muted-foreground">/ano</span>
          </div>
          <p className="text-xs text-muted-foreground">Pagamento único anual</p>
        </div>

        <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-border/50 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-ring mt-3 md:mt-4 text-sm md:text-base py-2 md:py-2.5"
        >
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            Garantir Plano Anual
          </a>
        </Button>
      </div>
    </Card>
  )
}
