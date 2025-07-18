import React from "react";
import starterImg from "../assets/api3.jpg";
import proImg from "../assets/hd1.jpg";
import enterpriseImg from "../assets/api2.jpg";

export default function Pricing() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-white text-gray-900 font-sans px-6 py-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
          Simple, Transparent Pricing for Teams of All Sizes
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Start for free and scale as you go. No hidden fees, ever.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Starter Plan */}
        <div
          className="relative flex flex-col bg-white border border-gray-300 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
          style={{ minHeight: "580px" }}
        >
          <div className="relative rounded-t-3xl overflow-hidden shadow-inner">
            <img
              src={starterImg}
              alt="Starter Plan"
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
          </div>
          <div className="p-10 flex flex-col flex-grow text-center">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
              Starter
            </h3>
            <p className="text-5xl font-extrabold mb-6 text-sky-600">
              $0{" "}
              <span className="text-xl font-normal align-bottom tracking-tight">
                / month
              </span>
            </p>
            <ul className="text-gray-700 space-y-4 mb-10 text-left max-w-xs mx-auto text-lg leading-relaxed">
              {[
                "1 Project",
                "10,000 API Calls/mo",
                "Basic Analytics",
                "Community Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="inline-block w-5 h-5 bg-sky-500 rounded-full shadow-sm" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto bg-sky-600 text-white px-14 py-4 rounded-full font-semibold shadow-md hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-400 transition transform hover:scale-105"
            >
              Start for Free
            </button>
          </div>
        </div>

        {/* Pro Plan (Most Popular) */}
        <div
          className="relative flex flex-col rounded-3xl shadow-2xl transform hover:-translate-y-3 transition duration-300 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white"
          style={{ minHeight: "580px" }}
        >
          <div className="absolute top-5 right-5 bg-yellow-400 text-indigo-900 font-bold rounded-full px-5 py-1.5 text-sm shadow-lg select-none z-10 tracking-wide uppercase drop-shadow-sm">
            Most Popular
          </div>
          <div className="overflow-hidden rounded-t-3xl shadow-inner">
            <img
              src={proImg}
              alt="Pro Plan"
              className="w-full h-56 object-cover brightness-90 transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-900/90 to-transparent pointer-events-none" />
          </div>
          <div className="p-12 flex flex-col flex-grow text-center">
            <h3 className="text-4xl font-extrabold mb-4 tracking-wide">
              Pro
            </h3>
            <p className="text-6xl font-extrabold mb-10">
              $49{" "}
              <span className="text-2xl font-normal align-bottom tracking-tight">
                / month
              </span>
            </p>
            <ul className="space-y-5 mb-14 font-semibold text-left max-w-xs mx-auto text-lg leading-relaxed text-indigo-300">
              {[
                "10 Projects",
                "1 Million API Calls/mo",
                "AI-Powered Analytics",
                "Advanced Security",
                "Email Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span className="inline-block w-6 h-6 bg-yellow-400 rounded-full shadow-lg" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto bg-yellow-400 text-indigo-900 px-16 py-5 rounded-full font-bold shadow-xl hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition transform hover:scale-110"
            >
              Choose Pro
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div
          className="relative flex flex-col bg-white border border-gray-300 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
          style={{ minHeight: "580px" }}
        >
          <div className="relative rounded-t-3xl overflow-hidden shadow-inner">
            <img
              src={enterpriseImg}
              alt="Enterprise Plan"
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
          </div>
          <div className="p-10 flex flex-col flex-grow text-center">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
              Enterprise
            </h3>
            <p className="text-4xl font-extrabold mb-6 text-gray-800">Let's Talk</p>
            <ul className="text-gray-700 space-y-4 mb-10 text-left max-w-xs mx-auto text-lg leading-relaxed font-semibold">
              {[
                "Unlimited Projects",
                "Custom API Call Volume",
                "On-Premise Deployment",
                "Security Audits",
                "Dedicated 24/7 Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="inline-block w-5 h-5 bg-gray-600 rounded-full shadow-sm" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto bg-gray-900 text-white px-14 py-4 rounded-full font-semibold shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700 transition transform hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>
    </div>
  );
}
