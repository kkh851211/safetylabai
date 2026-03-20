import { AdminContentManagementScreen } from "../components/admin-content-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-01-2 광고 콘텐츠 목록 - 만료 항목 포함";

export default function AdminContentManagementExpiredPage() {
  return (
    <AdminPageLayout>
      <AdminContentManagementScreen showExpired={true} />
    </AdminPageLayout>
  );
}
