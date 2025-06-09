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
      
      {/* Latest Projects Section */}
      <section className="section" id="section2">
        <div className="home-projects-container">
          <h2 className="home-projects-title">Latest Projects</h2>
          <p className="home-projects-description">
            Here are some of my latest projects.
          </p>
          <a href="https://github.com/amundh00" target="_blank">My Github</a>

          <div className="home-projects-grid">
            <div className="home-project-card">
              <div className="home-project-image">
                <img src="../images/coding/ecomPage.webp" alt="E-commerce page" />
              </div>
              <div className="home-project-content">
                <h3 className="home-project-title">E-commerce page</h3>
                <p className="home-project-description">
                  An E-commerce page I made with the Noroff API.
                </p>
                <Link to="/projects/ecommerce" className="home-project-link">
                  <button className="home-project-btn">Read more</button>
                </Link>
              </div>
            </div>

            <div className="home-project-card">
              <div className="home-project-image">
                <img src="../images/coding/holidaze.webp" alt="Holidaze" />
              </div>
              <div className="home-project-content">
                <h3 className="home-project-title">Holidaze</h3>
                <p className="home-project-description">
                  Venue booking page, user can sign in, sign up. Add venues or book venues.
                </p>
                <Link to="/projects/holidaze" className="home-project-link">
                  <button className="home-project-btn">Read more</button>
                </Link>
              </div>
            </div>

            <div className="home-project-card">
              <div className="home-project-image">
                <img src="../images/coding/tilslaget.webp" alt="Tilslaget" />
              </div>
              <div className="home-project-content">
                <h3 className="home-project-title">Tilslaget</h3>
                <p className="home-project-description">
                  An auction page. User can register, sign in and bid on auctions.
                </p>
                <Link to="/projects/tilslaget" className="home-project-link">
                  <button className="home-project-btn">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="spacer"></section>

      <MyGalleries />

      <section className="spacer"></section>

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
                  src="../images/nordcode/logo_olavsolberg.png"
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
                  src="../images/nordcode/Fotspor-LOGO-YELLOW.png"
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
                  src="../images/nordcode/logo-farger_png-1Raevdilter_logo.png"
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
                  src="../images/nordcode/Fjell-og-gravelag-transparent.png"
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
