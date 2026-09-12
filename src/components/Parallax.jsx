import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Full-bleed background image that drifts vertically as its section scrolls
 * through the viewport, for a subtle sense of depth. The image is sized
 * taller than its container (130%) so it always has room to travel without
 * exposing empty edges. Respects prefers-reduced-motion.
 */
export default function Parallax({ src, alt, className = "" }) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -13 },
        {
          yPercent: 13,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover will-change-transform"
      />
    </div>
  );
}
