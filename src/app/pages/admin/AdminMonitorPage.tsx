import { AdminMonitorScreen } from "../components/admin-monitor-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-1-01 실시간 모니터 - 전체 온라인 (정상)";

export default function AdminMonitorPage() {
  return (
    <AdminPageLayout>
      <AdminMonitorScreen />
    </AdminPageLayout>
  );
}
