import { AdminPermissionManagementBranchAddModal } from "../components/admin-permission-management-branch-add-modal";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-6-02-4 권한 관리 - 관리자 추가 오버레이 (본점 관리자용)";

export default function AdminPermissionManagementBranchAddPage() {
  return (
    <AdminPageLayout>
      <AdminPermissionManagementBranchAddModal />
    </AdminPageLayout>
  );
}
