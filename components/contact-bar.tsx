"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp, SiInstagram } from "react-icons/si"

export function ContactBar() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"
  const instagramUrl = "https://instagram.com/seuusuario"

  return (
    <div className="w-full py-4 border-y border-primary/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold">Tire suas dúvidas agora mesmo</p>
            <p className="text-sm text-muted-foreground">Nossa equipe responde em minutos via WhatsApp ou Instagram</p>
          </div>

          <div className="flex gap-3">
            <Button asChild className="bg-[#25D366] hover:bg-[#20BD5B] text-white">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>

            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent">
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
