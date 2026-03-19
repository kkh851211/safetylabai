import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export function KioskNameInputScreen() {
  const [currentTime, setCurrentTime] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [isKorean, setIsKorean] = useState(true);

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

  const koreanKeys = [
    ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"],
    ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"],
    ["ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ"],
  ];

  const englishKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const currentKeys = isKorean ? koreanKeys : englishKeys;

  const handleKeyPress = (key: string) => {
    setNameInput((prev) => prev + key);
  };

  const handleBackspace = () => {
    setNameInput((prev) => prev.slice(0, -1));
  };

  const handleSpace = () => {
    setNameInput((prev) => prev + " ");
  };

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden">
      {/* Top Area - y=0 to y=200 */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center justify-between px-[60px]">
        <div className="flex items-center gap-4">
          {/* Back Button */}
          <button
            className="w-[80px] h-[80px] flex items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
            aria-label="뒤로 가기"
          >
            <ArrowLeft className="w-10 h-10" />
          </button>

          {/* Title */}
          <h1 className="text-[32pt] font-bold">이름 입력</h1>
        </div>

        {/* Current Time */}
        <div className="text-[20pt] font-medium">
          {currentTime}
        </div>
      </div>

      {/* Input Area - y=200 to y=500 */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-6"
        style={{ top: "200px" }}
      >
        <p className="text-[28pt] text-gray-700">
          등록된 이름을 입력해 주세요
        </p>

        {/* Name Input Field */}
        <div className="relative w-[960px]">
          <input
            type="text"
            value={nameInput}
            readOnly
            placeholder="이름"
            className="w-full h-[120px] px-8 text-[36pt] border-[3px] border-blue-500 rounded-2xl focus:outline-none bg-blue-50/30"
            style={{ borderColor: 'var(--color-primary)' }}
          />
          {nameInput === "" && (
             <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[36pt] text-gray-300 pointer-events-none">
               이름
             </div>
          )}
        </div>
      </div>

      {/* Keyboard Area - y=500 to y=1500 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[960px] flex flex-col gap-6"
        style={{ top: "500px" }}
      >
        {/* Language Toggle Button */}
        <button
          onClick={() => setIsKorean(!isKorean)}
          className="self-end px-10 h-[80px] text-[20pt] font-bold rounded-xl transition-all shadow-sm active:scale-95"
          style={{
            backgroundColor: "var(--color-action-secondary, #f3f4f6)",
            color: "var(--color-text-primary, #111827)",
          }}
        >
          {isKorean ? "English" : "한글"}
        </button>

        {/* Keyboard Rows */}
        <div className="flex flex-col gap-3">
          {currentKeys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-3">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className="min-w-[85px] h-[100px] px-4 text-[28pt] font-medium rounded-xl transition-all shadow-sm active:scale-90 hover:brightness-95"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #e5e7eb",
                    color: "#111827"
                  }}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}

          {/* Bottom Row with Space and Backspace */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={handleSpace}
              className="flex-1 max-w-[500px] h-[100px] text-[24pt] rounded-xl transition-all shadow-sm active:scale-95 hover:brightness-95"
              style={{
                backgroundColor: "white",
                border: "2px solid #e5e7eb",
                color: "#111827"
              }}
            >
              Space
            </button>
            <button
              onClick={handleBackspace}
              className="min-w-[180px] h-[100px] px-6 text-[22pt] font-bold rounded-xl transition-all shadow-sm active:scale-95 hover:brightness-95 flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#f9fafb",
                border: "2px solid #e5e7eb",
                color: "#ef4444"
              }}
            >
              <ArrowLeft className="w-8 h-8 rotate-180" />
              지우기
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Buttons - y=1500 to y=1850 */}
      <div
        className="absolute left-0 w-[1080px] flex items-center justify-center"
        style={{ top: "1500px", height: "350px", padding: "0 60px" }}
      >
        <div className="flex gap-[40px] w-full justify-center">
          {/* 취소 Button */}
          <button
            className="w-[460px] h-[140px] text-[36pt] font-bold rounded-2xl transition-all shadow-lg active:scale-95"
            style={{
              backgroundColor: "var(--color-action-secondary, #f3f4f6)",
              color: "#374151",
            }}
          >
            취소
          </button>

          {/* 확인 Button */}
          <button
            disabled={nameInput.trim() === ""}
            className="w-[460px] h-[140px] text-[36pt] font-bold rounded-2xl transition-all shadow-lg active:scale-95 disabled:opacity-40 disabled:scale-100 disabled:shadow-none"
            style={{
              backgroundColor: "var(--color-primary, #6366f1)",
              color: "white",
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
