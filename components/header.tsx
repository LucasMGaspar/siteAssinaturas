"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

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
    <>
      {/* Golden Banner - Oferta Relâmpago */}
      <div className="golden-banner w-full py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Zap className="h-4 w-4 animate-pulse" />
          <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
            Oportunidade por tempo limitado
          </span>
          <Zap className="h-4 w-4 animate-pulse" />
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-2xl">
        <div className="container mx-auto flex h-16 md:h-18 items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden ring-2 ring-primary/30">
              <img src="/profile.jpg" alt="Lucas Digital" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">
              Lucas <span className="text-gradient-blue">Digital</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-10 w-10 rounded-xl hover:bg-white/5">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] glass-card border-white/10">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary/30">
                    <img src="/profile.jpg" alt="Lucas Digital" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xl font-bold text-foreground">
                    Lucas <span className="text-gradient-blue">Digital</span>
                  </span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-foreground hover:text-primary hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
