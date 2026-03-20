import { AdminDeviceManagementScreen } from "../components/admin-device-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-01-2 기기 상태 목록 - 본점·지점 관리자 (리셋 버튼 비활성)";

export default function AdminDeviceManagementReadOnlyPage() {
  return (
    <AdminPageLayout>
      <AdminDeviceManagementScreen canReset={false} />
    </AdminPageLayout>
  );
}
