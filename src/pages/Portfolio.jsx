import "../styles/Portfolio.css";
import "../styles/GalleryBoxes.css";
import { useEffect } from "react";
import { setupGalleryHover } from "../animations/galleryHover";
import { animateScrollSections } from "../animations/scrollAnimations";
import { initSmoothScroll } from "../animations/smoothScroll";
import { Link } from "react-router-dom";


function Portfolio() {
  useEffect(() => {
    setupGalleryHover();
    animateScrollSections();
  }, []);

  return (
    <main>
      <section className="spacer"></section>

      {/* Mobile Gallery */}
      <div className="gallery-container">
        <h2>My Galleries</h2>
        <section className="gallery">
          <div className="gallery-item">
            <a href="/portfolio/coding">
              <img src="/images/coding/fotspor.webp" alt="Coding" />
              <div className="overlay"><h2>Coding</h2></div>
            </a>
          </div>

          <div className="gallery-item">
            <a href="/portfolio/photo">
              <img src="/images/photo/photo.webp" alt="Photo" />
              <div className="overlay"><h2>Photography</h2></div>
            </a>
          </div>

          <div className="gallery-item">
          <Link to="/portfolio/threeD">
            <img src="/images/threeD/kitchen.webp" alt="3D" />
            <div className="overlay"><h2>3D</h2></div>
          </Link>
          </div>

          <div className="gallery-item">
            <a href="/portfolio/video">
              <img src="/images/video/farmor.webp" alt="Video" />
              <div className="overlay"><h2>Video</h2></div>
            </a>
          </div>
        </section>
      </div>

      {/* Expanding Boxes Gallery */}
      <h2 id="gallery-expanding-title">My Galleries</h2>
      <div className="container">
        <div className="box" style={{ backgroundImage: "url('/images/coding/fotspor.webp')" }}>
          <a href="/portfolio/coding">
            <div className="content">
              <h2>Coding</h2>
              <p className="expanding-description">See my development work.</p>
            </div>
          </a>
        </div>

        <div className="box" style={{ backgroundImage: "url('/images/photo/photo.webp')" }}>
          <a href="/portfolio/photo">
            <div className="content">
              <h2>Photo</h2>
              <p className="expanding-description">Photography portfolio.</p>
            </div>
          </a>
        </div>

        <div className="box" style={{ backgroundImage: "url('/images/threeD/kitchen.webp')" }}>
        <Link to="/portfolio/threeD">
            <div className="content">
              <h2>3D</h2>
              <p className="expanding-description">3D renders and art</p>
            </div>
          </Link>
        </div>

        <div className="box" style={{ backgroundImage: "url('/images/video/mikke.webp')" }}>
          <a href="/portfolio/video">
            <div className="content">
              <h2>Video</h2>
              <p className="expanding-description">Video production gallery.</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
