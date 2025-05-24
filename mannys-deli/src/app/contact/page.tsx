"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react"
import { config } from "../../../config/constants"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9b8d72b5-66c4-4804-8db7-35dcf4149632",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setFormState("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setFormState("error")
      }
    } catch (error) {
      console.error("Submission error:", error); // Now we're using the error
      setFormState("error")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-black">Contact Us</h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 dark:text-black">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <Link href="https://maps.apple.com/place?place-id=IEB91239656B40A08&_provider=9902" target="_blank">
                    <div>
                      <h3 className="font-medium dark:text-black">Address</h3>
                      <p className="text-gray-600">{config.COMPANY.ADDRESS}</p>
                    </div>
                  </Link>
                </div>

                <div className="flex items-start dark:text-black">
                  <Phone className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium dark:text-black">Phone</h3>
                    <p className="text-gray-600">
                      <Link href={`tel:${config.COMPANY.PHONE1}`}>{config.COMPANY.PHONE1}</Link>
                    </p>
                    <p className="text-gray-600">
                      <Link href={`tel:${config.COMPANY.PHONE2}`}>{config.COMPANY.PHONE2}</Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start dark:text-black">
                  <Mail className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium dark:text-black">Email</h3>
                    <p className="text-gray-600">{config.COMPANY.EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium dark:text-black">Hours</h3>
                    <p className="text-gray-600">{config.COMPANY.HOURS}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-black">Find Us</h2>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-full h-[300px]">
                  <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28%20Bouton%20Street,%20Norwalk,%20CT%2006854+(Manny's%20Deli)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="3 Tiny Steps Home Daycare Location"
                    loading="lazy"
                    className="w-full h-full border-0"
                    allowFullScreen
                    aria-hidden="false"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 dark:text-black">Send Us a Message</h2>

            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg mb-6 flex items-start gap-3">
              <AlertCircle className="flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium">Important Note:</p>
                <p>
                  Please do not use this contact form to place food orders. For immediate service, call us directly
                  at <a href={`tel:${config.COMPANY.PHONE1}`} className="underline">{config.COMPANY.PHONE1}</a>,{' '}
                  <a href={`tel:${config.COMPANY.PHONE2}`} className="underline">{config.COMPANY.PHONE2}</a> {`or use the "Order Online" button to order online.`}
                </p>
              </div>
            </div>

            {/* Success/Error Messages */}
            {formState === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                <h3 className="font-medium">Thank You!</h3>
                <p>{"Your message has been received. We'll get back to you as soon as possible"}.</p>
              </div>
            )}

            {formState === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                <h3 className="font-medium">Error</h3>
                <p>{`We're sorry, your submission failed. Please try again or contact us directly.`}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}