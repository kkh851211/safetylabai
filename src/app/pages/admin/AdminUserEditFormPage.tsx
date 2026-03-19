import { AdminUserRegistrationFormScreen } from "../components/admin-user-registration-form-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-2-02-3 사용자 등록/수정 - 수정 모드";

export default function AdminUserEditFormPage() {
  return (
    <AdminPageLayout>
      <AdminUserRegistrationFormScreen hasFaceImage={true} isEditMode={true} />
    </AdminPageLayout>
  );
}
