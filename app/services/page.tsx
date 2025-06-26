import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Fuel,
  Utensils,
  ShowerHeadIcon as Shower,
  Truck,
  Car,
  Clock,
  Star,
  MapPin,
  Phone,
  DollarSign,
  Wrench,
  VoicemailIcon as Fax,
  Store,
  Caravan,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Premium Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/services-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />

        <div className="relative z-10 text-white px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <Badge className="bg-orange-600/90 text-white px-4 py-2 text-sm md:text-base font-medium mb-6">
                Premium Truck Stop Services
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complete Services for
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Every Journey
                </span>
              </h1>

              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                From premium fuel to authentic cuisine, clean facilities to comfortable rest areas - we provide
                everything you need to fuel up, freshen up, and get back on the road with confidence.
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <Star className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium">Prime Location</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium">Expert Staff</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
                  aria-label="Get directions to our truck stop location"
                >
                  <Link href="/contact">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white/95 text-black border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm shadow-lg"
                  aria-label="Explore our detailed services information"
                >
                  <Link href="#services-details">
                    <Fuel className="mr-2 h-4 w-4" />
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <p className="text-sm opacity-90">Always Available</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                <p className="text-sm opacity-90">Daily Customers</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">4.8★</div>
                <p className="text-sm opacity-90">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services-details" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything You Need Under One Roof</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive truck stop services designed for professional drivers and travelers who demand quality and
              convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fuel Services */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Fuel className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Diesel & Gasoline</h3>
                <p className="text-gray-600 mb-6">
                  High-quality diesel and gasoline available 24/7 with competitive pricing. Multiple pump stations for
                  quick service.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">24/7 Availability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Diesel & Gasoline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Competitive Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Fast Service</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Desi Dhaba */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Food & Restaurant</h3>
                <p className="text-gray-600 mb-6">
                  Authentic Indian cuisine prepared fresh daily. From aromatic biryanis to creamy curries, taste the
                  flavors of India.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Fresh Daily Preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Authentic Indian Recipes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Custom Spice Levels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Takeout & Delivery</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Truck Parking */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Truck Parking (12hrs Free)</h3>
                <p className="text-gray-600 mb-6">
                  Large, secure parking spaces designed for trucks and commercial vehicles with 12 hours free parking.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">12 Hours Free Parking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">24/7 Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Well-Lit Areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Easy Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RV Park */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Caravan className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">RV Park</h3>
                <p className="text-gray-600 mb-6">
                  Full-service RV park with hookups for water, electricity, and sewer. Perfect for extended stays.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Full Hookups</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Water & Electricity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Sewer Connections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Extended Stays Welcome</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* U-Haul Rental */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">U-Haul Rental</h3>
                <p className="text-gray-600 mb-6">
                  Convenient U-Haul truck and trailer rentals for your moving needs. Various sizes available.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Multiple Sizes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Trucks & Trailers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Easy Booking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Competitive Rates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ATM */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">ATM Services</h3>
                <p className="text-gray-600 mb-6">
                  24/7 ATM access for your banking needs. Convenient cash withdrawal with competitive fees.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm">24/7 Access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm">Cash Withdrawal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm">Balance Inquiry</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm">Secure Location</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Convenience Store */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Convenience Store</h3>
                <p className="text-gray-600 mb-6">
                  Fully stocked convenience store with snacks, drinks, travel essentials, and truck supplies.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Snacks & Drinks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Travel Essentials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Truck Supplies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">24/7 Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shower Facilities */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shower className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Clean Showers</h3>
                <p className="text-gray-600 mb-6">
                  Private, well-maintained shower rooms with fresh towels, premium amenities, and 24/7 availability.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">Private Rooms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">Fresh Towels Provided</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">Premium Amenities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm">Always Clean</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fax/Internet */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Fax className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fax & Internet</h3>
                <p className="text-gray-600 mb-6">
                  High-speed internet access and fax services for your business needs. Stay connected on the road.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-sm">High-Speed WiFi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-sm">Fax Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-sm">Business Center</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-sm">Document Services</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Truck Repair */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Truck Repair</h3>
                <p className="text-gray-600 mb-6">
                  Professional truck repair services with experienced mechanics. Get back on the road quickly and
                  safely.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-sm">Experienced Mechanics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-sm">Emergency Repairs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-sm">Quality Parts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-sm">Fair Pricing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Premium Service Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit Afford Truck Stop and discover why professional drivers choose us for all their travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              aria-label="Get directions to visit us"
            >
              <Link href="/contact">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white"
              aria-label="Order food from our restaurant"
            >
              <Link href="/menu">
                <Utensils className="mr-2 h-4 w-4" />
                Order Food
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
