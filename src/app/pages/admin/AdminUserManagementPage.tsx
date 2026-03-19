import { AdminUserManagementScreen } from "../components/admin-user-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-2-01 사용자 관리 - 기본 목록";

export default function AdminUserManagementPage() {
  return (
    <AdminPageLayout>
      <AdminUserManagementScreen />
    </AdminPageLayout>
  );
}
