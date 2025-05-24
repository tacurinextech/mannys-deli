"use client"

import { useState } from "react"
import Image from "next/image"
import { config } from "../../../config/constants"
import { cateringItems } from "@/lib/menu_and_catering"
import Link from "next/link"

// Define a type for the possible filter values
type CategoryFilter = 
  |"All" 
  |"Arroz" 
  |"Carne" 
  |"Pollo" 
  |"Ensalada" 
  |"Pasta" 
  |"Varios"

export default function CateringPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All")

  // Get unique categories for filter buttons
  const categories = Array.from(new Set(cateringItems.map((item) => item.category))) as CategoryFilter[]

  // Filter items based on active filter
  const filteredItems =
    activeFilter === "All" ? cateringItems : cateringItems.filter((item) => item.category === activeFilter)

  // Create filter buttons data with proper typing
  const filterButtons: { label: string; value: CategoryFilter }[] = [
    { label: "All", value: "All" },
    ...categories.map((category) => ({ label: category, value: category })),
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 dark:text-black">Catering Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {`Let ${config.COMPANY.NAME} cater your next event with our delicious multicultural cuisine. We offer a variety of
            options to suit any occasion, from small gatherings to large celebrations.`}
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

          {/* Rest of your component remains the same */}
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg mb-6 max-w-2xl mx-auto">
            <p className="font-medium">Ordering Information:</p>
            <p>
              {"Please place catering orders at least 48 hours in advance. Call us at"} <span><Link href={`tel:${config.COMPANY.PHONE1}`}>{config.COMPANY.PHONE1}</Link></span> {"or visit us in person to place your order. A 50% deposit is required for all catering orders."}
            </p>
          </div>
        </div>

        {/* Catering Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-48 md:h-auto relative">
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
                <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-black">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm text-gray-500">Medium Tray</h4>
                    <p className="font-bold text-amber-600">{item.mediumTray.price}</p>
                    {/* <p className="text-sm text-gray-600">Serves {item.mediumTray.serves}</p> */}
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm text-gray-500">Large Tray</h4>
                    <p className="font-bold text-amber-600">{item.largeTray.price}</p>
                    {/* <p className="text-sm text-gray-600">Serves {item.largeTray.serves}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-black">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-black">Delivery Options</h3>
              <p className="text-gray-600 mb-4">
                We offer delivery for catering orders within a 15-mile radius. Delivery fee varies based on distance and
                order size.
              </p>
              <h3 className="text-lg font-semibold mb-2 dark:text-black">Setup Services</h3>
              <p className="text-gray-600">
                Full-service setup and staffing is available for an additional fee. Please inquire for details and
                pricing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-black">Special Dietary Needs</h3>
              <p className="text-gray-600 mb-4">
                We can accommodate vegetarian, vegan, and gluten-free dietary restrictions. Please let us know your
                requirements when placing your order.
              </p>
              <h3 className="text-lg font-semibold mb-2 dark:text-black">Custom Menus</h3>
              <p className="text-gray-600">
                Don&apos;t see what you&apos;re looking for? We can create custom menus for your specific event. Contact
                us to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
