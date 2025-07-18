import React, { useState, useEffect } from "react";


import {
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";


import heroImage1 from "../assets/api1.jpg";
import heroImage2 from "../assets/api2.jpg";  // Add your 2nd image here
import heroImage3 from "../assets/api3.jpg";  // Add your 3rd image here
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
      gradient: "from-blue-700 via-indigo-700 to-sky-700",
    },
    {
      icon: ShieldCheckIcon,
      title: "Bank-Grade Security",
      desc:
        "Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.",
      gradient: "from-green-600 via-teal-600 to-cyan-700",
    },
    {
      icon: CodeBracketIcon,
      title: "Superior Developer Experience",
      desc:
        "With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.",
      gradient: "from-yellow-400 via-amber-500 to-yellow-600",
    },
  ];

   // New: state to track current hero image index
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const companies = [
    { src: logoInnovate, name: "InnovateCorp" },
    { src: logoQuantum, name: "QuantumLeap Tech" },
    { src: logoDataWeave, name: "DataWeave Solutions" },
    { src: logoNextGen, name: "NextGen Systems" },
    { src: logoApex, name: "Apex Digital" },
    
  ];

  const scrollToFeatures = () => {
    const el = document.getElementById("features-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-900 text-white overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-100px] left-[-120px] w-96 h-96 bg-indigo-700 rounded-full opacity-20 blur-3xl animate-pulseSlow" />
          <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-sky-700 rounded-full opacity-20 blur-2xl animate-pulseSlow delay-700" />
          <svg
            className="absolute top-24 right-24 w-48 h-48 text-indigo-300 opacity-10 animate-spin-slow"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 18.184l-10-5V17l10 5 10-5v-1.816l-10 5z" />
          </svg>
        </div>

        

         {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-20">
          {/* Left Text */}
          <div
            className="flex-1 text-center md:text-left max-w-xl"
            style={{ animation: "fadeInLeft 1s ease forwards", opacity: 0 }}
            onAnimationEnd={(e) => (e.currentTarget.style.opacity = 1)}
          >
            <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Effortless API Management.
              <br />
              <span className="text-sky-400">Powerful Results.</span>
            </h1>
            <p className="mt-6 text-lg text-sky-200 leading-relaxed drop-shadow-md max-w-md">
              API PRO is the all-in-one platform designed to take your APIs from
              development to production with unparalleled speed, security, and AI-driven insights.
            </p>
            <button
              className="mt-12 bg-sky-600 hover:bg-sky-700 transition text-white font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
              aria-label="Get Started for Free"
            >
              Get Started for Free
            </button>
            <p className="mt-5 text-sm text-sky-300 tracking-wide font-semibold">
              Trusted by 1,000+ developers and growing.
            </p>
          </div>

          {/* Right Image Carousel */}
          <div className="relative flex-1 max-w-lg rounded-3xl overflow-hidden shadow-2xl ring-2 ring-sky-500 h-[360px] md:h-[480px]">
            {heroImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`API illustration ${idx + 1}`}
                loading="lazy"
                className={`
                  absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out
                  ${idx === currentHeroIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                `}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToFeatures}
          aria-label="Scroll down to features"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-sky-900 rounded-full p-4 shadow-lg animate-bounce transition"
          title="Scroll to Features"
          type="button"
        >
          <ChevronDownIcon className="w-9 h-9" />
        </button>

        {/* Animations */}
        <style>{`
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.05); }
          }
          .animate-pulseSlow {
            animation: pulseSlow 8s ease-in-out infinite;
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-spin-slow {
            animation: spin 60s linear infinite;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>


      {/* Features Section */}
      <section
        id="features-section"
        className="max-w-7xl mx-auto px-6 py-28 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-24 text-gray-900">
          Everything You Need in One Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {features.map(({ icon: Icon, title, desc, gradient }, idx) => (
            <div
              key={idx}
              className={`relative p-12 rounded-3xl bg-gradient-to-br ${gradient} text-white shadow-xl cursor-default transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
              style={{
                animation: `fadeInUp 0.8s ease forwards`,
                animationDelay: `${idx * 0.35}s`,
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

    {/* Trusted Companies Section with Larger Logos and Marquee Effect */}
<section className="bg-gradient-to-r from-slate-50 via-white to-slate-100 py-24 px-6 overflow-hidden">
  <h2 className="text-center text-4xl font-bold mb-20 text-gray-900">
    Trusted by the World's Most Innovative Companies
  </h2>

  <div className="relative w-full overflow-hidden">
    <div className="flex space-x-24 animate-marquee whitespace-nowrap">
      {companies.concat(companies).map(({ src, name }, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[220px]">
          <img
            src={src}
            alt={`${name} logo`}
            className="h-40 w-auto object-contain transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          <p className="mt-4 text-base font-semibold text-gray-800">{name}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Marquee Animation */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
  `}</style>
</section>


      {/* Sticky Call to Action Footer */}
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
    </div>
  );
};

export default Home;
