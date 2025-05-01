import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateTimeline() {
  gsap.utils.toArray(".timeline-item").forEach((item, index) => {
    const content = item.querySelector(".content");

    gsap.fromTo(
      content,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Optional: animate the timeline line fill
  gsap.fromTo(
    ".timeline-line",
    { height: 0 },
    {
      height: "100%",
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 90%",
        end: "bottom top",
        scrub: true,
      },
    }
  );
}
