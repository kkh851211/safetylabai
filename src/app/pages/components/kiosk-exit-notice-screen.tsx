import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export function KioskExitNoticeScreen() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const updateTime = () => {
      // Logic for countdown if needed, but the user's code uses a simple interval
    };
    
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Handle redirect to initial screen
          // In a real app, we might use window.location.href = '/' or a router-based redirect
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden">
      {/* Top Area - y=0 to y=200 */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center px-[60px]">
        {/* Service Logo Placeholder */}
        <div className="w-[140px] h-[80px] bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">LOGO</span>
        </div>
      </div>

      {/* Warning Icon - y=200 to y=600 */}
      <div 
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: '200px', height: '400px' }}
      >
        <AlertTriangle 
          className="w-[160px] h-[160px]"
          style={{ color: 'var(--color-red-500, #ef4444)' }}
          strokeWidth={2}
        />
      </div>

      {/* Message Section - y=600 to y=1100 */}
      <div 
        className="absolute left-0 w-[1080px] flex flex-col items-center justify-center gap-6 px-[60px]"
        style={{ top: '600px', height: '500px' }}
      >
        <h1 className="text-[36pt] font-black text-center text-[#111827]">
          동의 거부로 인해 출입이 제한됩니다
        </h1>
        <p className="text-[24pt] text-center text-gray-700">
          출입이 필요하신 경우 관리자에게 문의해 주세요
        </p>
      </div>

      {/* Button and Countdown Section - y=1100 to y=1600 */}
      <div 
        className="absolute left-0 w-[1080px] flex flex-col items-center justify-center gap-10"
        style={{ top: '1100px', height: '500px' }}
      >
        {/* 확인 Button */}
        <button
          className="w-[440px] h-[100px] rounded-lg text-[28pt] font-black text-white transition-all shadow-lg active:scale-95"
          style={{
            backgroundColor: 'var(--color-primary, #6366f1)',
          }}
        >
          확인
        </button>

        {/* Countdown Text */}
        <p 
          className="text-[20pt] text-center"
          style={{ color: 'var(--color-slate-500, #64748b)' }}
        >
          <span className="font-bold text-red-500">{countdown}</span>초 후 자동으로 처음 화면으로 돌아갑니다
        </p>
      </div>

      {/* Bottom Area - y=1600 to y=1920 - Empty */}
    </div>
  );
}
