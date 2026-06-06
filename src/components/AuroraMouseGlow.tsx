"use client";

import { useEffect, useRef } from "react";

export function AuroraMouseGlow() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[0] bg-slate-950">
      {/* Ambient background orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px] animate-blob animation-delay-2000" />
      
      {/* Mouse follower */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full blur-[80px] opacity-70 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(120,119,198,0.8) 0%, rgba(41,20,110,0.4) 40%, transparent 70%)"
        }}
      />
    </div>
  );
}
