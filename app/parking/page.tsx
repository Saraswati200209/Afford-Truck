import { Button } from "@/components/ui/button"
import { Fuel } from "lucide-react"
import Link from "next/link"

export default function ParkingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Indoor Parking Section */}
      <section
        className="relative h-screen flex items-end"
        style={{
          backgroundImage: "url('/images/indoor-parking.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 w-full bg-white rounded-t-3xl p-8 mx-4 mb-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Indoor Parking & Amenities</h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Take advantage of our ample indoor parking, free Wi-Fi, vending machines, and comfortable seating. Relax
              and recharge before continuing your journey. We prioritize your comfort and convenience.
            </p>

            <Button
              className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full border-2 border-orange-600"
              asChild
            >
              <Link href="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <Fuel className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
