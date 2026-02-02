"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp, SiInstagram } from "react-icons/si"

export function ContactBar() {
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"
  const instagramUrl = "https://instagram.com/lucasgaspardigital"

  return (
    <div className="w-full py-4 md:py-5 border-y border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          <div className="text-center">
            <p className="text-sm md:text-base text-foreground font-semibold">Ficou com dúvidas?</p>
            <p className="text-xs md:text-sm text-muted-foreground">Fale com a gente e receba orientação em poucos minutos.</p>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20BD5B] text-white h-9 md:h-10 text-xs md:text-sm px-3 md:px-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2">
                <SiWhatsapp className="h-3.5 w-3.5 md:h-4 md:w-4" />
                WhatsApp
              </a>
            </Button>

            <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 bg-transparent h-9 md:h-10 text-xs md:text-sm px-3 md:px-4">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2">
                <SiInstagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
