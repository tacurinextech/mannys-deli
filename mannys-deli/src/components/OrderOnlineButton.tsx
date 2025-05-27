"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, ChevronUp } from "lucide-react"
import { config } from "../../config/constants"

export function OrderOnlineButton() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const deliveryOptions = [
    {
      name: "(203) 857-1870",
      url: `tel:${config.COMPANY.PHONE1}`, // Replace with actual Uber Eats link
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/mannys-deli/N7YU8HEYU5yVJu5IkAUqTg?srsltid=AfmBOopMy5-IuCZERH5WTOXAP8pogAsXpxK93tg_MYsUKH-KWEB-Aok_",
      color: "bg-black hover:bg-gray-800",
    },
    {
      name: "GrubHub",
      url: "https://www.grubhub.com/restaurant/mannys-deli-28-bouton-st-norwalk/4509184",
      color: "bg-orange-600 hover:bg-orange-700",
    },
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/manny's-deli-norwalk-24784814/20144966/?srsltid=AfmBOoqcG8g9hFDSajYU1TE-_b6rW2HA6sJtBtMvGmCeTc3glDa3ZPbG",
      color: "bg-red-600 hover:bg-red-700",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl overflow-hidden w-40 transition-all duration-200 ease-in-out">
          {deliveryOptions.map((option, index) => (
            <Link
              key={index}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${option.color} text-white block py-3 px-4 text-center transition-colors`}
            >
              {option.name}
            </Link>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-colors ${
          isOpen ? "pr-3" : ""
        }`}
      >
        <ShoppingBag size={20} />
        <span>Order Now</span>
        {isOpen && <ChevronUp size={16} />}
      </button>
    </div>
  )
}




// className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-colors"
