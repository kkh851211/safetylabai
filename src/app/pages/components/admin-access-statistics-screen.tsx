import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AdminAccessStatisticsScreenProps {
  selectedPeriod?: "daily" | "weekly" | "monthly";
}

export function AdminAccessStatisticsScreen({
  selectedPeriod = "daily",
}: AdminAccessStatisticsScreenProps) {
  const [period, setPeriod] = useState(selectedPeriod);
  const [selectedBranch, setSelectedBranch] = useState("전체 지점");

  // Mock data for daily access
  const dailyData = [
    { date: "03/14", total: 124 },
    { date: "03/15", total: 156 },
    { date: "03/16", total: 98 },
    { date: "03/17", total: 187 },
    { date: "03/18", total: 142 },
    { date: "03/19", total: 165 },
    { date: "03/20", total: 201 },
  ];

  // Mock data for branch comparison table
  const branchData = [
    { branch: "강남점", total: 1245, allowed: 1178, denied: 67 },
    { branch: "서초점", total: 987, allowed: 945, denied: 42 },
    { branch: "송파점", total: 856, allowed: 824, denied: 32 },
    { branch: "본점", total: 1567, allowed: 1489, denied: 78 },
  ];

  // Calculate summary stats
  const totalAccess = branchData.reduce((sum, b) => sum + b.total, 0);
  const totalAllowed = branchData.reduce((sum, b) => sum + b.allowed, 0);
  const totalDenied = branchData.reduce((sum, b) => sum + b.denied, 0);

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
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">출입 기록</span>
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
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
          {/* Title Left */}
          <h1 className="text-2xl font-bold">출입 통계</h1>

          {/* Period Tabs and Branch Dropdown Right */}
          <div className="flex items-center gap-4">
            {/* Period Tabs */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setPeriod("daily")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  period === "daily"
                    ? "bg-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                일별
              </button>
              <button
                onClick={() => setPeriod("weekly")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  period === "weekly"
                    ? "bg-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                주별
              </button>
              <button
                onClick={() => setPeriod("monthly")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  period === "monthly"
                    ? "bg-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                월별
              </button>
            </div>

            {/* Branch Dropdown */}
            <div className="relative">
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              >
                <option value="전체 지점">전체 지점</option>
                <option value="강남점">강남점</option>
                <option value="서초점">서초점</option>
                <option value="송파점">송파점</option>
                <option value="본점">본점</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Total Access Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-2" style={{ fontSize: "14pt" }}>
                  총 출입
                </p>
                <p
                  className="font-bold text-black"
                  style={{ fontSize: "36pt", lineHeight: "1" }}
                >
                  {totalAccess.toLocaleString()}
                </p>
              </div>

              {/* Allowed Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-2" style={{ fontSize: "14pt" }}>
                  허용
                </p>
                <p
                  className="font-bold"
                  style={{
                    fontSize: "36pt",
                    lineHeight: "1",
                    color: "var(--color-status-allow-text)",
                  }}
                >
                  {totalAllowed.toLocaleString()}
                </p>
              </div>

              {/* Denied Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-2" style={{ fontSize: "14pt" }}>
                  차단
                </p>
                <p
                  className="font-bold"
                  style={{
                    fontSize: "36pt",
                    lineHeight: "1",
                    color: "var(--color-status-deny-text)",
                  }}
                >
                  {totalDenied.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-4">일별 출입 현황</h3>
              <div style={{ width: "100%", height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Bar
                      dataKey="total"
                      fill="var(--color-action-primary)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      지점명
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      총 건수
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      허용
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                      차단
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {branchData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {row.branch}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                        {row.total.toLocaleString()}
                      </td>
                      <td
                        className="px-6 py-4 text-sm text-right font-medium"
                        style={{ color: "var(--color-status-allow-text)" }}
                      >
                        {row.allowed.toLocaleString()}
                      </td>
                      <td
                        className="px-6 py-4 text-sm text-right font-medium"
                        style={{ color: "var(--color-status-deny-text)" }}
                      >
                        {row.denied.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CSV Export Button */}
            <div className="flex justify-end pt-4">
              <button
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition-all"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              >
                <Download className="w-4 h-4" />
                CSV 내보내기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
