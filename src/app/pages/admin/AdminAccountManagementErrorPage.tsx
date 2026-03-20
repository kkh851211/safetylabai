import { AdminAccountManagementScreenError } from "../components/admin-account-management-screen-error";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-6-01-2 계정 관리 - 비밀번호 불일치 오류";

export default function AdminAccountManagementErrorPage() {
  return (
    <AdminPageLayout>
      <AdminAccountManagementScreenError />
    </AdminPageLayout>
  );
}
