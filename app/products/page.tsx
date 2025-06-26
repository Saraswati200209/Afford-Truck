"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Search,
  Truck,
  Utensils,
  Coffee,
  Candy,
  Heart,
  Droplets,
  Smartphone,
  Shirt,
  ShoppingCart,
  Phone,
  Star,
  Filter,
} from "lucide-react"

// Product categories with icons
const categories = [
  { id: "automotive", name: "Automotive & Trucking", icon: Truck, color: "from-blue-500 to-blue-600" },
  { id: "hot-food", name: "Hot Food", icon: Utensils, color: "from-orange-500 to-red-500" },
  { id: "beverages", name: "Beverages", icon: Coffee, color: "from-green-500 to-teal-500" },
  { id: "snacks", name: "Packaged Snacks", icon: Candy, color: "from-purple-500 to-pink-500" },
  { id: "personal-care", name: "Personal Care", icon: Heart, color: "from-red-500 to-pink-500" },
  { id: "hygiene", name: "Hygiene & Shower", icon: Droplets, color: "from-cyan-500 to-blue-500" },
  { id: "electronics", name: "Electronics", icon: Smartphone, color: "from-indigo-500 to-purple-500" },
  { id: "clothing", name: "Clothing & Gear", icon: Shirt, color: "from-yellow-500 to-orange-500" },
  { id: "convenience", name: "Other Items", icon: ShoppingCart, color: "from-gray-500 to-gray-600" },
]

// All products organized by category
const products = {
  automotive: [
    { id: 1, name: "Motor Oil (Various Grades)", price: "$12.99", popular: true },
    { id: 2, name: "Windshield Washer Fluid", price: "$3.99" },
    { id: 3, name: "Antifreeze/Coolant", price: "$8.99" },
    { id: 4, name: "Diesel Exhaust Fluid (DEF)", price: "$15.99", popular: true },
    { id: 5, name: "Air Fresheners", price: "$2.99" },
    { id: 6, name: "Fuel Additives", price: "$6.99" },
    { id: 7, name: "Wiper Blades", price: "$18.99" },
    { id: 8, name: "Tire Pressure Gauges", price: "$9.99" },
    { id: 9, name: "Jumper Cables", price: "$24.99" },
    { id: 10, name: "Tool Kits", price: "$39.99", popular: true },
    { id: 11, name: "Fuses", price: "$4.99" },
    { id: 12, name: "Work Gloves", price: "$7.99" },
    { id: 13, name: "Ratchet Straps", price: "$16.99" },
    { id: 14, name: "Bungee Cords", price: "$5.99" },
    { id: 15, name: "CB Radios", price: "$89.99" },
    { id: 16, name: "Headlights and Bulbs", price: "$22.99" },
    { id: 17, name: "Reflective Vests", price: "$12.99" },
    { id: 18, name: "Load Binders", price: "$45.99" },
    { id: 19, name: "Mud Flaps", price: "$28.99" },
    { id: 20, name: "Truck Floor Mats", price: "$34.99" },
  ],
  "hot-food": [
    { id: 21, name: "Hot Dogs", price: "$2.99", popular: true },
    { id: 22, name: "Pizza Slices", price: "$3.99", popular: true },
    { id: 23, name: "Chicken Wings", price: "$8.99" },
    { id: 24, name: "Burritos", price: "$4.99" },
    { id: 25, name: "Breakfast Sandwiches", price: "$3.49" },
    { id: 26, name: "Hamburgers", price: "$5.99" },
    { id: 27, name: "French Fries", price: "$2.99" },
    { id: 28, name: "Fried Chicken", price: "$7.99", popular: true },
    { id: 29, name: "Pretzels", price: "$1.99" },
    { id: 30, name: "Tamales", price: "$3.99" },
  ],
  beverages: [
    { id: 31, name: "Fountain Drinks (Small/Med/Large)", price: "$1.99" },
    { id: 32, name: "Bottled Water", price: "$1.49", popular: true },
    { id: 33, name: "Energy Drinks (Monster, Red Bull)", price: "$3.99", popular: true },
    { id: 34, name: "Coffee (Regular, Decaf, Flavored)", price: "$2.49" },
    { id: 35, name: "Iced Coffee", price: "$2.99" },
    { id: 36, name: "Sports Drinks (Gatorade, Powerade)", price: "$2.49" },
    { id: 37, name: "Iced Tea", price: "$2.29" },
    { id: 38, name: "Soda Cans & Bottles", price: "$1.99" },
    { id: 39, name: "Milk (Regular, Chocolate)", price: "$2.99" },
    { id: 40, name: "Juice (Orange, Apple, Mixed)", price: "$2.79" },
  ],
  snacks: [
    { id: 41, name: "Chips (Lays, Doritos, etc.)", price: "$2.49", popular: true },
    { id: 42, name: "Beef Jerky", price: "$6.99", popular: true },
    { id: 43, name: "Trail Mix", price: "$4.99" },
    { id: 44, name: "Candy Bars (Snickers, Twix)", price: "$1.99" },
    { id: 45, name: "Nuts & Seeds", price: "$3.99" },
    { id: 46, name: "Granola Bars", price: "$4.49" },
    { id: 47, name: "Cookies", price: "$2.99" },
    { id: 48, name: "Popcorn", price: "$1.99" },
    { id: 49, name: "Crackers", price: "$2.49" },
    { id: 50, name: "Gum & Mints", price: "$1.49" },
  ],
  "personal-care": [
    { id: 51, name: "Toothbrush & Toothpaste", price: "$4.99" },
    { id: 52, name: "Deodorant", price: "$3.99", popular: true },
    { id: 53, name: "Shampoo & Conditioner", price: "$5.99" },
    { id: 54, name: "Disposable Razors", price: "$6.99" },
    { id: 55, name: "Shaving Cream", price: "$3.49" },
    { id: 56, name: "Wet Wipes", price: "$2.99" },
    { id: 57, name: "Hand Sanitizer", price: "$2.49", popular: true },
    { id: 58, name: "Pain Relievers (Tylenol, Advil)", price: "$7.99" },
    { id: 59, name: "Cough Drops", price: "$2.99" },
    { id: 60, name: "First Aid Kits", price: "$12.99" },
  ],
  hygiene: [
    { id: 61, name: "Shower Shoes", price: "$8.99" },
    { id: 62, name: "Towels", price: "$12.99", popular: true },
    { id: 63, name: "Soap", price: "$2.99" },
    { id: 64, name: "Shampoo Packets", price: "$1.99" },
    { id: 65, name: "Body Wash", price: "$4.99" },
    { id: 66, name: "Laundry Detergent Packets", price: "$3.99" },
    { id: 67, name: "Combs & Brushes", price: "$5.99" },
    { id: 68, name: "Nail Clippers", price: "$3.99" },
    { id: 69, name: "Travel Kits (Toiletry Combos)", price: "$15.99" },
    { id: 70, name: "Shower Tokens", price: "$12.00", popular: true },
  ],
  electronics: [
    { id: 71, name: "Phone Chargers (iPhone, Android)", price: "$19.99", popular: true },
    { id: 72, name: "Headphones", price: "$24.99" },
    { id: 73, name: "Power Banks", price: "$29.99", popular: true },
    { id: 74, name: "USB Cables", price: "$12.99" },
    { id: 75, name: "Cigarette Lighter Adapters", price: "$8.99" },
    { id: 76, name: "Flashlights", price: "$14.99" },
    { id: 77, name: "AA/AAA Batteries", price: "$6.99" },
    { id: 78, name: "GPS Units", price: "$89.99" },
    { id: 79, name: "Bluetooth Headsets", price: "$39.99" },
    { id: 80, name: "Dash Cams", price: "$79.99" },
  ],
  clothing: [
    { id: 81, name: "T-shirts", price: "$12.99" },
    { id: 82, name: "Hoodies", price: "$24.99" },
    { id: 83, name: "Hats & Caps", price: "$15.99", popular: true },
    { id: 84, name: "Work Boots", price: "$89.99" },
    { id: 85, name: "Reflective Jackets", price: "$34.99" },
    { id: 86, name: "Rain Ponchos", price: "$8.99" },
    { id: 87, name: "Socks", price: "$6.99" },
    { id: 88, name: "Underwear", price: "$9.99" },
    { id: 89, name: "Sunglasses", price: "$18.99", popular: true },
    { id: 90, name: "Thermal Wear", price: "$22.99" },
  ],
  convenience: [
    { id: 91, name: "Cigarettes", price: "$8.99" },
    { id: 92, name: "Lighters", price: "$1.99" },
    { id: 93, name: "Lottery Tickets", price: "$1.00" },
    { id: 94, name: "Scratch Cards", price: "$2.00" },
    { id: 95, name: "Travel Pillows", price: "$14.99" },
    { id: 96, name: "Magazines", price: "$4.99" },
    { id: 97, name: "Maps & Atlases", price: "$12.99" },
    { id: 98, name: "Phone SIM Cards", price: "$25.99" },
    { id: 99, name: "Notebooks & Pens", price: "$3.99" },
    { id: 100, name: "Souvenirs (Keychains, Mugs)", price: "$7.99", popular: true },
  ],
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter products based on category and search
  const getFilteredProducts = () => {
    let allProducts = []

    if (selectedCategory === "all") {
      // Get all products from all categories
      Object.values(products).forEach((categoryProducts) => {
        allProducts = [...allProducts, ...categoryProducts]
      })
    } else {
      allProducts = products[selectedCategory] || []
    }

    if (searchTerm) {
      allProducts = allProducts.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    return allProducts
  }

  const filteredProducts = getFilteredProducts()

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm font-medium mb-4">Convenience Store</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Everything You Need on the Road</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              From automotive supplies to snacks, electronics to personal care - we stock over 100 essential items for
              truck drivers and travelers.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm opacity-90">Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                <div className="text-2xl font-bold">9</div>
                <div className="text-sm opacity-90">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                <div className="text-2xl font-bold">Best</div>
                <div className="text-sm opacity-90">Prices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">{filteredProducts.length} products found</div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`flex-shrink-0 flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-orange-500 to-red-500`}
              >
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-medium text-center">All Products</span>
            </button>

            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-orange-100 text-orange-600"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br ${category.color}`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-center">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{product.name}</h3>
                        {product.popular && (
                          <Badge className="bg-orange-100 text-orange-800 text-xs mb-2">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-orange-600">{product.price}</div>
                      <Button
                        asChild
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 text-xs"
                      >
                        <a href="tel:+13257660119" className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>Call</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Something Specific?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Can't find what you're looking for? Give us a call and we'll help you find exactly what you need for your
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <a href="tel:+13257660119" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Us: (325) 766-0119</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white"
            >
              <Link href="/contact">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Visit Our Store
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
