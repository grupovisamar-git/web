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
    "Grupo Visamar ofrece consultoría legal, contable y fiscal profesional en CDMX, además de proyectos de crecimiento patrimonial inmobiliario con aportaciones desde $1.00 MXN.",
  generator: "v0.app",
  openGraph: {
    title: "Grupo Visamar - Consultoría Legal, Contable y Proyectos Inmobiliarios",
    description:
      "Grupo Visamar ofrece consultoría legal, contable y fiscal profesional, además de proyectos de crecimiento patrimonial inmobiliario.",
    url: "https://grupovisamar.com",
    siteName: "Grupo Visamar",
    images: [
      {
        url: "/images/logotipo-visamar.png",
        width: 1200,
        height: 630,
        alt: "Grupo Visamar Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Visamar",
    description: "Consultoría legal, contable y proyectos de crecimiento patrimonial",
    images: ["/images/logotipo-visamar.png"],
  },
  icons: {
    icon: "/images/logotipo-visamar.png",
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
