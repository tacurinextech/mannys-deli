"use client"

import { useState, useEffect,Suspense, useRef} from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { menuItems } from "@/lib/menu_and_catering"
import { Grid3X3, ChevronLeft, ChevronRight, X } from "lucide-react"


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
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [showAllFilters, setShowAllFilters] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<MenuFilter>("All");

  const scrollFilters = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  // Set initial filter based on URL parameter
  useEffect(() => {
    if (filterParam && isMenuFilter(filterParam)) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);

  const filteredItems =
    activeFilter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

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
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 dark:text-black">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {
              "Explore our diverse menu featuring authentic dishes from Latin America, the United States, and more."
            }
          </p>

          <div className="sticky top-16 z-40 bg-gray-50 py-4 -mx-4 px-4 mb-8">
            <div className="flex items-center gap-2 max-w-4xl mx-auto">
              {/* Scroll Left Button */}
              <button
                onClick={() => scrollFilters("left")}
                className="flex-shrink-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-shadow cursor-pointer"
                aria-label="Scroll filters left"
              >
                <ChevronLeft size={20} color="black"/>
              </button>

              {/* Scrollable Filter Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2 items-center min-h-[56px]"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {filterButtons.map((button) => (
                  <button
                    key={button.value}
                    onClick={() => setActiveFilter(button.value)}
                    className={`leading-none min-h-[44px] flex-shrink-0 px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                      activeFilter === button.value
                        ? "bg-amber-600 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-100 shadow-sm"
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>

              {/* Scroll Right Button */}
              <button
                onClick={() => scrollFilters("right")}
                className="flex-shrink-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-shadow cursor-pointer"
                aria-label="Scroll filters right"
              >
                <ChevronRight size={20} color="black"/>
              </button>

              {/* Show All Filters Button */}
              <button
                onClick={() => setShowAllFilters(true)}
                className="flex-shrink-0 p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                // className="fixed bottom-20 right-6 p-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg transition-shadow cursor-pointer z-50"
                aria-label="Show all filters"
              >
                <Grid3X3 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* All Filters Modal */}
        {showAllFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white text-black rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">All Categories</h3>
                  <button
                    onClick={() => setShowAllFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {filterButtons.map((button) => (
                    <button
                      key={button.value}
                      onClick={() => {
                        setActiveFilter(button.value);
                        setShowAllFilters(false);
                      }}
                      className={`px-4 py-2 rounded-lg transition-colors text-sm cursor-pointer ${
                        activeFilter === button.value
                          ? "bg-amber-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

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
                  <h3 className="text-xl font-semibold dark:text-black">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading Menu...</h1>
            <p className="text-gray-600">
              Please wait while we load our delicious offerings
            </p>
          </div>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}