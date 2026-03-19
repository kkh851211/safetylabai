import { ArrowLeft } from "lucide-react";

interface KioskDeviceInfoScreenProps {
  isOnline?: boolean;
}

export function KioskDeviceInfoScreen({ isOnline = true }: KioskDeviceInfoScreenProps) {
  const handleClose = () => {
    console.log("Close clicked");
  };

  const infoRows = [
    { label: "소프트웨어 버전", value: "v1.0.2" },
    { label: "기기 ID", value: "KSK-001" },
    { label: "네트워크 상태", value: isOnline ? "온라인" : "오프라인", showDot: true },
    { label: "최근 동기화", value: "2026-03-19 09:31" },
  ];

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
          기기 정보
        </h1>
      </div>

      {/* Info List Area */}
      <div
        className="absolute left-0 w-[1080px]"
        style={{ 
          top: "250px", 
          paddingLeft: "60px", 
          paddingRight: "60px",
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {infoRows.map((row, index) => (
          <div key={index} style={{ width: '960px' }}>
            {/* Info Row */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'between', 
                height: "140px",
                width: '100%'
              }}
            >
              <div 
                className="flex items-center justify-between w-full"
                style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
              >
                {/* Label */}
                <span
                  style={{ fontSize: "32px", color: "#6B7280", fontWeight: 600 }}
                >
                  {row.label}
                </span>

                {/* Value */}
                <div 
                  className="flex items-center"
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  {row.showDot && (
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: isOnline ? "#16A34A" : "#DC2626",
                        borderRadius: "50%",
                        boxShadow: isOnline 
                          ? '0 0 12px rgba(22, 163, 74, 0.4)'
                          : '0 0 12px rgba(220, 38, 38, 0.4)'
                      }}
                    />
                  )}
                  <span style={{ fontSize: "32px", color: "#111827", fontWeight: 800 }}>{row.value}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < infoRows.length - 1 && (
              <div style={{ width: "100%", height: "2px", backgroundColor: "#F3F4F6" }} />
            )}
          </div>
        ))}
      </div>

      {/* Close Button Area */}
      <div
        className="absolute left-0 w-[1080px] flex justify-center"
        style={{ top: "1650px", display: 'flex', justifyContent: 'center' }}
      >
        <button
          onClick={handleClose}
          className="font-black transition-all active:scale-95 shadow-xl flex items-center justify-center"
          style={{
            width: "480px",
            height: "120px",
            fontSize: "36px",
            backgroundColor: "#F3F4F6",
            color: "#4B5563",
            borderRadius: "32px",
            display: 'flex'
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
