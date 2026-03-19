import { useState, useEffect } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import * as Hangul from 'hangul-js';

export function KioskNameInputErrorScreen() {
  const [currentTime, setCurrentTime] = useState("");
  const [nameInput, setNameInput] = useState("홍길동");
  const [isKorean, setIsKorean] = useState(true);

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
    setNameInput((prev) => {
      const chars = Hangul.disassemble(prev);
      chars.push(key);
      return Hangul.assemble(chars);
    });
  };

  const handleBackspace = () => {
    setNameInput((prev) => {
      const chars = Hangul.disassemble(prev);
      chars.pop();
      return Hangul.assemble(chars);
    });
  };

  const handleSpace = () => {
    setNameInput((prev) => prev + " ");
  };

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden text-[#111827]">
      {/* Top Area */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center justify-between px-[60px]">
        {/* Back Button */}
        <button
          className="w-[80px] h-[80px] flex items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
          aria-label="뒤로 가기"
        >
          <ArrowLeft className="w-10 h-10" />
        </button>

        {/* Title */}
        <h1 className="text-[32pt] font-bold">이름 입력</h1>

        {/* Clock */}
        <div className="text-[20pt] font-medium w-[80px] text-right">
          {currentTime}
        </div>
      </div>

      {/* Input Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-6"
        style={{ top: "240px" }}
      >
        <p className="text-[24pt] text-gray-700">
          등록된 이름을 입력해 주세요
        </p>

        {/* Name Input Field */}
        <div className="relative w-[960px]">
          <input
            type="text"
            value={nameInput}
            readOnly
            placeholder="이름"
            className="w-full h-[120px] px-8 text-[36pt] text-[#111827] border-[3px] rounded-2xl focus:outline-none bg-red-50/30"
            style={{
              borderColor: "#EF4444", // Danger color
            }}
          />
        </div>

        {/* Error Message */}
        <div className="flex items-center gap-3">
          <AlertCircle
            className="w-[32px] h-[32px]"
            style={{ color: "#EF4444" }}
          />
          <p
            className="text-[20pt] font-medium"
            style={{ color: "#EF4444" }}
          >
            등록되지 않은 사용자입니다
          </p>
        </div>
      </div>

      {/* Keyboard Area */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[960px] flex flex-col gap-6"
        style={{ top: "540px" }}
      >
        {/* Language Toggle Button */}
        <button
          onClick={() => setIsKorean(!isKorean)}
          className="self-end px-8 py-3 text-[18pt] font-bold rounded-xl transition-colors bg-gray-100/80 hover:bg-gray-200"
        >
          {isKorean ? "English" : "한글"}
        </button>

        {/* Keyboard Keys */}
        <div className="flex flex-col gap-4">
          {currentKeys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-3">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className="min-w-[85px] h-[85px] border border-gray-200 rounded-xl text-[24pt] font-medium bg-white shadow-sm active:scale-95 active:bg-gray-50 transition-all"
                >
                  {key}
                </button>
              ))}
            </div>
          ))}

          {/* Special Buttons Row */}
          <div className="flex justify-center gap-3 mt-2">
            <button
              onClick={handleSpace}
              className="w-[500px] h-[85px] border border-gray-200 rounded-xl text-[20pt] font-medium bg-white shadow-sm active:scale-95 active:bg-gray-50 transition-all"
            >
              Space
            </button>
            <button
              onClick={handleBackspace}
              className="w-[200px] h-[85px] border border-gray-200 rounded-xl text-[20pt] font-bold bg-white text-red-500 shadow-sm active:scale-95 active:bg-gray-50 transition-all"
            >
              ← 지우기
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div
        className="absolute bottom-[80px] left-0 w-[1080px] flex items-center justify-center px-[60px]"
      >
        <div className="flex gap-[30px] w-full">
          <button
            className="flex-1 h-[140px] text-[32pt] font-bold text-gray-600 bg-gray-200/80 rounded-2xl transition-all active:scale-95"
          >
            취소
          </button>
          <button
            disabled={nameInput.trim() === ""}
            className="flex-1 h-[140px] text-[32pt] font-bold text-white rounded-2xl transition-all active:scale-95 disabled:opacity-40 disabled:scale-100"
            style={{
              backgroundColor: "#0066FF", // Vibrant primary color
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
