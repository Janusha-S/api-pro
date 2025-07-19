import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
<main className="pt-20 w-full min-h-screen bg-cover bg-center bg-no-repeat bg-white" style={{ backgroundImage: "url('/your-image-path.jpg')" }}>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         
        <Footer />
      </main>
    </Router>
  );
}

export default App;
