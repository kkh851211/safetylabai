import { useState } from "react";
import { AlertCircle } from "lucide-react";

interface AdminAccountManagementScreenErrorProps {
  username?: string;
  name?: string;
  role?: string;
  branch?: string;
}

export function AdminAccountManagementScreenError({
  username = "admin01",
  name = "홍길동",
  role = "본점 관리자",
  branch = "가온병원",
}: AdminAccountManagementScreenErrorProps) {
  const [editableName, setEditableName] = useState(name);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("password123");
  const [confirmPassword, setConfirmPassword] = useState("password12");

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
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            콘텐츠 관리
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">계정 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center px-8">
          <h1 className="text-2xl font-bold">계정 관리</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Account Info Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-6">계정 정보</h2>

              <div className="space-y-6">
                {/* Username (Read-only) */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium text-gray-700">
                    아이디
                  </label>
                  <div className="flex-1">
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--color-text-disabled)",
                      }}
                    >
                      {username}
                    </span>
                  </div>
                </div>

                {/* Name (Editable) */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium text-gray-700">
                    이름
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={editableName}
                      onChange={(e) => setEditableName(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--color-border-default)",
                      }}
                    />
                  </div>
                </div>

                {/* Role (Read-only) */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium text-gray-700">
                    권한 레벨
                  </label>
                  <div className="flex-1">
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--color-text-disabled)",
                      }}
                    >
                      {role}
                    </span>
                  </div>
                </div>

                {/* Branch (Read-only) */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium text-gray-700">
                    담당 지점
                  </label>
                  <div className="flex-1">
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--color-text-disabled)",
                      }}
                    >
                      {branch}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{
                backgroundColor: "var(--color-border-default)",
              }}
            />

            {/* Password Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-6">비밀번호 변경</h2>

              <div className="space-y-6">
                {/* Current Password */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium text-gray-700">
                    현재 비밀번호
                  </label>
                  <div className="flex-1">
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="현재 비밀번호를 입력하세요"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--color-border-default)",
                      }}
                    />
                  </div>
                </div>

                {/* New Password */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium text-gray-700">
                    새 비밀번호
                  </label>
                  <div className="flex-1">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="새 비밀번호를 입력하세요"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--color-border-default)",
                      }}
                    />
                  </div>
                </div>

                {/* Confirm New Password - ERROR STATE */}
                <div className="flex items-start">
                  <label className="w-40 text-sm font-medium text-gray-700 pt-3">
                    새 비밀번호 확인
                  </label>
                  <div className="flex-1">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="새 비밀번호를 다시 입력하세요"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--color-action-danger)",
                      }}
                    />
                    {/* Error Message */}
                    <div className="flex items-center gap-2 mt-2">
                      <AlertCircle
                        className="w-5 h-5"
                        style={{
                          color: "var(--color-action-danger)",
                        }}
                      />
                      <span
                        className="text-[14pt]"
                        style={{
                          color: "var(--color-action-danger)",
                        }}
                      >
                        비밀번호가 일치하지 않습니다
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button - DISABLED STATE */}
            <div className="flex justify-end pt-4">
              <button
                disabled
                className="px-6 py-3 text-sm font-medium text-white rounded-lg cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-action-primary)",
                  opacity: 0.4,
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
