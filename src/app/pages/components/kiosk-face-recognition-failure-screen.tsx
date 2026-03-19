import { useState, useEffect } from "react";
import { TriangleAlert } from "lucide-react";

export function KioskFaceRecognitionFailureScreen() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden text-[#111827]">
      {/* Top Area */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center justify-between px-[60px]">
        {/* Service Logo */}
        <div className="w-[180px] h-[60px] bg-gray-100 rounded-xl flex items-center justify-center text-[18pt] font-bold text-gray-400">
          Logo
        </div>

        {/* Clock */}
        <div className="text-[20pt] font-medium w-[180px] text-right">
          {currentTime}
        </div>
      </div>

      {/* Warning Icon Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "300px", height: "400px" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/10 rounded-full scale-150 blur-2xl"></div>
          <TriangleAlert
            className="w-[200px] h-[200px] relative z-10"
            style={{
              color: "var(--color-action-warning)",
              strokeWidth: 1.5,
            }}
          />
        </div>
      </div>

      {/* Message Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-6"
        style={{ top: "750px" }}
      >
        <h1 className="text-[48pt] font-bold text-center leading-tight">
          얼굴 인식에<br />실패하였습니다
        </h1>

        <p className="text-[28pt] text-center text-gray-500 mt-4">
          아래 방법을 이용해 주세요
        </p>
      </div>

      {/* Button Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-[40px]"
        style={{ top: "1150px" }}
      >
        {/* 이름 직접 입력 Button */}
        <button
          className="font-bold rounded-3xl transition-all active:scale-95 shadow-xl shadow-blue-900/10 flex items-center justify-center"
          style={{
            width: '880px',
            height: '160px',
            fontSize: '48px',
            backgroundColor: "var(--color-action-primary)",
            color: "white",
          }}
        >
          이름 직접 입력
        </button>

        {/* 처음으로 Button */}
        <button
          className="font-bold rounded-3xl transition-all active:scale-95 shadow-lg flex items-center justify-center"
          style={{
            width: '880px',
            height: '160px',
            fontSize: '48px',
            backgroundColor: "var(--color-action-secondary)",
            color: "#4B5563",
          }}
        >
          처음으로
        </button>
      </div>

      {/* Bottom Info Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "1780px" }}
      >
        <p className="text-[20pt] text-gray-400">
          인식 실패가 반복되면 담당자에게 문의해 주세요
        </p>
      </div>
    </div>
  );
}
