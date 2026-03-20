import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface BranchAccount {
  id: string;
  username: string;
  name: string;
  branch: string;
  isOwnAccount: boolean;
}

export function AdminPermissionManagementBranchScreen() {
  const [accounts, setAccounts] = useState<BranchAccount[]>([
    {
      id: "1",
      username: "admin01",
      name: "홍길동",
      branch: "강남점",
      isOwnAccount: true,
    },
    {
      id: "2",
      username: "admin02",
      name: "김철수",
      branch: "강남점",
      isOwnAccount: false,
    },
    {
      id: "3",
      username: "admin03",
      name: "이영희",
      branch: "서초점",
      isOwnAccount: false,
    },
    {
      id: "4",
      username: "admin04",
      name: "박민수",
      branch: "송파점",
      isOwnAccount: false,
    },
  ]);

  const handleBranchChange = (id: string, value: string) => {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, branch: value } : account
      )
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
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[200px]">
                    아이디
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[200px]">
                    이름
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[250px]">
                    권한 레벨
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[250px]">
                    담당 지점
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-[150px]">
                    
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

                    {/* Permission Level - Static Text */}
                    <td className="px-6 py-4">
                      <span
                        className="text-sm"
                        style={{
                          color: "var(--color-text-disabled)",
                        }}
                      >
                        지점 관리자
                      </span>
                    </td>

                    {/* Branch Dropdown - Sub-branches only */}
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select
                          value={account.branch}
                          onChange={(e) =>
                            handleBranchChange(account.id, e.target.value)
                          }
                          className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white text-sm"
                          style={{
                            borderColor: "var(--color-border-default)",
                          }}
                        >
                          <option value="강남점">강남점</option>
                          <option value="서초점">서초점</option>
                          <option value="송파점">송파점</option>
                          <option value="분당점">분당점</option>
                          <option value="판교점">판교점</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>

                    {/* Save Button */}
                    <td className="px-6 py-4">
                      <button
                        disabled={account.isOwnAccount}
                        className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all w-full"
                        style={{
                          backgroundColor: "var(--color-action-primary)",
                          opacity: account.isOwnAccount ? 0.4 : 1,
                          cursor: account.isOwnAccount
                            ? "not-allowed"
                            : "pointer",
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
    </div>
  );
}
