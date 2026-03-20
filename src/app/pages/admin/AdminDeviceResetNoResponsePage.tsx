import { AdminDeviceResetConfirmScreen } from "../components/admin-device-reset-confirm-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-02-6 원격 리셋 - 응답 없음";

export default function AdminDeviceResetNoResponsePage() {
  return (
    <AdminPageLayout>
      <AdminDeviceResetConfirmScreen status="no-response" />
    </AdminPageLayout>
  );
}
