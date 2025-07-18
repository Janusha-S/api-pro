import React from "react";
import { motion } from "framer-motion";
import hd1 from "../assets/api4.jpg"; // your image path

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-sans text-gray-900 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-64 p-8 bg-white/90 backdrop-blur-sm border-r border-gray-200 shadow-md hidden md:block"
      >
        <h2 className="text-lg font-semibold mb-4 uppercase text-gray-700 tracking-widest">
          Getting Started
        </h2>
        <ul className="space-y-3 mb-10">
          <li>
            <a href="#authentication" className="text-blue-600 hover:underline">
              Authentication
            </a>
          </li>
        </ul>
        <h2 className="text-lg font-semibold mb-4 uppercase text-gray-700 tracking-widest">
          Core Resources
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="#get-users"
              className="font-semibold text-gray-900 border-l-4 border-blue-600 pl-2"
            >
              GET /users
            </a>
          </li>
          <li>
            <a href="#post-users" className="text-gray-600 hover:text-blue-600">
              POST /users
            </a>
          </li>
          <li>
            <a href="#get-analytics" className="text-gray-600 hover:text-blue-600">
              GET /analytics
            </a>
          </li>
          <li>
            <a href="#get-logs" className="text-gray-600 hover:text-blue-600">
              GET /logs
            </a>
          </li>
        </ul>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-10">
        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={hd1}
            alt="API Docs Banner"
            className="w-full h-60 md:h-72 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Docs Content */}
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1
            className="text-4x0 md:text-5xl font-extrabold mb-6 tracking-tight"
            id="get-users"
          >
            GET /v1/users
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Retrieves a list of all users associated with your project.
          </p>

          <h2 className="text-2xl font-bold mb-4">Example Request</h2>
          <pre className="bg-gray-900 text-white text-sm rounded-xl p-6 overflow-x-auto shadow-lg mb-10">
            <code>
              {`fetch("https://api.apipro.com/v1/users", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data));`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold mb-4">Example Response (200 OK)</h2>
          <pre className="bg-gray-100 text-gray-800 text-sm rounded-xl p-6 overflow-x-auto shadow-inner">
            <code>
              {`[
  {
    "id": "user_1",
    "name": "Jane Doe",
    "email": "jane@example.com"
  },
  {
    "id": "user_2",
    "name": "John Smith",
    "email": "john@example.com"
  }
]`}
            </code>
          </pre>
        </motion.main>
      </div>
    </div>
  );
}
