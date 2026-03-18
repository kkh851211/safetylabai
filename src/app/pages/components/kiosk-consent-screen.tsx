import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export function KioskConsentScreen() {
  const [currentTime, setCurrentTime] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  const consentText = `본 서비스는 출입통제를 위해 귀하의 생체정보(얼굴 특징점)를 수집·이용합니다.

■ 수집·이용 목적
- 출입통제 시스템을 통한 본인 확인
- 건물 출입 기록 관리

■ 수집 항목
- 생체정보: 얼굴 특징점 데이터

■ 보유 및 이용 기간
- 수집일로부터 최대 3년간 보관
- 목적 달성 후 지체 없이 파기

■ 동의를 거부할 권리 및 불이익
- 귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다.
- 다만, 동의를 거부할 경우 출입통제 서비스 이용이 제한될 수 있습니다.`;

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

      {/* Title Section - y=200 to y=500 */}
      <div className="absolute left-0 w-[1080px] flex flex-col items-center justify-center gap-4" style={{ top: '200px', height: '300px' }}>
        <h1 className="text-[48pt] font-black text-center text-[#111827]">
          개인정보 수집·이용 동의
        </h1>
        <p className="text-[24pt] text-center text-gray-700 px-[60px]">
          출입통제 서비스 이용을 위해 아래 내용에 동의해 주세요
        </p>
      </div>

      {/* Scrollable Content Area - y=500 to y=1200 */}
      <div 
        className="absolute left-[60px] overflow-y-auto bg-gray-50 rounded-lg p-8"
        style={{ top: '500px', width: '960px', height: '700px' }}
      >
        <div className="text-[20pt] leading-relaxed whitespace-pre-line text-[#111827]">
          {consentText}
        </div>

        {/* Checkbox with Label at bottom of scrollable area */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t-2 border-gray-300">
          <button
            onClick={() => setIsChecked(!isChecked)}
            className="w-[70px] h-[70px] border-2 border-gray-400 rounded flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: isChecked ? 'var(--color-primary, #6366f1)' : 'white',
              borderColor: isChecked ? 'var(--color-primary, #6366f1)' : '#9ca3af',
            }}
          >
            {isChecked && <Check className="w-12 h-12 text-white" strokeWidth={4} />}
          </button>
          <label className="text-[30pt] font-bold text-[#111827] cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
            생체정보(얼굴 특징점) 수집·이용에 동의합니다
          </label>
        </div>
      </div>

      {/* Button Area - y=1200 to y=1600 */}
      <div 
        className="absolute left-0 w-[1080px] flex items-center justify-center gap-[40px] px-[60px]"
        style={{ top: '1200px', height: '400px' }}
      >
        {/* 거부 Button */}
        <button
          className="w-[440px] h-[100px] rounded-lg text-[28pt] font-bold transition-all"
          style={{
            backgroundColor: 'var(--color-slate-200, #e2e8f0)',
            color: '#374151',
          }}
        >
          거부
        </button>

        {/* 동의 Button */}
        <button
          disabled={!isChecked}
          className="w-[440px] h-[100px] rounded-lg text-[28pt] font-bold text-white transition-all"
          style={{
            backgroundColor: 'var(--color-primary, #6366f1)',
            opacity: isChecked ? 1 : 0.4,
            cursor: isChecked ? 'pointer' : 'not-allowed',
          }}
        >
          동의
        </button>
      </div>
    </div>
  );
}
