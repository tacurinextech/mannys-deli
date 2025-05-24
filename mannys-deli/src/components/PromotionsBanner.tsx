"use client"

import { useState } from "react"
import { X } from "lucide-react"

// Configuration constants
const BANNER_CONFIG = {
  show: true, // Set to false to hide the banner completely
  promotion: {
    title: "Lunch Special!",
    description: "Soup of the day with a side of rice, beans, today's beef special and a canned soda. Valid Monday-Friday, 11am-2pm.",
    backgroundColor: "bg-amber-500",
    textColor: "text-white",
    closeButtonAriaLabel: "Close promotion banner"
  }
}

export function PromotionsBanner() {
  const [isVisible, setIsVisible] = useState(BANNER_CONFIG.show)

  if (!isVisible) {
    return null
  }

  return (
    <div 
      role="region" 
      aria-label="Promotional banner"
      className={`${BANNER_CONFIG.promotion.backgroundColor} ${BANNER_CONFIG.promotion.textColor} py-3 px-4 relative`}
    >
      <div className="container mx-auto text-center">
        <p className="font-bold">{BANNER_CONFIG.promotion.title}</p>
        <p>{BANNER_CONFIG.promotion.description}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-current hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white cursor-pointer"
        aria-label={BANNER_CONFIG.promotion.closeButtonAriaLabel}
      >
        <X size={20} aria-hidden="true" />
      </button>
    </div>
  )
}