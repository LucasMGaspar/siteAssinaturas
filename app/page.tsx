import { Header } from "@/components/header"
import { ContactBar } from "@/components/contact-bar"
import { ProductCard } from "@/components/product-card"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials" // Declare the Testimonials component

import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ShieldCheck, Timer, Wallet, Sparkles, CheckCircle2, Zap } from "lucide-react"
import { SiWhatsapp, SiInstagram } from "react-icons/si"

const products = [
  {
    name: "Canva Pro",
    image: "/images/canva.png",
    price: 37,
    features: [
      "Ativado na sua conta atual (no seu e-mail)",
      "Você será associado à uma equipe PRO com todos os recursos",
      "Kit Marca e Apps inclusos (solicite ao suporte)",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    highlight: "MAIS VENDIDO",
    affiliateLink: "https://pay.cakto.com.br/magvm7d?affiliate=XRCU3CzX",
  },
  {
    name: "ChatGPT Plus Compartilhado",
    image: "/images/chatgpt.png",
    price: 47,
    features: [
      "Acesso com login fornecido (e-mail e senha)",
      "Use no modo temporário ou apague histórico para privacidade",
      "Todos os recursos do ChatGPT Plus liberados",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/38cqnw3?affiliate=RwcA7Yni",
  },
  {
    name: "ChatGPT Plus Individual",
    image: "/images/chatgpt.png",
    price: 97,
    features: [
      "Login 100% individual e privado",
      "Opção de ativar na sua conta por +R$19,90",
      "Não precisa usar modo temporário",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/aopm7cg?affiliate=P7grkPRw",
  },
  {
    name: "CapCut Pro",
    image: "/images/capcut.png",
    price: 47,
    features: [
      "Conta 100% privada (seus projetos são só seus)",
      "Acesso com login novo (e-mail e senha)",
      "Todos os recursos Pro liberados",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/97de2xb?affiliate=pNpMY48W",
  },
  {
    name: "VEO3 Premium + Gemini",
    image: "/images/veo3.png",
    price: 97,
    features: [
      "Ativado na sua conta atual (no seu e-mail)",
      "1200 créditos renovados por mês automaticamente",
      "100% privado, sem necessidade de apagar histórico",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/32ve2bk?affiliate=T7QQRKAn",
  },
  {
    name: "Spotify Premium",
    image: "/images/spotify.png",
    price: 97,
    features: [
      "Conta 100% privada com login novo",
      "Opção de ativar no seu e-mail por apenas +R$19,90",
      "Sem anúncios, qualidade máxima, modo offline",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/hs8obwk?affiliate=TAHbtXyP",
  },
  {
    name: "YouTube Premium",
    image: "/images/youtube.png",
    price: 67,
    features: [
      "Ativado na sua conta atual do YouTube",
      "Sem anúncios + reprodução em segundo plano",
      "YouTube Music Premium + YouTube Originals",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/7r6pdpa?affiliate=XfQFM77F",
  },
  {
    name: "YouTube Premium Família",
    image: "/images/youtube.png",
    price: 97,
    features: [
      "Ativado na sua conta + adicione 6 contas",
      "Sem anúncios + reprodução em segundo plano",
      "YouTube Music Premium para toda família",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/k8n7av6?affiliate=XfQFM77F",
  },

  {
    name: "Netflix Premium",
    image: "/netflix.jpg",
    price: 167.9,
    features: [
      "Conta 100% privada com login novo",
      "Acesso com e-mail e senha fornecidos",
      "Suporta até 4 telas simultâneas com 4K liberado",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/6xej6yf?affiliate=gXEPJFfy",
  },
]

const benefits = [
  {
    icon: Wallet,
    title: "Economia Inteligente",
    description: "Corte real de custos mensais. Pague uma vez e use o ano inteiro sem surpresas na fatura.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    description: "Pagamento 100% seguro com garantia incondicional de 7 dias. Sua satisfação é nossa prioridade.",
  },
  {
    icon: Timer,
    title: "Ativação Expressa",
    description:
      "Acesso liberado em até 2 horas após confirmação. Nossa equipe trabalha rápido para você começar logo.",
  },
]

const steps = [
  {
    number: "01",
    title: "Escolha Seu Plano",
    description: "Selecione a plataforma que você mais usa e veja a economia anual",
  },
  {
    number: "02",
    title: "Realize o Pagamento",
    description: "Pagamento único e seguro. Aceitamos PIX, cartão e outras formas",
  },
  {
    number: "03",
    title: "Receba os Dados",
    description: "Você recebe as instruções e dados de acesso por e-mail ou WhatsApp",
  },
  {
    number: "04",
    title: "Aproveite por 12 Meses",
    description: "Use sem limites durante todo o ano com suporte sempre disponível",
  },
]

export default function Home() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"
  const instagramUrl = "https://instagram.com/seuusuario"

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden aurora-bg grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-primary/20 text-primary border-primary/30 inline-flex items-center gap-2">
                <Sparkles className="h-3 w-3" />
                Planos Anuais Premium
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Acesso Anual às <span className="animate-gradient">Melhores Plataformas</span> com Um Único Pagamento
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Chega de pagar mensalidades caras! Garanta 12 meses de acesso completo às principais ferramentas
                digitais com economia agressiva e pagamento único.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">Pagamento Único</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">Garantia 7 Dias</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">Suporte Dedicado</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <Card className="p-8 border-primary/30 bg-card/80 backdrop-blur-xl glow-ring">
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-6">🔥 Oferta Premium</Badge>

              <h3 className="text-2xl font-bold text-foreground mb-6">Por que escolher o plano anual?</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pagamento Único</p>
                    <p className="text-sm text-muted-foreground">Sem mensalidades, sem surpresas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Timer className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ativação Rápida</p>
                    <p className="text-sm text-muted-foreground">Comece a usar em até 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Garantia Total</p>
                    <p className="text-sm text-muted-foreground">7 dias para testar sem riscos</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="flex-1 bg-[#25D366] hover:bg-[#20BD5B] text-white">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <SiWhatsapp className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <SiInstagram className="h-5 w-5" />
                    Instagram
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ContactBar />

      {/* Products Section */}
      <section id="planos" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Escolha Seu <span className="animate-gradient">Plano Anual</span>
            </h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              Todas as plataformas incluem pagamento único anual, ativação guiada, suporte via WhatsApp e possibilidade
              de revenda através do programa de afiliados
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por Que Escolher <span className="animate-gradient">Plano Anual?</span>
            </h2>
            <p className="text-muted-foreground text-balance">
              Vantagens reais que fazem a diferença no seu bolso e na sua experiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm text-center hover:border-primary/40 transition-colors"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-ring">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como <span className="animate-gradient">Funciona?</span>
            </h2>
            <p className="text-muted-foreground text-balance">Processo simples e transparente em apenas 4 passos</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm h-full hover:border-primary/40 transition-colors">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

 // Import the Testimonials component here

      <FAQ />

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-12 glow-ring">
            <div className="absolute inset-0 aurora-bg opacity-50" />

            <div className="relative z-10 text-center space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30">💎 Oferta Exclusiva</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Pronto para <span className="animate-gradient">Economizar de Verdade?</span>
              </h2>

              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que já estão economizando com nossos planos anuais. Suporte rápido,
                ativação guiada e garantia total.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5B] text-white text-lg px-8">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiWhatsapp className="h-5 w-5" />
                    Falar com Especialista
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 text-lg px-8 bg-transparent"
                >
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiInstagram className="h-5 w-5" />
                    Seguir no Instagram
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Garantia 7 Dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>Ativação Rápida</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-foreground">
                  Planos <span className="text-primary">Premium</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Planos anuais premium com economia real e suporte dedicado.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Garantias</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Pagamento 100% Seguro</li>
                <li>✓ Garantia Incondicional de 7 Dias</li>
                <li>✓ Suporte Rápido via WhatsApp</li>
                <li>✓ Ativação Guiada Passo a Passo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Reembolso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Planos Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  )
}
