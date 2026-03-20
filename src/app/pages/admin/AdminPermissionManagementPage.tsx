import { AdminPermissionManagementScreen } from "../components/admin-permission-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-6-02 권한 관리 - 시스템 관리자 (전체 편집)";

export default function AdminPermissionManagementPage() {
  return (
    <AdminPageLayout>
      <AdminPermissionManagementScreen />
    </AdminPageLayout>
  );
}
