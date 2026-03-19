import { useState, useEffect } from "react";

export function KioskFaceRecognitionTimeoutScreen() {
  const [currentTime, setCurrentTime] = useState("");
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          return 30; // Reset to 30 or handle navigation
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden">
      {/* Top Area - y=0 to y=200 */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center justify-between px-[60px]">
        {/* Service Logo Placeholder */}
        <div className="w-[140px] h-[80px] bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">LOGO</span>
        </div>
        
        {/* Current Time */}
        <div className="text-[20pt] font-medium">
          {currentTime}
        </div>
      </div>

      {/* Camera Preview Area - y=200 to y=800 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bg-gray-900 overflow-hidden rounded-lg"
        style={{ top: '200px', width: '960px', height: '600px' }}
      >
        {/* Camera Preview Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Camera Preview</span>
        </div>

        {/* Face Guideline Overlay - White Ellipse */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full opacity-70"
          style={{ 
            width: '400px', 
            height: '500px',
            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.4)'
          }}
        />
      </div>

      {/* Warning Message Area - y=800 to y=1200 */}
      <div 
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: '800px', height: '400px' }}
      >
        <p 
          className="text-[28pt] text-center px-[60px]"
          style={{ color: 'var(--color-text-primary)' }}
        >
          얼굴을 가이드 안에 위치시켜 주세요
        </p>
      </div>

      {/* Help Section - y=1200 to y=1600 */}
      <div 
        className="absolute left-0 w-[1080px] flex flex-col items-center justify-center gap-4"
        style={{ top: '1200px', height: '400px' }}
      >
        <p className="text-[20pt] text-gray-600">
          인식이 어려우신가요?
        </p>
        
        {/* 직접 입력 Button */}
        <button
          className="w-[360px] h-[80px] rounded-lg text-[24pt] font-medium transition-all"
          style={{
            backgroundColor: 'var(--color-action-secondary)',
            color: '#374151',
          }}
        >
          직접 입력
        </button>
        
        {/* Countdown Text */}
        <p 
          className="text-[20pt] mt-2 font-medium"
          style={{ color: 'var(--color-action-warning)' }}
        >
          {countdown}초 후 처음 화면으로 돌아갑니다
        </p>
      </div>
    </div>
  );
}
