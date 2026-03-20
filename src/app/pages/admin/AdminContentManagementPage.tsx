import { AdminContentManagementScreen } from "../components/admin-content-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-01 광고 콘텐츠 목록 - 기본 목록 (전체 유효)";

export default function AdminContentManagementPage() {
  return (
    <AdminPageLayout>
      <AdminContentManagementScreen />
    </AdminPageLayout>
  );
}
