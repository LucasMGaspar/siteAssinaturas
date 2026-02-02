"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp } from "react-icons/si"
import { Zap } from "lucide-react"

export function Header() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            Planos <span className="text-primary">Premium</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("planos")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
        </nav>

        <Button asChild className="bg-[#25D366] hover:bg-[#20BD5B] text-white">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <SiWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
