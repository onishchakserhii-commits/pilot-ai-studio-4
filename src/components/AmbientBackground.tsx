"use client";

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[0]">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#7877c6]/20 blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
}
