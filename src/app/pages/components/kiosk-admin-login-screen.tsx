import { useState, useEffect } from "react";
import { Delete, Check } from "lucide-react";

interface KioskAdminLoginScreenProps {
  locked?: boolean;
}

export function KioskAdminLoginScreen({ locked = false }: KioskAdminLoginScreenProps) {
  const [password, setPassword] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [countdown, setCountdown] = useState(299); // 4:59 in seconds

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (locked && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [locked, countdown]);

  const handleNumberClick = (num: string) => {
    if (locked) return;
    if (password.length < 6) {
      setPassword((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    if (locked) return;
    setPassword((prev) => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    if (locked) return;
    console.log("Password submitted:", password);
  };

  const handleCancel = () => {
    if (locked) return;
    setPassword("");
  };

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

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

      {/* Title Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-6"
        style={{ top: "250px" }}
      >
        <h1 
          className="font-black text-center tracking-tight"
          style={{ fontSize: '64px' }}
        >
          관리자 모드
        </h1>
        <p 
          className="text-gray-500 font-medium"
          style={{ fontSize: '32px' }}
        >
          비밀번호를 입력해 주세요
        </p>
      </div>

      {/* Password Display Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "480px" }}
      >
        <div
          className="flex items-center justify-center bg-gray-50 border-2 border-gray-100 shadow-inner"
          style={{ width: "720px", height: "180px", borderRadius: "32px", gap: '24px' }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-200 ${
                i < password.length ? "bg-blue-600 scale-125" : "bg-gray-200"
              }`}
              style={{ width: '40px', height: '40px' }}
            />
          ))}
        </div>
      </div>

      {/* Numeric Keypad Area */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-6"
        style={{ top: "800px" }}
      >
        {[
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"],
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-6">
            {row.map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className={`font-bold border border-gray-100 shadow-lg shadow-gray-200/50 transition-all ${
                  locked ? "opacity-30 cursor-not-allowed" : "active:scale-95 active:bg-gray-50"
                } flex items-center justify-center`}
                style={{ 
                  width: "240px", 
                  height: "160px", 
                  fontSize: "48px", 
                  borderRadius: "32px",
                  backgroundColor: 'white'
                }}
              >
                {num}
              </button>
            ))}
          </div>
        ))}
        {/* Last Row */}
        <div className="flex gap-6">
          <button
            onClick={handleDelete}
            className={`border border-gray-100 shadow-lg shadow-gray-200/50 transition-all ${
              locked ? "opacity-30 cursor-not-allowed" : "active:scale-95 active:bg-gray-50"
            } flex items-center justify-center`}
            style={{ 
              width: "240px", 
              height: "160px", 
              borderRadius: "32px",
              backgroundColor: 'white'
            }}
          >
            <Delete style={{ width: '64px', height: '64px' }} className="text-red-500" />
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className={`font-bold border border-gray-100 shadow-lg shadow-gray-200/50 transition-all ${
              locked ? "opacity-30 cursor-not-allowed" : "active:scale-95 active:bg-gray-50"
            } flex items-center justify-center`}
            style={{ 
              width: "240px", 
              height: "160px", 
              fontSize: "48px", 
              borderRadius: "32px",
              backgroundColor: 'white'
            }}
          >
            0
          </button>
          <button
            onClick={handleConfirm}
            disabled={locked || password.length < 4}
            className={`text-white shadow-xl shadow-blue-500/30 transition-all ${
              locked || password.length < 4 ? "opacity-30 cursor-not-allowed" : "active:scale-95"
            } flex items-center justify-center`}
            style={{ 
              width: "240px", 
              height: "160px", 
              borderRadius: "32px",
              backgroundColor: '#2563EB'
            }}
          >
            <Check style={{ width: '64px', height: '64px' }} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center px-[60px]"
        style={{ top: "1650px" }}
      >
        <button
          onClick={handleCancel}
          disabled={locked}
          className={`font-bold text-gray-500 transition-all ${
            locked ? "opacity-30 cursor-not-allowed" : "active:scale-95"
          } flex items-center justify-center`}
          style={{ 
            width: "440px", 
            height: "120px", 
            fontSize: "36px", 
            borderRadius: "24px",
            backgroundColor: '#F3F4F6'
          }}
        >
          취소
        </button>
      </div>

      {/* Locked Overlay */}
      {locked && (
        <>
          <div
            className="absolute inset-0 z-10 backdrop-blur-sm"
            style={{
              backgroundColor: "var(--color-bg-overlay)",
            }}
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div
              className="bg-white flex flex-col items-center justify-center shadow-2xl border border-white/20"
              style={{
                width: "840px",
                height: "600px",
                borderRadius: "60px",
                gap: '48px'
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <h2 
                  className="font-black text-center text-gray-900 leading-tight"
                  style={{ fontSize: '56px' }}
                >
                  5회 연속<br />실패하였습니다
                </h2>
                <p 
                  className="font-medium text-center text-gray-500"
                  style={{ fontSize: '32px' }}
                >
                  보안을 위해 잠시 잠금 처리됩니다
                </p>
              </div>

              <div 
                className="flex flex-col items-center justify-center bg-blue-50"
                style={{ width: '500px', height: '220px', borderRadius: '40px', gap: '8px' }}
              >
                <p 
                  className="font-bold text-blue-400 uppercase tracking-widest"
                  style={{ fontSize: '24px' }}
                >
                  Try again in
                </p>
                <p
                  className="font-black tabular-nums tracking-tighter"
                  style={{
                    fontSize: '96px',
                    color: "var(--color-action-primary)",
                  }}
                >
                  {formatCountdown(countdown)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
