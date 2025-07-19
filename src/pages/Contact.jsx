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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a technical question, a sales inquiry, or just want to chat? We’d love to hear from you.
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-[0_0_40px_#c084fc]">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-10 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl transition-all duration-500"
        >
          {/* Form */}
          <form className="space-y-6">
            {[
              { label: "Full Name", type: "text", placeholder: "Your name" },
              { label: "Work Email", type: "email", placeholder: "you@example.com" },
              { label: "Company Name (Optional)", type: "text", placeholder: "Company" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium mb-2 text-gray-800">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-800">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-purple-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="border-t mt-10 pt-6 space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold mb-1">Our Office</h3>
              <p>123 Tech Avenue, Innovation City, Connectiville 45678</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-purple-600 font-medium">hello@apipro.com</p>
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
