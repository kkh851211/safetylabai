import { AdminAccountManagementScreen } from "../components/admin-account-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-6-01 계정 관리";

export default function AdminAccountManagementPage() {
  return (
    <AdminPageLayout>
      <AdminAccountManagementScreen />
    </AdminPageLayout>
  );
}
