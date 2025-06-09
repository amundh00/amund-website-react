import React from 'react';
import '../../styles/ProjectPage.css';

function Ecommerce() {
  return (
    <main className="project-page">
      {/* Hero Image Section */}
      <div className="project-image-hero">
        <img 
          src="../images/coding/ecomPage.webp" 
          alt="E-commerce Platform Screenshot" 
          className="project-hero-image"
        />
      </div>

      {/* Title and Content Section */}
      <div className="project-hero">
        <div className="project-hero-content">
          <h1 className="project-main-title">E-commerce Platform</h1>
          <p className="project-subtitle">Modern online shopping experience built with React</p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <div className="project-description">
            <h2>About This Project</h2>
            <p>
              A fully functional e-commerce platform built using React and the Noroff API. 
              This project demonstrates modern web development practices including responsive 
              design, state management, and API integration.
            </p>
            
            <h3>Key Features</h3>
            <ul className="project-feature-list">
              <li>Shopping cart functionality</li>
              <li>Fully responsive design</li>
              <li>Product search and filtering</li>
              <li>Checkout process</li>
              <li>Fast loading and optimized performance</li>
              <li>Modern UI/UX design</li>
            </ul>

            <h3>Technologies Used</h3>
            <div className="project-tech-stack">
              <span className="project-tech-tag">React</span>
              <span className="project-tech-tag">JavaScript</span>
              <span className="project-tech-tag">CSS3</span>
              <span className="project-tech-tag">HTML5</span>
              <span className="project-tech-tag">Noroff API</span>
            </div>
          </div>

          <div className="project-links-sidebar">
            <h3>View Project</h3>
            <div className="project-links-container">
              <a 
                href="https://github.com/amundh00/react-ecom-ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-external-link project-github-link"
              >
                <span className="project-link-icon"></span>
                View on GitHub
              </a>
              
              <a 
                href="https://subtle-frangipane-f83dc1.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-external-link project-live-link"
              >
                <span className="project-link-icon"></span>
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Ecommerce;