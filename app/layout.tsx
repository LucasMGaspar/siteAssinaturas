import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1436886084706860&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`font-sans antialiased`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1436886084706860');
fbq('track', 'PageView');`}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
