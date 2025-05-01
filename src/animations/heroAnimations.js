// src/animations/heroAnimations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHero(heroRef) {
  if (!heroRef.current) return;

  const el = heroRef.current;

  gsap.from(el.querySelector("img"), {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(el.querySelector("h2"), {
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el.querySelector("h2"),
      start: "top 100%",
    },
  });

  gsap.from(el.querySelector("h1"), {
    opacity: 0,
    y: 50,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el.querySelector("h1"),
      start: "top 100%",
    },
  });

  gsap.from(el.querySelector("p"), {
    opacity: 0,
    y: 50,
    duration: 1.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el.querySelector("p"),
      start: "top 100%",
    },
  });
}
