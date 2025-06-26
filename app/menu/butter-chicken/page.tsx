import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Utensils } from "lucide-react"

export default function ButterChickenPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Butter Chicken Image */}
        <div className="mb-8">
          <img
            src="/images/butter-chicken.jpg"
            alt="Butter Chicken with naan and rice"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Butter Chicken</h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Our signature Butter Chicken is a creamy, tomato-based curry with tender pieces of tandoori chicken. Served
            with naan or rice, it's a classic favorite. Spice level can be adjusted to your preference.
          </p>

          <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3">
            <Link href="/menu" className="flex items-center space-x-2">
              <span>Back to Full Menu</span>
              <Utensils className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Additional Image */}
        <div className="mt-12">
          <div className="h-32 bg-gray-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
