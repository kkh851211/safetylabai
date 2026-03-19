import { AdminMonitorScreen } from "../components/admin-monitor-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-1-01-2 실시간 모니터 - 오프라인 기기 있음";

export default function AdminMonitorWarningPage() {
  return (
    <AdminPageLayout>
      <AdminMonitorScreen hasOfflineDevice={true} />
    </AdminPageLayout>
  );
}
