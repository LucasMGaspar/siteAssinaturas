"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp, SiInstagram } from "react-icons/si"
import { MessageCircle } from "lucide-react"

export function ContactBar() {
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"
  const instagramUrl = "https://instagram.com/lucasgaspardigital"

  return (
    <div className="w-full py-5 md:py-6 border-y border-white/10 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="text-center flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm md:text-base text-foreground font-semibold">Ficou com dúvidas?</p>
              <p className="text-xs md:text-sm text-muted-foreground">Fale conosco e receba ajuda rápida</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button asChild className="bg-[#25D366] hover:bg-[#20BD5B] text-white h-10 md:h-11 text-sm px-4 md:px-5 rounded-xl font-medium">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>

            <Button asChild variant="outline" className="border-white/20 hover:bg-white/5 h-10 md:h-11 text-sm px-4 md:px-5 rounded-xl font-medium">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiInstagram className="h-4 w-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
