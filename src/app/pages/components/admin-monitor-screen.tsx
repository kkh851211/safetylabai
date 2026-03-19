import { ChevronDown, AlertCircle } from "lucide-react";

interface AdminMonitorScreenProps {
  hasOfflineDevice?: boolean;
}

export function AdminMonitorScreen({ hasOfflineDevice = false }: AdminMonitorScreenProps) {
  const summaryData = [
    { label: "금일 허용", value: "127", color: "var(--color-status-allow-text)" },
    { label: "금일 차단", value: "8", color: "var(--color-status-deny-text)" },
    { label: "온라인 기기", value: hasOfflineDevice ? "11" : "12", color: "#3B82F6" },
  ];

  const eventData = [
    { time: "09:31:24", name: "김민준", result: "allow", kioskId: "KSK-001" },
    { time: "09:28:15", name: "이서연", result: "allow", kioskId: "KSK-003" },
    { time: "09:25:47", name: "박지호", result: "deny", kioskId: "KSK-002" },
    { time: "09:22:33", name: "최수진", result: "allow", kioskId: "KSK-001" },
    { time: "09:19:56", name: "정우영", result: "allow", kioskId: "KSK-004" },
    { time: "09:17:12", name: "강예은", result: "deny", kioskId: "KSK-003" },
    { time: "09:14:28", name: "윤도현", result: "allow", kioskId: "KSK-002" },
    { time: "09:11:05", name: "임하늘", result: "allow", kioskId: "KSK-001" },
  ];

  const deviceData = [
    { id: "KSK-001", location: "본사 1층 출입구", status: "온라인" },
    { id: "KSK-002", location: "본사 2층 사무실", status: hasOfflineDevice ? "오프라인" : "온라인" },
    { id: "KSK-003", location: "본사 지하 주차장", status: "온라인" },
    { id: "KSK-004", location: "본사 3층 회의실", status: "온라인" },
  ];

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
            실시간 모니터
          </div>
          {["출입 기록", "사용자 관리", "기기 관리"].map((item) => (
            <div 
              key={item}
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
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header */}
        <div 
          className="bg-white border-b flex items-center justify-between px-8"
          style={{ 
            height: "80px", 
            borderColor: "#E5E7EB",
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 800 }}>실시간 모니터</h1>
          <div className="relative" style={{ position: 'relative' }}>
            <select 
              className="appearance-none bg-white border rounded-xl hover:border-gray-400 focus:outline-none transition-all cursor-pointer font-medium"
              style={{ 
                height: '44px',
                paddingLeft: '16px',
                paddingRight: '48px',
                fontSize: '14px',
                borderColor: '#E5E7EB',
                minWidth: '160px'
              }}
            >
              <option>전체 지점</option>
              <option>본사</option>
              <option>강남지점</option>
            </select>
            <ChevronDown 
              className="absolute pointer-events-none"
              style={{ 
                right: "16px", 
                top: "50%", 
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                color: "#6B7280"
              }} 
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex overflow-hidden" style={{ flex: 1, display: 'flex' }}>
          {/* Dashboard Main */}
          <div 
            className="flex-1 p-8 overflow-y-auto"
            style={{ flex: 1, overflowY: 'auto' }}
          >
            {/* Warning Banner */}
            {hasOfflineDevice && (
              <div
                className="flex items-center gap-3 px-6 rounded-2xl mb-8 border transition-all animate-pulse"
                style={{
                  height: '60px',
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  borderColor: "#EF4444",
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AlertCircle
                  style={{ width: "24px", height: "24px", color: "#DC2626" }}
                />
                <span
                  style={{ fontSize: "16px", fontWeight: 700, color: "#DC2626" }}
                >
                  오프라인 기기가 감지되었습니다
                </span>
              </div>
            )}

            {/* Summary Grid */}
            <div 
              className="grid grid-cols-3 mb-8"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '24px' 
              }}
            >
              {summaryData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border hover:shadow-lg transition-shadow"
                  style={{ 
                    borderColor: "#E5E7EB",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 600, color: "#6B7280" }}>
                    {item.label}
                  </span>
                  <span
                    style={{ 
                      fontSize: '48px', 
                      fontWeight: 900, 
                      color: item.color,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Event Table Section */}
            <div 
              className="bg-white rounded-2xl border overflow-hidden shadow-sm"
              style={{ borderColor: "#E5E7EB" }}
            >
              <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
                    {["시각", "사용자 이름", "결과", "키오스크 ID"].map((head) => (
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
                  {eventData.map((event, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50/50 transition-colors"
                      style={{ borderBottom: index === eventData.length - 1 ? 'none' : '1px solid #F3F4F6' }}
                    >
                      <td style={{ padding: '20px 24px', fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>
                        {event.time}
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '15px', color: '#111827', fontWeight: 700 }}>
                        {event.name}
                      </td>
                      <td style={{ padding: '20px 24px' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: '28px',
                            padding: '0 12px',
                            borderRadius: '14px',
                            fontSize: '12px',
                            fontWeight: 700,
                            backgroundColor: event.result === "allow" ? "var(--color-bg-result-allow)" : "var(--color-bg-result-deny)",
                            color: event.result === "allow" ? "var(--color-status-allow-text)" : "var(--color-status-deny-text)",
                          }}
                        >
                          {event.result === "allow" ? "허용" : "차단"}
                        </span>
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '14px', color: '#4B5563', fontWeight: 600 }}>
                        {event.kioskId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Device Sidebar */}
          <div 
            className="bg-white border-l p-6 overflow-y-auto"
            style={{ 
              width: "320px", 
              borderColor: "#E5E7EB",
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <h2 style={{ fontSize: '16px', fontWeight: 800 }}>기기 상태</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {deviceData.map((device, index) => {
                const isOffline = device.status === "오프라인";
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-5 border transition-all"
                    style={{
                      borderColor: isOffline ? "#DC2626" : "var(--color-status-allow-text)",
                      backgroundColor: isOffline ? "rgba(220, 38, 38, 0.02)" : "rgba(22, 163, 74, 0.02)",
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>
                        {device.id}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: isOffline ? "#DC2626" : "#16A34A",
                            boxShadow: isOffline 
                              ? '0 0 8px rgba(220, 38, 38, 0.4)'
                              : '0 0 8px rgba(22, 163, 74, 0.4)'
                          }}
                        />
                        <span
                          style={{ 
                            fontSize: '12px', 
                            fontWeight: 700, 
                            color: isOffline ? "#DC2626" : "#16A34A" 
                          }}
                        >
                          {device.status}
                        </span>
                      </div>
                    </div>
                    <div style={{ fontSize: '13px', color: "#6B7280", fontWeight: 500 }}>
                      {device.location}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
