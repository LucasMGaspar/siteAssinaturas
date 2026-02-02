"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SiWhatsapp } from "react-icons/si"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false)
  }

  const navItems = [
    { label: "Planos", id: "planos" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="/profile.jpg" alt="Lucas Digital" className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" />
          <span className="text-base md:text-lg font-bold text-foreground">
            Lucas <span className="text-primary">Digital</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* WhatsApp Button - Desktop */}
          <Button asChild className="hidden sm:flex bg-[#25D366] hover:bg-[#20BD5B] text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <SiWhatsapp className="h-4 w-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </Button>

          {/* WhatsApp Button - Mobile (icon only) */}
          <Button asChild size="icon" className="sm:hidden bg-[#25D366] hover:bg-[#20BD5B] text-white h-9 w-9">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl border-primary/20">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 pb-4 border-b border-border/50">
                  <img src="/profile.jpg" alt="Lucas Digital" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-lg font-bold text-foreground">
                    Lucas <span className="text-primary">Digital</span>
                  </span>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-border/50">
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BD5B] text-white">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <SiWhatsapp className="h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
