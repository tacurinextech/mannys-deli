import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { config } from "../../config/constants"

export function OrderOnlineButton() {
  return (
    <Link
      href={config.COMPANY.UBEREATS}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-colors"
    >
      <ShoppingBag size={20} />
      <span>Order Online</span>
    </Link>
  )
}
