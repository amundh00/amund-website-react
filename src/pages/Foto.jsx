import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Foto.css';

function Photo() {
  return (
    <main className="photomain">
      <h2>Photography Portfolio</h2>
      
      <div className="photo-categories">
        <Link to="/portfolio/portraits" className="category-item">
          <img src="/assets/images/Portraits/highQuality/TuvaBlomsterEng (12 of 49).jpg" alt="Portrait Photography" />
          <div className="category-overlay">
            <button className="view-gallery-btn">View Gallery</button>
          </div>
          <div className="category-title">
            <h3>Portraits</h3>
            <p>Capturing authentic moments and genuine emotions</p>
          </div>
        </Link>

        <Link to="/portfolio/weddings" className="category-item">
          <img src="/assets/images/bryllup/highQuality/Bryllup (21 of 125).jpg" alt="Wedding Photography" />
          <div className="category-overlay">
            <button className="view-gallery-btn">View Gallery</button>
          </div>
          <div className="category-title">
            <h3>Weddings</h3>
            <p>Love stories and unforgettable moments</p>
          </div>
        </Link>

        <Link to="/portfolio/products" className="category-item">
          <img src="/assets/images/products/highQuality/G Wag (7 of 12).jpg" alt="Product Photography" />
          <div className="category-overlay">
            <button className="view-gallery-btn">View Gallery</button>
          </div>
          <div className="category-title">
            <h3>Others</h3>
            <p>A collection of various photography</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Photo;