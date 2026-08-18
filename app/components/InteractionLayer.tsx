"use client";

import { useEffect, useRef } from "react";

export default function InteractionLayer() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (reduced.matches || coarse.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    const animate = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      document.documentElement.classList.add("has-pointer-motion");
    };

    const onPointerDown = (event: PointerEvent) => {
      const pulse = document.createElement("span");
      pulse.className = "interaction-pulse";
      pulse.style.left = `${event.clientX}px`;
      pulse.style.top = `${event.clientY}px`;
      document.body.appendChild(pulse);
      pulse.addEventListener("animationend", () => pulse.remove(), { once: true });
    };

    const bindSurface = (surface: Element) => {
      const element = surface as HTMLElement;
      const move = (event: Event) => {
        const pointer = event as PointerEvent;
        const rect = element.getBoundingClientRect();
        const x = pointer.clientX - rect.left;
        const y = pointer.clientY - rect.top;
        const nx = x / rect.width - 0.5;
        const ny = y / rect.height - 0.5;
        element.style.setProperty("--spot-x", `${x}px`);
        element.style.setProperty("--spot-y", `${y}px`);
        element.style.setProperty("--tilt-x", `${(-ny * 2.2).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(nx * 2.2).toFixed(2)}deg`);
      };
      const leave = () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };
      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", leave, { passive: true });
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      };
    };

    const surfaces = Array.from(document.querySelectorAll("[data-interactive]"));
    const cleanups = surfaces.map(bindSurface);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="cursor-experience" aria-hidden="true">
      <div ref={ringRef} className="cursor-experience__ring" />
      <div ref={dotRef} className="cursor-experience__dot" />
    </div>
  );
}
