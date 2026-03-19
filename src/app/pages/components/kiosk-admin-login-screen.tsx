import { useState, useEffect } from "react";
import { Delete, Check } from "lucide-react";

export function KioskAdminLoginScreen() {
  const [password, setPassword] = useState("");
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

  const handleNumberClick = (num: string) => {
    if (password.length < 6) {
      setPassword((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    console.log("Password submitted:", password);
  };

  const handleCancel = () => {
    setPassword("");
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
        <h1 className="text-[48pt] font-black text-center tracking-tight">
          관리자 모드
        </h1>
        <p className="text-[24pt] text-gray-500 font-medium">
          비밀번호를 입력해 주세요
        </p>
      </div>

      {/* Password Display Area */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "480px" }}
      >
        <div
          className="flex items-center justify-center gap-6 bg-gray-50 rounded-[32px] border-2 border-gray-100 shadow-inner"
          style={{ width: "720px", height: "180px" }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full transition-all duration-200 ${
                i < password.length ? "bg-blue-600 scale-125" : "bg-gray-200"
              }`}
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
                className="font-bold rounded-[32px] bg-white border border-gray-100 shadow-lg shadow-gray-200/50 transition-all active:scale-95 active:bg-gray-50 flex items-center justify-center"
                style={{ width: "240px", height: "160px", fontSize: "48px" }}
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
            className="rounded-[32px] bg-white border border-gray-100 shadow-lg shadow-gray-200/50 transition-all active:scale-95 active:bg-gray-50 flex items-center justify-center"
            style={{ width: "240px", height: "160px" }}
          >
            <Delete className="w-16 h-16 text-red-500" />
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className="font-bold rounded-[32px] bg-white border border-gray-100 shadow-lg shadow-gray-200/50 transition-all active:scale-95 active:bg-gray-50 flex items-center justify-center"
            style={{ width: "240px", height: "160px", fontSize: "48px" }}
          >
            0
          </button>
          <button
            onClick={handleConfirm}
            disabled={password.length < 4}
            className="rounded-[32px] bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all active:scale-95 disabled:opacity-30 flex items-center justify-center"
            style={{ width: "240px", height: "160px" }}
          >
            <Check className="w-16 h-16" strokeWidth={3} />
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
          className="font-bold rounded-[24px] bg-gray-100 text-gray-500 transition-all active:scale-95 flex items-center justify-center"
          style={{ width: "440px", height: "120px", fontSize: "36px" }}
        >
          취소
        </button>
      </div>
    </div>
  );
}
