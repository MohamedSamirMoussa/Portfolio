"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const INTRO_SECONDS = 1;

export default function PortfolioAnimation({
  children,
}: {
  children: ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const timer = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = container.current;
      const page = content.current;

      if (!root || !page) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const previousOverflow = document.body.style.overflow;
      const previousInert = page.inert;

      document.body.style.overflow = "hidden";
      page.inert = true;

      const unlockPage = () => {
        document.body.style.overflow = previousOverflow;
        page.inert = previousInert;
      };

      gsap.set(".intro", { autoAlpha: 1 });

      const clock = { remaining: INTRO_SECONDS };

      const timeline = gsap.timeline({
        onComplete: () => {
          unlockPage();
          ScrollTrigger.refresh();
        },
      });

      timeline.to(
        clock,
        {
          remaining: 0,
          duration: INTRO_SECONDS,
          ease: "none",
          onUpdate: () => {
            if (timer.current) {
              timer.current.textContent = String(
                Math.ceil(clock.remaining),
              ).padStart(2, "0");
            }
          },
        },
        0,
      );

      timeline.fromTo(
        ".intro-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: INTRO_SECONDS,
          ease: "none",
        },
        0,
      );

      timeline.fromTo(
        ".intro-letter",
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.01,
          stagger: 0.25,
        },
        0.3,
      );

      timeline.to(".intro", {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      });

      timeline.from(
        ".hero-item",
        {
          y: 35,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "<0.25",
      );

      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 45,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });

      return unlockPage;
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div
        aria-hidden="true"
        className="intro invisible fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#081119] text-white"
      >
        <div className="flex items-center text-8xl font-bold sm:text-9xl">
          <span className="intro-letter">H</span>
          <span className="intro-letter">i</span>

          <span className="ml-3 h-20 w-1 animate-pulse bg-[#6ae3d4]" />
        </div>
      </div>

      <div ref={content}>{children}</div>
    </div>
  );
}
