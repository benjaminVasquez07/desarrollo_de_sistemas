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
  },
  perro: {
    name: "Perro tejido a crochet",
    height: "50cm",
    width: "25cm",
    price: "$4.500",
    image: "/placeholder.svg?height=180&width=180",
  },
  conejo: {
    name: "Conejo tejido a crochet",
    height: "45cm",
    width: "20cm",
    price: "$8.000",
    image: "/placeholder.svg?height=180&width=180",
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
          <Link href="/" className="text-purple mt-4 block">
            Volver a la página principal
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
          <div className="flex items-center mb-4">
            <div className="w-24">
              <Image
                src="/placeholder.svg?height=30&width=100"
                alt="CrochetArt Logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <Link href="/about" className="block">
              <div className="bg-lightGray px-3 py-1 ml-2 text-sm rounded">Sobre nosotros</div>
            </Link>
          </div>

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
              <p className="font-bold text-xl mb-6">{product.price}</p>
              <button className="w-full bg-purple text-white py-2 rounded hover:bg-opacity-90 transition-colors">
                comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
