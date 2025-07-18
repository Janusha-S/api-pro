import React from "react";
import { motion } from "framer-motion";
import hd1 from "../assets/contact.jpg";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-white px-4 md:px-0 py-20 font-sans"
      style={{ fontFamily: "'Inter', sans-serif", color: "#222222" }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a technical question, a sales inquiry, or just want to chat? We'd love to hear from you.
        </p>
      </motion.div>

      {/* Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="h-[500px] md:h-auto"
        >
          <img
            src={hd1}
            alt="Contact Visual"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Form & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-10 space-y-10"
        >
          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ color: "#222222", fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Work Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ color: "#222222", fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Name (Optional)</label>
              <input
                type="text"
                placeholder="Company"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ color: "#222222", fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ color: "#222222", fontFamily: "'Inter', sans-serif" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-black text-white rounded-xl px-6 py-3 font-semibold hover:bg-gray-900 transition"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="border-t pt-6 space-y-6 text-sm" style={{ color: "#222222", fontFamily: "'Inter', sans-serif" }}>
            <div>
              <h3 className="font-semibold mb-1">Our Office</h3>
              <p>123 Tech Avenue, Innovation City, Connectiville 45678</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-blue-600" style={{ fontFamily: "'Inter', sans-serif" }}>hello@apipro.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
