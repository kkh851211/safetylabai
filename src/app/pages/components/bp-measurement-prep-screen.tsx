import { Check } from "lucide-react";

export function BpMeasurementPrepScreen() {
  const checklistItems = [
    "정면을 바라봐 주세요",
    "15초 동안 움직이지 말아 주세요",
    "밝은 조명 아래에서 측정해 주세요",
  ];

  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
      {/* Top Section - Logo and Title (y=0-200) */}
      <div className="relative h-[200px] flex items-center justify-center px-16">
        {/* Service Logo - Left */}
        <div className="absolute left-16">
          <div className="text-2xl font-bold" style={{ color: "var(--color-action-primary)" }}>
            ACCESS CONTROL
          </div>
        </div>

        {/* Title - Centered */}
        <h1 className="text-[48pt] font-bold text-center">혈압 측정 준비</h1>
      </div>

      {/* Posture Illustration Placeholder (y=200-800) */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div
          className="bg-gray-200 flex items-center justify-center rounded-2xl"
          style={{
            width: "600px",
            height: "500px",
          }}
        >
          <span className="text-gray-400 text-xl font-medium">자세 안내 이미지</span>
        </div>
      </div>

      {/* Checklist Section (y=800-1300) */}
      <div className="relative px-16 py-12 space-y-8 flex-1">
        {/* Checklist Items */}
        <div className="space-y-8 max-w-[800px] mx-auto">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Green Checkmark Icon */}
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "var(--color-status-allow-text)",
                }}
              >
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>

              {/* Checklist Text */}
              <span className="text-[28pt] text-gray-900 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        <div
          className="mt-12 mx-auto max-w-[800px] p-6 border-2 rounded-xl shadow-sm"
          style={{
            backgroundColor: "#FFF9C4",
            borderColor: "var(--color-border-disclaimer)",
          }}
        >
          <p className="text-[18pt] text-center text-gray-800 font-bold">
            본 측정값은 의료 진단이 아닙니다
          </p>
        </div>
      </div>

      {/* Button Section (y=1300-1700) */}
      <div className="relative h-[400px] flex items-start justify-between px-16 pt-12">
        {/* Skip Button - Gray */}
        <button
          className="bg-gray-400 text-white font-bold rounded-2xl hover:brightness-95 transition-all shadow-lg active:scale-95"
          style={{
            width: "440px",
            height: "100px",
            fontSize: "32px",
          }}
        >
          건너뛰기
        </button>

        {/* Start Button - Blue */}
        <button
          className="text-white font-bold rounded-2xl hover:brightness-95 transition-all shadow-lg active:scale-95"
          style={{
            width: "440px",
            height: "100px",
            fontSize: "32px",
            backgroundColor: "var(--color-action-primary)",
          }}
        >
          측정 시작
        </button>
      </div>
    </div>
  );
}
