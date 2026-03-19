import { AdminUserRegistrationFormScreen } from "../components/admin-user-registration-form-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-2-02 사용자 등록/수정 - 신규 등록 (촬영 전)";

export default function AdminUserRegistrationFormPage() {
  return (
    <AdminPageLayout>
      <AdminUserRegistrationFormScreen />
    </AdminPageLayout>
  );
}
