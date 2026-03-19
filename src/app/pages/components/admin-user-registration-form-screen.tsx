import { ArrowLeft, Camera } from "lucide-react";

export function AdminUserRegistrationFormScreen() {
  return (
    <div 
      className="relative overflow-hidden flex"
      style={{ 
        width: "1440px", 
        height: "900px", 
        backgroundColor: "#F9FAFB",
        display: 'flex'
      }}
    >
      {/* Left Sidebar */}
      <div 
        className="flex flex-col h-full"
        style={{ 
          width: "240px", 
          backgroundColor: "#0F172A",
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          className="flex items-center px-6 border-b"
          style={{ 
            height: "80px", 
            borderBottomColor: "rgba(255, 255, 255, 0.1)",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.025em' }}>
            ACCESS CONTROL
          </span>
        </div>
        <nav style={{ flex: 1, padding: "24px", display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div 
            className="flex items-center px-4 hover:bg-white/5 transition-colors cursor-pointer"
            style={{ 
              height: '48px',
              borderRadius: "12px",
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '15px',
              fontWeight: 500,
              display: 'flex'
            }}
          >
            실시간 모니터
          </div>
          <div 
            className="flex items-center px-4 hover:bg-white/5 transition-colors cursor-pointer"
            style={{ 
              height: '48px',
              borderRadius: "12px",
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '15px',
              fontWeight: 500,
              display: 'flex'
            }}
          >
            출입 기록
          </div>
          <div 
            className="flex items-center px-4"
            style={{ 
              height: '48px',
              backgroundColor: "rgba(255, 255, 255, 0.05)", 
              borderRadius: "12px",
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              display: 'flex'
            }}
          >
            사용자 관리
          </div>
          <div 
            className="flex items-center px-4 hover:bg-white/5 transition-colors cursor-pointer"
            style={{ 
              height: '48px',
              borderRadius: "12px",
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '15px',
              fontWeight: 500,
              display: 'flex'
            }}
          >
            기기 관리
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header */}
        <div 
          className="bg-white border-b flex items-center px-8 relative"
          style={{ 
            height: "80px", 
            borderColor: "#E5E7EB",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#374151'
            }}
          >
            <ArrowLeft style={{ width: '24px', height: '24px' }} />
          </button>
          <h1 
            style={{ 
              fontSize: '24px', 
              fontWeight: 800, 
              color: '#111827',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            사용자 등록
          </h1>
        </div>

        {/* Main Content Form */}
        <div className="flex-1 p-12 overflow-y-auto flex flex-col items-center" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
          <div className="w-[600px] flex flex-col" style={{ width: '600px', display: 'flex', flexDirection: 'column' }}>
            {/* Name Input Group */}
            <div className="mb-8" style={{ marginBottom: '32px' }}>
              <label 
                style={{ 
                  display: 'block', 
                  fontSize: '15px', 
                  fontWeight: 700, 
                  color: '#374151', 
                  marginBottom: '10px' 
                }}
              >
                이름 <span style={{ color: '#EF4444' }}>(필수)</span>
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                style={{ 
                  height: '56px',
                  padding: '0 20px',
                  fontSize: '16px',
                  borderColor: '#E5E7EB',
                  color: '#111827',
                  backgroundColor: 'white'
                }}
              />
            </div>

            {/* Department Input Group */}
            <div className="mb-10" style={{ marginBottom: '40px' }}>
              <label 
                style={{ 
                  display: 'block', 
                  fontSize: '15px', 
                  fontWeight: 700, 
                  color: '#374151', 
                  marginBottom: '10px' 
                }}
              >
                소속/부서 <span style={{ color: '#9CA3AF', fontWeight: 500 }}>(선택)</span>
              </label>
              <input
                type="text"
                placeholder="소속 또는 부서를 입력하세요"
                className="w-full border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                style={{ 
                  height: '56px',
                  padding: '0 20px',
                  fontSize: '16px',
                  borderColor: '#E5E7EB',
                  color: '#111827',
                  backgroundColor: 'white'
                }}
              />
            </div>

            {/* Face Registration Placeholder */}
            <div className="mb-12" style={{ marginBottom: '48px' }}>
              <label 
                style={{ 
                  display: 'block', 
                  fontSize: '15px', 
                  fontWeight: 700, 
                  color: '#374151', 
                  marginBottom: '10px' 
                }}
              >
                안면 데이터 등록
              </label>
              <div
                className="w-full border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all group"
                style={{ 
                  height: '320px',
                  borderColor: "#E5E7EB",
                  backgroundColor: 'white'
                }}
              >
                <div 
                  className="mb-4 flex items-center justify-center rounded-3xl group-hover:scale-110 transition-transform"
                  style={{ 
                    width: '72px', 
                    height: '72px', 
                    backgroundColor: '#F3F4F6',
                    color: '#9CA3AF'
                  }}
                >
                  <Camera style={{ width: '32px', height: '32px' }} />
                </div>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#4B5563', marginBottom: '4px' }}>
                  촬영 또는 파일 업로드
                </p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#9CA3AF' }}>
                  정면 얼굴이 잘 보이도록 촬영해 주세요
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                className="rounded-2xl font-bold transition-all active:scale-95 border hover:bg-gray-50"
                style={{ 
                  width: '180px',
                  height: '56px',
                  backgroundColor: "white",
                  borderColor: '#E5E7EB',
                  color: "#374151",
                  fontSize: '16px'
                }}
              >
                취소
              </button>
              <button
                disabled
                className="rounded-2xl font-bold text-white transition-all"
                style={{ 
                  width: '180px',
                  height: '56px',
                  backgroundColor: "var(--primary)",
                  fontSize: '16px',
                  opacity: 0.4,
                  cursor: 'not-allowed'
                }}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
