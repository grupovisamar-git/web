import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[
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
      ].map((project) => (
        <Link
          key={project.slug}
          href={`/proyectos/${project.slug}`}
          className="group border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-orange-500 flex flex-col h-full"
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
            <a
              href={`/proyectos/${project.slug}`}
              className="block w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-3 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all mt-auto"
            >
              Ver Detalles y Simulador
            </a>
          </div>
        </Link>
      ))}
    </div>
  )
}
