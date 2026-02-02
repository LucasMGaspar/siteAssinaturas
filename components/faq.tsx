"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o plano anual?",
    answer:
      "Você paga apenas uma vez e tem acesso completo durante 12 meses. Não há mensalidades ou cobranças recorrentes. É um pagamento único que garante seu acesso por todo o período.",
  },
  {
    question: "O pagamento é realmente seguro?",
    answer:
      "Sim! Utilizamos plataformas de pagamento certificadas e confiáveis. Seus dados estão protegidos com criptografia de ponta. Você também conta com garantia de 7 dias para qualquer problema.",
  },
  {
    question: "Quanto tempo leva para ativar minha conta?",
    answer:
      "A ativação é rápida! Geralmente ocorre em até 2 horas após a confirmação do pagamento. Nossa equipe trabalha para liberar seu acesso o mais rápido possível, incluindo finais de semana.",
  },
  {
    question: "Posso usar em mais de um dispositivo?",
    answer:
      "Depende do plano escolhido. Contas individuais permitem uso em múltiplos dispositivos do mesmo usuário. Contas compartilhadas têm limitações específicas que são informadas na descrição de cada produto.",
  },
  {
    question: "O que preciso enviar para ativar?",
    answer:
      "As informações necessárias variam por produto. Geralmente pedimos seu e-mail ou dados de acesso. Nosso suporte vai te guiar passo a passo após a compra, tornando o processo simples e rápido.",
  },
  {
    question: "Tem garantia? E se eu não gostar?",
    answer:
      "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos seu dinheiro sem burocracias ou perguntas complicadas.",
  },
  {
    question: "Como funciona a afiliação para revenda?",
    answer:
      "Todos os planos incluem acesso ao programa de afiliados. Você recebe um link exclusivo e ganha comissão por cada venda realizada através dele. É uma ótima forma de recuperar seu investimento ou até lucrar.",
  },
  {
    question: "Posso renovar depois de 1 ano?",
    answer:
      "Claro! Antes do vencimento, vamos te avisar e você poderá renovar nas mesmas condições ou até melhores. Clientes fiéis sempre têm prioridade e vantagens especiais.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="animate-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Tire suas dúvidas sobre os planos anuais e nosso funcionamento
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-primary/20 rounded-2xl px-6 bg-card/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
