import "../styles/Home.css";
import "../styles/GalleryBoxes.css";
import { useEffect, useRef } from "react";
import { animateHero } from "../animations/heroAnimations";
import { animateScrollSections } from "../animations/scrollAnimations";
import { setupGalleryHover } from "../animations/galleryHover";
import { initSmoothScroll } from "../animations/smoothScroll";
import { Link } from "react-router-dom";




function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    animateHero(heroRef);
    animateScrollSections();
    setupGalleryHover();
    initSmoothScroll();
  }, []);

  return (
    <main id="index-main">
      {/* Hero Section */}
      <section className="section" id="section1">
        <div id="hero" ref={heroRef}>
          <div>
            <img
              src="/assets/images/amund-website-color.png"
              alt="Amund Halgunset"
            />
          </div>
          <div>
            <h2 id="heroH2">Portfolio</h2>
            <h1>Halgunset</h1>
            <p>Web developer, System developer</p>
          </div>
        </div>
      </section>

      <section className="spacer"></section>

      {/* Mobile Gallery */}
      <div className="gallery-container">
        <h2>My Galleries</h2>
        <section className="gallery">
          <div className="gallery-item">
            <a href="#">
              <img src="/images/coding/fotspor.webp" alt="Coding" />
              <div className="overlay"><h2>Development</h2></div>
            </a>
          </div>
          <div className="gallery-item">
            <a href="#">
              <img src="/images/photo/photo.webp" alt="Photo" />
              <div className="overlay"><h2>Photo</h2></div>
            </a>
          </div>
          <div className="gallery-item">
          <Link to="/portfolio/threeD">
            <img src="/images/threeD/kitchen.webp" alt="3D" />
            <div className="overlay"><h2>3D</h2></div>
          </Link>
          </div>
          <div className="gallery-item">
            <a href="#">
              <img src="/images/video/farmorlillebror.png" alt="Video" />
              <div className="overlay"><h2>Video</h2></div>
            </a>
          </div>
        </section>
      </div>

      {/* Desktop Expanding Gallery */}
      <h2 id="gallery-expanding-title">My Galleries</h2>
      <div className="container">
        <div
          className="box"
          style={{ backgroundImage: "url('/images/coding/fotspor.webp')" }}
        >
          <a href="/portfolio/coding">
            <div className="content">
              <h2>Development</h2>
              <p className="expanding-description">See my development projects</p>
            </div>
          </a>
        </div>
        <div
          className="box"
          style={{ backgroundImage: "url('/images/photo/photo.webp')" }}
        >
          <a href="/portfolio/photo">
            <div className="content">
              <h2>Photo</h2>
              <p className="expanding-description">My photo gallery</p>
            </div>
          </a>
        </div>
        <div
          className="box"
          style={{ backgroundImage: "url('/images/threeD/kitchen.webp')" }}
        >
          <Link to="/portfolio/threeD">
            <div className="content">
              <h2>3D</h2>
              <p className="expanding-description">3D renders and art</p>
            </div>
          </Link>
        </div>
        <div
          className="box"
          style={{ backgroundImage: "url('/images/video/farmorlillebror.png')" }}
        >
          <a href="/portfolio/video">
            <div className="content">
              <h2>Video</h2>
              <p className="expanding-description">My video gallery</p>
            </div>
          </a>
        </div>
      </div>

      <section className="spacer"></section>

      {/* Nordcode Section */}
      <section className="section" id="section3">
        <div>
          <h2 id="nordcode-title">Nordcode</h2>
          <p id="est">Est 2024</p>
          <p id="nordcode-text">
            In 2024 I was a part of starting a business named Nordcode. Today we
            are proud to say that we have helped businesses from all over Norway
            strengthen their online presence with rebuilding or making websites
            from the ground up.
          </p>
          <div>
            <a
              href="https://nordcode.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nordcode
            </a>
          </div>
          <h4>Check out some of our work:</h4>
          <div className="nordcode-work">
            <div>
              <a
                href="https://olavsolberg.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/nordcode/logo_olavsolberg.png"
                  alt="Olav Solberg"
                />
              </a>
            </div>
            <div>
              <a
                href="https://fotsporfilm.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/nordcode/Fotspor-LOGO-YELLOW.png"
                  alt="Fotspor Film"
                />
              </a>
            </div>
            <div>
              <a
                href="https://raevedilter.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/nordcode/logo-farger_png-1Raevdilter_logo.png"
                  alt="Raevedilter"
                />
              </a>
            </div>
            <div>
              <a
                href="https://gravelag.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/nordcode/Fjell-og-gravelag-transparent.png"
                  alt="Fjell og Gravelag"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
