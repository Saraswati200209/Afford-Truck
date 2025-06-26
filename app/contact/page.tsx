"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We're here to help 24/7. Reach out to us for any questions, reservations, or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address & Map */}
            <section className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-black" />
              </div>

              <h2 className="text-3xl font-bold mb-6">Find Us</h2>

              <p className="text-lg mb-4">
                Visit us at <span className="text-orange-400">12825 S I-20, Roscoe, Texas 79545, United States</span>.
                Our location is easily accessible for trucks and cars, with ample parking and clear signage.
              </p>
            </section>

            {/* Contact Details */}
            <section className="text-center mb-16">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-black" />
              </div>

              <h2 className="text-3xl font-bold mb-6">Call Us</h2>

              <p className="text-lg mb-4">
                Our friendly staff is available by phone at{" "}
                <a href="tel:+13257660119" className="text-orange-400 hover:underline">
                  (325) 766-0119
                </a>
                . Whether you need directions, service updates, or assistance, we're here to help 24/7.
              </p>
            </section>

            {/* Hours of Operation */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <span>Hours of Operation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h3 className="font-semibold mb-2">Fuel Station</h3>
                    <p>24 Hours, 7 Days a Week</p>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4">
                    <h3 className="font-semibold mb-2">Dhaba Restaurant</h3>
                    <div className="space-y-1">
                      <p>Monday - Sunday: 5:00 AM - 11:00 PM</p>
                      <p className="text-sm text-green-400 font-medium">Fresh food prepared daily</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="font-semibold mb-2">Showers & Rest Area</h3>
                    <div className="space-y-1">
                      <p>24 Hours, 7 Days a Week</p>
                      <p className="text-sm text-blue-400 font-medium">Call ahead to reserve</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-300">Have a question or special request? We'd love to hear from you!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <a href="https://wa.me/13257660119" className="flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </Button>

              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <a href="tel:+13257660119" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>

            {/* Emergency Contact */}
            <Card className="mt-8 p-4 bg-red-500 border-red-300">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Contact</h3>
                <p className="text-red-700 text-sm mb-2">For urgent assistance or roadside emergencies:</p>
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white w-full">
                  <a href="tel:+18066864389" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Emergency Line: (806) 686-4389</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Email Section */}
          <section className="text-center mb-16">
            <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-black" />
            </div>

            <h2 className="text-3xl font-bold mb-6">Email Us</h2>

            <p className="text-lg mb-4">
              Reach out to us via email at{" "}
              <a href="mailto:Affordtruckstopinc@gmail.com" className="text-orange-400 hover:underline">
                Affordtruckstopinc@gmail.com
              </a>{" "}
              for inquiries, reservations, or feedback. We strive to respond promptly to all messages to assist you
              during your visit.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
