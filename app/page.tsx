import Image from "next/image"
import { Header } from "@/components/header"
import { ContactBar } from "@/components/contact-bar"
import { ProductCard } from "@/components/product-card"
import { FAQ } from "@/components/faq"
import { LogoCarousel } from "@/components/logo-carousel"
import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck, Wallet, Zap, ArrowRight,
  Star, ChevronDown
} from "lucide-react"
import { SiInstagram, SiWhatsapp } from "react-icons/si"

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
    affiliateLink: "https://pay.cakto.com.br/magvm7d?affiliate=Y7WQJF7h",
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
    affiliateLink: "https://pay.cakto.com.br/393ist2?affiliate=GUGMbriK",
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
    affiliateLink: "https://pay.cakto.com.br/3cm22tg?affiliate=c4LZLiWF",
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
    affiliateLink: "https://pay.cakto.com.br/w2c37bz?affiliate=FBURR5Vj",
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
    affiliateLink: "https://pay.cakto.com.br/3emkesc?affiliate=XaxUsrEX",
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
    affiliateLink: "https://pay.cakto.com.br/3agsw5e?affiliate=XaxUsrEX",
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
    name: "Spotify Premium",
    image: "/images/spotify.png",
    price: 97,
    features: [
      "Conta 100% privada com login novo",
      "Opção de ativar no seu e-mail por apenas +R$19,90",
      "Sem anúncios, qualidade máxima, modo offline",
      "Afiliação inclusa: revenda e lucre você também",
    ],
    affiliateLink: "https://pay.cakto.com.br/8maqvu9_619341?affiliate=rjDuCPNa",
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
    affiliateLink: "https://pay.cakto.com.br/4rprhf2?affiliate=s8Q9JLTb",
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
    affiliateLink: "https://pay.cakto.com.br/3asi6aj_610105?affiliate=s8Q9JLTb",
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
    affiliateLink: "https://pay.cakto.com.br/6xej6yf?affiliate=D7XUWMMW",
  },
]

const steps = [
  { number: "01", title: "Escolha seu plano", description: "Selecione a plataforma que você quer acessar por 12 meses completos", icon: Star },
  { number: "02", title: "Pagamento seguro", description: "Complete o pagamento 100% seguro pela plataforma CaktoPay", icon: ShieldCheck },
  { number: "03", title: "Acesso imediato", description: "Receba o link do WhatsApp e solicite sua ativação na hora", icon: Zap },
  { number: "04", title: "Comece a lucrar", description: "Pegue seu link de afiliado e revenda para amigos e nas redes", icon: Wallet },
]

const logoGridItems = [
  { image: "/images/canva.png", name: "Canva" },
  { image: "/images/chatgpt.png", name: "ChatGPT" },
  { image: "/images/spotify.png", name: "Spotify" },
  { image: "/images/youtube.png", name: "YouTube" },
  { image: "/netflix.jpg", name: "Netflix" },
  { image: "/images/veo3.png", name: "VEO 3" },
  { image: "/images/picsart.png", name: "Picsart" },
  { image: "/images/capcut.png", name: "CapCut" },
  { image: "/images/sora.png", name: "Sora 2" },
]

const productHighlights = [
  { image: "/images/canva.png", name: "Canva Pro", price: 37, description: "Design profissional com templates, remoção de fundo e Kit Marca. Ativado no seu e-mail.", tag: "MAIS VENDIDO" },
  { image: "/images/chatgpt.png", name: "ChatGPT Plus", price: 47, description: "IA mais poderosa do mundo com GPT-4o, geração de imagens e análise de dados.", tag: null },
  { image: "/images/spotify.png", name: "Spotify Premium", price: 97, description: "Música sem anúncios, qualidade máxima e modo offline. Conta 100% privada.", tag: null },
  { image: "/images/youtube.png", name: "YouTube Premium", price: 67, description: "Sem anúncios, reprodução em segundo plano e YouTube Music incluso.", tag: null },
  { image: "/netflix.jpg", name: "Netflix Premium", price: 167.9, description: "Filmes e séries em 4K com até 4 telas simultâneas. Login privado.", tag: null },
  { image: "/images/veo3.png", name: "VEO3 + Gemini", price: 97, description: "Geração de vídeos com IA do Google. 1200 créditos renovados por mês.", tag: null },
  { image: "/images/picsart.png", name: "Picsart Pro", price: 47, description: "Edição avançada com IA, filtros profissionais e ferramentas exclusivas.", tag: null },
  { image: "/images/capcut.png", name: "CapCut Pro", price: 47, description: "Edição de vídeo profissional com efeitos, legendas automáticas e muito mais.", tag: null },
  { image: "/images/sora.png", name: "Sora 2", price: 197, description: "Geração de vídeos com a IA mais avançada da OpenAI. Conta 100% privada.", tag: "NOVIDADE" },
]

export default function Home() {
  const whatsappUrl = "https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais"
  const instagramUrl = "https://instagram.com/lucasgaspardigital"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== HERO - COMPACT ===== */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 aurora-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        {/* Nebula orbs */}
        <div className="nebula-orb nebula-orb-1" />
        <div className="nebula-orb nebula-orb-2" />
        <div className="nebula-orb nebula-orb-3" />
        {/* Planet sphere at bottom */}
        <div className="planet-atmosphere" />
        <div className="planet-sphere" />
        {/* Light sweep */}
        <div className="light-sweep" />
        {/* Orbit rings */}
        <div className="orbit-ring" style={{ width: "600px", height: "600px", top: "60%", left: "50%", animationDuration: "25s" }} />
        <div className="orbit-ring" style={{ width: "900px", height: "900px", top: "70%", left: "50%", animationDuration: "40s", animationDirection: "reverse", borderColor: "rgba(5, 219, 242, 0.04)" }} />
        {/* Glow lines */}
        <div className="glow-line" style={{ width: "200px", top: "30%", left: "5%", animationDelay: "0s" }} />
        <div className="glow-line" style={{ width: "150px", top: "60%", right: "10%", animationDelay: "3s" }} />
        {/* Shooting stars */}
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        {/* Star field */}
        <div className="star-dot" style={{ top: "8%", left: "5%", animationDelay: "0s" }} />
        <div className="star-dot" style={{ top: "12%", left: "92%", animationDelay: "1.5s" }} />
        <div className="star-dot" style={{ top: "35%", left: "15%", animationDelay: "0.8s" }} />
        <div className="star-dot" style={{ top: "22%", left: "78%", animationDelay: "2.2s" }} />
        <div className="star-dot" style={{ top: "55%", left: "8%", animationDelay: "1.2s" }} />
        <div className="star-dot" style={{ top: "45%", left: "95%", animationDelay: "0.4s" }} />
        <div className="star-dot" style={{ top: "65%", left: "30%", animationDelay: "3s" }} />
        <div className="star-dot" style={{ top: "18%", left: "45%", animationDelay: "1.8s" }} />
        <div className="star-dot" style={{ top: "70%", left: "75%", animationDelay: "2.5s" }} />
        <div className="star-dot" style={{ top: "5%", left: "55%", animationDelay: "0.6s" }} />
        {/* Floating particles */}
        <div className="particle" style={{ top: "20%", left: "10%", animationDelay: "0s" }} />
        <div className="particle" style={{ top: "40%", left: "85%", animationDelay: "2s" }} />
        <div className="particle" style={{ top: "15%", left: "70%", animationDelay: "1s" }} />
        <div className="particle" style={{ top: "60%", left: "50%", animationDelay: "3s" }} />
        <div className="particle" style={{ top: "30%", left: "25%", animationDelay: "4s" }} />
        <div className="particle" style={{ top: "50%", left: "90%", animationDelay: "1.5s" }} />
        <div className="particle" style={{ top: "75%", left: "40%", animationDelay: "2.5s" }} />
        <div className="particle" style={{ top: "10%", left: "60%", animationDelay: "3.5s" }} />

        <div className="container mx-auto px-4 pt-6 md:pt-10 relative z-10">
          {/* Badge */}
          <div className="text-center mb-3 md:mb-4">
            <Badge className="golden-banner text-[11px] md:text-sm px-3 md:px-5 py-1.5 md:py-2 rounded-full font-bold shadow-lg shadow-amber-500/20 animate-pulse-glow border-0">
              <Zap className="h-3 w-3 md:h-4 md:w-4 mr-1.5" />
              Oferta Relâmpago - Economia de até 90%
            </Badge>
          </div>

          {/* Title - mais compacto */}
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-3 md:mb-4">
            <span className="text-gradient-blue">+12 Assinaturas Premium</span>
            <br />
            <span className="text-foreground">com pagamento único!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4 md:mb-6">
            As melhores ferramentas digitais por <strong className="text-foreground">12 meses</strong>. Sem mensalidades.
          </p>

          {/* Logo Carousel - VISIBLE IMMEDIATELY */}
          <LogoCarousel />

          {/* CTA + Trust */}
          <div className="text-center pb-4 md:pb-6">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5B] text-white text-sm md:text-lg px-8 md:px-12 py-5 md:py-7 rounded-full font-bold shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300">
              <a href="https://wa.me/5527996698223?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20anuais" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5">
                Tire suas dúvidas com o suporte
                <SiWhatsapp className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </Button>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center mt-4 md:mt-5 text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                <span className="text-[11px] md:text-xs">7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                <span className="text-[11px] md:text-xs">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wallet className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                <span className="text-[11px] md:text-xs">Revenda e lucre</span>
              </div>
            </div>

            <div className="mt-4 md:mt-6 flex justify-center">
              <ChevronDown className="h-5 w-5 text-primary/40 scroll-indicator" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS - INNER AI STYLE ===== */}
      <section className="py-10 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground">
              Tenha acesso a <span className="text-gradient-blue">tudo isso:</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1: Logo Grid - MAIN CARD */}
            <div className="logo-grid-card p-5 md:p-8">
              <div className="logo-grid-inner p-5 md:p-7 mb-5 md:mb-6">
                <div className="flex flex-wrap justify-center gap-2.5 md:gap-4">
                  {logoGridItems.map((item, i) => (
                    <div
                      key={i}
                      className="relative w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-[14px] md:rounded-[18px] overflow-hidden shadow-md shadow-black/20 hover:scale-110 transition-all duration-300"
                    >
                      <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 48px, 64px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">+12 Ferramentas Premium</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                Canva Pro, ChatGPT Plus, Spotify, YouTube Premium, Netflix, VEO3, Sora 2, CapCut e muito mais — tudo com pagamento único
              </p>
            </div>

            {/* Card 2: Economia */}
            <div className="logo-grid-card p-5 md:p-8">
              <div className="logo-grid-inner p-5 md:p-7 mb-5 md:mb-6 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <span className="text-[200px] md:text-[280px] font-black text-primary select-none">%</span>
                </div>
                <div className="relative">
                  <div className="text-6xl md:text-8xl font-black text-gradient-blue leading-none">90%</div>
                  <div className="absolute -top-2 -right-6 md:-right-8">
                    <div className="golden-banner px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold shadow-lg">até</div>
                  </div>
                </div>
                <p className="text-lg md:text-xl font-bold text-foreground mt-3">de economia</p>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">Economia Real</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                Pague uma fração do valor original e tenha acesso completo por 12 meses inteiros sem renovação automática
              </p>
            </div>

            {/* Card 3: Suporte WhatsApp */}
            <div className="logo-grid-card p-5 md:p-8">
              <div className="logo-grid-inner p-5 md:p-7 mb-5 md:mb-6 flex items-center justify-center min-h-[180px] md:min-h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,211,102,0.08)_0%,transparent_70%)]" />
                <div className="flex flex-col items-center gap-4 relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/30">
                    <SiWhatsapp className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" style={{ animationDelay: "0.3s" }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" style={{ animationDelay: "0.6s" }} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">Suporte Humanizado</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                Atendimento via WhatsApp com ativação guiada passo a passo. Você nunca fica sozinho
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== PRODUCT HIGHLIGHTS CAROUSEL ===== */}
      <section className="py-10 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 md:mb-12">
          <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground">
            Conheça cada <span className="text-gradient-blue">assinatura</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-scroll-left items-stretch">
            {[...productHighlights, ...productHighlights].map((item, index) => (
              <div key={index} className="flex-shrink-0 mx-2 md:mx-3 w-[260px] md:w-[300px]">
                <div className="feature-card rounded-2xl p-5 md:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-[14px] md:rounded-[16px] overflow-hidden shadow-lg shadow-black/20 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill sizes="60px" className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-foreground leading-tight">{item.name}</h3>
                      <p className="text-primary font-extrabold text-lg md:text-xl">R$ {item.price % 1 === 0 ? item.price : item.price.toFixed(2).replace(".", ",")}</p>
                    </div>
                    {item.tag && (
                      <span className="golden-banner px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold ml-auto">{item.tag}</span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <span className="text-[10px] md:text-xs text-muted-foreground">12 meses • Pagamento único</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="planos" className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-14">
            <Badge className="highlight-badge text-primary text-xs md:text-sm px-4 py-2 rounded-full font-medium mb-4 md:mb-5">
              Planos Disponíveis
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-3 md:mb-5">
              Escolha Seu <span className="text-gradient-blue">Plano Anual</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pagamento único anual, ativação guiada, suporte via WhatsApp e possibilidade de revenda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS - SWIPE CAROUSEL ===== */}
      <section id="como-funciona" className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />

        <div className="container mx-auto px-4 relative z-10 mb-8 md:mb-12">
          <div className="text-center">
            <Badge className="highlight-badge text-primary text-xs md:text-sm px-4 py-2 rounded-full font-medium mb-4 md:mb-5">
              Processo Simples
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-3 md:mb-5">
              Como <span className="text-gradient-blue">Funciona?</span>
            </h2>
          </div>
        </div>

        <div className="relative z-10 px-4">
          <div className="flex gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {steps.map((step, index) => (
              <div key={index} className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[280px] snap-center">
                <div className="feature-card rounded-2xl md:rounded-3xl p-5 md:p-7 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-3 md:mb-5">
                      <step.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                    </div>
                    <span className="text-3xl md:text-5xl font-extrabold text-primary/15 mb-2">{step.number}</span>
                    <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* ===== FINAL CTA ===== */}
      <section className="py-14 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="feature-card rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-30" />

            <div className="relative z-10 text-center space-y-5 md:space-y-7">
              <div className="flex justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden ring-4 ring-primary/30 animate-float">
                  <img src="/profile.jpg" alt="Lucas Digital" className="w-full h-full object-cover" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                Pronto para <span className="text-gradient-blue">Economizar?</span>
              </h2>

              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Escolha seu plano anual, economize até 90% e ainda ganhe a oportunidade de lucrar revendendo.
              </p>

              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-gradient-blue hover:opacity-90 text-white text-sm md:text-base px-8 md:px-10 py-5 md:py-6 rounded-xl glow-button font-bold">
                  <a href="#planos" className="flex items-center justify-center gap-2">
                    Escolher Meu Plano
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="pt-5 border-t border-white/10">
                <p className="text-sm text-muted-foreground">
                  Siga no Instagram:{" "}
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                    @lucasgaspardigital
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 md:space-y-5">
            <div className="flex items-center justify-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-2 ring-primary/30">
                <img src="/profile.jpg" alt="Lucas Digital" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Lucas <span className="text-gradient-blue">Digital</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-xs md:text-sm text-muted-foreground">
              <span>Pagamento seguro via CaktoPay</span>
              <span>•</span>
              <span>7 dias de garantia</span>
              <span>•</span>
              <span>Suporte no WhatsApp</span>
            </div>

            <div className="flex justify-center">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors glass-card rounded-full px-4 py-2">
                <SiInstagram className="h-4 w-4" />
                <span className="text-xs font-medium">@lucasgaspardigital</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-muted-foreground">
              <p>© 2026 Lucas Digital. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
