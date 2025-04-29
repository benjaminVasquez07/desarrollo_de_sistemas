import Image from "next/image"
import Link from "next/link"
import { NavHeader } from "@/components/nav-header"

// This would typically come from a database
const products = {
  gato: {
    name: "Gato tejido a crochet",
    height: "40mm",
    width: "20mm",
    price: "$6.500",
    image: "/placeholder.svg?height=180&width=180",
    description:
      "Hermoso gato tejido a crochet con materiales premium. Ideal para decoración o como regalo para niños y amantes de los gatos. Cada pieza es única y hecha a mano con mucho cariño y atención al detalle.",
  },
  perro: {
    name: "Perro tejido a crochet",
    height: "50cm",
    width: "25cm",
    price: "$4.500",
    image: "/placeholder.svg?height=180&width=180",
    description:
      "Adorable perro tejido a crochet con materiales de alta calidad. Perfecto como peluche para niños o como elemento decorativo. Su diseño único y detalles cuidadosamente elaborados lo convierten en una pieza especial.",
  },
  conejo: {
    name: "Conejo tejido a crochet",
    height: "45cm",
    width: "20cm",
    price: "$8.000",
    image: "/placeholder.svg?height=180&width=180",
    description:
      "Tierno conejo tejido a crochet con materiales suaves y duraderos. Ideal como regalo para bebés y niños. Su tamaño lo hace perfecto para abrazar y su diseño encantador lo convierte en un compañero adorable.",
  },
}

export default function ProductPage({ params }: { params: { product: string } }) {
  const product = products[params.product as keyof typeof products]

  if (!product) {
    return (
      <div className="min-h-screen bg-cream">
        <NavHeader />
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-2xl font-bold">Producto no encontrado</h1>
          <Link href="/productos-recomendados" className="text-purple mt-4 block">
            Volver a productos recomendados
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <NavHeader />

      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="bg-cream p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 bg-lightGray p-6">
              <h3 className="font-medium text-xl mb-4">{product.name}</h3>
              <p className="text-sm mb-1">Altura: {product.height}</p>
              <p className="text-sm mb-4">Ancho: {product.width}</p>
              <p className="font-bold text-xl mb-4">{product.price}</p>
              <p className="text-sm mb-6">{product.description}</p>
              <button className="w-full bg-purple text-white py-2 rounded hover:bg-opacity-90 transition-colors">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
