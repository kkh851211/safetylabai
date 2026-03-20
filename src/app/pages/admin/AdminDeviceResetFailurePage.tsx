import { AdminDeviceResetConfirmScreen } from "../components/admin-device-reset-confirm-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-02-5 원격 리셋 - 실패";

export default function AdminDeviceResetFailurePage() {
  return (
    <AdminPageLayout>
      <AdminDeviceResetConfirmScreen status="failure" />
    </AdminPageLayout>
  );
}
