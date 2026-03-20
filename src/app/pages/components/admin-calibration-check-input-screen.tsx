import { ArrowLeft, Download } from "lucide-react";

export function AdminCalibrationCheckInputScreen() {
  const checkHistory = [
    {
      datetime: "2024-02-15 14:30",
      inspector: "김철수",
      result: "정상",
      nextDate: "2025-02-15",
    },
    {
      datetime: "2023-02-10 09:15",
      inspector: "박영희",
      result: "정상",
      nextDate: "2024-02-10",
    },
    {
      datetime: "2022-02-08 16:45",
      inspector: "이민수",
      result: "불량",
      nextDate: "2023-02-08",
    },
    {
      datetime: "2021-02-12 11:20",
      inspector: "최지영",
      result: "정상",
      nextDate: "2022-02-12",
    },
    {
      datetime: "2020-02-14 10:00",
      inspector: "김철수",
      result: "정상",
      nextDate: "2021-02-14",
    },
    {
      datetime: "2019-02-11 13:40",
      inspector: "박영희",
      result: "정상",
      nextDate: "2020-02-11",
    },
    {
      datetime: "2018-02-09 15:30",
      inspector: "이민수",
      result: "정상",
      nextDate: "2019-02-09",
    },
    {
      datetime: "2017-02-13 09:50",
      inspector: "최지영",
      result: "정상",
      nextDate: "2018-02-13",
    },
    {
      datetime: "2016-02-10 14:15",
      inspector: "김철수",
      result: "불량",
      nextDate: "2017-02-10",
    },
    {
      datetime: "2015-02-12 11:00",
      inspector: "박영희",
      result: "정상",
      nextDate: "2016-02-12",
    },
  ];

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
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center px-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">뒤로</span>
          </button>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
            점검 결과 입력
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {/* Device Info Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    기기 ID
                  </div>
                  <div className="text-sm text-gray-900">BREATH-003</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    지점명
                  </div>
                  <div className="text-sm text-gray-900">강남지점</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    검교정 만료일
                  </div>
                  <div className="text-sm text-gray-900">2024-04-05</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    검교정 주기
                  </div>
                  <div className="text-sm text-gray-900">1년</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="space-y-6">
                {/* 점검 결과 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    점검 결과
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="result"
                        value="normal"
                        defaultChecked
                        className="w-4 h-4"
                        style={{ accentColor: "var(--color-action-primary)" }}
                      />
                      <span className="text-sm text-gray-900">정상</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="result"
                        value="fault"
                        className="w-4 h-4"
                        style={{ accentColor: "var(--color-action-primary)" }}
                      />
                      <span className="text-sm text-gray-900">불량</span>
                    </label>
                  </div>
                </div>

                {/* 점검 일시 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    점검 일시
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    defaultValue="2024-03-20T14:30"
                  />
                </div>

                {/* 점검자 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    점검자
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="점검자 이름을 입력하세요"
                    defaultValue="김철수"
                  />
                </div>

                {/* 다음 검교정 예정일 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    다음 검교정 예정일
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50"
                    defaultValue="2025-03-20"
                    readOnly
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    * 점검 일시 기준으로 자동 계산됩니다
                  </p>
                </div>

                {/* 비고 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    비고 <span className="text-gray-400 font-normal">(선택)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="추가 메모를 입력하세요"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Check History Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">점검 이력</h2>
                <button
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
                  style={{
                    backgroundColor: "var(--color-action-secondary)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  이력 CSV 내보내기
                </button>
              </div>

              {/* History Table */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          점검 일시
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          점검자
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          점검 결과
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          다음 예정일
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {checkHistory.map((item, index) => (
                        <tr
                          key={index}
                          className={`${
                            index !== checkHistory.length - 1
                              ? "border-b border-gray-200"
                              : ""
                          }`}
                        >
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {item.datetime}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {item.inspector}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
                              style={{
                                backgroundColor:
                                  item.result === "정상"
                                    ? "var(--color-bg-result-allow)"
                                    : "var(--color-bg-result-deny)",
                                color:
                                  item.result === "정상"
                                    ? "var(--color-status-allow-text)"
                                    : "var(--color-status-deny-text)",
                              }}
                            >
                              {item.result}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {item.nextDate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-6">
              <button
                className="px-6 py-3 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
                style={{
                  backgroundColor: "var(--color-action-secondary)",
                }}
              >
                취소
              </button>
              <button
                className="px-6 py-3 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
                style={{
                  backgroundColor: "var(--color-action-primary)",
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
