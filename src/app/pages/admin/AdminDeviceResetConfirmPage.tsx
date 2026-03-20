import { AdminDeviceResetConfirmScreen } from "../components/admin-device-reset-confirm-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-02-1 원격 리셋 - 실행 전 (기본)";

export default function AdminDeviceResetConfirmPage() {
  return (
    <AdminPageLayout>
      <AdminDeviceResetConfirmScreen status="confirm" />
    </AdminPageLayout>
  );
}
