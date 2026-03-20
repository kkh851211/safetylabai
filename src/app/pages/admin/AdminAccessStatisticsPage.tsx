import { AdminAccessStatisticsScreen } from "../components/admin-access-statistics-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-5-01 출입 통계 대시보드";

export default function AdminAccessStatisticsPage() {
  return (
    <AdminPageLayout>
      <AdminAccessStatisticsScreen />
    </AdminPageLayout>
  );
}
