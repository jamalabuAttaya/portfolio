"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

const CYAN = { r: 101, g: 230, b: 244 };
const VIOLET = { r: 159, g: 148, b: 255 };

export default function ExperienceLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const progress = progressRef.current;
    const glow = glowRef.current;
    if (!canvas || !progress || !glow) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const canvasElement: HTMLCanvasElement = canvas;
    const progressElement: HTMLSpanElement = progress;
    const glowElement: HTMLDivElement = glow;
    const drawingContext: CanvasRenderingContext2D = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let nodes: NodePoint[] = [];
    let visible = !document.hidden;
    let mouseX = window.innerWidth * 0.7;
    let mouseY = window.innerHeight * 0.3;
    let glowX = mouseX;
    let glowY = mouseY;
    let scrollTicking = false;
    let pointerActive = false;

    function createNodes() {
      const count = Math.max(22, Math.min(58, Math.floor(width / 25)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: index % 7 === 0 ? 1.7 : 1,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      width = window.innerWidth;
      height = window.innerHeight;
      canvasElement.width = Math.floor(width * ratio);
      canvasElement.height = Math.floor(height * ratio);
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      drawingContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
    }

    function updateProgress() {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const amount = documentHeight > 0 ? Math.min(1, window.scrollY / documentHeight) : 0;
      progressElement.style.transform = `scaleX(${amount})`;
      scrollTicking = false;
    }

    function onScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(updateProgress);
      }
    }

    function onPointerMove(event: PointerEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      pointerActive = true;
    }

    function draw(time = 0) {
      drawingContext.clearRect(0, 0, width, height);
      const animate = !reducedMotion.matches;

      if (animate) {
        glowX += (mouseX - glowX) * 0.055;
        glowY += (mouseY - glowY) * 0.055;
        glowElement.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      }

      nodes.forEach((node, index) => {
        if (animate) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;
        }

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex];
          const dx = node.x - next.x;
          const dy = node.y - next.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const threshold = width < 700 ? 105 : 145;
          if (distance < threshold) {
            const alpha = (1 - distance / threshold) * 0.13;
            drawingContext.beginPath();
            drawingContext.moveTo(node.x, node.y);
            drawingContext.lineTo(next.x, next.y);
            drawingContext.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${alpha})`;
            drawingContext.lineWidth = 0.7;
            drawingContext.stroke();

            if (animate && (index + nextIndex) % 17 === 0) {
              const travel = (time * 0.000075 + index * 0.11 + nextIndex * 0.07) % 1;
              const packetX = node.x + (next.x - node.x) * travel;
              const packetY = node.y + (next.y - node.y) * travel;
              drawingContext.beginPath();
              drawingContext.arc(packetX, packetY, 1.35, 0, Math.PI * 2);
              drawingContext.fillStyle = `rgba(${VIOLET.r}, ${VIOLET.g}, ${VIOLET.b}, ${0.3 + alpha * 3})`;
              drawingContext.shadowColor = `rgba(${VIOLET.r}, ${VIOLET.g}, ${VIOLET.b}, .45)`;
              drawingContext.shadowBlur = 8;
              drawingContext.fill();
              drawingContext.shadowBlur = 0;
            }
          }
        }

        if (pointerActive && !coarsePointer.matches) {
          const pointerDx = node.x - mouseX;
          const pointerDy = node.y - mouseY;
          const pointerDistance = Math.sqrt(pointerDx * pointerDx + pointerDy * pointerDy);
          if (pointerDistance < 175) {
            drawingContext.beginPath();
            drawingContext.moveTo(node.x, node.y);
            drawingContext.lineTo(mouseX, mouseY);
            drawingContext.strokeStyle = `rgba(${VIOLET.r}, ${VIOLET.g}, ${VIOLET.b}, ${(1 - pointerDistance / 175) * 0.18})`;
            drawingContext.lineWidth = 0.65;
            drawingContext.stroke();
          }
        }

        const pulse = animate ? Math.sin(time * 0.00065 + node.phase) * 0.35 + 0.65 : 0.65;
        const color = index % 6 === 0 ? VIOLET : CYAN;
        drawingContext.beginPath();
        drawingContext.arc(node.x, node.y, node.radius + pulse * 0.45, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.22 + pulse * 0.32})`;
        drawingContext.fill();
      });

      if (animate && visible) frame = window.requestAnimationFrame(draw);
    }

    function onVisibilityChange() {
      visible = !document.hidden;
      if (visible && !reducedMotion.matches) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(draw);
      }
    }

    resize();
    updateProgress();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!coarsePointer.matches) window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <>
      <div className="experience-layer" aria-hidden="true">
        <canvas ref={canvasRef} className="experience-layer__canvas" />
        <div className="experience-layer__aurora experience-layer__aurora--one" />
        <div className="experience-layer__aurora experience-layer__aurora--two" />
        <div ref={glowRef} className="experience-layer__pointer" />
        <div className="experience-layer__noise" />
      </div>
      <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>
    </>
  );
}
