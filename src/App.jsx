// App.jsx
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Work from "./pages/Work";
import { initSmoothScroll } from "./animations/smoothScroll";
import ThreeD from "./pages/ThreeD";

function App() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/threeD" element={<ThreeD />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
