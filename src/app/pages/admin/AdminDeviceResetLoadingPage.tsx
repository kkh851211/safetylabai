import { AdminDeviceResetConfirmScreen } from "../components/admin-device-reset-confirm-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-02-3 원격 리셋 - 처리 중";

export default function AdminDeviceResetLoadingPage() {
  return (
    <AdminPageLayout>
      <AdminDeviceResetConfirmScreen status="loading" />
    </AdminPageLayout>
  );
}
