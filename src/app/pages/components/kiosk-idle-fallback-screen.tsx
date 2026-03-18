import { Hand } from "lucide-react";

export function KioskIdleFallbackScreen() {
  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden shadow-2xl">
      {/* Top Area - y=0 to y=200 */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px]">
        {/* Version Text - Bottom-Right of Top Area */}
        <div className="absolute bottom-4 right-4 text-[14pt] text-slate-400 font-medium">
          v1.1.0
        </div>
      </div>

      {/* Service Logo Placeholder - y=800 to y=1100, centered horizontally */}
      <div 
        className="absolute w-[400px] h-[200px] bg-slate-50 flex items-center justify-center shadow-lg rounded-xl border border-slate-100"
        style={{ top: '800px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="text-slate-300 text-3xl font-bold tracking-tighter uppercase">SERVICE LOGO</div>
      </div>

      {/* Semi-transparent overlay bar - y=1400 to y=1650 */}
      <div 
        className="absolute left-0 w-[1080px] h-[250px] flex flex-col items-center justify-center gap-3 z-20"
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
