import { AdminUserRegistrationFormScreen } from "../components/admin-user-registration-form-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-2-02-3 사용자 등록 - 얼굴 품질 검사 실패";

export default function AdminUserRegistrationFormErrorPage() {
  return (
    <AdminPageLayout>
      <AdminUserRegistrationFormScreen hasFaceError={true} />
    </AdminPageLayout>
  );
}
