import { AdminPermissionManagementBranchScreen } from "../components/admin-permission-management-branch-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-6-02-2 권한 관리 - 본점 관리자 (하위 지점만)";

export default function AdminPermissionManagementBranchPage() {
  return (
    <AdminPageLayout>
      <AdminPermissionManagementBranchScreen />
    </AdminPageLayout>
  );
}
