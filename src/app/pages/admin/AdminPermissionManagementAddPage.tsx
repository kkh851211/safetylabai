import { AdminPermissionManagementAddModal } from "../components/admin-permission-management-add-modal";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-6-02-3 권한 관리 - 관리자 추가 오버레이 (시스템 관리자용)";

export default function AdminPermissionManagementAddPage() {
  return (
    <AdminPageLayout>
      <AdminPermissionManagementAddModal />
    </AdminPageLayout>
  );
}
