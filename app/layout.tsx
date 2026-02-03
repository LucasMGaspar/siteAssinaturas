import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Digital - Assinaturas Premium até 90% mais baratas",
  description:
    "Acesso anual às melhores plataformas digitais com pagamento único. Canva Pro, ChatGPT Plus, Spotify, YouTube Premium e mais. Economia de até 90% e possibilidade de revenda.",
  keywords: ["assinatura anual", "plano premium", "canva pro", "chatgpt plus", "spotify premium", "youtube premium", "lucas digital"],
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
