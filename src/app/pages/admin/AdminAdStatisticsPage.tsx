import { AdminAdStatisticsScreen } from "../components/admin-ad-statistics-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-5-02 광고 재생 통계";

export default function AdminAdStatisticsPage() {
  return (
    <AdminPageLayout>
      <AdminAdStatisticsScreen />
    </AdminPageLayout>
  );
}
