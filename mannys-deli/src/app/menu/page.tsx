"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

type MenuItem = {
  name: string
  origin: string
  description: string
  price: string
  image: string
  category: "breakfast" | "lunch" | "dinner"
}

export default function MenuPage() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get("filter")

  const [activeFilter, setActiveFilter] = useState<"all" | "breakfast" | "lunch" | "dinner">("all")

  // Set initial filter based on URL parameter
  useEffect(() => {
    if (filterParam === "breakfast" || filterParam === "lunch" || filterParam === "dinner") {
      setActiveFilter(filterParam)
    }
  }, [filterParam])

  const menuItems: MenuItem[] = [
    // Breakfast Items
    {
      name: "Tigrillo",
      origin: "Ecuador",
      description: "Mashed green plantains mixed with eggs, cheese, and onions",
      price: "$9.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },
    {
      name: "Huevos Rancheros",
      origin: "Mexico",
      description: "Fried eggs served on corn tortillas with salsa, beans, and avocado",
      price: "$10.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },
    {
      name: "Desayuno Típico",
      origin: "Guatemala",
      description: "Eggs, black beans, plantains, cheese, and tortillas",
      price: "$11.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },
    {
      name: "Baleadas",
      origin: "Honduras",
      description: "Flour tortillas filled with refried beans, cheese, and cream",
      price: "$8.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },
    {
      name: "Pupusas con Huevo",
      origin: "El Salvador",
      description: "Corn tortillas stuffed with cheese and served with scrambled eggs",
      price: "$9.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },
    {
      name: "American Breakfast",
      origin: "USA",
      description: "Eggs, bacon, hash browns, and toast",
      price: "$10.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "breakfast",
    },

    // Lunch Items
    {
      name: "Tacos al Pastor",
      origin: "Mexico",
      description: "Marinated pork tacos with pineapple, onions, and cilantro",
      price: "$12.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "lunch",
    },
    {
      name: "Llapingachos",
      origin: "Ecuador",
      description: "Potato patties filled with cheese, served with peanut sauce and avocado",
      price: "$11.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "lunch",
    },
    {
      name: "Pepián",
      origin: "Guatemala",
      description: "Traditional meat stew with vegetables and rice",
      price: "$13.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "lunch",
    },
    {
      name: "Pupusas",
      origin: "El Salvador",
      description: "Thick corn tortillas stuffed with cheese, beans, and pork",
      price: "$10.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "lunch",
    },
    {
      name: "Baleadas Especiales",
      origin: "Honduras",
      description: "Large flour tortillas filled with beans, cheese, eggs, and avocado",
      price: "$11.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "lunch",
    },
    {
      name: "Club Sandwich",
      origin: "USA",
      description: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato",
      price: "$12.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "lunch",
    },

    // Dinner Items
    {
      name: "Carne Asada",
      origin: "Mexico",
      description: "Grilled marinated steak served with rice, beans, and tortillas",
      price: "$16.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "dinner",
    },
    {
      name: "Encebollado",
      origin: "Ecuador",
      description: "Fish stew with yuca, onions, and tomatoes, served with plantain chips",
      price: "$15.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "dinner",
    },
    {
      name: "Pepián de Pollo",
      origin: "Guatemala",
      description: "Chicken stew with pumpkin seeds, tomatoes, and chiles",
      price: "$14.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "dinner",
    },
    {
      name: "Sopa de Pata",
      origin: "El Salvador",
      description: "Tripe soup with vegetables, served with rice and tortillas",
      price: "$13.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "dinner",
    },
    {
      name: "Plato Típico",
      origin: "Honduras",
      description: "Grilled beef, chorizo, plantains, beans, cheese, and tortillas",
      price: "$17.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "dinner",
    },
    {
      name: "Manny's Special Burger",
      origin: "USA/Latin Fusion",
      description: "Half-pound beef patty with avocado, jalapeños, pepper jack cheese, and chipotle mayo",
      price: "$14.99",
      image: "/placeholder.svg?height=300&width=400",
      category: "dinner",
    },
  ]

  const filteredItems = activeFilter === "all" ? menuItems : menuItems.filter((item) => item.category === activeFilter)

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Breakfast", value: "breakfast" },
    { label: "Lunch", value: "lunch" },
    { label: "Dinner", value: "dinner" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our diverse menu featuring authentic dishes from Latin America and the United States.
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
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {item.origin}
                </div>
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
