"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Como recebo o acesso após o pagamento?",
    answer:
      "Você recebe instantaneamente um e-mail de confirmação com o link para o WhatsApp do suporte. É por lá que você solicita a ativação do seu acesso.",
  },
  {
    question: "Tem mensalidade?",
    answer:
      "Não! O pagamento é único e garante 12 meses de acesso completo à plataforma escolhida.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "O atendimento ocorre por ordem de chegada no WhatsApp. Evite mandar várias mensagens, pois isso pode atrasar seu atendimento.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim! Oferecemos 7 dias de garantia do recebimento do produto pelo site da Cakto.",
  },
  {
    question: "Funciona em qualquer dispositivo?",
    answer:
      "Sim! Todos os produtos são compatíveis com Android, iPhone, Tablet e Computador.",
  },
  {
    question: "Posso revender?",
    answer:
      "Sim! Todos os planos incluem acesso ao programa de afiliados. Você recebe um link exclusivo e ganha comissão por cada venda realizada através dele.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <Badge className="highlight-badge text-primary text-xs md:text-sm px-4 py-2 rounded-full font-medium mb-4 md:mb-6">
            <HelpCircle className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 md:mb-6">
            Perguntas <span className="text-gradient-blue">Frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Tire suas dúvidas sobre os planos anuais e nosso funcionamento
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border-white/10 rounded-2xl md:rounded-3xl px-5 md:px-7 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary transition-colors py-4 md:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
