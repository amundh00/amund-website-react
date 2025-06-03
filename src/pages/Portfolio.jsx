import "../styles/Portfolio.css";
import { useEffect } from "react";
import { setupGalleryHover } from "../animations/galleryHover";
import { animateScrollSections } from "../animations/scrollAnimations";
import MyGalleries from "../components/MyGalleries";


function Portfolio() {
  useEffect(() => {
    setupGalleryHover();
    animateScrollSections();
  }, []);

  return (
    <main>
      <section className="spacer"></section>

      {/* My Galleries Component */}
      <MyGalleries />
      <section className="spacer"></section>
    </main>
  );
}

export default Portfolio;
