import React from 'react';
import '../../styles/ProjectPage.css';

function Holidaze() {
  return (
    <main className="project-page">
      {/* Hero Image Section */}
      <div className="project-image-hero">
        <img 
          src="../images/coding/holidaze.webp" 
          alt="Holidaze Platform Screenshot" 
          className="project-hero-image"
        />
      </div>

      {/* Title and Content Section */}
      <div className="project-hero">
        <div className="project-hero-content">
          <h1 className="project-main-title">Holidaze</h1>
          <p className="project-subtitle">Venue booking platform for unforgettable experiences</p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          {/* Description */}
          <div className="project-description">
            <h2>About This Project</h2>
            <p>
              Holidaze is a comprehensive venue booking platform where users can discover, book, and manage accommodations. 
              The platform features user authentication, venue management, and a complete booking system built with modern web technologies.
            </p>
            
            <h3>Key Features</h3>
            <ul className="project-feature-list">
              <li>User registration and authentication</li>
              <li>Venue browsing and search</li>
              <li>Booking management system</li>
              <li>Venue creation and management</li>
              <li>User profile management</li>
              <li>Responsive design for all devices</li>
            </ul>

            <h3>Technologies Used</h3>
            <div className="project-tech-stack">
              <span className="project-tech-tag">React</span>
              <span className="project-tech-tag">JavaScript</span>
              <span className="project-tech-tag">CSS3</span>
              <span className="project-tech-tag">Leaflet Map</span>
              <span className="project-tech-tag">HTML5</span>
              <span className="project-tech-tag">Noroff API</span>
              <span className="project-tech-tag">Authentication</span>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="project-links-sidebar">
            <h3>View Project</h3>
            <div className="project-links-container">
              <a 
                href="https://github.com/amundh00/Holidaze" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-external-link project-github-link"
              >
                <span className="project-link-icon"></span>
                View on GitHub
              </a>
              
              <a 
                href="https://holidaze-amund-halgunset.netlify.app/" 
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

export default Holidaze;
