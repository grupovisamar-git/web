import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Grupo Visamar - Consultoría Legal, Contable, Fiscal y Proyectos de Crecimiento Patrimonial en CDMX",
  description:
    "Grupo Visamar ofrece consultoría legal, contable y fiscal profesional en CDMX, además de proyectos de crecimiento patrimonial inmobiliario con aportaciones desde $1 MXN.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://grupovisamar.com",
    title: "Grupo Visamar - Consultoría Legal, Contable, Fiscal y Proyectos de Crecimiento Patrimonial",
    description:
      "Invierte en proyectos inmobiliarios desde $1 MXN. Aportaciones seguras con rendimientos del 12-15% anual.",
    images: [
      {
        url: "/images/logotipo-visamar.png",
        width: 180,
        height: 50,
        alt: "Grupo Visamar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Visamar",
    description: "Invierte en proyectos inmobiliarios desde $1 MXN",
    images: ["/images/logotipo-visamar.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/logotipo-visamar.png",
        type: "image/png",
      },
    ],
    apple: "/images/logotipo-visamar.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
