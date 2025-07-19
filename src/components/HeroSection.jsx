import React, { useState, useEffect } from "react";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import heroImage1 from "../assets/api1.jpg";
import heroImage2 from "../assets/api2.jpg";
import heroImage3 from "../assets/api3.jpg";

const HeroSection = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: ChartBarIcon, label: "Real-time API Monitoring" },
    { icon: ShieldCheckIcon, label: "Enterprise Security" },
    { icon: CodeBracketIcon, label: "Auto Testing & Validation" },
    { icon: RocketLaunchIcon, label: "AI-powered Optimization" },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0e1446] via-[#3a2b91] to-[#2c1065] text-white flex flex-col justify-center items-center font-sans">
      <div className="w-full max-w-7xl px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Effortless API Management.
            <br />
            <span className="text-sky-400">Powerful Results.</span>
          </h1>

          <p className="mt-6 text-lg text-sky-200 leading-relaxed">
            API PRO is the all-in-one platform designed to take your APIs from
            development to production with unparalleled speed, security, and
            AI-driven insights.
          </p>

          <button className="mt-8 bg-sky-600 hover:bg-sky-700 transition text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300">
            Get Started for Free
          </button>

          <p className="mt-4 text-sm text-white/70 font-medium">
            🌍 Trusted by <span className="text-sky-300 font-bold">100,000+</span> developers globally
          </p>
        </div>

        {/* Right Side Image */}
        <div className="relative flex-1 w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-violet-500">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`API Hero ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100 scale-105" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-white">
            Development
          </div>
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-white">
            {currentIndex + 1} / {heroImages.length}
          </div>
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-white">
            ⚡ 42ms <span className="text-xs opacity-70">Response Time</span>
          </div>
        </div>
      </div>

      {/* Feature Icons */}
      <div className="px-6 pb-16 flex flex-wrap justify-center gap-10 text-center">
        {features.map(({ icon: Icon, label }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 text-white/90 transition transform hover:scale-105"
          >
            <div className="p-3 rounded-full bg-white/5 backdrop-blur shadow-[0_0_20px_#a855f7]">
              <Icon className="w-10 h-10 text-purple-400 drop-shadow-md" />
            </div>
            <p className="text-sm font-semibold">{label}</p>
          </div>
        ))}
      </div>

      {/* Dot Carousel */}
      <div className="flex gap-2 pb-8">
        {heroImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-sky-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
      <a
  href="#features-section"
  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white drop-shadow-lg hover:text-purple-300 transition"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</a>

    </section>
  );
};

export default HeroSection;
