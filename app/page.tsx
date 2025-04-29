import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Colorful yarn and crochet hooks"
          width={800}
          height={400}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
          <div className="max-w-md text-black text-center">
            <p className="mb-6 text-sm md:text-base">
              "Descubre CrochetArt, tu tienda online de figuras artesanales a crochet. Piezas únicas hechas a mano con
              materiales premium, donde cada detalle refleja pasión y calidad. Creaciones exclusivas que transformarán
              tu espacio y regalarán momentos especiales."
            </p>
            <Link href="/productos-recomendados">
              <button className="bg-purple text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
