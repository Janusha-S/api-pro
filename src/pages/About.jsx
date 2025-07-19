import React, { useEffect, useState } from "react";
import missionImage from "../assets/api5.jpg";

export default function About() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  return (
    <div className="font-['Inter'] bg-white text-gray-900">
      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 animate-slideFromLeft">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We Empower Developers to Build The Future.
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mb-6 rounded-full"></div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            In today's digital world, APIs are the backbone of innovation. Yet, managing them has become increasingly complex.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            API PRO was founded on a simple principle: to give developers and businesses the tools they need to build, manage,
            and scale their APIs without the headache. We handle the complexity, so you can focus on creating amazing products.
          </p>
        </div>
        <div className="w-full lg:w-1/2 animate-slideFromRight">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-indigo-200">
            <img
              src={missionImage}
              alt="Our mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The Team Behind API PRO
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            This section dynamically displays our team fetched from our trusted API endpoint.
          </p>

          {loading && (
            <p className="text-center text-indigo-400 animate-pulse">Loading team...</p>
          )}
          {error && (
            <p className="text-center text-red-500 font-semibold">{error}</p>
          )}

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-6">
            {!loading &&
              !error &&
              users.map(({ id, name, email, website }) => (
                <div
                  key={id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                  style={{
                    animationDelay: `${id * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1 truncate">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">
                      {email}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    <strong>Website:</strong>{" "}
                    <a
                      href={`http://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {website}
                    </a>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes slideFromLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideFromRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slideFromLeft {
          animation: slideFromLeft 1.2s ease forwards;
        }

        .animate-slideFromRight {
          animation: slideFromRight 1.2s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
}
