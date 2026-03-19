import { Search, Edit2, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

export function AdminUserManagementScreen() {
  const userData = Array.from({ length: 20 }, (_, i) => {
    const names = ["김민준", "이서연", "박지호", "최수진", "정우영", "강예은", "윤도현", "임하늘", "한지우", "오서준"];
    const statuses = ["active", "active", "active", "inactive", "active"];
    
    const date = new Date(2026, 2, 19 - i);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return {
      name: names[i % names.length],
      registeredDate: `${year}-${month}-${day}`,
      status: statuses[i % statuses.length],
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
            출입 기록
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
          className="bg-white border-b flex items-center justify-between px-8"
          style={{ 
            height: "80px", 
            borderColor: "#E5E7EB",
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#111827' }}>사용자 관리</h1>
          <button
            className="rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            style={{ 
              height: '44px',
              padding: '0 24px',
              backgroundColor: "var(--primary)",
              fontSize: '14px'
            }}
          >
            사용자 등록
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-hidden flex flex-col" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Search Bar */}
          <div className="mb-6 flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="relative" style={{ position: 'relative', width: '400px' }}>
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
                  height: '48px',
                  paddingLeft: '44px',
                  paddingRight: '16px',
                  fontSize: '14px',
                  borderColor: '#E5E7EB',
                  color: '#111827',
                  backgroundColor: 'white'
                }}
              />
            </div>
          </div>

          {/* User Table Section */}
          <div 
            className="bg-white rounded-2xl border flex-1 flex flex-col shadow-sm overflow-hidden"
            style={{ borderColor: "#E5E7EB" }}
          >
            {/* Scrollable Table Area */}
            <div className="flex-1 overflow-y-auto" style={{ flex: 1, overflowY: 'auto' }}>
              <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead className="sticky top-0 z-10">
                  <tr style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
                    {["이름", "등록일", "상태", "작업"].map((head) => (
                      <th 
                        key={head}
                        style={{ 
                          textAlign: head === "작업" ? 'right' : 'left', 
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
                  {userData.map((user, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50/50 transition-colors"
                      style={{ borderBottom: index === userData.length - 1 ? 'none' : '1px solid #F3F4F6' }}
                    >
                      <td style={{ padding: '20px 24px', fontSize: '15px', color: '#111827', fontWeight: 700 }}>
                        {user.name}
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>
                        {user.registeredDate}
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
                            backgroundColor: user.status === "active" ? "var(--color-bg-result-allow)" : "#F3F4F6",
                            color: user.status === "active" ? "var(--color-status-allow-text)" : "#6B7280",
                          }}
                        >
                          {user.status === "active" ? "활성" : "비활성"}
                        </span>
                      </td>
                      <td style={{ padding: '20px 24px' }}>
                        <div className="flex items-center justify-end gap-2" style={{ display: 'flex', justifyContent: 'end', gap: '8px' }}>
                          <button
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            title="수정"
                            style={{ color: '#4B5563' }}
                          >
                            <Edit2 style={{ width: '18px', height: '18px' }} />
                          </button>
                          <button
                            className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                            title="삭제"
                            style={{ color: "var(--color-action-danger)" }}
                          >
                            <Trash2 style={{ width: '18px', height: '18px' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div 
              className="border-t px-8 flex items-center justify-center"
              style={{ height: '80px', borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}
            >
              <div className="flex items-center gap-2" style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="flex items-center justify-center border bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ width: '40px', height: '40px', borderColor: '#E5E7EB' }}
                >
                  <ChevronLeft style={{ width: '18px', height: '18px', color: '#6B7280' }} />
                </button>
                {[1, 2, 3].map((n) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
