import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitTextIntoSpans(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
  
    const text = element.textContent.trim();
    element.innerHTML = "";
  
    text.split("").forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      element.appendChild(span);
    });
  }
  

export function animateScrollSections() {
  // Gallery items (already added)
  gsap.from(".gallery-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
  

  // Nordcode text
  gsap.from("#nordcode-text", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#nordcode-text",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Nordcode link + logos (optional for extra effect)
  gsap.from(".nordcode-work img", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".nordcode-work",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  splitTextIntoSpans("#nordcode-title");

    gsap.to("#nordcode-title span", {
    opacity: 1,
    y: 10,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#section3",
        start: "top 60%",
        toggleActions: "play none none none",
    },
    });
}
