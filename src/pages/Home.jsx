import "../styles/Home.css";
import "../styles/GalleryBoxes.css";
import { useEffect, useRef } from "react";
import { animateHero } from "../animations/heroAnimations";
import { animateScrollSections } from "../animations/scrollAnimations";
import { setupGalleryHover } from "../animations/galleryHover";
import { initSmoothScroll } from "../animations/smoothScroll";
import { Link } from "react-router-dom";
import MyGalleries from "../components/MyGalleries";

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
            <p>Web developer</p>
          </div>
        </div>
      </section>

      <section className="spacer"></section>

      {/* My Galleries Component */}
      <MyGalleries />

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
