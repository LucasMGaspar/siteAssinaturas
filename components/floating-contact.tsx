"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp } from "react-icons/si"

export function FloatingContact() {
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5B] text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none p-0"
      aria-label="Contato via WhatsApp"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <SiWhatsapp className="h-6 w-6" />
      </a>
    </Button>
  )
}
