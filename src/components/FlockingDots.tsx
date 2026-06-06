"use client";

import { useEffect, useRef } from "react";

class Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 2.5;
    this.vy = (Math.random() - 0.5) * 2.5;
  }
}

export function FlockingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse interaction
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    const numBoids = window.innerWidth > 768 ? 80 : 40;
    const boids = Array.from({ length: numBoids }, () => new Boid(width, height));

    const visualRange = 80;
    const speedLimit = 1.8;
    const margin = 50;

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let boid of boids) {
        let centerX = 0, centerY = 0, numNeighbors = 0;
        let avgDX = 0, avgDY = 0;
        let moveX = 0, moveY = 0;

        for (let otherBoid of boids) {
          if (boid === otherBoid) continue;
          const dx = boid.x - otherBoid.x;
          const dy = boid.y - otherBoid.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < visualRange) {
            // Cohesion
            centerX += otherBoid.x;
            centerY += otherBoid.y;
            // Alignment
            avgDX += otherBoid.vx;
            avgDY += otherBoid.vy;
            numNeighbors += 1;

            // Separation
            if (dist < 25) {
              moveX += dx;
              moveY += dy;
            }
          }
        }

        if (numNeighbors > 0) {
          centerX = centerX / numNeighbors;
          centerY = centerY / numNeighbors;
          boid.vx += (centerX - boid.x) * 0.005;
          boid.vy += (centerY - boid.y) * 0.005;

          avgDX = avgDX / numNeighbors;
          avgDY = avgDY / numNeighbors;
          boid.vx += (avgDX - boid.vx) * 0.05;
          boid.vy += (avgDY - boid.vy) * 0.05;
        }

        boid.vx += moveX * 0.05;
        boid.vy += moveY * 0.05;

        // Mouse avoidance (scatter)
        const dxMouse = boid.x - mouseX;
        const dyMouse = boid.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 150) {
          boid.vx += (dxMouse / distMouse) * 0.5;
          boid.vy += (dyMouse / distMouse) * 0.5;
        }

        // Keep within bounds (soft bounce instead of hard wrap makes it feel more like birds in a confined area)
        let turnFactor = 0.2;
        if (boid.x < margin) boid.vx += turnFactor;
        if (boid.x > width - margin) boid.vx -= turnFactor;
        if (boid.y < margin) boid.vy += turnFactor;
        if (boid.y > height - margin) boid.vy -= turnFactor;

        // Speed limit
        const speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy);
        if (speed > speedLimit) {
          boid.vx = (boid.vx / speed) * speedLimit;
          boid.vy = (boid.vy / speed) * speedLimit;
        }

        boid.x += boid.vx;
        boid.y += boid.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(boid.x, boid.y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(120, 119, 198, 0.7)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(120, 119, 198, 1)";
        ctx.fill();
        
        // Draw tail (motion blur effect)
        ctx.beginPath();
        ctx.moveTo(boid.x, boid.y);
        ctx.lineTo(boid.x - boid.vx * 3, boid.y - boid.vy * 3);
        ctx.strokeStyle = "rgba(120, 119, 198, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[0] pointer-events-none opacity-80" />;
}
