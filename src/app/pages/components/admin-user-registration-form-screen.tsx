import { ArrowLeft, Camera, Check, AlertTriangle } from "lucide-react";

interface AdminUserRegistrationFormScreenProps {
  hasFaceImage?: boolean;
  isEditMode?: boolean;
  hasFaceError?: boolean;
}

export function AdminUserRegistrationFormScreen({ hasFaceImage = false, isEditMode = false, hasFaceError = false }: AdminUserRegistrationFormScreenProps) {
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
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">사용자 관리</span>
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            기기 관리
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center px-6 relative">
          <button className="absolute left-6 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">
            {isEditMode ? "사용자 수정" : "사용자 등록"}
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col">
          <div className="max-w-2xl mx-auto w-full">
            {/* Info Banner */}
            {isEditMode && (
              <div
                className="mb-6 px-4 py-3 rounded-lg"
                style={{
                  backgroundColor: "var(--color-status-info-bg)",
                }}
              >
                <p
                  className="text-[14pt]"
                  style={{ color: "var(--color-status-info-text)" }}
                >
                  기존 정보를 수정합니다
                </p>
              </div>
            )}

            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 (필수)
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                defaultValue={hasFaceImage ? "홍길동" : ""}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Department Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                소속/부서 (선택)
              </label>
              <input
                type="text"
                placeholder="소속 또는 부서를 입력하세요"
                defaultValue={isEditMode ? "안전관리팀" : ""}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Face Registration Area */}
            <div className="mb-8 flex flex-col items-center">
              {hasFaceError ? (
                <>
                  <div
                    className="w-[400px] h-[300px] border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors mb-3"
                    style={{ borderColor: "var(--color-action-danger)" }}
                  >
                    <Camera className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-[16pt] text-gray-500">
                      촬영 또는 파일 업로드
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle
                      className="w-5 h-5"
                      style={{ color: "var(--color-action-danger)" }}
                    />
                    <p
                      className="text-[14pt]"
                      style={{ color: "var(--color-action-danger)" }}
                    >
                      얼굴이 감지되지 않았습니다. 다시 등록해 주세요
                    </p>
                  </div>
                </>
              ) : hasFaceImage ? (
                <>
                  <div className="relative w-[400px] h-[300px] mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                      alt="Captured face"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Checkmark Badge */}
                    <div
                      className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--color-bg-result-allow)",
                      }}
                    >
                      <Check
                        className="w-6 h-6"
                        style={{ color: "var(--color-status-allow-text)" }}
                      />
                    </div>
                  </div>
                  <button
                    className="text-sm font-medium underline"
                    style={{ color: "var(--color-action-primary)" }}
                  >
                    재등록
                  </button>
                </>
              ) : (
                <div
                  className="w-[400px] h-[300px] border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  style={{ borderColor: "var(--color-border-default)" }}
                >
                  <Camera className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-[16pt] text-gray-500">
                    촬영 또는 파일 업로드
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between">
              <button
                className="px-8 py-3 rounded-lg font-medium text-gray-700 hover:brightness-95"
                style={{ backgroundColor: "var(--color-action-secondary)" }}
              >
                취소
              </button>
              <button
                disabled={!hasFaceImage}
                className="px-8 py-3 rounded-lg font-medium text-white"
                style={{
                  backgroundColor: "var(--color-action-primary)",
                  opacity: hasFaceImage ? 1 : 0.4,
                  cursor: hasFaceImage ? "pointer" : "not-allowed",
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
