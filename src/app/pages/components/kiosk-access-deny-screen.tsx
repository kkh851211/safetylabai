import { useState, useEffect } from "react";
import { CircleX } from "lucide-react";

export function KioskAccessDenyScreen() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div
      className="relative w-[1080px] h-[1920px] overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-result-deny)",
      }}
    >
      {/* Top Area */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center px-[60px]">
        {/* Service Logo */}
        <div className="w-[180px] h-[60px] bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-[18pt] font-bold text-gray-500 border border-white/20">
          Logo
        </div>
      </div>

      {/* Deny Icon Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "300px", height: "500px" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/10 rounded-full scale-150 blur-2xl animate-pulse"></div>
          <CircleX
            className="relative z-10"
            style={{
              width: '280px',
              height: '280px',
              color: "var(--color-status-deny-text)",
              strokeWidth: 1.5,
            }}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-8"
        style={{ top: "850px" }}
      >
        <h1
          className="text-[64pt] font-black text-center leading-tight tracking-tight"
          style={{
            color: "var(--color-status-deny-text)",
          }}
        >
          출입이<br />차단되었습니다
        </h1>

        <div className="flex flex-col items-center gap-2 mt-12 bg-white/30 backdrop-blur-md px-16 py-10 rounded-[40px] border border-white/20 shadow-xl shadow-red-900/5">
          <p
            className="text-[48pt] font-bold text-center"
            style={{
              color: "var(--color-status-deny-text)",
            }}
          >
            홍길동
          </p>

          <p
            className="text-[32pt] font-medium text-center opacity-70"
            style={{
              color: "var(--color-status-deny-text)",
            }}
          >
            09:32
          </p>
        </div>
      </div>

      {/* Countdown Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "1700px", height: "220px" }}
      >
        <div className="bg-white/40 backdrop-blur-sm px-10 py-5 rounded-full border border-white/20">
          <p
            className="text-[24pt] font-medium text-center"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            <span className="font-bold text-red-600 mr-2">{countdown}</span>초 후 처음 화면으로 돌아갑니다
          </p>
        </div>
      </div>
    </div>
  );
}
