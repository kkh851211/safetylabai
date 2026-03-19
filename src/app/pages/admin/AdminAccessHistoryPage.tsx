import { AdminAccessHistoryScreen } from "../components/admin-access-history-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-1-02 출입 이력 조회 - 초기 (당일 기본 조회)";

export default function AdminAccessHistoryPage() {
  return (
    <AdminPageLayout>
      <AdminAccessHistoryScreen />
    </AdminPageLayout>
  );
}
