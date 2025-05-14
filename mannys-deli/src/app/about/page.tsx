import Image from "next/image"
import { config } from "../../../config/constants"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About {config.COMPANY.NAME}</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="h-80 relative">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt={config.COMPANY.NAME}
                width={1200}
                height={600}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                {config.COMPANY.NAME} was founded in 2014 by Rolando Tacuri, a chef with a bold vision: to unite the vibrant 
                flavors of Latin America under one roof. Born in Ecuador and trained alongside cooks from across the region, 
                Rolando developed a deep appreciation for the distinct culinary traditions of each country—from the coastal 
                ceviches of Ecuador to the pernil dishes of Puerto Rico.
              </p>
              <p className="text-gray-700 mb-4">
                {`What began as a humble Ecuadorian and Puerto Rican deli soon evolved into something extraordinary. By 
                bringing together talented cooks from different backgrounds—Ecuador, Puerto Rico, Mexico, Guatemala, 
                El Salvador, and beyond—Rolando crafted a one-of-a-kind menu that blends the best of each culture. 
                Today, every dish tells a story, offering a taste of Latin America’s rich diversity with a touch of home.`}
              </p>
              <p className="text-gray-700">
                {`From our kitchen to your table, ${config.COMPANY.NAME} has grown into a beloved neighborhood spot, where authentic 
                Latin American flavors mingle with American classics—reimagined with our signature twist.`}
              </p>
              <p className="text-gray-700">
                At the heart of it all is our belief that food brings people together. Our mission? To create a welcoming 
                space where every bite celebrates heritage, every meal feels like family, and every guest leaves a little 
                happier than when they arrived.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Ingredients</h2>
              <p className="text-gray-700 mb-4">
                We take pride in sourcing the freshest ingredients for our dishes. Whenever possible, we work with local
                farmers and suppliers to ensure quality and sustainability.
              </p>
              <p className="text-gray-700">
                Many of our specialty ingredients are imported directly from Latin America to maintain the authentic
                flavors of our traditional dishes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-gray-700 mb-4">
                Our kitchen is staffed by talented chefs from diverse backgrounds, each bringing their own cultural
                expertise and passion for cooking to {config.COMPANY.NAME}.
              </p>
              <p className="text-gray-700">
                From our front-of-house staff to our kitchen team, we're united by our love of good food and commitment
                to excellent service.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Visit Us Today</h2>
            <p className="text-gray-700 mb-6">
              We invite you to experience the unique flavors of {config.COMPANY.NAME}. Whether you're in the mood for a
              hearty breakfast, a quick lunch, or a satisfying dinner, we have something for everyone.
            </p>
            <p className="text-xl font-medium text-red-600">
              "Good food is the foundation of genuine happiness." - Rolando Tacuri
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
