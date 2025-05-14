import Image from "next/image"
import { config } from "../../../config/constants"

type CateringItem = {
  name: string
  description: string
  origin: string
  smallTray: {
    serves: string
    price: string
  }
  largeTray: {
    serves: string
    price: string
  }
  image: string
  category: string
}

export default function CateringPage() {
  const cateringItems: CateringItem[] = [
    {
      name: "Pupusas Platter",
      description: "Assorted pupusas with curtido and tomato sauce",
      origin: "El Salvador",
      smallTray: {
        serves: "10-15",
        price: "$45.99",
      },
      largeTray: {
        serves: "20-25",
        price: "$85.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Appetizers",
    },
    {
      name: "Empanadas Mixtas",
      description: "Mixed empanadas with beef, chicken, and cheese fillings",
      origin: "Ecuador",
      smallTray: {
        serves: "12-15",
        price: "$39.99",
      },
      largeTray: {
        serves: "25-30",
        price: "$75.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Appetizers",
    },
    {
      name: "Taco Bar",
      description: "Build-your-own taco bar with all the fixings",
      origin: "Mexico",
      smallTray: {
        serves: "10-12",
        price: "$89.99",
      },
      largeTray: {
        serves: "20-25",
        price: "$169.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Courses",
    },
    {
      name: "Carne Asada",
      description: "Grilled marinated steak with rice and beans",
      origin: "Mexico",
      smallTray: {
        serves: "8-10",
        price: "$79.99",
      },
      largeTray: {
        serves: "16-20",
        price: "$149.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Courses",
    },
    {
      name: "Pollo Guisado",
      description: "Stewed chicken with vegetables and Latin spices",
      origin: "Dominican Republic",
      smallTray: {
        serves: "8-10",
        price: "$69.99",
      },
      largeTray: {
        serves: "16-20",
        price: "$129.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Courses",
    },
    {
      name: "Arroz con Gandules",
      description: "Rice with pigeon peas, a Caribbean classic",
      origin: "Puerto Rico",
      smallTray: {
        serves: "10-15",
        price: "$35.99",
      },
      largeTray: {
        serves: "20-30",
        price: "$65.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Sides",
    },
    {
      name: "Plantains Platter",
      description: "Mix of sweet and savory plantain dishes",
      origin: "Caribbean",
      smallTray: {
        serves: "10-15",
        price: "$29.99",
      },
      largeTray: {
        serves: "20-30",
        price: "$55.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Sides",
    },
    {
      name: "Tres Leches Cake",
      description: "Traditional sponge cake soaked in three kinds of milk",
      origin: "Latin America",
      smallTray: {
        serves: "10-12",
        price: "$39.99",
      },
      largeTray: {
        serves: "20-24",
        price: "$75.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Desserts",
    },
    {
      name: "Assorted Latin Pastries",
      description: "Selection of popular Latin American pastries and cookies",
      origin: "Latin America",
      smallTray: {
        serves: "12-15",
        price: "$35.99",
      },
      largeTray: {
        serves: "25-30",
        price: "$65.99",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Desserts",
    },
  ]

  // Group items by category
  const categories = Array.from(new Set(cateringItems.map((item) => item.category)))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Catering Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let {config.COMPANY.NAME} cater your next event with our delicious multicultural cuisine. We offer a variety of
            options to suit any occasion, from small gatherings to large celebrations.
          </p>

          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg mb-6 max-w-2xl mx-auto">
            <p className="font-medium">Ordering Information:</p>
            <p>
              Please place catering orders at least 48 hours in advance. Call us at <a href={`tel:${config.COMPANY.PHONE}`}>{config.COMPANY.PHONE}</a> or visit our location to
              place your order. A 50% deposit is required for all catering orders.
            </p>
          </div>
        </div>

        {/* Catering Menu by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">{category}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cateringItems
                .filter((item) => item.category === category)
                .map((item, index) => (
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
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        {item.origin}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm text-gray-500">Small Tray</h4>
                          <p className="font-bold text-red-600">{item.smallTray.price}</p>
                          <p className="text-sm text-gray-600">Serves {item.smallTray.serves}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm text-gray-500">Large Tray</h4>
                          <p className="font-bold text-red-600">{item.largeTray.price}</p>
                          <p className="text-sm text-gray-600">Serves {item.largeTray.serves}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Delivery Options</h3>
              <p className="text-gray-600 mb-4">
                We offer delivery for catering orders within a 15-mile radius. Delivery fee varies based on distance and
                order size.
              </p>
              <h3 className="text-lg font-semibold mb-2">Setup Services</h3>
              <p className="text-gray-600">
                Full-service setup and staffing is available for an additional fee. Please inquire for details and
                pricing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Special Dietary Needs</h3>
              <p className="text-gray-600 mb-4">
                We can accommodate vegetarian, vegan, and gluten-free dietary restrictions. Please let us know your
                requirements when placing your order.
              </p>
              <h3 className="text-lg font-semibold mb-2">Custom Menus</h3>
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
