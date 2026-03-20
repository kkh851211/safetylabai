import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AdminAccount {
  id: string;
  username: string;
  name: string;
  permissionLevel: string;
  headquarters: string;
  branch: string;
  isOwnAccount: boolean;
}

export function AdminPermissionManagementAddModal() {
  const [accounts] = useState<AdminAccount[]>([
    {
      id: "1",
      username: "admin01",
      name: "홍길동",
      permissionLevel: "본점 관리자",
      headquarters: "가온병원",
      branch: "가온병원",
      isOwnAccount: true,
    },
    {
      id: "2",
      username: "admin02",
      name: "김철수",
      permissionLevel: "지점 관리자",
      headquarters: "가온병원",
      branch: "강남점",
      isOwnAccount: false,
    },
    {
      id: "3",
      username: "admin03",
      name: "이영희",
      permissionLevel: "지점 관리자",
      headquarters: "가온병원",
      branch: "서초점",
      isOwnAccount: false,
    },
    {
      id: "4",
      username: "sysadmin",
      name: "박관리",
      permissionLevel: "시스템 관리자",
      headquarters: "전체",
      branch: "전체",
      isOwnAccount: false,
    },
  ]);

  // Modal form state
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPermissionLevel, setNewPermissionLevel] = useState("본점 관리자");
  const [newHeadquarters, setNewHeadquarters] = useState("가온병원");
  const [newBranch, setNewBranch] = useState("가온병원");

  // Check if required fields are filled
  const isFormValid =
    newUsername.trim() !== "" &&
    newName.trim() !== "" &&
    newPassword.trim() !== "";

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
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            계정 관리
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">권한 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold">권한 관리</h1>
          <button
            className="px-6 py-3 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
            style={{
              backgroundColor: "var(--color-action-primary)",
            }}
          >
            관리자 추가
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[150px]">
                    아이디
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[120px]">
                    이름
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[200px]">
                    권한 레벨
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[180px]">
                    소속 본점
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[180px]">
                    담당 지점
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[120px]">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {accounts.map((account) => (
                  <tr
                    key={account.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Username */}
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {account.username}
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {account.name}
                    </td>

                    {/* Permission Level Dropdown */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select
                          value={account.permissionLevel}
                          disabled={account.isOwnAccount}
                          className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white text-sm"
                          style={{
                            borderColor: "var(--color-border-default)",
                            opacity: account.isOwnAccount ? 0.4 : 1,
                            color: account.isOwnAccount
                              ? "var(--color-text-disabled)"
                              : "inherit",
                          }}
                        >
                          <option value="시스템 관리자">시스템 관리자</option>
                          <option value="본점 관리자">본점 관리자</option>
                          <option value="지점 관리자">지점 관리자</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                          style={{
                            opacity: account.isOwnAccount ? 0.4 : 1,
                          }}
                        />
                      </div>
                    </td>

                    {/* Headquarters Dropdown */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select
                          value={account.headquarters}
                          className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white text-sm"
                          style={{
                            borderColor: "var(--color-border-default)",
                          }}
                        >
                          <option value="전체">전체</option>
                          <option value="가온병원">가온병원</option>
                          <option value="서울병원">서울병원</option>
                          <option value="부산병원">부산병원</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>

                    {/* Branch Dropdown */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select
                          value={account.branch}
                          className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white text-sm"
                          style={{
                            borderColor: "var(--color-border-default)",
                          }}
                        >
                          <option value="전체">전체</option>
                          <option value="가온병원">가온병원</option>
                          <option value="강남점">강남점</option>
                          <option value="서초점">서초점</option>
                          <option value="송파점">송파점</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>

                    {/* Save Button */}
                    <td className="px-6 py-4">
                      <button
                        className="px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all w-full"
                        style={{
                          backgroundColor: "var(--color-action-primary)",
                        }}
                      >
                        저장
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        style={{
          backgroundColor: "var(--color-bg-overlay)",
        }}
      >
        {/* Modal */}
        <div
          className="bg-white shadow-2xl flex flex-col w-full max-w-[640px] max-h-[90%]"
          style={{
            borderRadius: "24px",
          }}
        >
          {/* Modal Header */}
          <div className="px-8 py-6 border-b border-gray-200 shrink-0">
            <h2 className="text-2xl font-bold">관리자 추가</h2>
          </div>

          {/* Modal Content */}
          <div className="px-8 py-6 space-y-5 overflow-y-auto">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                아이디
              </label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="아이디를 입력하세요"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              />
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              />
            </div>

            {/* Temporary Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                임시 비밀번호
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="임시 비밀번호를 입력하세요"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              />
            </div>

            {/* Permission Level Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                권한 레벨
              </label>
              <div className="relative">
                <select
                  value={newPermissionLevel}
                  onChange={(e) => setNewPermissionLevel(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white"
                  style={{
                    borderColor: "var(--color-border-default)",
                  }}
                >
                  <option value="시스템 관리자">시스템 관리자</option>
                  <option value="본점 관리자">본점 관리자</option>
                  <option value="지점 관리자">지점 관리자</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Headquarters Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                소속 본점
              </label>
              <div className="relative">
                <select
                  value={newHeadquarters}
                  onChange={(e) => setNewHeadquarters(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white"
                  style={{
                    borderColor: "var(--color-border-default)",
                  }}
                >
                  <option value="전체">전체</option>
                  <option value="가온병원">가온병원</option>
                  <option value="서울병원">서울병원</option>
                  <option value="부산병원">부산병원</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Branch Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                담당 지점
              </label>
              <div className="relative">
                <select
                  value={newBranch}
                  onChange={(e) => setNewBranch(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white"
                  style={{
                    borderColor: "var(--color-border-default)",
                  }}
                >
                  <option value="전체">전체</option>
                  <option value="가온병원">가온병원</option>
                  <option value="강남점">강남점</option>
                  <option value="서초점">서초점</option>
                  <option value="송파점">송파점</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-6 flex justify-between items-center border-t border-gray-200 shrink-0">
            <button
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition-all"
              style={{
                borderColor: "var(--color-border-default)",
              }}
            >
              취소
            </button>
            <button
              disabled={!isFormValid}
              className="px-6 py-3 text-sm font-medium text-white rounded-lg transition-all"
              style={{
                backgroundColor: "var(--color-action-primary)",
                opacity: isFormValid ? 1 : 0.4,
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
