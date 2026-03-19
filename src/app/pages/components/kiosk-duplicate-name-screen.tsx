import { useState, useEffect } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";

export function KioskDuplicateNameScreen() {
  const [currentTime, setCurrentTime] = useState("");
  const nameInput = "홍길동";

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

  // Duplicate name results
  const duplicateUsers = [
    { name: "홍길동", department: "인사팀" },
    { name: "홍길동", department: "개발팀" },
    { name: "홍길동", department: "마케팅팀" },
    { name: "홍길동", department: "영업팀" },
    { name: "홍길동", department: "기획팀" },
  ];

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
            className="w-full h-[120px] px-8 text-[36pt] text-[#111827] border-[3px] border-blue-500 rounded-2xl focus:outline-none bg-blue-50/30"
          />
        </div>
      </div>

      {/* Duplicate Name Results List */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[960px] flex flex-col border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
        style={{ top: "540px" }}
      >
        {duplicateUsers.map((user, index) => (
          <div key={index}>
            <button
              className="w-full h-[160px] px-10 flex items-center justify-between transition-colors bg-white hover:bg-gray-50 active:bg-gray-100 group"
            >
              <span className="text-[28pt] font-medium">
                {user.name} <span className="text-gray-400 mx-2">|</span> <span className="text-gray-500 font-normal">{user.department}</span>
              </span>
              <ChevronRight className="w-12 h-12 text-gray-300 group-hover:text-blue-500 transition-colors" />
            </button>
            {index < duplicateUsers.length - 1 && (
              <div className="w-full h-[1px] bg-gray-100 mx-auto" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Action Area */}
      <div 
        className="absolute left-0 bg-white border-t border-gray-100 flex items-center justify-center px-[60px] z-20"
        style={{ top: "1520px", width: '1080px', height: '400px' }}
      >
        <div className="flex justify-center w-full">
          <button
            className="flex-shrink-0 font-bold rounded-2xl transition-all active:scale-95 shadow-lg flex items-center justify-center bg-gray-200 text-gray-600"
            style={{
              width: '460px',
              height: '160px',
              fontSize: '52px',
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
