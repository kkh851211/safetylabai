import { ArrowLeft, AlertTriangle, Loader2 } from "lucide-react";

interface AdminDeviceResetConfirmScreenProps {
  showOverlay?: boolean;
  isLoading?: boolean;
}

export function AdminDeviceResetConfirmScreen({ 
  showOverlay = false,
  isLoading = false 
}: AdminDeviceResetConfirmScreenProps) {
  return (
    <div className="relative w-[1440px] h-[900px] bg-gray-50 overflow-hidden flex">
      {/* Left Sidebar */}
      <div className="w-[220px] h-[900px] bg-[#1e293b] flex flex-col">
        <div className="h-[60px] flex items-center justify-center border-b border-white/10">
          <span className="text-white text-lg font-bold">ACCESS CONTROL</span>
        </div>
        <nav className="flex-1 p-4">
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            실시간 모니터
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            출입 기록
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            사용자 관리
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">기기 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center px-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">뒤로</span>
          </button>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
            원격 리셋
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl">
            {/* Device Info Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-gray-700 w-32">
                    기기 ID
                  </span>
                  <span className="text-sm text-gray-900">KSK-001</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-gray-700 w-32">
                    지점명
                  </span>
                  <span className="text-sm text-gray-900">가온병원 1층</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-gray-700 w-32">
                    현재 상태
                  </span>
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "var(--color-bg-result-allow)",
                      color: "var(--color-status-allow-text)",
                    }}
                  >
                    온라인
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Section: Confirmation Text or Loading Indicator */}
            {isLoading ? (
              <div className="flex flex-col items-center mb-12">
                <Loader2
                  className="animate-spin mb-4"
                  style={{
                    width: "48px",
                    height: "48px",
                    color: "var(--color-action-primary)",
                  }}
                />
                <p className="text-center text-lg text-gray-900">
                  리셋 명령을 전송 중입니다...
                </p>
              </div>
            ) : (
              <p className="text-center text-lg text-gray-900 mb-12">
                해당 기기를 원격 리셋하시겠습니까?
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button
                className="px-8 py-3 text-base font-medium rounded-lg transition-colors"
                style={{
                  backgroundColor: "var(--color-action-secondary)",
                  color: "white",
                }}
              >
                취소
              </button>
              <button
                disabled={isLoading}
                className={`px-8 py-3 text-base font-medium text-white rounded-lg transition-all ${
                  isLoading ? "cursor-not-allowed" : "hover:brightness-95"
                }`}
                style={{
                  backgroundColor: "var(--color-action-danger)",
                  opacity: isLoading ? 0.4 : 1,
                }}
              >
                리셋 실행
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showOverlay && !isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "var(--color-bg-overlay)" }}
        >
          {/* Modal */}
          <div
            className="bg-white flex flex-col items-center justify-center p-8"
            style={{
              width: "560px",
              height: "260px",
              borderRadius: "24px",
            }}
          >
            {/* Warning Icon */}
            <div
              className="rounded-full flex items-center justify-center mb-4"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "var(--color-action-warning)",
              }}
            >
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              정말 리셋하시겠습니까?
            </h2>

            {/* Subtitle */}
            <p className="text-base text-gray-500 mb-8">
              리셋 후 키오스크가 재시작됩니다
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                className="text-base font-medium text-white rounded-lg transition-colors"
                style={{
                  width: "240px",
                  height: "60px",
                  backgroundColor: "var(--color-action-secondary)",
                }}
              >
                취소
              </button>
              <button
                className="text-base font-medium text-white rounded-lg hover:brightness-95 transition-all"
                style={{
                  width: "240px",
                  height: "60px",
                  backgroundColor: "var(--color-action-danger)",
                }}
              >
                리셋 실행
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
