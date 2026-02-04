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
    name: "VEO3 Ultra + Gemini",
    image: "/images/veo3.png",
    price: 250,
    features: [
      "Ativado na sua conta atual (no seu e-mail)",
      "Créditos ilimitados para geração de vídeos",
      "Acesso ao Gemini Ultra com todos os recursos",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    highlight: "PREMIUM",
    affiliateLink: "https://pay.cakto.com.br/32ve2bk?affiliate=T7QQRKAn",
  },
  {
    name: "Sora 2",
    image: "/images/sora.png",
    price: 197,
    features: [
      "Acesso completo ao Sora 2 da OpenAI",
      "Geração de vídeos com IA avançada",
      "Conta 100% privada com login fornecido",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    highlight: "NOVIDADE",
    affiliateLink: "https://pay.cakto.com.br/wkx657d_642140?affiliate=takQ9H65",
  },
  {
    name: "Picsart Pro",
    image: "/images/picsart.png",
    price: 47,
    features: [
      "Conta 100% privada com login novo",
      "Todos os recursos Pro liberados",
      "Ferramentas de edição avançadas com IA",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/hszy52t_682828?affiliate=Ba83nAW5",
  },
  {
    name: "Manus IA",
    image: "/manus.jpg",
    price: 97,
    features: [
      "Acesso completo à plataforma Manus IA",
      "Automação de tarefas com inteligência artificial",
      "Conta 100% privada com login fornecido",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/aopm7cg?affiliate=P7grkPRw",
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

const steps = [
  {
    number: "01",
    title: "Escolha seu produto",
    description: "Selecione a plataforma que você quer acessar por 12 meses completos com um único pagamento",
  },
  {
    number: "02",
    title: "Finalize o pagamento",
    description: "Clique em Garantir Acesso Anual e complete o pagamento 100% seguro pela CaktoPay",
  },
  {
    number: "03",
    title: "Receba acesso imediato",
    description: "Você receberá um e-mail com o link para solicitar ativação no WhatsApp. Atendimento por ordem de chegada",
  },
  {
    number: "04",
    title: "Comece a lucrar",
    description: "Pegue seu link de afiliado exclusivo e revenda para amigos, família ou nas redes sociais",
  },
]

export default function Home() {
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"
  const instagramUrl = "https://instagram.com/lucasgaspardigital"

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden aurora-bg grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32 relative z-10">
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-primary/20 text-primary border-primary/30 inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
              <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Oferta Anual Exclusiva - Economia Real</span>
              <span className="sm:hidden">Oferta Exclusiva</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ferramentas Digitais Premium <br />
              <span className="animate-gradient">com Pagamento Único</span>
            </h1>

            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
              Pague uma vez, use o ano inteiro. <br />
              Sem mensalidades, sem surpresas. Economize até 90% nas melhores plataformas.
            </p>

            {/* 4 Benefícios */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 md:gap-6 justify-center pt-4 md:pt-6">
              <div className="flex items-center justify-center gap-1.5 md:gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium">Pagamento único</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 md:gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium">Acesso imediato</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 md:gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium">7 dias garantia</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 md:gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <Wallet className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium">Revenda e lucre</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-2 md:pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-6 md:px-10 py-5 md:py-6 w-full sm:w-auto max-w-xs sm:max-w-none">
                <a href="#planos" className="flex items-center justify-center gap-2">
                  Ver Planos Disponíveis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBar />

      {/* Products Section */}
      <section id="planos" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Escolha Seu <span className="animate-gradient">Plano Anual</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground text-balance max-w-2xl mx-auto px-2">
              Todas as plataformas incluem pagamento único anual, ativação guiada, suporte via WhatsApp e possibilidade
              de revenda através do programa de afiliados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section id="como-funciona" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Como <span className="animate-gradient">Funciona?</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground text-balance">Processo simples e transparente em apenas 4 passos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-4 md:p-6 border-primary/20 bg-card/50 backdrop-blur-sm h-full hover:border-primary/40 transition-colors">
                  <div className="text-3xl md:text-5xl font-bold text-primary/20 mb-2 md:mb-4">{step.number}</div>
                  <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-6 md:p-12 glow-ring">
            <div className="absolute inset-0 aurora-bg opacity-50" />

            <div className="relative z-10 text-center space-y-4 md:space-y-6">
              {/* Foto de Perfil */}
              <div className="flex justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-primary/50 overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
                Pronto para economizar?
              </h2>

              <p className="text-sm md:text-lg text-muted-foreground text-balance max-w-2xl mx-auto px-2">
                Escolha seu plano anual, economize até 90% e ainda ganhe a oportunidade de lucrar revendendo.
                Pagamento seguro, garantia de 7 dias e suporte dedicado.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-4 justify-center pt-2 md:pt-4">
                <div className="flex items-center gap-1.5 md:gap-2 border border-primary/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                  <Zap className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  <span>Acesso instantâneo</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 border border-primary/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                  <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>

              <div className="pt-4 md:pt-6 border-t border-border/30 mt-4 md:mt-6">
                <p className="text-sm md:text-base text-muted-foreground">
                  Siga no Instagram:{" "}
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    @lucasgaspardigital
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 md:space-y-6">
            <p className="text-sm md:text-base text-muted-foreground">
              Pagamento 100% seguro processado pela CaktoPay
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              7 dias de garantia • Suporte no WhatsApp • Afiliação inclusa em todos os planos
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
                <span className="text-xs md:text-sm">Siga no Instagram</span>
              </a>
            </div>
            <div className="border-t border-border/50 pt-4 md:pt-6 text-xs md:text-sm text-muted-foreground">
              <p>© 2026 Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  )
}
