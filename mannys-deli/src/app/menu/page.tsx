"use client"

import { useState, useEffect,Suspense } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { menuItems } from "@/lib/menu_and_catering"


// Define a type for all possible filter values
type MenuFilter = 
  | "All" 
  | "Breakfast" 
  | "Lunch Special" 
  | "Empanadas" 
  | "Entrees" 
  | "Salad" 
  | "Sopes" 
  | "Burritos" 
  | "Pupusas" 
  | "Quesadillas" 
  | "Mofongo" 
  | "Tacos" 
  | "Sandwiches" 
  | "Antojitos" 
  | "Shakes / Batidos"

// Helper type guard to check if a string is a valid MenuFilter
function isMenuFilter(value: string | null): value is MenuFilter {
  return [
    "All", "Breakfast", "Lunch Special", "Empanadas", "Entrees", 
    "Salad", "Sopes", "Burritos", "Pupusas", "Quesadillas", 
    "Mofongo", "Tacos", "Sandwiches", "Antojitos", "Shakes / Batidos"
  ].includes(value as MenuFilter)
}

function MenuContent() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get("filter")

  const [activeFilter, setActiveFilter] = useState<MenuFilter>("All")

  // Set initial filter based on URL parameter
  useEffect(() => {
    if (filterParam && isMenuFilter(filterParam)) {
      setActiveFilter(filterParam)
    }
  }, [filterParam])

  const filteredItems = activeFilter === "All" ? menuItems : menuItems.filter((item) => item.category === activeFilter)

  const filterButtons: { label: string; value: MenuFilter }[] = [
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
          <h1 className="text-4xl font-bold mb-4 dark:text-black">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {"Explore our diverse menu featuring authentic dishes from Latin America, the United States, and more."}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === button.value
                    ? "bg-amber-600 text-white"
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
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  {item.origin}
                </div>
                )}
                <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded capitalize">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold dark:text-black">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-600">{item.price}</span>
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

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading Menu...</h1>
          <p className="text-gray-600">Please wait while we load our delicious offerings</p>
        </div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  )
}