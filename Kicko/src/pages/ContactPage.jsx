import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Have a question or need assistance? We're here to help! Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+15551234567" className="text-orange-600 font-semibold hover:text-orange-700">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
              <a href="mailto:support@kicko.com" className="text-orange-600 font-semibold hover:text-orange-700">
                support@kicko.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Come say hello at our store</p>
              <p className="text-gray-700">
                123 Shoe Street<br />
                Fashion District<br />
                New York, NY 10001
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
              <div className="text-gray-700 space-y-1">
                <p>Monday - Friday: 9am - 8pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: 11am - 5pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for all unworn items with original packaging. Returns are free and hassle-free.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">How long does shipping take?</h3>
              <p className="text-gray-600">
                Standard shipping takes 3-5 business days. Express shipping options are available at checkout for faster delivery.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes! We ship to over 50 countries worldwide. International shipping costs are calculated at checkout.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Are all products authentic?</h3>
              <p className="text-gray-600">
                Absolutely! We only source from authorized distributors and guarantee 100% authentic products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Live Chat
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-gray-300 text-lg">
              Follow us on social media for the latest updates, exclusive deals, and style inspiration!
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-full transition-all transform hover:scale-110">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-full transition-all transform hover:scale-110">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-full transition-all transform hover:scale-110">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-full transition-all transform hover:scale-110">
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-full">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Live Chat Available Mon-Fri, 9am-6pm EST</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ContactPage