import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/myGalleries.css';

function MyGalleries() {
  return (
    <>
      {/* Mobile Gallery */}
      <div className="gallery-container">
        <h2>My Galleries</h2>
        <section className="gallery">
          <div className="gallery-item">
            <Link to="/portfolio/coding">
              <img src="/images/coding/fotspor.webp" alt="Coding" />
              <div className="overlay"><h2>Development</h2></div>
            </Link>
          </div>
          <div className="gallery-item">
            <Link to="/portfolio/photo">
              <img src="/images/photo/photo.webp" alt="Photo" />
              <div className="overlay"><h2>Photo</h2></div>
            </Link>
          </div>
          <div className="gallery-item">
            <Link to="/portfolio/threeD">
              <img src="/images/threeD/kitchen.webp" alt="3D" />
              <div className="overlay"><h2>3D</h2></div>
            </Link>
          </div>
          <div className="gallery-item">
            <Link to="/portfolio/video">
              <img src="/images/video/farmorlillebror.png" alt="Video" />
              <div className="overlay"><h2>Video</h2></div>
            </Link>
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
          <Link to="/portfolio/coding">
            <div className="content">
              <h2>Development</h2>
              <p className="expanding-description">See my development projects</p>
            </div>
          </Link>
        </div>
        <div
          className="box"
          style={{ backgroundImage: "url('/images/photo/photo.webp')" }}
        >
          <Link to="/portfolio/photo">
            <div className="content">
              <h2>Photo</h2>
              <p className="expanding-description">My photo gallery</p>
            </div>
          </Link>
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
          <Link to="/portfolio/video">
            <div className="content">
              <h2>Video</h2>
              <p className="expanding-description">My video gallery</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MyGalleries;