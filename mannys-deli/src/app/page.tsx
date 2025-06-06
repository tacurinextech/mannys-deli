import Image from "next/image"
import Link from "next/link"
import { PromotionsBanner } from "@/components/PromotionsBanner"
import Testimonials from "@/components/Testimonials"
import { customerTestimonials } from "@/lib/data"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <PromotionsBanner />

      {/* Hero Section */}
      <HeroSection />
      {/* <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{`Welcome to ${config.COMPANY.NAME}`}</h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the flavors of Latin America, United States, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/catering"
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Catering Services
            </Link>
          </div>
        </div>
      </section> */}

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-black">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/img/traditional_breakfast.jpg?height=400&width=600"
                    alt="Breakfast"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-black">Traditional Breakfast</h3>
                <p className="text-gray-600 mb-4">
                  {/* Traditional tigrillo with plantains, eggs, and cheese served with fresh coffee. */}
                  Hearty, homestyle breakfasts cooked just the way you remember—always delicious, always satisfying.
                </p>
                <Link href="/menu?filter=Breakfast" className="text-amber-600 hover:text-amber-700 font-medium">
                  View Menu →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/img/lunch_and_dinner.jpg?height=400&width=600"
                    alt="Lunch and Dinner"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-black">Lunch and Dinner</h3>
                <p className="text-gray-600 mb-4">
                  Experience the soul of Latin America—every dish blends cherished traditions with bold, modern flavors.
                </p>
                <Link href="/menu?filter=Lunch%20Special" className="text-amber-600 hover:text-amber-700 font-medium">
                  View Menu →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/img/home_catering.jpg?height=400&width=600"
                    alt="American Dinner"
                    width={600}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-black">Catering</h3>
                <p className="text-gray-600 mb-4">
                  Spice up your event with authentic Latin flavors!
                  Perfect for weddings, offices, and parties that love real sabor!
                </p>
                <Link href="/catering" className="text-amber-600 hover:text-amber-700 font-medium">
                  Get a Taste of Latin America →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-black">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "The best pupusas I've had outside of El Salvador! Manny's Deli brings authentic flavors to every dish."
              </p>
              <p className="font-medium dark:text-black">- Maria C.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "I love their breakfast menu. The Ecuadorian bolones are just like my grandmother used to make!"
              </p>
              <p className="font-medium dark:text-black">- Carlos R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "Great place for lunch! Their Mexican tortas are huge and packed with flavor. Definitely worth the
                visit."
              </p>
              <p className="font-medium dark:text-black">- Jennifer L.</p>
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials
        testimonials={customerTestimonials}
      />
    </div>
  )
}
