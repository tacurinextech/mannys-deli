"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { config } from "../../config/constants"

const slides = [
  {
    image: "/img/restaurant_photo.jpg?height=600&width=1200",
    title: `Welcome to ${config.COMPANY.NAME}`,
    subtitle: "Experience the flavors of Latin America, United States, and more",
  },
  {
    image: "/img/buffet_1.jpg?height=600&width=1200",
    title: "Daily Fresh Buffet",
    subtitle: "New selections every day",
  },
  {
    image: "/img/made_with_love_1.jpg?height=600&width=1200",
    title: "Made with Love",
    subtitle: "Traditional recipes, modern taste",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">{slide.title}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/catering"
              className="bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Catering Services
            </Link>
          </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
