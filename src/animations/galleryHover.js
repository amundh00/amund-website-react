// src/animations/galleryHover.js
import gsap from "gsap";

export function setupGalleryHover() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      gsap.to(boxes, {
        flex: 1,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(box, {
        flex: 2.5,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(boxes, {
        flex: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    const link = box.querySelector("a");
    if (link) {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  });
}
