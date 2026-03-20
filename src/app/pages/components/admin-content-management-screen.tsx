import { GripVertical, Trash2, Upload, Settings } from "lucide-react";

interface Content {
  id: number;
  filename: string;
  validPeriod: string;
  registeredDate: string;
  isExpired?: boolean;
}

interface AdminContentManagementScreenProps {
  showExpired?: boolean;
}

export function AdminContentManagementScreen({
  showExpired = false,
}: AdminContentManagementScreenProps) {
  const contents: Content[] = [
    {
      id: 1,
      filename: "welcome_video_2024.mp4",
      validPeriod: "2024-03-01 ~ 2024-12-31",
      registeredDate: "2024-02-15",
    },
    {
      id: 2,
      filename: "safety_guidelines.mp4",
      validPeriod: "2024-01-01 ~ 2024-12-31",
      registeredDate: "2024-01-10",
    },
    {
      id: 3,
      filename: "company_intro.mp4",
      validPeriod: showExpired ? "만료" : "2024-03-01 ~ 2024-06-30",
      registeredDate: "2024-02-28",
      isExpired: showExpired,
    },
    {
      id: 4,
      filename: "employee_onboarding.mp4",
      validPeriod: "2024-01-15 ~ 2024-12-31",
      registeredDate: "2024-01-12",
    },
    {
      id: 5,
      filename: "health_check_info.mp4",
      validPeriod: "2024-02-01 ~ 2024-08-31",
      registeredDate: "2024-01-28",
    },
    {
      id: 6,
      filename: "visitor_instructions.mp4",
      validPeriod: "2024-03-10 ~ 2024-12-31",
      registeredDate: "2024-03-05",
    },
  ];

  const storageUsed = 1.2;
  const storageTotal = 2.0;
  const storagePercentage = (storageUsed / storageTotal) * 100;

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
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold">콘텐츠 관리</h1>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
              style={{
                backgroundColor: "var(--color-action-primary)",
              }}
            >
              <Upload className="w-4 h-4" />
              영상 업로드
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
              style={{
                backgroundColor: "var(--color-action-secondary)",
              }}
            >
              <Settings className="w-4 h-4" />
              배포 설정
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col">
          {/* Content Table */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 w-12"></th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      파일명
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      유효 기간
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      등록일
                    </th>
                    <th className="px-6 py-3 w-24 text-center text-sm font-semibold text-gray-700">
                      작업
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contents.map((content, index) => (
                    <tr
                      key={content.id}
                      className={`transition-colors ${
                        index !== contents.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                      style={{
                        backgroundColor: content.isExpired ? "#f5f5f5" : "white",
                      }}
                    >
                      <td className="px-4 py-4">
                        {content.isExpired ? (
                          <div className="w-5 h-5 opacity-30">
                            <GripVertical className="w-5 h-5 text-gray-400" />
                          </div>
                        ) : (
                          <button className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600">
                            <GripVertical className="w-5 h-5" />
                          </button>
                        )}
                      </td>
                      <td
                        className="px-6 py-4 text-sm"
                        style={{
                          color: content.isExpired
                            ? "var(--color-text-disabled)"
                            : "#111827",
                        }}
                      >
                        {content.filename}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {content.isExpired ? (
                          <span
                            style={{
                              color: "var(--color-action-danger)",
                              fontWeight: "500",
                            }}
                          >
                            {content.validPeriod}
                          </span>
                        ) : (
                          <span style={{ color: "#111827" }}>
                            {content.validPeriod}
                          </span>
                        )}
                      </td>
                      <td
                        className="px-6 py-4 text-sm"
                        style={{
                          color: content.isExpired
                            ? "var(--color-text-disabled)"
                            : "#111827",
                        }}
                      >
                        {content.registeredDate}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-red-50 transition-colors"
                          style={{
                            color: "var(--color-action-danger)",
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            {/* Storage Usage Bar */}
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <span className="text-sm text-gray-600 whitespace-nowrap">
                저장 용량
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">
                    {storageUsed}GB / {storageTotal}GB
                  </span>
                  <span className="text-xs text-gray-500">
                    {storagePercentage.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${storagePercentage}%`,
                      backgroundColor: "var(--color-action-primary)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Save Order Button */}
            <button
              className="px-6 py-3 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
              style={{
                backgroundColor: "var(--color-action-primary)",
              }}
            >
              순서 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
