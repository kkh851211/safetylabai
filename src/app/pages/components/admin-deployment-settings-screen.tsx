import { ArrowLeft, ChevronDown, Lock } from "lucide-react";
import { useState } from "react";

interface AdminDeploymentSettingsScreenProps {
  headOfficeSyncStatus?: "complete" | "waiting" | "failed";
  branchOfficeSyncStatus?: "complete" | "waiting" | "failed";
  headOfficeLocked?: boolean;
}

export function AdminDeploymentSettingsScreen({
  headOfficeSyncStatus = "complete",
  branchOfficeSyncStatus = "waiting",
  headOfficeLocked = false,
}: AdminDeploymentSettingsScreenProps) {
  const [headOfficeContent, setHeadOfficeContent] = useState("홍보영상_최종.mp4");
  const [headOfficeTimeout, setHeadOfficeTimeout] = useState("60");
  const [branchOfficeContent, setBranchOfficeContent] = useState("신년인사_2026.mp4");
  const [branchOfficeTimeout, setBranchOfficeTimeout] = useState("");

  const getSyncStatusBadge = (status: "complete" | "waiting" | "failed") => {
    const configs = {
      complete: {
        text: "동기화 완료",
        color: "var(--color-status-allow-text)",
        bgColor: "rgba(34, 197, 94, 0.1)",
      },
      waiting: {
        text: "동기화 대기",
        color: "var(--color-action-warning)",
        bgColor: "rgba(245, 158, 11, 0.1)",
      },
      failed: {
        text: "동기화 실패",
        color: "var(--color-action-danger)",
        bgColor: "rgba(239, 68, 68, 0.1)",
      },
    };

    const config = configs[status];

    return (
      <span
        className="px-3 py-1 rounded-full text-sm font-medium"
        style={{
          color: config.color,
          backgroundColor: config.bgColor,
        }}
      >
        {config.text}
      </span>
    );
  };

  return (
    <div className="relative w-full h-full bg-gray-50 overflow-hidden flex">
      {/* Left Sidebar */}
      <div className="w-[220px] h-full bg-[#1e293b] flex flex-col">
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
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            기기 관리
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            검교정 관리
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">콘텐츠 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-center px-6 relative">
          {/* Back Button - Positioned Absolutely Left */}
          <button
            className="absolute left-6 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all"
            style={{
              color: "var(--color-action-secondary)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            뒤로
          </button>

          {/* Centered Title */}
          <h1 className="text-2xl font-bold">배포 설정</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1: Head Office Common Content */}
            <div
              className="rounded-lg p-6 shadow-sm border border-gray-200"
              style={{
                backgroundColor: headOfficeLocked
                  ? "var(--color-bg-default)"
                  : "white",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold">본점 공통 콘텐츠</h2>
                {headOfficeLocked && (
                  <Lock className="w-4 h-4 text-gray-400" />
                )}
              </div>

              <div className="space-y-4">
                {/* Content Dropdown or Static Text */}
                <div className="flex items-center gap-4">
                  <label className="w-32 text-sm font-medium text-gray-700">
                    콘텐츠
                  </label>
                  <div className="flex-1 flex items-center gap-4">
                    {headOfficeLocked ? (
                      <div className="flex-1">
                        <span
                          className="text-sm"
                          style={{
                            color: "var(--color-text-disabled)",
                          }}
                        >
                          {headOfficeContent}
                        </span>
                      </div>
                    ) : (
                      <div className="relative flex-1">
                        <select
                          value={headOfficeContent}
                          onChange={(e) => setHeadOfficeContent(e.target.value)}
                          className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer"
                          style={{
                            borderColor: "var(--color-border-default)",
                          }}
                        >
                          <option value="홍보영상_최종.mp4">
                            홍보영상_최종.mp4
                          </option>
                          <option value="신년인사_2026.mp4">
                            신년인사_2026.mp4
                          </option>
                          <option value="안전수칙_영상.mp4">
                            안전수칙_영상.mp4
                          </option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    )}
                    {getSyncStatusBadge(headOfficeSyncStatus)}
                  </div>
                </div>

                {/* Timeout Input or Static Text */}
                <div className="flex items-center gap-4">
                  <label className="w-32 text-sm font-medium text-gray-700">
                    노출 시간
                  </label>
                  <div className="flex-1 flex items-center gap-4">
                    {headOfficeLocked ? (
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm"
                          style={{
                            color: "var(--color-text-disabled)",
                          }}
                        >
                          {headOfficeTimeout}초
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="relative">
                          <input
                            type="number"
                            value={headOfficeTimeout}
                            onChange={(e) => setHeadOfficeTimeout(e.target.value)}
                            min="10"
                            max="300"
                            className="w-40 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                            style={{
                              borderColor: "var(--color-border-default)",
                            }}
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
                            초
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">10~300초</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Branch Office Own Content */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-6">지점 자체 콘텐츠</h2>

              <div className="space-y-4">
                {/* Content Dropdown */}
                <div className="flex items-center gap-4">
                  <label className="w-32 text-sm font-medium text-gray-700">
                    콘텐츠
                  </label>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="relative flex-1">
                      <select
                        value={branchOfficeContent}
                        onChange={(e) => setBranchOfficeContent(e.target.value)}
                        className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer"
                        style={{
                          borderColor: "var(--color-border-default)",
                        }}
                      >
                        <option value="신년인사_2026.mp4">
                          신년인사_2026.mp4
                        </option>
                        <option value="홍보영상_최종.mp4">
                          홍보영상_최종.mp4
                        </option>
                        <option value="안전수칙_영상.mp4">
                          안전수칙_영상.mp4
                        </option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {getSyncStatusBadge(branchOfficeSyncStatus)}
                  </div>
                </div>

                {/* Timeout Override Input */}
                <div className="flex items-center gap-4">
                  <label className="w-32 text-sm font-medium text-gray-700">
                    노출 시간
                  </label>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="relative">
                      <input
                        type="number"
                        value={branchOfficeTimeout}
                        onChange={(e) => setBranchOfficeTimeout(e.target.value)}
                        placeholder="60"
                        min="10"
                        max="300"
                        className="w-40 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                        style={{
                          borderColor: "var(--color-border-default)",
                        }}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
                        초
                      </span>
                    </div>
                    <span className="text-gray-400" style={{ fontSize: "14pt" }}>
                      본점 기본값: 60초
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="flex justify-end pt-4">
              <button
                className="px-6 py-3 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
                style={{
                  backgroundColor: "var(--color-action-primary)",
                }}
              >
                저장 및 동기화
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
