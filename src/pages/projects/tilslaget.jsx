import React from 'react';
import '../../styles/ProjectPage.css';

function Tilslaget() {
  return (
    <main className="project-page">
      {/* Hero Image Section */}
      <div className="project-image-hero">
        <img 
          src="../images/coding/tilslaget.webp" 
          alt="Tilslaget Auction Platform Screenshot" 
          className="project-hero-image"
        />
      </div>

      {/* Title and Content Section */}
      <div className="project-hero">
        <div className="project-hero-content">
          <h1 className="project-main-title">Tilslaget</h1>
          <p className="project-subtitle">Modern auction platform for competitive bidding</p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          {/* Description */}
          <div className="project-description">
            <h2>About This Project</h2>
            <p>
              Tilslaget is a dynamic auction platform where users can participate in live bidding, create their own auctions, 
              and manage their listings. The platform features real-time bidding, user authentication, and comprehensive auction management.
            </p>
            
            <h3>Key Features</h3>
            <ul className="project-feature-list">
              <li>User registration and login system</li>
              <li>Create and manage auction listings</li>
              <li>Real-time bidding functionality</li>
              <li>Auction search and filtering</li>
              <li>User profile and bid history</li>
              <li>Mobile-responsive interface</li>
            </ul>

            <h3>Technologies Used</h3>
            <div className="project-tech-stack">
              <span className="project-tech-tag">React</span>
              <span className="project-tech-tag">JavaScript</span>
              <span className="project-tech-tag">CSS3</span>
              <span className="project-tech-tag">HTML5</span>
              <span className="project-tech-tag">Noroff API</span>
              <span className="project-tech-tag">Real-time Updates</span>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="project-links-sidebar">
            <h3>View Project</h3>
            <div className="project-links-container">
              <a 
                href="https://github.com/amundh00/Semester-project2024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-external-link project-github-link"
              >
                <span className="project-link-icon"></span>
                View on GitHub
              </a>
              
              <a 
                href="https://tilslaget.netlify.app/" 
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

export default Tilslaget;
