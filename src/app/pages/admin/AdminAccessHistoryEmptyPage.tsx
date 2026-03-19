import { AdminAccessHistoryScreen } from "../components/admin-access-history-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-1-02-2 출입 이력 조회 - 조회 결과 없음";

export default function AdminAccessHistoryEmptyPage() {
  return (
    <AdminPageLayout>
      <AdminAccessHistoryScreen isEmpty={true} />
    </AdminPageLayout>
  );
}
