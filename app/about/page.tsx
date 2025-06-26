import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Clock, Mountain, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the mountains of Nepal to the highways of Texas - a journey of dreams, determination, and authentic
            hospitality.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">From Kathmandu to Texas: Kanishka's Journey</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Afford Truck Stop began as the dream of Kanishka Chougai, a young entrepreneur from the beautiful
              mountains of Nepal. Born and raised in Kathmandu, Kanishka grew up surrounded by the rich culinary
              traditions of the Himalayas, where food is not just sustenance but a way of bringing people together.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In 2010, Kanishka made the bold decision to leave his homeland and pursue the American dream. With nothing
              but determination, a few family recipes passed down through generations, and an unwavering belief in the
              power of authentic hospitality, he arrived in Texas with a vision to create something special.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding the challenges of being far from home, Kanishka wanted to create a place where travelers -
              especially truck drivers who spend countless hours on the road - could experience the warmth of Nepali and
              South Asian hospitality. What started as a small fuel station with a tiny kitchen has grown into a
              full-service truck stop that serves over 500 customers daily, but our core values remain unchanged: treat
              every guest like family.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/petrol-pump-california.jpg"
              alt="Afford Truck Stop facility in Texas"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-medium text-gray-900">Afford Truck Stop - Texas</p>
              <p className="text-xs text-gray-600">A Nepali dream realized in America</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values & Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nepali Hospitality</h3>
                <p className="text-gray-600">
                  "Atithi Devo Bhava" - Our guests are like gods. We treat every visitor with the warmth and respect of
                  Himalayan tradition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mountain Heritage</h3>
                <p className="text-gray-600">
                  Bringing the authentic flavors and traditions from the roof of the world to the heart of Texas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Family Business</h3>
                <p className="text-gray-600">
                  A family-owned business where traditional Nepali values meet American entrepreneurship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Quality</h3>
                <p className="text-gray-600">
                  Fresh ingredients, traditional recipes, and attention to detail in everything we do - just like back
                  home.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Bridge</h3>
                <p className="text-gray-600">
                  Connecting cultures through food, creating a home away from home for travelers from all backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Always Open</h3>
                <p className="text-gray-600">24/7 service because we know the road doesn't sleep, and neither do we.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kanishka's Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-lg font-semibold min-w-[80px]">1985</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Born in Kathmandu</h3>
                  <p className="text-gray-600">
                    Kanishka Chougai was born in Kathmandu, Nepal, growing up in a family that valued hard work,
                    hospitality, and authentic cooking.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-lg font-semibold min-w-[80px]">2010</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The American Dream</h3>
                  <p className="text-gray-600">
                    Arrived in Texas with a vision to bring authentic Nepali and South Asian cuisine to American
                    highways.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-lg font-semibold min-w-[80px]">2012</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">First Truck Stop</h3>
                  <p className="text-gray-600">
                    Opened the first small fuel station with a tiny kitchen, serving traditional Nepali and Indian
                    dishes to truck drivers.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-lg font-semibold min-w-[80px]">2015</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Desi Chai Dhaba</h3>
                  <p className="text-gray-600">
                    Expanded the kitchen and officially launched "Desi Chai Dhaba" - bringing the authentic taste of the
                    Himalayas to Texas.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-lg font-semibold min-w-[80px]">2018</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Service Expansion</h3>
                  <p className="text-gray-600">
                    Added comprehensive truck stop services including showers, RV park, and convenience store while
                    maintaining authentic food quality.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <Badge className="bg-green-600 text-white px-4 py-2 text-lg font-semibold min-w-[80px]">Today</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Serving Thousands</h3>
                  <p className="text-gray-600">
                    Proud to serve over 500 customers daily while maintaining Nepali values, authentic flavors, and
                    genuine hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/Kanishka-Chougai.jpg"
                alt="Kanishka Chougai - Owner and Founder of Afford Truck Stop"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kanishka Chougai</h3>
              <p className="text-orange-600 font-medium mb-2">Founder & Owner</p>
              <p className="text-gray-600 text-sm">
                Nepali entrepreneur bringing authentic Himalayan hospitality and cuisine to Texas highways.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=200&text=Head+Chef"
                alt="Head Chef at Desi Chai Dhaba"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sita Chougai</h3>
              <p className="text-orange-600 font-medium mb-2">Head Chef</p>
              <p className="text-gray-600 text-sm">
                Master of traditional Nepali and Indian recipes, ensuring every dish tastes like home-cooked food.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=200&text=Operations+Manager"
                alt="Operations Manager at Afford Truck Stop"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Arjun Chougai</h3>
              <p className="text-orange-600 font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Second generation, bringing modern efficiency while preserving Nepali family traditions and values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
