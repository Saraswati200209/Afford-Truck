import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Facebook, Instagram, Phone, Clock, MapPin } from "lucide-react"

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Order Your Desi Meal Now</h1>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Easily order from our Desi Dhaba menu for pickup or delivery, customize spice levels, and pay with cash,
            card, or online.
          </p>

          {/* Phone Order Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-2 border-orange-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-900">Call to Order</h2>
                <p className="text-gray-600">Speak directly with our kitchen staff</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="text-center">
                <a
                  href="tel:+13257660119"
                  className="text-3xl md:text-4xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  (325) 766-0119
                </a>
                <p className="text-gray-600 mt-2">Tap to call on mobile devices</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center justify-center space-x-2 bg-green-50 rounded-lg p-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Quick Service</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-blue-50 rounded-lg p-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Pickup & Delivery</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-purple-50 rounded-lg p-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">Custom Orders</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">📞 When you call, please have ready:</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Your name and phone number</li>
                <li>• Pickup or delivery preference</li>
                <li>• Desired spice level (Mild, Medium, Hot, Extra Hot)</li>
                <li>• Any special dietary requirements</li>
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg w-full md:w-auto"
            >
              <a href="tel:+13257660119" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now to Order</span>
              </a>
            </Button>
          </div>

          {/* Operating Hours */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desi Dhaba Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Kitchen Hours</h4>
                  <p className="text-gray-600">Monday - Sunday</p>
                  <p className="text-lg font-bold text-orange-600">5:00 AM - 11:00 PM</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Phone Orders</h4>
                  <p className="text-gray-600">Available during kitchen hours</p>
                  <p className="text-lg font-bold text-green-600">Same Day Service</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Order</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-medium w-full sm:w-auto"
              >
                <Link href="/menu">Browse Menu</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium w-full sm:w-auto"
              >
                <Link href="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-gray-100 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
            <p className="text-gray-700 mb-2">
              <strong>Afford Truck Stop - Desi Dhaba</strong>
            </p>
            <p className="text-gray-600 mb-4">12825 S I-20, Roscoe, Texas 79545</p>
            <p className="text-sm text-gray-500">
              Located right off I-20 with easy truck and car access. Ample parking available.
            </p>
          </div>

          {/* Social Media Icons - Make labels always visible */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#"
              className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span>Follow on Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300 pt-8">
            <p className="text-gray-600 text-sm">Copyright © 2025 Afford Truck Stop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
