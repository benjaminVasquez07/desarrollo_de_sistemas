import Image from "next/image"
import Link from "next/link"
import { NavHeader } from "@/components/nav-header"

export default function ProductosRecomendados() {
  return (
    <div className="min-h-screen bg-cream">
      <NavHeader />

      <div className="max-w-4xl mx-auto p-4 mt-8">
        <h1 className="text-2xl font-bold mb-6">Productos Recomendados</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cat Product */}
          <div className="bg-lightGray p-3 rounded">
            <div className="bg-white p-2 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Gato tejido a crochet"
                width={150}
                height={150}
                className="w-full object-contain"
              />
            </div>
            <p className="text-center text-sm mb-2">Gato tejido a crochet</p>
            <Link href="/productos/gato" className="block w-full">
              <button className="w-full bg-white py-1 text-center hover:bg-gray-100 transition-colors">Comprar</button>
            </Link>
          </div>

          {/* Dog Product */}
          <div className="bg-lightGray p-3 rounded">
            <div className="bg-white p-2 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Perro tejido a crochet"
                width={150}
                height={150}
                className="w-full object-contain"
              />
            </div>
            <p className="text-center text-sm mb-2">Perro tejido a crochet</p>
            <Link href="/productos/perro" className="block w-full">
              <button className="w-full bg-white py-1 text-center hover:bg-gray-100 transition-colors">Comprar</button>
            </Link>
          </div>

          {/* Rabbit Product */}
          <div className="bg-lightGray p-3 rounded">
            <div className="bg-white p-2 mb-2">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Conejo tejido a crochet"
                width={150}
                height={150}
                className="w-full object-contain"
              />
            </div>
            <p className="text-center text-sm mb-2">Conejo tejido a crochet</p>
            <Link href="/productos/conejo" className="block w-full">
              <button className="w-full bg-white py-1 text-center hover:bg-gray-100 transition-colors">Comprar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
