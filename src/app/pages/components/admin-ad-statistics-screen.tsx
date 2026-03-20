import { ChevronDown, Download, Calendar } from "lucide-react";
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

interface AdminAdStatisticsScreenProps {
  selectedDateRange?: string;
}

export function AdminAdStatisticsScreen({
  selectedDateRange = "최근 7일",
}: AdminAdStatisticsScreenProps) {
  const [dateRange, setDateRange] = useState(selectedDateRange);
  const [selectedBranch, setSelectedBranch] = useState("전체 지점");
  const [selectedDevice, setSelectedDevice] = useState("전체 기기");

  // Mock data for video play counts
  const playCountData = [
    { fileName: "홍보영상_최종.mp4", count: 245 },
    { fileName: "신년인사_2026.mp4", count: 189 },
    { fileName: "안전수칙_영상.mp4", count: 156 },
    { fileName: "제품소개.mp4", count: 203 },
    { fileName: "이벤트_안내.mp4", count: 178 },
  ];

  // Mock data for playback history
  const playbackHistory = [
    {
      time: "2026-03-20 14:32:15",
      fileName: "홍보영상_최종.mp4",
      deviceId: "KIOSK-001",
      branch: "강남점",
      completed: true,
    },
    {
      time: "2026-03-20 14:28:42",
      fileName: "신년인사_2026.mp4",
      deviceId: "KIOSK-002",
      branch: "서초점",
      completed: true,
    },
    {
      time: "2026-03-20 14:25:18",
      fileName: "안전수칙_영상.mp4",
      deviceId: "KIOSK-003",
      branch: "송파점",
      completed: false,
    },
    {
      time: "2026-03-20 14:21:05",
      fileName: "제품소개.mp4",
      deviceId: "KIOSK-001",
      branch: "강남점",
      completed: true,
    },
    {
      time: "2026-03-20 14:15:33",
      fileName: "이벤트_안내.mp4",
      deviceId: "KIOSK-004",
      branch: "본점",
      completed: false,
    },
    {
      time: "2026-03-20 14:12:47",
      fileName: "홍보영상_최종.mp4",
      deviceId: "KIOSK-002",
      branch: "서초점",
      completed: true,
    },
    {
      time: "2026-03-20 14:08:21",
      fileName: "신년인사_2026.mp4",
      deviceId: "KIOSK-003",
      branch: "송파점",
      completed: true,
    },
    {
      time: "2026-03-20 14:03:56",
      fileName: "안전수칙_영상.mp4",
      deviceId: "KIOSK-001",
      branch: "강남점",
      completed: true,
    },
  ];

  const getCompletionBadge = (completed: boolean) => {
    return (
      <span
        className="px-3 py-1 rounded-full text-sm font-medium"
        style={{
          color: completed
            ? "var(--color-status-allow-text)"
            : "var(--color-text-disabled)",
          backgroundColor: completed
            ? "rgba(34, 197, 94, 0.1)"
            : "rgba(156, 163, 175, 0.1)",
        }}
      >
        {completed ? "완료" : "미완료"}
      </span>
    );
  };

  // Truncate file names for x-axis labels
  const truncateFileName = (fileName: string, maxLength: number = 15) => {
    if (fileName.length <= maxLength) return fileName;
    return fileName.substring(0, maxLength - 3) + "...";
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
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
          {/* Title Left */}
          <h1 className="text-2xl font-bold">광고 통계</h1>

          {/* Date Range Picker and Dropdowns Right */}
          <div className="flex items-center gap-3">
            {/* Date Range Picker */}
            <div className="relative">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              >
                <option value="최근 7일">최근 7일</option>
                <option value="최근 30일">최근 30일</option>
                <option value="최근 3개월">최근 3개월</option>
                <option value="사용자 지정">사용자 지정</option>
              </select>
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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

            {/* Device Dropdown */}
            <div className="relative">
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer bg-white"
                style={{
                  borderColor: "var(--color-border-default)",
                }}
              >
                <option value="전체 기기">전체 기기</option>
                <option value="KIOSK-001">KIOSK-001</option>
                <option value="KIOSK-002">KIOSK-002</option>
                <option value="KIOSK-003">KIOSK-003</option>
                <option value="KIOSK-004">KIOSK-004</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Bar Chart - Play Counts */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-4">파일별 재생 횟수</h3>
              <div style={{ width: "100%", height: "250px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={playCountData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="fileName"
                      stroke="#666"
                      angle={-15}
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => truncateFileName(value, 20)}
                    />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      fill="var(--color-action-primary)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Playback History Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold">재생 기록</h3>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      재생 시각
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      파일명
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      기기 ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      지점명
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      재생 완료 여부
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {playbackHistory.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {row.time}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {row.fileName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono">
                        {row.deviceId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {row.branch}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {getCompletionBadge(row.completed)}
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
