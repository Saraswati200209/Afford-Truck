import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Utensils, ChefHat, Flame, Award, Phone } from "lucide-react"

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Premium Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/food.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-20">
          <div className="mb-6">
            <Badge className="bg-orange-600/90 text-white px-4 py-2 text-sm md:text-base font-medium mb-4">
              Authentic South Asian Cuisine
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Desi Chai Dhaba
            </span>
          </h1>

          <div className="w-32 md:w-40 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-8"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the authentic flavors of Nepal and India at Afford Truck Stop's Desi Chai Dhaba. Our master chefs
            prepare traditional dishes with premium ingredients and time-honored recipes from the Himalayas to the
            Punjab.
          </p>

          {/* Feature Highlights - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <ChefHat className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium">Nepali Chef</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <Flame className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium">Custom Spice</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <Clock className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium">Fresh Daily</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <Award className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium">Authentic</span>
            </div>
          </div>

          {/* Action Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl border-2 border-orange-500/20"
            >
              <Link href="/order">
                <Utensils className="mr-2 h-5 w-5" />
                Order Now
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white shadow-lg"
            >
              <Link href="#menu-items">
                <ChefHat className="mr-2 h-5 w-5" />
                Explore Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Display Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">
              Our Complete Menu
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Desi Chai Dhaba Menu</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From Himalayan specialties to Punjabi classics, every dish is crafted with love and authentic spices
              imported directly from Nepal and India.
            </p>
          </div>

          {/* Menu Categories */}
          <div id="menu-items" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Appetizers */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Appetizers</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Veg Samosa (2)</span>
                    <span className="font-semibold text-orange-600">$3.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Samosa Chat</span>
                    <span className="font-semibold text-orange-600">$6.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Veg Pakoda</span>
                    <span className="font-semibold text-orange-600">$7.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Gobi Manchurian</span>
                    <span className="font-semibold text-orange-600">$12.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Chilli Chicken</span>
                    <span className="font-semibold text-orange-600">$12.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fish Pakoda</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Kadi Pakoda</span>
                    <span className="font-semibold text-orange-600">$10.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Chicken 65</span>
                    <span className="font-semibold text-orange-600">$13.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Punjabi Dhaba Specials */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Punjabi Specials</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Paneer Bhurji</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Egg Bhurji</span>
                    <span className="font-semibold text-orange-600">$13.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Chana Masala</span>
                    <span className="font-semibold text-orange-600">$13.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Kaddu Di Sabji</span>
                    <span className="font-semibold text-orange-600">$7.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vegetarian Curries */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <ChefHat className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Veg Curries</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dal Makhani</span>
                    <span className="font-semibold text-orange-600">$13.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dal Tadka</span>
                    <span className="font-semibold text-orange-600">$12.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Shahi Paneer</span>
                    <span className="font-semibold text-orange-600">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Malai Kofta</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Butter Paneer</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mutter Paneer</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Palak Paneer</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Paneer Tikka Masala</span>
                    <span className="font-semibold text-orange-600">$14.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Rajma</span>
                    <span className="font-semibold text-orange-600">$12.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Aalu Gobi</span>
                    <span className="font-semibold text-orange-600">$7.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Non-Vegetarian */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <Flame className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Non-Vegetarian</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Goat Curry</span>
                    <span className="font-semibold text-orange-600">$18.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Goat Kadai</span>
                    <span className="font-semibold text-orange-600">$19.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Local Chicken Curry</span>
                    <span className="font-semibold text-orange-600">$16.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Butter Chicken</span>
                    <span className="font-semibold text-orange-600">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Kadai Chicken</span>
                    <span className="font-semibold text-orange-600">$17.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fish Curry</span>
                    <span className="font-semibold text-orange-600">$17.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Shrimp Curry</span>
                    <span className="font-semibold text-orange-600">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Grilled Chicken</span>
                    <span className="font-semibold text-orange-600">$15.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Biryani & Rice */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Biryani & Rice</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Chicken Biryani</span>
                    <span className="font-semibold text-orange-600">$16.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Goat Biryani</span>
                    <span className="font-semibold text-orange-600">$18.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Rice</span>
                    <span className="font-semibold text-orange-600">$2.29</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Jeera Rice</span>
                    <span className="font-semibold text-orange-600">$2.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Coconut Rice</span>
                    <span className="font-semibold text-orange-600">$4.29</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Lemon Rice</span>
                    <span className="font-semibold text-orange-600">$3.59</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bread & Beverages */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Bread & Drinks</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-800 mb-2">BREAD:</div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Garlic Naan</span>
                    <span className="font-semibold text-orange-600">$2.69</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Plain Naan</span>
                    <span className="font-semibold text-orange-600">$2.29</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Butter Naan</span>
                    <span className="font-semibold text-orange-600">$2.49</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tandoori Roti</span>
                    <span className="font-semibold text-orange-600">$2.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mix Paratha</span>
                    <span className="font-semibold text-orange-600">$4.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Aalu Paratha</span>
                    <span className="font-semibold text-orange-600">$4.99</span>
                  </div>

                  <div className="text-sm font-semibold text-gray-800 mb-2 mt-4">BEVERAGES:</div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Plain Lassi</span>
                    <span className="font-semibold text-orange-600">$4.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mango Lassi</span>
                    <span className="font-semibold text-orange-600">$5.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tea</span>
                    <span className="font-semibold text-orange-600">$2.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Information - Mobile Optimized */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 md:p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Customize your spice level, choose pickup or delivery, and pay with cash, card, or online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 hover:text-orange-700 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white"
                aria-label="Place your order online now"
              >
                <Link href="/order">
                  <Phone className="mr-2 h-4 w-4" />
                  Order Online
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-lg"
                aria-label="Call us to place your order"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Dhaba */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-medium mb-4">Our Promise</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Why Choose Desi Chai Dhaba?</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We bring the authentic taste of Nepal and India to Texas's highways with traditional recipes and premium
              ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Nepali Heritage</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Authentic recipes from the Himalayas brought to Texas by our Nepali chef-owner.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Fresh Ingredients</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Premium spices and fresh ingredients sourced daily for authentic flavors.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Custom Spice</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Adjust spice levels from mild to extra hot to match your preference.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Quick Service</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Fast preparation without compromising on quality or authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
