import { VolumeX, Hand } from "lucide-react";
import { useEffect, useRef } from "react";

function GreenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full video height
    canvas.width = 1080;
    canvas.height = 1720; // y=200 to y=1920

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create fewer, more subtle particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;

      // Clear with dark background
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with subtle green glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#22c55e';
        ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export function KioskIdleScreen() {
  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden shadow-2xl">
      <GreenParticles />

      {/* Top Area - y=0 to y=200 */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] z-20">
        {/* Version Text - Bottom-Right of Top Area */}
        <div className="absolute bottom-4 right-4 text-[14pt] text-slate-400 font-medium">
          v1.1.0
        </div>
      </div>

      {/* Middle Area - y=200 to y=1720 (Video content placeholder) */}
      <div 
        className="absolute left-0 w-[1080px] h-[1520px] flex items-center justify-center bg-slate-50 border-y border-slate-100" 
        style={{ top: '200px' }}
      >
        <div className="text-slate-200 text-6xl font-bold tracking-widest uppercase">Video Content</div>
        
        {/* Mute Icon Overlay - Top-Right of Middle Area */}
        <div className="absolute top-8 right-8 p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-slate-100">
          <VolumeX className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
        </div>
      </div>

      {/* Semi-transparent overlay bar - y=1400 to y=1650 (within middle area) */}
      <div 
        className="absolute left-0 w-[1080px] h-[250px] flex flex-col items-center justify-center gap-3 z-30"
        style={{ top: '1400px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)' }}
      >
        <p className="text-[28pt] text-center text-slate-800 font-bold">
          화면을 터치하면 시작됩니다
        </p>
        
        {/* Finger Tap Icon */}
        <Hand className="w-12 h-12 text-slate-800" strokeWidth={1.5} />
      </div>
    </div>
  );
}
