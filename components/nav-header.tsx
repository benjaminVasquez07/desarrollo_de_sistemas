import Image from "next/image"
import Link from "next/link"

export function NavHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-cream border-b border-mediumGray">
      <Link href="/" className="w-32">
        <Image
          src="/placeholder.svg?height=40&width=120"
          alt="CrochetArt Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>
      <div className="flex space-x-4">
        <Link
          href="/productos-recomendados"
          className="bg-lightGray px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
        >
          Productos
        </Link>
        <Link href="/sobre-nosotros" className="bg-lightGray px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
          Sobre nosotros
        </Link>
        <Link href="/contactanos" className="bg-lightGray px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
          Contactanos
        </Link>
      </div>
    </div>
  )
}
