import { AdminDeviceManagementScreen } from "../components/admin-device-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-01 기기 상태 목록 - 시스템 관리자 (리셋 버튼 활성)";

export default function AdminDeviceManagementPage() {
  return (
    <AdminPageLayout>
      <AdminDeviceManagementScreen />
    </AdminPageLayout>
  );
}
