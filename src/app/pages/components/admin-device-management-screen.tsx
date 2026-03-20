import { ChevronDown } from "lucide-react";

export function AdminDeviceManagementScreen() {
  const devices = [
    {
      id: "DEVICE-001",
      branch: "본사 1층",
      status: "online",
      statusText: "온라인",
      lastConnection: "2024-03-20 14:32:15",
    },
    {
      id: "DEVICE-002",
      branch: "본사 2층",
      status: "online",
      statusText: "온라인",
      lastConnection: "2024-03-20 14:31:08",
    },
    {
      id: "DEVICE-003",
      branch: "강남지점",
      status: "offline",
      statusText: "오프라인",
      lastConnection: "2024-03-20 09:15:42",
    },
    {
      id: "DEVICE-004",
      branch: "서초지점",
      status: "error",
      statusText: "오류",
      lastConnection: "2024-03-20 13:45:21",
    },
    {
      id: "DEVICE-005",
      branch: "판교지점",
      status: "online",
      statusText: "온라인",
      lastConnection: "2024-03-20 14:30:55",
    },
    {
      id: "DEVICE-006",
      branch: "광화문지점",
      status: "offline",
      statusText: "오프라인",
      lastConnection: "2024-03-19 18:22:33",
    },
    {
      id: "DEVICE-007",
      branch: "역삼지점",
      status: "online",
      statusText: "온라인",
      lastConnection: "2024-03-20 14:29:17",
    },
    {
      id: "DEVICE-008",
      branch: "종로지점",
      status: "error",
      statusText: "오류",
      lastConnection: "2024-03-20 11:05:48",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "online":
        return {
          backgroundColor: "var(--color-bg-result-allow)",
          color: "var(--color-status-allow-text)",
        };
      case "offline":
        return {
          backgroundColor: "var(--color-bg-result-deny)",
          color: "var(--color-status-deny-text)",
        };
      case "error":
        return {
          backgroundColor: "#FEF3E2",
          color: "#D97706",
        };
      default:
        return {};
    }
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
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">기기 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center px-6">
          <h1 className="text-2xl font-bold">기기 관리</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
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
              <button className="px-4 py-2 text-sm font-medium text-white rounded-lg" style={{ backgroundColor: "var(--color-action-primary)" }}>
                전체
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                온라인
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                오프라인
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                오류
              </button>
            </div>
          </div>

          {/* Device Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
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
                    상태
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    마지막 접속 시각
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
                    } hover:bg-gray-50 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {device.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {device.branch}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
                        style={getStatusStyle(device.status)}
                      >
                        {device.statusText}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {device.lastConnection}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
                        style={{
                          backgroundColor: "var(--color-action-primary)",
                        }}
                      >
                        원격 리셋
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
