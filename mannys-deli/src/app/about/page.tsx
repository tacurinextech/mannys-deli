import Image from "next/image"
import { config } from "../../../config/constants"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center dark:text-black">About {config.COMPANY.NAME}</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="relative w-full aspect-[2/1]">
              <Image
                src= "/img/restaurant_photo.jpg?height=600&width=1200"
                alt={config.COMPANY.NAME}
                width={1200}
                height={600}
                quality={90}
                priority={true} // Important for above-the-fold images
                className="object-cover h-full w-full"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-black">Our Story</h2>
              <p className="text-gray-700 mb-4">
                {`${config.COMPANY.NAME} was founded in 2014 by Rolando Tacuri, a chef with a bold vision to bring the vibrant 
                flavors of Latin America together under one roof. Born in Ecuador and trained alongside cooks from across 
                the region, Rolando developed a deep appreciation for the unique culinary traditions of each country. From Ecuador’s 
                coastal ceviches to the savory pernil dishes of Puerto Rico, each flavor left its mark.`}
              </p>
              <p className="text-gray-700 mb-4">
                {`What started as a small Ecuadorian and Puerto Rican deli soon grew into something much more. Rolando brought together 
                a team of talented cooks from places like Mexico, Guatemala, El Salvador, and beyond. The result is a menu that celebrates 
                the best of each culture and offers something truly special. Every dish has a story and brings a taste of Latin America's 
                rich diversity, all with a comforting, homemade touch.`}
              </p>
              <p className="text-gray-700">
                {`Today, ${config.COMPANY.NAME} is a neighborhood favorite where Latin American flavors come together with American classics, 
                each dish crafted with care and creativity.`}
              </p>
              <p className="text-gray-700">
                {"At the center of it all is our belief that food connects us. Our mission is to create a welcoming space where every bite honors tradition, every meal feels like family, and every guest walks away with a smile."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 dark:text-black">Our Ingredients</h2>
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
              <h2 className="text-2xl font-semibold mb-4 dark:text-black">Our Team</h2>
              <p className="text-gray-700 mb-4">
                Our kitchen is staffed by talented chefs from diverse backgrounds, each bringing their own cultural
                expertise and passion for cooking to {config.COMPANY.NAME}.
              </p>
              <p className="text-gray-700">
                {"From our front-of-house staff to our kitchen team, we're united by our love of good food and commitment to excellent service."}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 dark:text-black">Visit Us Today</h2>
            <p className="text-gray-700 mb-6">
              {`We invite you to experience the unique flavors of ${config.COMPANY.NAME}. Whether you're in the mood for a
              hearty breakfast, a quick lunch, or a satisfying dinner, we have something for everyone.`}
            </p>
            <p className="text-xl font-medium text-red-600">
              {`"Good food is the foundation of genuine happiness." - Rolando Tacuri`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
