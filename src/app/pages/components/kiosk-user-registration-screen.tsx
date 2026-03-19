import { useState } from "react";
import { ArrowLeft, Camera, CheckCircle } from "lucide-react";

interface KioskUserRegistrationScreenProps {
  photoTaken?: boolean;
  captureError?: boolean;
}

export function KioskUserRegistrationScreen({ 
  photoTaken: initialPhotoTaken = false,
  captureError = false
}: KioskUserRegistrationScreenProps) {
  const [name, setName] = useState(initialPhotoTaken ? "홍길동" : "");
  const [photoTaken, setPhotoTaken] = useState(initialPhotoTaken);

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

  const isSaveEnabled = name.trim() !== "" && photoTaken && !captureError;

  return (
    <div 
      className="relative w-[1080px] h-[1920px] overflow-hidden"
      style={{ backgroundColor: 'white', color: '#111827' }}
    >
      {/* Top Area */}
      <div 
        className="absolute top-0 left-0 w-[1080px] h-[200px] flex items-center px-[60px]"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {/* Back Button */}
        <button
          className="flex items-center justify-center transition-colors active:scale-95 border"
          style={{ 
            width: "80px", 
            height: "80px", 
            borderRadius: "16px",
            backgroundColor: '#F9FAFB',
            borderColor: '#F3F4F6',
            display: 'flex'
          }}
          onClick={() => console.log("Back clicked")}
        >
          <ArrowLeft style={{ width: "40px", height: "40px" }} />
        </button>

        {/* Title - Centered */}
        <h1 
          className="absolute left-0 w-[1080px] font-black text-center tracking-tight"
          style={{ fontSize: '48px', pointerEvents: 'none' }}
        >
          사용자 등록
        </h1>
      </div>

      {/* Name Input Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center"
        style={{ 
          top: "250px", 
          paddingLeft: "60px", 
          paddingRight: "60px",
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <label 
          className="w-[960px] font-bold uppercase tracking-wider"
          style={{ fontSize: '24px', color: '#6B7280' }}
        >
          이름 (필수)
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[960px] border-2 focus:outline-none focus:border-blue-500 transition-all font-bold px-10 shadow-inner"
          style={{ 
            height: "120px", 
            fontSize: "40px", 
            borderRadius: "32px",
            backgroundColor: '#F9FAFB',
            borderColor: '#E5E7EB'
          }}
          placeholder="이름을 입력해 주세요"
        />
      </div>

      {/* Camera Preview Area */}
      <div
        className="absolute left-0 w-[1080px] flex flex-col items-center"
        style={{ 
          top: "500px",
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}
      >
        {/* Camera Preview or Captured Photo */}
        <div 
          className="relative overflow-hidden shadow-2xl"
          style={{ 
            width: "960px", 
            height: "720px", 
            borderRadius: "48px",
            backgroundColor: photoTaken ? '#F3F4F6' : '#0F172A',
            border: photoTaken ? '4px solid #F3F4F6' : '4px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {captureError ? (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-gray-400"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}
            >
              {/* Captured Photo Placeholder with red overlay */}
              <div 
                className="w-48 h-48 rounded-full bg-gray-500 flex items-center justify-center text-gray-400"
                style={{ fontSize: '24px' }}
              >
                LOW QUALITY
              </div>
              
              {/* Red warning overlay (alpha 0.3) */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.3)",
                }}
              />
            </div>
          ) : photoTaken ? (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}
            >
              {/* Captured Photo Placeholder */}
              <div 
                className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center text-gray-500"
                style={{ fontSize: '24px' }}
              >
                PHOTO
              </div>
              <span style={{ fontSize: '32px' }} className="font-bold text-gray-400">촬영이 완료되었습니다</span>

              {/* Success Badge */}
              <div 
                className="absolute shadow-lg flex items-center justify-center"
                style={{ 
                  top: '40px', 
                  right: '40px', 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%',
                  backgroundColor: 'white'
                }}
              >
                <CheckCircle 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    color: 'var(--color-status-allow-text)',
                    fill: 'rgba(21, 128, 61, 0.1)'
                  }} 
                />
              </div>
            </div>
          ) : (
            <>
              {/* Camera Preview Placeholder */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '24px',
                  color: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <div 
                  className="rounded-full border-4 animate-spin"
                  style={{ 
                    width: '96px', 
                    height: '96px', 
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderTopColor: 'rgba(255, 255, 255, 0.4)'
                  }}
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
            </>
          )}
        </div>

        {/* Error Message and Retake Button OR Capture/Retake Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          {captureError && (
            <p
              className="w-[960px] text-center font-bold leading-tight"
              style={{ color: "var(--color-action-warning)", fontSize: '28px' }}
            >
              얼굴이 선명하게 촬영되지 않았습니다. 다시 촬영해 주세요
            </p>
          )}

          <button
            onClick={handleCapture}
            className="font-black transition-all active:scale-95 flex items-center justify-center gap-4"
            style={{
              width: "480px",
              height: "120px",
              fontSize: "36px",
              backgroundColor: (photoTaken && !captureError) ? '#F3F4F6' : '#2563EB',
              color: (photoTaken && !captureError) ? '#6B7280' : 'white',
              borderRadius: '32px',
              display: 'flex',
              boxShadow: (photoTaken && !captureError) ? 'none' : '0 20px 25px -5px rgba(37, 99, 235, 0.3)'
            }}
          >
            <Camera style={{ width: "48px", height: "48px" }} strokeWidth={2.5} />
            {(photoTaken && !captureError) ? "재촬영하기" : "촬영하기"}
          </button>
        </div>
      </div>

      {/* Bottom Buttons Area */}
      <div
        className="absolute flex items-center justify-between"
        style={{
          top: "1650px",
          left: "60px",
          right: "60px",
          width: "960px",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="font-bold transition-all active:scale-95 flex items-center justify-center"
          style={{
            width: "460px",
            height: "120px",
            fontSize: "36px",
            backgroundColor: '#F3F4F6',
            color: '#9CA3AF',
            borderRadius: '32px',
            display: 'flex'
          }}
        >
          취소
        </button>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!isSaveEnabled}
          className="font-black transition-all shadow-xl flex items-center justify-center"
          style={{
            width: "460px",
            height: "120px",
            fontSize: "36px",
            borderRadius: '32px',
            display: 'flex',
            backgroundColor: isSaveEnabled ? '#16A34A' : '#E5E7EB',
            color: isSaveEnabled ? 'white' : '#9CA3AF',
            cursor: isSaveEnabled ? 'pointer' : 'not-allowed',
            boxShadow: isSaveEnabled ? '0 20px 25px -5px rgba(22, 163, 74, 0.3)' : 'none'
          }}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
