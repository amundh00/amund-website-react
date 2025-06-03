import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Foto.css';

function Photo() {
    return (
        <main className="photomain">
            <h2>My Photo Catalogue</h2>
            <hr />
            
            <div className="portrait-card">
                <Link to="/portfolio/portraits">
                    <h2>Portraits</h2>
                </Link>
                <Link to="/portfolio/portraits">
                    <img src="/assets/images/Portraits/TuvaBlomsterEng (12 of 49).jpg" alt="Portrait photography" />
                </Link>
            </div>
            
            <hr />
            
            <div className="portrait-card">
                <Link to="/portfolio/products">
                    <img src="/assets/images/products/G Wag (7 of 12).jpg" alt="Product photography" />
                </Link>
                <Link to="/portfolio/products">
                    <h2>Products</h2>
                </Link>
            </div>
            
            <hr />
            
            <div className="portrait-card">
                <Link to="/portfolio/weddings">
                    <h2>Weddings</h2>
                </Link>
                <Link to="/portfolio/weddings">
                    <img src="/assets/images/bryllup/Bryllup (21 of 125).jpg" alt="Wedding photography" />
                </Link>
            </div>
        </main>
    );
}

export default Photo;