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
    "Grupo Visamar ofrece consultoría legal, contable y fiscal profesional en CDMX, además de proyectos de crecimiento patrimonial inmobiliario con aportaciones desde $5,000 MXN.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
