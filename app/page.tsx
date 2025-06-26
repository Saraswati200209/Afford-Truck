import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Star,
  Clock,
  MapPin,
  Phone,
  Fuel,
  Utensils,
  ShowerHeadIcon as Shower,
  Wifi,
  Car,
  Truck,
  Play,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section - Centered Content */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/afford.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-8">
          {/* Badge */}
          <div className="mb-6">
            <Badge className="bg-orange-600/90 text-white px-4 sm:px-6 py-2 text-sm sm:text-base font-medium">
              Texas's Premier Truck Stop
            </Badge>
          </div>

          {/* Main Heading - Better Positioned */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Afford Truck Stop
            </span>
          </h1>

          <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6 sm:mb-8"></div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Your ultimate destination for premium truck stop services, authentic Indian cuisine, and unmatched
            hospitality. Experience the difference where quality meets tradition.
          </p>

          {/* Premium Action Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black hover:scale-105 transition-all duration-300 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl shadow-2xl border-2 border-white min-w-[200px] sm:min-w-[250px]"
              aria-label="Explore our premium truck stop services"
            >
              <Link href="/services">
                <Fuel className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Explore Services
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 hover:scale-105 transition-all duration-300 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl shadow-2xl border-2 border-orange-500/20 min-w-[200px] sm:min-w-[250px]"
              aria-label="Order authentic Indian food from our Desi Dhaba"
            >
              <Link href="/menu">
                <Utensils className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Order Desi Food
              </Link>
            </Button>
          </div>

          {/* Quick Stats - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto px-4">
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">24/7</div>
              <p className="text-xs sm:text-sm opacity-90">Always Open</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">500+</div>
              <p className="text-xs sm:text-sm opacity-90">Daily Customers</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">15+</div>
              <p className="text-xs sm:text-sm opacity-90">Years Serving</p>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">4.8★</div>
              <p className="text-xs sm:text-sm opacity-90">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-medium mb-4">Virtual Tour</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">See Afford Truck Stop in Action</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Take a virtual tour of our facilities and see why truck drivers and travelers choose Afford Truck Stop for
              their journey needs. Experience our premium services, authentic cuisine, and welcoming atmosphere.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Video Element */}
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/afford.jpg"
                  aria-label="Afford Truck Stop facility tour video"
                >
                  <source src="/videos/Affordtruckvideo.mp4" type="video/mp4" />
                  <p className="text-center text-gray-400 p-8">
                    Your browser does not support the video tag. Please update your browser to view this content.
                  </p>
                </video>

                {/* Play Button Overlay (optional - browsers usually provide their own) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-orange-600/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Fuel className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white">Premium Facilities</h3>
                      <p className="text-sm text-gray-400">Modern fuel stations & amenities</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Utensils className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white">Authentic Cuisine</h3>
                      <p className="text-sm text-gray-400">Fresh Nepali & Indian dishes</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white">Truck Friendly</h3>
                      <p className="text-sm text-gray-400">Spacious parking & services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">Ready to experience it yourself? Visit us today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Link href="/contact">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white"
              >
                <Link href="/services">
                  <Fuel className="mr-2 h-4 w-4" />
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">Premium Services</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need Under One Roof
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From fuel to food, showers to rest areas - we provide comprehensive services designed for the modern
              traveler and professional driver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Fuel className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Premium Fuel</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  High-quality diesel and gasoline available 24/7 with competitive pricing and fast service.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Diesel
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gasoline
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    24/7
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Desi Dhaba</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Authentic Indian cuisine prepared fresh daily with traditional recipes and premium ingredients.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Fresh Daily
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Authentic
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Spice Levels
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shower className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Clean Showers</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Private, well-maintained shower facilities with fresh towels and premium amenities.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Private
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Clean
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Towels
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Truck Parking</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Secure, well-lit parking spaces designed specifically for large trucks and commercial vehicles.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Secure
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Well-lit
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Large Spaces
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wifi className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Free WiFi</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  High-speed internet access throughout the facility to keep you connected on the road.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    High-Speed
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Free
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Reliable
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Rest Areas</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Comfortable seating areas and rest zones for drivers to relax and recharge during their journey.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Comfortable
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Quiet
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Clean
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-medium mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">The Afford Truck Stop Difference</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another truck stop. Afford Truck Stop is a family-owned business committed to providing
              exceptional service and authentic Nepali hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Always Open</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                24/7 service because the road never sleeps, and neither do we.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Only the best fuel, food, and facilities for our valued customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Prime Location</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Strategically located on major highways for easy access.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Personal Service</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Family-owned business with genuine care for every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">Customer Reviews</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what truck drivers and travelers say about their experience at
              Afford Truck Stop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 shadow-lg border-0">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm sm:text-base">
                  "Best truck stop on the I-20! The butter chicken is incredible, and the showers are always spotless.
                  Kanishka and his family treat everyone like family."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Mike Rodriguez</p>
                    <p className="text-xs sm:text-sm text-gray-500">Long-haul Trucker</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 shadow-lg border-0">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm sm:text-base">
                  "Amazing food and service! The biryani reminds me of home. Clean facilities and friendly staff make
                  this my go-to stop every time I'm in Texas."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Sarah Johnson</p>
                    <p className="text-xs sm:text-sm text-gray-500">Frequent Traveler</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 shadow-lg border-0">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm sm:text-base">
                  "Professional service, competitive fuel prices, and the best Nepali food on the highway. Highly
                  recommend to all drivers!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">David Chen</p>
                    <p className="text-xs sm:text-sm text-gray-500">Fleet Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Visit Afford Truck Stop today and discover why we're Texas's premier destination for truck drivers and
            travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 hover:text-orange-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-2 border-white"
              aria-label="Get directions to Afford Truck Stop"
            >
              <Link href="/contact">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg"
              aria-label="Order food from our Desi Dhaba restaurant"
            >
              <Link href="/menu">
                <Utensils className="mr-2 h-4 w-4" />
                Order Food Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
