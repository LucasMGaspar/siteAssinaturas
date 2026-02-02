"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Users, Clock, ThumbsUp } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Designer Freelancer",
    content:
      "Economizei mais de R$400 no primeiro ano com o Canva Pro. A ativação foi super rápida e o suporte é excelente!",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Roberto Silva",
    role: "Criador de Conteúdo",
    content:
      "Ter ChatGPT Plus e YouTube Premium no plano anual mudou meu jogo. Investi uma vez e uso o ano todo sem preocupação.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Julia Mendes",
    role: "Estudante de Marketing",
    content:
      "Além de economizar, ainda consegui revender para amigos com o programa de afiliados. Meu plano praticamente se pagou!",
    rating: 5,
    avatar: "JM",
  },
]

const stats = [
  {
    icon: Users,
    value: "2.500+",
    label: "Clientes Ativos",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfação",
  },
  {
    icon: Clock,
    value: "< 2h",
    label: "Ativação Média",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem Já <span className="animate-gradient">Economizou</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Veja o que nossos clientes estão dizendo sobre os planos anuais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary/30">
                  <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
