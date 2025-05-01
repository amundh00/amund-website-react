import { gsap } from "gsap";

export function setupMenuAnimation() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!menuToggle || !navMenu) return;

  const navLinks = navMenu.querySelectorAll("li a");
  let menuOpen = false;

  // Reset opacity and visibility initially
  gsap.set(navMenu, { autoAlpha: 0 });
  gsap.set(navLinks, { opacity: 0, y: 10 });

  const openMenu = () => {
    menuOpen = true;
    menuToggle.classList.add("open");
    navMenu.classList.add("open");

    gsap.to(navMenu, { autoAlpha: 1, duration: 0.3 });

    gsap.to(navLinks, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  };

  const closeMenu = () => {
    menuOpen = false;
    menuToggle.classList.remove("open");
    navMenu.classList.remove("open");

    gsap.to(navLinks, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    });

    gsap.to(navMenu, { autoAlpha: 0, duration: 0.3, delay: 0.2 });
  };

  menuToggle.addEventListener("click", () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuOpen) {
        closeMenu();
      }
    });
  });
}
