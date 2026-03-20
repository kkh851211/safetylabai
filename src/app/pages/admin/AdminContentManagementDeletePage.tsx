import { AdminContentManagementScreen } from "../components/admin-content-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-01-3 광고 콘텐츠 목록 - 삭제 확인 다이얼로그";

export default function AdminContentManagementDeletePage() {
  return (
    <AdminPageLayout>
      <AdminContentManagementScreen showDeleteModal={true} />
    </AdminPageLayout>
  );
}
