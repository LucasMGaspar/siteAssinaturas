"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp } from "react-icons/si"

export function FloatingContact() {
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-[#25D366] hover:bg-[#20BD5B] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-0"
      style={{
        boxShadow: "0 0 20px rgba(37, 211, 102, 0.4), 0 4px 30px rgba(37, 211, 102, 0.3)",
      }}
      aria-label="Contato via WhatsApp"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <SiWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </Button>
  )
}
