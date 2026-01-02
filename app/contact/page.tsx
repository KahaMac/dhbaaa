"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", organization: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Ekata Hotels</h1>
            <p className="text-lg text-gray-600">Get in touch with us for any inquiries or support</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Form and Contact Info Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-50 border-l-4 border-green-500 px-4 py-3 rounded mb-6 flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-green-900 text-sm">Thank you for your message!</p>
                  <p className="text-sm text-green-700">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent transition bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent resize-none transition"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#2d5016] text-white py-3 rounded-lg font-semibold hover:bg-[#3d6a1e] transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#2d5016] text-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="border border-white/40 rounded-full p-3 flex items-center justify-center shrink-0 w-12 h-12 group-hover:bg-white/10 transition-all">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-lg">Address</p>
                  <p className="opacity-90 leading-relaxed">
                    P92M+YC3, Kathmandu 44600<br />Nepal
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="border border-white/40 rounded-full p-3 flex items-center justify-center shrink-0 w-12 h-12 group-hover:bg-white/10 transition-all">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-lg">Phone</p>
                  <a href="tel:+977014981882" className="opacity-90 hover:opacity-100 transition block">
                    +977 01-4981882
                  </a>
                  <a href="tel:+9779851195211" className="opacity-90 hover:opacity-100 transition block">
                    +977 9851195211
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="border border-white/40 rounded-full p-3 flex items-center justify-center shrink-0 w-12 h-12 group-hover:bg-white/10 transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-lg">Email</p>
                  <a 
                    href="mailto:Ktmhotelbusinessassociation@gmail.com" 
                    className="opacity-90 hover:opacity-100 transition break-words"
                  >
                    Ktmhotelbusinessassociation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="border border-white/40 rounded-full p-3 flex items-center justify-center shrink-0 w-12 h-12 group-hover:bg-white/10 transition-all">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-lg">Office Hours</p>
                  <p className="opacity-90 leading-relaxed">
                    Sunday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width Below */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="bg-[#2d5016]/10 rounded-lg p-2">
                <MapPin className="text-[#2d5016]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Find Us Here</h3>
                <p className="text-sm text-gray-600">Visit our office in Kathmandu</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7629852583764!2d85.351058!3d27.702396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzEyLjYiTiA4NcKwMjEnMDUuOCJF!5e0!3m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unity Hotel and Guesthouse Business Association Location Map"
            />
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#2d5016] shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Unity Hotel and Guesthouse Business Association Location</p>
                <p className="text-gray-600 text-sm mt-1">P92M+YC3, Kathmandu 44600, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}