"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TrendingUp, MapPin, Calendar, DollarSign, Users, Building2, BarChart3, Menu, X } from "lucide-react"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"

interface ProjectPageProps {
  slug: string
  project: any
}

export default function ProjectPageClient({ slug, project }: ProjectPageProps) {
  const [investment, setInvestment] = useState(100000)
  const [timeHorizon, setTimeHorizon] = useState(10)
  const [showTable, setShowTable] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const calculateProjection = () => {
    const projections = []
    const monthlyReturn = project.returnRate / 100 / 12
    const annualAppreciation = project.appreciationRate / 100

    for (let year = 0; year <= timeHorizon; year++) {
      const monthsElapsed = year * 12
      const returnValue = investment * Math.pow(1 + monthlyReturn, monthsElapsed)
      const appreciationValue = investment * Math.pow(1 + annualAppreciation, year)
      const totalValue = returnValue + (appreciationValue - investment)
      const earnings = totalValue - investment
      const roi = ((totalValue - investment) / investment) * 100

      projections.push({
        year,
        investment,
        returnValue: Math.round(returnValue),
        appreciationValue: Math.round(appreciationValue),
        totalValue: Math.round(totalValue),
        earnings: Math.round(earnings),
        roi: roi.toFixed(2),
      })
    }
    return projections
  }

  const projections = calculateProjection()
  const finalProjection = projections[timeHorizon]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logotipo-visamar.png"
              alt="Grupo Visamar"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav
            className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-4 md:gap-8 absolute md:relative top-full md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
          >
            <Link href="/#consultoria" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
              Consultoría
            </Link>
            <Link href="/#proyectos" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
              Proyectos
            </Link>
            <Link href="/#como-funciona" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
              Cómo Funciona
            </Link>
            <Link
              href="/#contacto"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:-translate-y-0.5 shadow-md"
            >
              Solicitar asesoría
            </Link>
          </nav>

          <button className="md:hidden text-2xl text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="pt-20">
        <section className="relative h-[60vh] min-h-[400px]">
          <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {project.status}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
                {project.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-4">{project.type}</p>
              <div className="flex items-center text-white text-base sm:text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                {project.location}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Descripción del Proyecto</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{project.description}</p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Estadísticas Clave</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{project.stats.totalUnits}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Unidades Totales</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{project.stats.totalInvestors}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Inversionistas</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{project.stats.averageReturn}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Rendimiento Promedio</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {project.stats.constructionProgress}%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Avance de Obra</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3" />
                    <div className="text-lg sm:text-xl font-bold text-gray-900">{project.stats.deliveryDate}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Fecha de Entrega</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                    <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {project.financials.currentFunding}%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Fondeo Actual</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Características y Amenidades
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Información Financiera</h2>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-2xl border-2 border-amber-200">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Valor del Proyecto</div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        {formatCurrency(project.financials.projectValue)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Inversión Mínima</div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        {formatCurrency(project.financials.minInvestment)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Rendimiento Esperado</div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        {project.financials.expectedReturn}% anual
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Distribución de Rendimientos</div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        {project.financials.distributionFrequency}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {showTable && (
                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Proyección Año por Año</h2>
                  <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                          <tr>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold">Año</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold">Inversión</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold">Rendimientos</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold">Plusvalía</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold">Total</th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold">ROI</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projections.map((p, idx) => (
                            <tr key={p.year} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900">{p.year}</td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-gray-700">
                                {formatCurrency(p.investment)}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-green-600 font-semibold">
                                {formatCurrency(p.returnValue - p.investment)}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-blue-600 font-semibold">
                                {formatCurrency(p.appreciationValue - p.investment)}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-bold text-gray-900">
                                {formatCurrency(p.totalValue)}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-bold text-amber-600">
                                {p.roi}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Simulador de Inversión</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-6">Proyecta tu inversión hasta 30 años</p>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Monto de Inversión</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={investment === 0 ? "" : investment}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        setInvestment(value === "" ? 0 : Number(value))
                      }}
                      onBlur={(e) => {
                        const value = Number(e.target.value.replace(/\D/g, ""))
                        if (value < project.minInvestment) {
                          setInvestment(project.minInvestment)
                        }
                      }}
                      placeholder={formatCurrency(project.minInvestment)}
                      className="w-full px-4 py-3 border-2 border-orange-500 rounded-xl focus:border-orange-600 focus:outline-none text-base sm:text-lg font-semibold"
                    />
                    <div className="text-xs sm:text-sm text-gray-500 mt-2">
                      Mínimo: {formatCurrency(project.minInvestment)}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Horizonte de Inversión: <span className="text-amber-600">{timeHorizon} años</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:border-0"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1 año</span>
                      <span>30 años</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-200">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Tu Inversión</div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{formatCurrency(investment)}</div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Valor Total Estimado</div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        {formatCurrency(finalProjection.totalValue)}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">Ganancia Estimada</div>
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        {formatCurrency(finalProjection.earnings)}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-200">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">ROI Total</div>
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">{finalProjection.roi}%</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowTable(!showTable)}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-amber-700 hover:to-orange-700 transition-all mb-4"
                  >
                    {showTable ? "Ocultar" : "Ver"} Proyección Detallada
                  </button>

                  <Link
                    href="/#contacto"
                    className="block w-full bg-gray-900 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-800 transition-colors"
                  >
                    Solicitar Información
                  </Link>

                  <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Aviso importante:</strong> Este simulador es una herramienta de proyección estimada con
                      fines informativos únicamente. Los rendimientos mostrados no constituyen una garantía y pueden
                      variar dependiendo de las condiciones del mercado inmobiliario, económicas y otros factores
                      externos. Como cualquier inversión, existe riesgo de pérdida de capital. Consulte con un asesor
                      financiero antes de tomar decisiones de inversión.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Listo para invertir en {project.name}?</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Contáctanos hoy y un asesor especializado te guiará en el proceso de inversión
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contactar Asesor
            </Link>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/logotipo-visamar.png"
                  alt="Grupo Visamar"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                Tu patrimonio crece con nosotros. Consultoría profesional y proyectos inmobiliarios en CDMX.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/grupo-visamar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/grupovisamar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/grupo.visamar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/grupovisamar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link href="/#consultoria" className="text-gray-400 hover:text-white transition-colors">
                    Consultoría Profesional
                  </Link>
                </li>
                <li>
                  <Link href="/#proyectos" className="text-gray-400 hover:text-white transition-colors">
                    Proyectos Patrimoniales
                  </Link>
                </li>
                <li>
                  <Link href="/#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                    Cómo Funciona
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Aviso de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Av. Insurgentes Sur 1234, CDMX</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+52 55 1234 5678</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>contacto@grupovisamar.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; 2025 Grupo Visamar. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
