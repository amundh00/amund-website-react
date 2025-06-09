// App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Work from "./pages/Work";
import Coding from "./pages/Coding";
import { initSmoothScroll } from "./animations/smoothScroll";
import ThreeD from "./pages/ThreeD";
import Film from "./pages/Film";
import Photo from "./pages/Foto";
import Portraits from "./pages/Portraits";
import Products from "./pages/Products";
import Weddings from "./pages/Wedding";// Add project imports
import Tilslaget from "./pages/projects/tilslaget";
import Holidaze from "./pages/projects/holidaze";
import Ecommerce from "./pages/projects/ecom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    initSmoothScroll();
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio/coding" element={<Coding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/threeD" element={<ThreeD />} />
        <Route path="/portfolio/video" element={<Film />} />
        <Route path="/portfolio/photo" element={<Photo />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/products" element={<Products />} />
        <Route path="/portfolio/weddings" element={<Weddings />} />
        
        {/* Project routes */}
        <Route path="/projects/tilslaget" element={<Tilslaget />} />
        <Route path="/projects/holidaze" element={<Holidaze />} />
        <Route path="/projects/ecommerce" element={<Ecommerce />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
