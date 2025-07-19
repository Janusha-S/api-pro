import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";

import {
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import heroImage1 from "../assets/api1.jpg";
import heroImage2 from "../assets/api2.jpg";
import heroImage3 from "../assets/api3.jpg";
import logoInnovate from "../assets/innovatecorp-logo.png";
import logoQuantum from "../assets/quantumleap-logo.png";
import logoDataWeave from "../assets/dataweave-logo.png";
import logoNextGen from "../assets/nextgen-logo.png";
import logoApex from "../assets/apex-logo.png";

const Home = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: "AI-Powered Analytics",
      desc:
        "Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.",
      gradient: "from-indigo-700 via-purple-700 to-sky-700",
    },
    {
      icon: ShieldCheckIcon,
      title: "Bank-Grade Security",
      desc:
        "Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.",
      gradient: "from-fuchsia-700 via-pink-600 to-rose-600",
    },
    {
      icon: CodeBracketIcon,
      title: "Superior Developer Experience",
      desc:
        "With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.",
      gradient: "from-purple-600 via-violet-700 to-indigo-800",
    },
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const companies = [
    { src: logoInnovate, name: "InnovateCorp" },
    { src: logoQuantum, name: "QuantumLeap Tech" },
    { src: logoDataWeave, name: "DataWeave Solutions" },
    { src: logoNextGen, name: "NextGen Systems" },
    { src: logoApex, name: "Apex Digital" },
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 min-h-screen">
      {/* Hero Section */}
      <HeroSection currentImage={heroImages[currentHeroIndex]} />

      {/* Features Section */}
      <section
        id="features-section"
        className="max-w-7xl mx-auto px-6 py-28 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-24 text-white drop-shadow-xl">
          Everything You Need in One Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {features.map(({ icon: Icon, title, desc, gradient }, idx) => (
            <div
              key={idx}
              className={`relative p-12 rounded-3xl bg-gradient-to-br ${gradient} text-white shadow-xl cursor-default transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
              style={{
                animation: `fadeInUp 0.8s ease forwards`,
                animationDelay: `${idx * 0.3}s`,
                opacity: 0,
              }}
            >
              <Icon className="mx-auto h-20 w-20 mb-8 drop-shadow-xl" />
              <h3 className="text-2xl font-semibold mb-5">{title}</h3>
              <p className="text-white/90 text-lg leading-relaxed">{desc}</p>
              <span
                aria-hidden="true"
                className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/25 blur-2xl animate-pulse"
              />
            </div>
          ))}
        </div>
      </section>

    {/* Trusted Companies Section */}
<section className="bg-gradient-to-r from-[#dbeafe] via-white to-[#ede9fe] py-24 px-6 overflow-hidden shadow-inner">
  <h3 className="text-center text-xl font-semibold text-purple-800 mb-2 tracking-wide animate-fadeInUp">
    100,000+ Developers Trust Us
  </h3>
  <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16 animate-fadeInUp">
    Trusted by the World's Most Innovative Companies
  </h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex space-x-24 animate-marquee whitespace-nowrap">
      {companies.concat(companies).map(({ src, name }, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center min-w-[220px] transition-transform duration-500 hover:scale-110"
        >
          <img
            src={src}
            alt={`${name} logo`}
            className="h-32 w-auto object-contain drop-shadow-[0_4px_8px_rgba(128,90,213,0.5)]"
            loading="lazy"
          />
          <p className="mt-3 text-base font-semibold text-gray-800">{name}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Custom Animations */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 40s linear infinite;
    }
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInUp {
      animation: fadeInUp 1s ease-out forwards;
    }
  `}</style>
</section>


      {/* Sticky Footer */}
      <footer className="sticky bottom-0 bg-sky-800 text-white text-center py-6 px-6 shadow-lg">
        <p className="max-w-3xl mx-auto text-lg font-semibold tracking-wide">
          Ready to revolutionize your API workflow?{" "}
          <a
            href="/get-started"
            className="underline hover:text-sky-400 transition"
          >
            Get started now
          </a>
        </p>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
