import Link from "next/link"
import Image from "next/image"
import { NavHeader } from "@/components/nav-header"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-cream">
      <NavHeader />

      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="bg-cream p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Sobre Nosotros</h1>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Yarn store"
                width={250}
                height={250}
                className="object-cover rounded"
              />
            </div>
            <div className="w-full md:w-2/3 bg-lightGray p-6">
              <p className="mb-4">
                "En CrochetArt, nacimos en 2020 de la pasión por el arte del crochet. Lo que comenzó como un hobby
                personal se transformó en un taller artesanal donde cada figura es creada con amor y dedicación. Nos
                especializamos en amigurumis, muñecos contemporáneos, utilizando solo materiales de primera calidad.
                Cada pieza única que creamos lleva consigo nuestra filosofía de artesanía auténtica y sostenible,
                llevando un pedacito de nuestra historia y corazón a tu hogar."
              </p>
              <div className="mt-6">
                <Link href="/contactanos">
                  <button className="bg-purple text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                    Contactanos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
