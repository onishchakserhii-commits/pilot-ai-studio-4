"use client";

import { useEffect, useState } from "react";

export function GlassmorphismBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen, normalized between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Shape 1: Top Right Sphere */}
      <div 
        className="absolute top-[10%] right-[15%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-accent/40 to-blue-500/20 blur-3xl opacity-60"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      {/* Shape 2: Bottom Left Blob */}
      <div 
        className="absolute bottom-[10%] left-[10%] w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-bl from-purple-500/20 to-accent/30 blur-3xl opacity-50"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.7s ease-out'
        }}
      />

      {/* Glass Panel 1: Center Right */}
      <div 
        className="absolute top-[30%] right-[20%] w-32 h-48 md:w-48 md:h-64 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl rotate-12"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) rotate(12deg)`,
          transition: 'transform 0.4s ease-out'
        }}
      />

      {/* Glass Panel 2: Center Left */}
      <div 
        className="absolute top-[50%] left-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl -rotate-12 flex items-center justify-center"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) rotate(-12deg)`,
          transition: 'transform 0.6s ease-out'
        }}
      >
        <div className="w-1/2 h-1/2 rounded-full border border-white/20" />
      </div>

      {/* Glass Panel 3: Bottom Center */}
      <div 
        className="absolute bottom-[20%] left-[45%] w-40 h-16 md:w-56 md:h-20 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg -rotate-6"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * 20}px) rotate(-6deg)`,
          transition: 'transform 0.8s ease-out'
        }}
      />

      {/* Subtle grid overlay to give it a techy feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
}
