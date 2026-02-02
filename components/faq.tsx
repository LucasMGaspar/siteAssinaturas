"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    <section id="faq" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Perguntas <span className="animate-gradient">Frequentes</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-balance">
            Tire suas dúvidas sobre os planos anuais e nosso funcionamento
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-primary/20 rounded-xl md:rounded-2xl px-4 md:px-6 bg-card/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-sm md:text-base hover:text-primary transition-colors py-3 md:py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
