import { Hand } from "lucide-react";

export function KioskIdleFallbackScreen() {
  return (
    <div className="relative w-[1080px] h-[1920px] bg-black overflow-hidden shadow-2xl">
      {/* Top Area - y=0 to y=200 */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px]">
        {/* Version Text - Bottom-Right of Top Area */}
        <div className="absolute bottom-4 right-4 text-[14pt] text-gray-500 opacity-40">
          v1.1.0
        </div>
      </div>

      {/* Service Logo Placeholder - y=800 to y=1100, centered horizontally */}
      <div 
        className="absolute w-[400px] h-[200px] bg-white flex items-center justify-center shadow-lg rounded-xl"
        style={{ top: '800px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="text-gray-400 text-3xl font-bold tracking-tighter opacity-50">SERVICE LOGO</div>
      </div>

      {/* Semi-transparent overlay bar - y=1400 to y=1650 */}
      <div 
        className="absolute left-0 w-[1080px] h-[250px] flex flex-col items-center justify-center gap-3 z-20"
        style={{ top: '1400px', backgroundColor: 'var(--color-bg-overlay)' }}
      >
        <p 
          className="text-[28pt] text-center"
          style={{ color: 'var(--color-text-on-dark)' }}
        >
          화면을 터치하면 시작됩니다
        </p>
        
        {/* Finger Tap Icon */}
        <Hand 
          className="w-12 h-12" 
          style={{ color: 'var(--color-text-on-dark)' }}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}
