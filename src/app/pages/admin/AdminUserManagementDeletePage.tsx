import { AdminUserManagementScreen } from "../components/admin-user-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-2-01-2 사용자 관리 - 삭제 확인 다이얼로그";

export default function AdminUserManagementDeletePage() {
  return (
    <AdminPageLayout>
      <AdminUserManagementScreen showDeleteModal={true} />
    </AdminPageLayout>
  );
}
