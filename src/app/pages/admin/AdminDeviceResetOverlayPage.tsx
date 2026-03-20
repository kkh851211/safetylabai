import { AdminDeviceResetConfirmScreen } from "../components/admin-device-reset-confirm-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-02-2 원격 리셋 - 최종 확인 오버레이";

export default function AdminDeviceResetOverlayPage() {
  return (
    <AdminPageLayout>
      <AdminDeviceResetConfirmScreen status="overlay" />
    </AdminPageLayout>
  );
}
