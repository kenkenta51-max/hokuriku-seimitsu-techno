"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ProcessFlowRevealProps = {
  children: ReactNode;
  className: string;
};

export function ProcessFlowReveal({ children, className }: ProcessFlowRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "pending" | "visible">("idle");

  useEffect(() => {
    const element = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || reduceMotion || !("IntersectionObserver" in window)) {
      setState("visible");
      return;
    }

    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setState("visible");
      return;
    }

    setState("pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10%", threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-flow-state={state}>
      {children}
    </div>
  );
}
