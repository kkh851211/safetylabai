import { AdminUserRegistrationFormScreen } from "../components/admin-user-registration-form-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-2-02-2 사용자 등록/수정 - 신규 등록 (촬영 완료)";

export default function AdminUserRegistrationFormCapturedPage() {
  return (
    <AdminPageLayout>
      <AdminUserRegistrationFormScreen hasFaceImage={true} />
    </AdminPageLayout>
  );
}
