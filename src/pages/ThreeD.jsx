// src/pages/ThreeD.jsx
import React from "react";
import "../styles/ThreeD.css";

function ThreeD() {
  return (
    <main id="vfx-main">
      <section className="tred-images">
        {["kaffe-3d.jpeg", "kjokken6.jpg", "Miljø-render.jpeg", "Thompson_gun_Stillimage.jpg"].map((file, i) => (
          <div key={i} className="image-wrapper">
            <img src={`/assets/images/${file}`} alt={`3D render ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="sketchfab">
        <p>See more of my 3D models on my Sketchfab profile:</p>
        <a href="https://sketchfab.com/amundh" target="_blank" rel="noopener noreferrer">
          Visit My Sketchfab
        </a>
      </section>

      <section className="vfx-videos">
        <h2>3D Renders</h2>
        <p>
          These are some of my renders from both school projects and personal exploration.
        </p>

        {["Xl7jjLqsLYw", "iYANW-p_CSM", "9rxjRtjkZU0?si=HRpXVta70uPMb6RS"].map((id, i) => (
          <div className="responsive-video" key={i}>
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`3D video ${i + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </section>

      <section className="vr-game">
        <h2>VR Game</h2>
        <p>
          A virtual reconstruction of my dad’s cabin living room built in Unreal Engine during my 3D studies.
        </p>
        <div className="image-wrapper">
          <img src="/assets/images/hytta.png" alt="Cabin VR render" />
        </div>

        <div className="responsive-video">
          <iframe
            src="https://www.youtube.com/embed/ODeTqn-vGMM"
            title="VR Game Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="vr-info">
          <div>
            <div>
              <h2>First Unreal Experience</h2>
              <p>
                My initial work with Unreal Engine, incorporating knowledge from Cinema4D, Maya, and Substance Painter.
              </p>
            </div>
            <img src="/assets/images/hytta.png" alt="Unreal project render" />
          </div>

          <div>
            <img src="/assets/images/tecture.png" alt="Texture image" />
            <div>
              <h2>Learning New Techniques</h2>
              <p>
                I explored texture painting in Photoshop, including hand-painting techniques and material workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vfx">
        <h2>What is VFX?</h2>
        <p>
          Visual effects (VFX) enhance films, commercials, and social media with creative and technical techniques. It’s widely used in modern storytelling.
        </p>

        <div className="responsive-video">
          <iframe
            src="https://www.youtube.com/embed/gEAVvb3XO8A"
            title="VFX Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default ThreeD;
