import { ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";

export function AdminAccessHistoryScreen() {
  const historyData = Array.from({ length: 50 }, (_, i) => {
    const results = ["allow", "allow", "allow", "deny", "allow"];
    const names = ["김민준", "이서연", "박지호", "최수진", "정우영", "강예은", "윤도현", "임하늘"];
    const kiosks = ["KSK-001", "KSK-002", "KSK-003", "KSK-004"];
    const branches = ["본사", "강남지점", "판교지점"];
    
    const hour = 9 + Math.floor(i / 12);
    const minute = (i * 5) % 60;
    const second = (i * 13) % 60;
    
    return {
      time: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`,
      name: names[i % names.length],
      result: results[i % results.length],
      kioskId: kiosks[i % kiosks.length],
      branch: branches[i % branches.length],
    };
  });

  return (
    <div 
      className="relative overflow-hidden flex"
      style={{ 
        width: "1440px", 
        height: "900px", 
        backgroundColor: "#F9FAFB",
        display: 'flex'
      }}
    >
      {/* Left Sidebar */}
      <div 
        className="flex flex-col h-full"
        style={{ 
          width: "240px", 
          backgroundColor: "#0F172A",
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          className="flex items-center px-6 border-b"
          style={{ 
            height: "80px", 
            borderBottomColor: "rgba(255, 255, 255, 0.1)",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.025em' }}>
            ACCESS CONTROL
          </span>
        </div>
        <nav style={{ flex: 1, padding: "24px", display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div 
            className="flex items-center px-4 hover:bg-white/5 transition-colors cursor-pointer"
            style={{ 
              height: '48px',
              borderRadius: "12px",
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '15px',
              fontWeight: 500,
              display: 'flex'
            }}
          >
            실시간 모니터
          </div>
          <div 
            className="flex items-center px-4"
            style={{ 
              height: '48px',
              backgroundColor: "rgba(255, 255, 255, 0.05)", 
              borderRadius: "12px",
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              display: 'flex'
            }}
          >
            출입 기록
          </div>
          <div 
            className="flex items-center px-4 hover:bg-white/5 transition-colors cursor-pointer"
            style={{ 
              height: '48px',
              borderRadius: "12px",
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '15px',
              fontWeight: 500,
              display: 'flex'
            }}
          >
            사용자 관리
          </div>
          <div 
            className="flex items-center px-4 hover:bg-white/5 transition-colors cursor-pointer"
            style={{ 
              height: '48px',
              borderRadius: "12px",
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '15px',
              fontWeight: 500,
              display: 'flex'
            }}
          >
            기기 관리
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header */}
        <div 
          className="bg-white border-b flex items-center px-8"
          style={{ 
            height: "80px", 
            borderColor: "#E5E7EB",
            display: 'flex'
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 800 }}>출입 이력</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-hidden flex flex-col" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Filter Bar */}
          <div 
            className="bg-white rounded-2xl shadow-sm border p-6 mb-6"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Date Selection */}
              <div 
                className="flex items-center gap-2 border rounded-xl px-4"
                style={{ height: '44px', borderColor: '#E5E7EB' }}
              >
                <input
                  type="date"
                  defaultValue="2026-03-19"
                  style={{ border: 'none', outline: 'none', fontSize: '14px', fontWeight: 500 }}
                />
                <span style={{ color: '#9CA3AF' }}>~</span>
                <input
                  type="date"
                  defaultValue="2026-03-19"
                  style={{ border: 'none', outline: 'none', fontSize: '14px', fontWeight: 500 }}
                />
              </div>

              {/* Branch Selection */}
              <div className="relative" style={{ position: 'relative' }}>
                <select 
                  className="appearance-none bg-white border rounded-xl hover:border-gray-400 focus:outline-none transition-all cursor-pointer font-medium"
                  style={{ 
                    height: '44px',
                    paddingLeft: '16px',
                    paddingRight: '40px',
                    fontSize: '14px',
                    borderColor: '#E5E7EB',
                    minWidth: '140px'
                  }}
                >
                  <option>전체 지점</option>
                  <option>본사</option>
                  <option>강남지점</option>
                </select>
                <ChevronDown 
                  className="absolute pointer-events-none"
                  style={{ 
                    right: "12px", 
                    top: "50%", 
                    transform: "translateY(-50%)",
                    width: "16px",
                    height: "16px",
                    color: "#9CA3AF"
                  }} 
                />
              </div>

              {/* User Search */}
              <div className="relative flex-1" style={{ position: 'relative', flex: 1 }}>
                <Search 
                  className="absolute"
                  style={{ 
                    left: "14px", 
                    top: "50%", 
                    transform: "translateY(-50%)",
                    width: "18px",
                    height: "18px",
                    color: "#9CA3AF"
                  }} 
                />
                <input
                  type="text"
                  placeholder="사용자 검색"
                  className="w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  style={{ 
                    height: '44px',
                    paddingLeft: '44px',
                    paddingRight: '16px',
                    fontSize: '14px',
                    borderColor: '#E5E7EB'
                  }}
                />
              </div>

              {/* Status Radio Filters */}
              <div className="flex items-center gap-4 bg-gray-50 px-4 rounded-xl" style={{ height: '44px' }}>
                {["전체", "허용", "차단"].map((label, i) => (
                  <label key={label} className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                    <input
                      type="radio"
                      name="filter"
                      defaultChecked={i === 0}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>{label}</span>
                  </label>
                ))}
              </div>

              {/* Search Button */}
              <button
                className="rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                style={{ 
                  height: '44px',
                  padding: '0 24px',
                  backgroundColor: "var(--primary)",
                  fontSize: '14px'
                }}
              >
                조회
              </button>
            </div>
          </div>

          {/* Results Table Section */}
          <div 
            className="bg-white rounded-2xl border flex-1 flex flex-col shadow-sm overflow-hidden"
            style={{ borderColor: "#E5E7EB" }}
          >
            {/* Scrollable Table Area */}
            <div className="flex-1 overflow-y-auto" style={{ flex: 1, overflowY: 'auto' }}>
              <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead className="sticky top-0 z-10">
                  <tr style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
                    {["출입 시각", "사용자 이름", "결과", "키오스크 ID", "지점명"].map((head) => (
                      <th 
                        key={head}
                        style={{ 
                          textAlign: 'left', 
                          padding: '16px 24px', 
                          fontSize: '13px', 
                          fontWeight: 700,
                          color: '#4B5563',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((row, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50/50 transition-colors"
                      style={{ borderBottom: index === historyData.length - 1 ? 'none' : '1px solid #F3F4F6' }}
                    >
                      <td style={{ padding: '16px 24px', fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>
                        {row.time}
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111827', fontWeight: 700 }}>
                        {row.name}
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: '28px',
                            padding: '0 12px',
                            borderRadius: '14px',
                            fontSize: '12px',
                            fontWeight: 700,
                            backgroundColor: row.result === "allow" ? "var(--color-bg-result-allow)" : "var(--color-bg-result-deny)",
                            color: row.result === "allow" ? "var(--color-status-allow-text)" : "var(--color-status-deny-text)",
                          }}
                        >
                          {row.result === "allow" ? "허용" : "차단"}
                        </span>
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '14px', color: '#4B5563', fontWeight: 600 }}>
                        {row.kioskId}
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '14px', color: '#4B5563', fontWeight: 600 }}>
                        {row.branch}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination and Export Footer */}
            <div 
              className="border-t px-8 flex items-center justify-between"
              style={{ height: '80px', borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}
            >
              {/* Pagination Controls */}
              <div className="flex items-center gap-2" style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="flex items-center justify-center border bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ width: '40px', height: '40px', borderColor: '#E5E7EB' }}
                >
                  <ChevronLeft style={{ width: '18px', height: '18px', color: '#6B7280' }} />
                </button>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className="flex items-center justify-center rounded-lg font-bold transition-all"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: n === 1 ? 'var(--primary)' : 'transparent',
                      color: n === 1 ? 'white' : '#6B7280',
                      fontSize: '14px',
                      border: n === 1 ? 'none' : '1px solid transparent'
                    }}
                  >
                    {n}
                  </button>
                ))}
                <button 
                  className="flex items-center justify-center border bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ width: '40px', height: '40px', borderColor: '#E5E7EB' }}
                >
                  <ChevronRight style={{ width: '18px', height: '18px', color: '#6B7280' }} />
                </button>
              </div>

              {/* CSV Export */}
              <button
                className="font-bold border rounded-xl hover:bg-white transition-all active:scale-95"
                style={{ 
                  height: '44px',
                  padding: '0 20px',
                  backgroundColor: "white",
                  borderColor: '#E5E7EB',
                  color: "#374151",
                  fontSize: '14px'
                }}
              >
                CSV 내보내기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
