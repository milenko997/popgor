"use client";

import { useEffect } from "react";

export default function ScrollEffects({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      revealElements.forEach((element) => {
        const el = element as HTMLElement;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("reveal--visible");
        }
      });
    }

    revealOnScroll();

    let raf: number;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(revealOnScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return children;
}
