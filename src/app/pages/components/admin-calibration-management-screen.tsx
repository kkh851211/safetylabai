import { ChevronDown, Plus, Download } from "lucide-react";

export function AdminCalibrationManagementScreen() {
  const devices = [
    {
      id: "BREATH-001",
      branch: "본사 1층",
      expiryDate: "2024-09-15",
      remainingDays: "178일",
      cycle: "1년",
      lastCheckResult: "정상",
      status: "normal",
    },
    {
      id: "BREATH-002",
      branch: "본사 2층",
      expiryDate: "2024-08-20",
      remainingDays: "152일",
      cycle: "1년",
      lastCheckResult: "정상",
      status: "normal",
    },
    {
      id: "BREATH-003",
      branch: "강남지점",
      expiryDate: "2024-04-05",
      remainingDays: "D-15",
      cycle: "1년",
      lastCheckResult: "정상",
      status: "expiring-soon",
    },
    {
      id: "BREATH-004",
      branch: "서초지점",
      expiryDate: "2024-03-18",
      remainingDays: "만료",
      cycle: "1년",
      lastCheckResult: "정상",
      status: "expired",
    },
    {
      id: "BREATH-005",
      branch: "판교지점",
      expiryDate: "2024-07-30",
      remainingDays: "131일",
      cycle: "1년",
      lastCheckResult: "불량",
      status: "check-required",
    },
    {
      id: "BREATH-006",
      branch: "광화문지점",
      expiryDate: "2024-10-12",
      remainingDays: "205일",
      cycle: "1년",
      lastCheckResult: "정상",
      status: "normal",
    },
    {
      id: "BREATH-007",
      branch: "역삼지점",
      expiryDate: "2024-04-02",
      remainingDays: "D-12",
      cycle: "1년",
      lastCheckResult: "정상",
      status: "expiring-soon",
    },
  ];

  const getRowStyle = (status: string) => {
    switch (status) {
      case "expiring-soon":
        return {
          backgroundColor: "#FEF3E2",
        };
      case "expired":
      case "check-required":
        return {
          backgroundColor: "#FEE2E2",
        };
      default:
        return {
          backgroundColor: "white",
        };
    }
  };

  const getRemainingDaysStyle = (status: string) => {
    if (status === "expired") {
      return {
        color: "var(--color-status-deny-text)",
        fontWeight: "600",
      };
    }
    if (status === "expiring-soon") {
      return {
        color: "var(--color-action-warning)",
        fontWeight: "600",
      };
    }
    return {};
  };

  const getLastCheckResultBadge = (status: string, result: string) => {
    if (status === "check-required") {
      return (
        <span
          className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
          style={{
            backgroundColor: "var(--color-bg-result-deny)",
            color: "var(--color-status-deny-text)",
          }}
        >
          점검필요
        </span>
      );
    }
    return <span className="text-sm text-gray-900">{result}</span>;
  };

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
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">검교정 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold">음주측정기 검교정 관리</h1>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
            style={{
              backgroundColor: "var(--color-action-primary)",
            }}
          >
            <Plus className="w-4 h-4" />
            기기 등록
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col">
          {/* Filter Row */}
          <div className="flex items-center justify-between mb-6">
            {/* Branch Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">전체 지점</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Status Tabs */}
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-2 text-sm font-medium text-white rounded-lg"
                style={{ backgroundColor: "var(--color-action-primary)" }}
              >
                전체
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                정상
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                만료임박
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                만료
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                점검필요
              </button>
            </div>
          </div>

          {/* Device Table */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
            <div className="overflow-x-auto flex-1">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      기기 ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      지점명
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      검교정 만료일
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      잔여일수
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      검교정 주기
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      최근 점검 결과
                    </th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                      작업
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device, index) => (
                    <tr
                      key={device.id}
                      className={`${
                        index !== devices.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      } transition-colors`}
                      style={getRowStyle(device.status)}
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {device.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {device.branch}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {device.expiryDate}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="text-sm"
                          style={getRemainingDaysStyle(device.status)}
                        >
                          {device.remainingDays}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {device.cycle}
                      </td>
                      <td className="px-6 py-4">
                        {getLastCheckResultBadge(
                          device.status,
                          device.lastCheckResult
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          className="px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
                          style={{
                            backgroundColor: "var(--color-action-primary)",
                          }}
                        >
                          점검 입력
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-end mt-4">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
              style={{
                backgroundColor: "var(--color-action-secondary)",
              }}
            >
              <Download className="w-4 h-4" />
              CSV 내보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
