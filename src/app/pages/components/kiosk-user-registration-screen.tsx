import { useState } from "react";
import { ArrowLeft, Camera } from "lucide-react";

export function KioskUserRegistrationScreen() {
  const [name, setName] = useState("");
  const [photoTaken, setPhotoTaken] = useState(false);

  const handleCapture = () => {
    setPhotoTaken(true);
    console.log("Photo captured");
  };

  const handleCancel = () => {
    setName("");
    setPhotoTaken(false);
  };

  const handleSave = () => {
    if (name && photoTaken) {
      console.log("Saving user:", name);
    }
  };

  const isSaveEnabled = name.trim() !== "" && photoTaken;

  return (
    <div className="relative w-[1080px] h-[1920px] bg-white overflow-hidden text-[#111827]">
      {/* Top Area */}
      <div className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center px-[60px]">
        {/* Back Button */}
        <button
          className="w-[80px] h-[80px] flex items-center justify-center rounded-2xl hover:bg-gray-100 transition-colors active:scale-95 bg-gray-50 border border-gray-100"
          onClick={() => console.log("Back clicked")}
        >
          <ArrowLeft className="w-[40px] h-[40px]" />
        </button>

        {/* Title - Centered */}
        <h1 
          className="absolute left-0 w-[1080px] font-black text-center tracking-tight"
          style={{ fontSize: '48px' }}
        >
          사용자 등록
        </h1>
      </div>

      {/* Name Input Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-4"
        style={{ top: "250px", paddingLeft: "60px", paddingRight: "60px" }}
      >
        <label 
          className="w-[960px] text-gray-500 font-bold uppercase tracking-wider"
          style={{ fontSize: '24px' }}
        >
          이름 (필수)
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[960px] bg-gray-50 border-2 border-gray-200 rounded-[32px] focus:outline-none focus:border-blue-500 transition-all font-bold px-10 shadow-inner"
          style={{ height: "120px", fontSize: "40px" }}
          placeholder="이름을 입력해 주세요"
        />
      </div>

      {/* Camera Preview Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center gap-10"
        style={{ top: "500px" }}
      >
        {/* Camera Preview with Face Guideline */}
        <div 
          className="relative bg-gray-900 overflow-hidden shadow-2xl border-4 border-white/10"
          style={{ width: "960px", height: "720px", borderRadius: "48px" }}
        >
          {/* Camera Preview Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 gap-6">
            <div 
              className="w-24 h-24 rounded-full border-4 border-white/10 border-t-white/40 animate-spin"
            />
            <span style={{ fontSize: '32px' }} className="font-medium">카메라 준비 중...</span>
          </div>

          {/* Ellipse Face Guideline Overlay */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 960 720"
            style={{ pointerEvents: "none" }}
          >
            <ellipse
              cx="480"
              cy="360"
              rx="240"
              ry="320"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="20,10"
              opacity="0.5"
            />
            {/* Corner Brackets */}
            <path d="M40 40 L120 40 M40 40 L40 120" stroke="white" strokeWidth="8" opacity="0.3" fill="none" />
            <path d="M920 40 L840 40 M920 40 L920 120" stroke="white" strokeWidth="8" opacity="0.3" fill="none" />
            <path d="M40 680 L120 680 M40 680 L40 600" stroke="white" strokeWidth="8" opacity="0.3" fill="none" />
            <path d="M920 680 L840 680 M920 680 L920 600" stroke="white" strokeWidth="8" opacity="0.3" fill="none" />
          </svg>
        </div>

        {/* Capture Button */}
        <button
          onClick={handleCapture}
          className="bg-blue-600 text-white font-black rounded-[32px] transition-all active:scale-95 shadow-xl shadow-blue-500/30 flex items-center justify-center gap-4"
          style={{
            width: "480px",
            height: "120px",
            fontSize: "36px",
          }}
        >
          <Camera style={{ width: "48px", height: "48px" }} strokeWidth={2.5} />
          촬영하기
        </button>
      </div>

      {/* Bottom Buttons Area */}
      <div
        className="absolute flex items-center justify-between"
        style={{
          top: "1650px",
          left: "60px",
          right: "60px",
          width: "960px",
        }}
      >
        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="bg-gray-100 text-gray-400 font-bold rounded-[32px] transition-all active:scale-95 flex items-center justify-center"
          style={{
            width: "460px",
            height: "120px",
            fontSize: "36px",
          }}
        >
          취소
        </button>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!isSaveEnabled}
          className={`text-white font-black rounded-[32px] transition-all shadow-xl flex items-center justify-center ${
            isSaveEnabled ? "bg-green-600 shadow-green-500/30 active:scale-95" : "bg-gray-200 text-gray-400 shadow-none cursor-not-allowed"
          }`}
          style={{
            width: "460px",
            height: "120px",
            fontSize: "36px",
          }}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
