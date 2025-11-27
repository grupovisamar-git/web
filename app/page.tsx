"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [contributionAmount, setContributionAmount] = useState(1)
  const [currentProject, setCurrentProject] = useState({
    name: "",
    totalValue: 0,
    returnRate: 0,
    termMonths: 0,
  })
  const [formSuccess, setFormSuccess] = useState(false)

  const openSimulator = (projectName: string, projectValue: number, returnRate: number, termMonths: number) => {
    setCurrentProject({ name: projectName, totalValue: projectValue, returnRate, termMonths })
    setShowModal(true)
  }

  const closeSimulator = () => {
    setShowModal(false)
  }

  // Calculate simulation results
  const calculateResults = () => {
    const contribution = Math.max(1, Math.round(contributionAmount))
    const participationPercent = (contribution / currentProject.totalValue) * 100
    const totalReturn = contribution * (currentProject.returnRate / 100)
    const yearsDecimal = currentProject.termMonths / 12
    const annualReturn = totalReturn / yearsDecimal
    const annualReturnPercent = currentProject.returnRate / yearsDecimal
    const totalAmount = contribution + totalReturn

    return {
      participationPercent,
      totalReturn,
      annualReturn,
      annualReturnPercent,
      totalAmount,
      contribution,
    }
  }

  const results = calculateResults()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSuccess(true)
    e.currentTarget.reset()
    setTimeout(() => setFormSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

          <nav className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex items-center gap-8`}>
            <a href="#consultoria" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
              Consultoría
            </a>
            <a href="#proyectos" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
              Proyectos
            </a>
            <a href="#como-funciona" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
              Cómo Funciona
            </a>
            <a
              href="#contacto"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:-translate-y-0.5 shadow-md"
            >
              Solicitar asesoría
            </a>
          </nav>

          <button className="md:hidden text-2xl text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              Con nosotros, tu <span className="text-orange-500">patrimonio crece</span> mientras trabajamos por ti
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Consultoría legal, contable y fiscal profesional en CDMX. Además, oportunidades de crecimiento patrimonial
              a través de proyectos inmobiliarios con aportaciones desde $1 MXN.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#consultoria"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg border-2 border-orange-500"
              >
                Ver Servicios de Consultoría
              </a>
              <a
                href="#proyectos"
                className="bg-transparent text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all hover:-translate-y-1 border-2 border-gray-800"
              >
                Explorar Proyectos
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/professional-business-consulting-office-in-mexico-.jpg"
              alt="Grupo Visamar Consultoría"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section id="consultoria" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Servicios de Consultoría Profesional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Más de 15 años brindando asesoría especializada en materia legal, contable y fiscal en Ciudad de México.
              Nuestro equipo está certificado y actualizado en las últimas normativas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fa-scale-balanced",
                title: "Consultoría Jurídica",
                description:
                  "Asesoría legal integral para empresas y personas físicas. Contratos, constitución de sociedades, resolución de conflictos.",
                target: "Empresas y personas físicas",
              },
              {
                icon: "fa-calculator",
                title: "Consultoría Contable",
                description:
                  "Servicios contables completos: registro de operaciones, estados financieros, auditorías y cumplimiento normativo.",
                target: "PyMEs y empresas establecidas",
              },
              {
                icon: "fa-file-invoice-dollar",
                title: "Consultoría Fiscal",
                description:
                  "Optimización fiscal, declaraciones mensuales y anuales, estrategias de planeación fiscal y defensa ante el SAT.",
                target: "Personas morales y físicas",
              },
              {
                icon: "fa-trademark",
                title: "Representación de Marcas",
                description:
                  "Registro y protección de marcas ante el IMPI. Defensa de derechos de propiedad intelectual.",
                target: "Emprendedores y empresas",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-10 rounded-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-orange-500 hover:shadow-xl flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-orange-500 font-semibold text-sm mb-6">{service.target}</p>
                <a
                  href="#contacto"
                  className="mt-auto inline-block bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-all hover:translate-x-1 text-center"
                >
                  Solicitar Cotización →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Proyectos de Crecimiento Patrimonial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Invierte en proyectos inmobiliarios respaldados y bien estructurados. Aportaciones desde $5,000 MXN con
              rendimientos atractivos y transparencia total.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center mb-12">
            {["Residencial", "Comercial", "Mixto", "Desarrollo Vertical", "Fraccionamientos"].map((type, idx) => (
              <span
                key={idx}
                className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium border-2 border-gray-200"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Residencial Las Palmas",
                slug: "residencial-las-palmas",
                type: "Desarrollo Residencial",
                location: "Coyoacán, CDMX",
                value: 25000000,
                returnRate: 12,
                term: 24,
                image: "/luxury-residential-development-mexico-city.jpg",
              },
              {
                name: "Plaza Comercial Centro",
                slug: "plaza-comercial-centro",
                type: "Comercial",
                location: "Polanco, CDMX",
                value: 50000000,
                returnRate: 14,
                term: 30,
                image: "/modern-commercial-plaza-mexico.jpg",
              },
              {
                name: "Torre Mixta Reforma",
                slug: "torre-mixta-reforma",
                type: "Mixto (Residencial + Comercial)",
                location: "Reforma, CDMX",
                value: 80000000,
                returnRate: 15,
                term: 36,
                image: "/mixed-use-tower-reforma-avenue.jpg",
              },
              {
                name: "Desarrollo Residencial Zapopan Diamante",
                slug: "desarrollo-residencial-zapopan",
                type: "Desarrollo Residencial de Lujo",
                location: "Zapopan, Jalisco",
                value: 35000000,
                returnRate: 13,
                term: 24,
                image: "/luxury-residential-zapopan.jpg",
              },
              {
                name: "Plaza Infinito Querétaro",
                slug: "plaza-infinito-queretaro",
                type: "Desarrollo Comercial Mixto",
                location: "Santiago de Querétaro, Querétaro",
                value: 45000000,
                returnRate: 14,
                term: 28,
                image: "/commercial-plaza-queretaro.jpg",
              },
              {
                name: "Business Center IMC Puebla",
                slug: "business-center-imc-puebla",
                type: "Desarrollo Mixto (Residencial + Oficinas + Comercial)",
                location: "Centro Histórico, Puebla",
                value: 55000000,
                returnRate: 15,
                term: 32,
                image: "/business-center-imc-puebla.jpg",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl flex flex-col"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-xl text-xs font-semibold mb-4">
                    Disponible
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-1">{project.type}</p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </p>
                  <div className="border-t-2 border-gray-100 pt-4 mb-4 space-y-2 flex-grow">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Valor del proyecto:</span>
                      <span className="font-bold text-gray-900">
                        {new Intl.NumberFormat("es-MX", {
                          style: "currency",
                          currency: "MXN",
                          minimumFractionDigits: 0,
                        }).format(project.value)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rendimiento:</span>
                      <span className="font-bold text-green-600">{project.returnRate}% anual</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plazo:</span>
                      <span className="font-bold text-gray-900">{project.term} meses</span>
                    </div>
                  </div>
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="block w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-3 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all mt-auto"
                  >
                    Ver Detalles y Simulador
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section id="como-funciona" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Cómo Funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proceso transparente y seguro para formar parte de nuestros proyectos de crecimiento patrimonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: "fa-search",
                title: "Explora Proyectos",
                desc: "Revisa los proyectos disponibles y sus características detalladas",
              },
              {
                icon: "fa-calculator",
                title: "Simula tu Aportación",
                desc: "Usa nuestro simulador para calcular tus rendimientos estimados",
              },
              {
                icon: "fa-file-signature",
                title: "Formaliza tu Participación",
                desc: "Firma un contrato privado que respalda tu aportación",
              },
              {
                icon: "fa-chart-line",
                title: "Recibe Rendimientos",
                desc: "Obtén tus rendimientos al finalizar el plazo del proyecto",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl border-2 border-transparent hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="confianza" className="py-20 px-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4">¿Por qué elegir Grupo Visamar?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Respaldo, transparencia y profesionalismo en cada proyecto y servicio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-award",
                title: "Más de 15 años de experiencia",
                desc: "Trayectoria comprobada en consultoría y proyectos inmobiliarios",
              },
              {
                icon: "fa-shield-halved",
                title: "Contratos respaldados",
                desc: "Toda participación se formaliza con contratos privados y documentación clara",
              },
              {
                icon: "fa-chart-pie",
                title: "Transparencia total",
                desc: "Acceso completo a la información de cada proyecto y su avance",
              },
              {
                icon: "fa-users",
                title: "Equipo certificado",
                desc: "Profesionales especializados en áreas legal, contable y fiscal",
              },
              {
                icon: "fa-handshake",
                title: "Compromiso con clientes",
                desc: "Tu crecimiento patrimonial es nuestra prioridad",
              },
              {
                icon: "fa-building",
                title: "Proyectos verificados",
                desc: "Cada proyecto es analizado y validado por nuestro equipo experto",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-700 p-8 rounded-xl text-center hover:-translate-y-1 transition-all hover:bg-gray-600"
              >
                <i className={`fas ${item.icon} text-5xl text-orange-500 mb-6`}></i>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ¿Listo para hacer crecer tu patrimonio? Completa el formulario y nos pondremos en contacto
            </p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <form onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-gray-800 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block font-semibold text-gray-800 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block font-semibold text-gray-800 mb-2">
                    ¿Qué te interesa? *
                  </label>
                  <select
                    id="interest"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="consultoria">Servicios de Consultoría</option>
                    <option value="proyectos">Proyectos de Inversión</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-semibold text-gray-800 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg"
              >
                Enviar Mensaje
              </button>

              {formSuccess && (
                <div className="mt-6 bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-lg">
                  <p className="font-semibold">¡Mensaje enviado con éxito!</p>
                  <p className="text-sm">Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos tus dudas sobre inversión y consultoría</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 list-none">
                <span>¿Cuál es la inversión mínima para participar en un proyecto?</span>
                <i className="fas fa-chevron-down group-open:rotate-180 transition-transform text-orange-600"></i>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                La inversión mínima varía según el proyecto, pero generalmente puedes participar desde $50,000 MXN. Cada
                proyecto tiene condiciones específicas que se detallan en su página individual. Nuestros asesores pueden
                ayudarte a encontrar la opción que mejor se ajuste a tu capacidad de inversión.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 list-none">
                <span>¿Qué garantías ofrece Grupo Visamar?</span>
                <i className="fas fa-chevron-down group-open:rotate-180 transition-transform text-orange-600"></i>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Todos nuestros proyectos cuentan con respaldo legal completo, escrituras públicas, y transparencia total
                en la gestión. Trabajamos con desarrolladores certificados y cada inversión está respaldada por activos
                inmobiliarios reales. Además, brindamos reportes periódicos sobre el avance de obra y el desempeño de tu
                inversión.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 list-none">
                <span>¿Cuánto tiempo dura una inversión típica?</span>
                <i className="fas fa-chevron-down group-open:rotate-180 transition-transform text-orange-600"></i>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                El plazo de inversión depende del tipo de proyecto. Los desarrollos residenciales generalmente tienen un
                horizonte de 3-5 años, mientras que proyectos comerciales pueden generar rendimientos desde el primer
                año. Puedes utilizar nuestros simuladores para proyectar diferentes horizontes de tiempo y tomar la
                mejor decisión.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 list-none">
                <span>¿Cómo funciona el proceso de consultoría?</span>
                <i className="fas fa-chevron-down group-open:rotate-180 transition-transform text-orange-600"></i>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Nuestro proceso de consultoría inicia con una evaluación sin costo de tus necesidades. Luego, diseñamos
                una estrategia personalizada que puede incluir servicios jurídicos, contables, fiscales o de
                representación de marcas. Te acompañamos en cada paso con expertos certificados en cada área.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 list-none">
                <span>¿Puedo retirar mi inversión antes del plazo establecido?</span>
                <i className="fas fa-chevron-down group-open:rotate-180 transition-transform text-orange-600"></i>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Las condiciones de liquidez varían según el proyecto. Algunos permiten salida anticipada con ciertas
                penalizaciones, mientras que otros tienen plazos fijos. Es importante revisar los términos específicos
                de cada proyecto antes de invertir. Nuestros asesores te explicarán detalladamente todas las
                condiciones.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 list-none">
                <span>¿Qué impuestos debo pagar por los rendimientos?</span>
                <i className="fas fa-chevron-down group-open:rotate-180 transition-transform text-orange-600"></i>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                Los rendimientos de inversión inmobiliaria están sujetos a impuestos según la legislación mexicana
                vigente. Nuestro equipo de consultoría fiscal te asesora sobre las mejores estrategias de optimización
                fiscal y te ayuda con la declaración correcta de tus rendimientos ante el SAT.
              </div>
            </details>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">¿Tienes más preguntas?</p>
            <a
              href="#contacto"
              className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-8">
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
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#consultoria" className="hover:text-orange-500 transition-colors">
                  Consultoría Jurídica
                </a>
              </li>
              <li>
                <a href="#consultoria" className="hover:text-orange-500 transition-colors">
                  Consultoría Contable
                </a>
              </li>
              <li>
                <a href="#consultoria" className="hover:text-orange-500 transition-colors">
                  Consultoría Fiscal
                </a>
              </li>
              <li>
                <a href="#consultoria" className="hover:text-orange-500 transition-colors">
                  Representación de Marcas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Proyectos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#proyectos" className="hover:text-orange-500 transition-colors">
                  Proyectos Actuales
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-orange-500 transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-orange-500 transition-colors">
                  Simulador
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>contacto@visamar.mx</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Ciudad de México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Grupo Visamar. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Aviso de Privacidad
            </a>{" "}
            |
            <a href="#" className="hover:text-orange-500 transition-colors ml-2">
              Términos y Condiciones
            </a>
          </p>
        </div>
      </footer>

      {/* Simulator Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 z-[2000] flex items-center justify-center p-4"
          onClick={closeSimulator}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-t-2xl relative">
              <h3 className="text-3xl font-bold mb-2">{currentProject.name}</h3>
              <button
                onClick={closeSimulator}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <label htmlFor="modalContribution" className="block font-semibold text-gray-800 mb-3 text-lg">
                  Monto de tu Aportación
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-semibold">$</span>
                  <input
                    type="number"
                    id="modalContribution"
                    min="1"
                    step="1"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-lg text-xl font-semibold text-gray-800 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">Mínimo: $1 MXN | Sin límite</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl mb-8 space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Tu Participación en el Proyecto</p>
                  <p className="text-4xl font-extrabold text-orange-500">{results.participationPercent.toFixed(4)}%</p>
                  <p className="text-xs text-gray-600 mt-1">del valor total del proyecto</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Rendimiento Total Estimado</p>
                  <p className="text-4xl font-extrabold text-orange-500">
                    $
                    {results.totalReturn.toLocaleString("es-MX", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    al finalizar el plazo ({currentProject.returnRate.toFixed(1)}%)
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Rendimiento Anual Promedio</p>
                  <p className="text-4xl font-extrabold text-orange-500">
                    $
                    {results.annualReturn.toLocaleString("es-MX", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    equivalente a {results.annualReturnPercent.toFixed(1)}% anual
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Total al Finalizar</p>
                  <p className="text-4xl font-extrabold text-orange-500">
                    $
                    {results.totalAmount.toLocaleString("es-MX", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">aportación + rendimientos</p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong>⚠️ Aviso Importante:</strong> Las cifras mostradas son estimaciones basadas en proyecciones del
                  proyecto y no representan rendimientos garantizados. Los resultados reales pueden variar. Las
                  aportaciones se formalizan mediante contrato privado.
                </p>
              </div>

              <a
                href="#contacto"
                onClick={closeSimulator}
                className="block w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-center hover:bg-orange-600 transition-all"
              >
                Quiero Participar en este Proyecto
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  )
}
