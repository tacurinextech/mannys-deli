"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { menuItems } from "@/lib/data"


export default function MenuPage() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get("filter")

  const [activeFilter, setActiveFilter] = useState<"All" | "Breakfast" | "Lunch Special" | "Empanadas" | "Entrees" | "Salad" | "Sopes" | "Burritos" | "Pupusas" | "Quesadillas" | "Mofongo" | "Tacos" | "Sandwiches" | "Antojitos" | "Shakes / Batidos">("All")

  // Set initial filter based on URL parameter
  useEffect(() => {
    if (filterParam === "Breakfast" || filterParam === "Lunch Special" || filterParam === "Empanadas" || filterParam === "Entrees" || filterParam === "Salad" || filterParam === "Sopes" || filterParam ===  "Burritos" || filterParam === "Pupusas" || filterParam === "Quesadillas" || filterParam === "Mofongo" || filterParam === "Tacos" || filterParam === "Sandwiches" || filterParam === "Antojitos" ||filterParam === "Shakes / Batidos"
    ) {
      setActiveFilter(filterParam)
    }
  }, [filterParam])


  const filteredItems = activeFilter === "All" ? menuItems : menuItems.filter((item) => item.category === activeFilter)

  const filterButtons = [
    { label: "All", value: "All" },
    { label: "Breakfast", value: "Breakfast" },
    { label: "Lunch Special", value: "Lunch Special" },
    { label: "Empanadas", value: "Empanadas" },
    { label: "Entrees", value: "Entrees" },
    { label: "Salad", value: "Salad" },
    { label: "Sopes", value: "Sopes" },
    { label: "Burritos", value: "Burritos" },
    { label: "Pupusas", value: "Pupusas" },
    { label: "Quesadillas", value: "Quesadillas" },
    { label: "Mofongo", value: "Mofongo" },
    { label: "Tacos", value: "Tacos" },
    { label: "Sandwiches", value: "Sandwiches" },
    { label: "Antojitos", value: "Antojitos" },
    { label: "Shakes / Batidos", value: "Shakes / Batidos" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our diverse menu featuring authentic dishes from Latin America, the United States, and more.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value as any)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === button.value
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="object-cover h-full w-full"
                />
                {item.origin && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {item.origin}
                </div>
                )}
                <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded capitalize">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-bold text-red-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
