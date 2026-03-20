import { AdminDeviceResetConfirmScreen } from "../components/admin-device-reset-confirm-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-02-4 원격 리셋 - 성공";

export default function AdminDeviceResetSuccessPage() {
  return (
    <AdminPageLayout>
      <AdminDeviceResetConfirmScreen isSuccess={true} />
    </AdminPageLayout>
  );
}
