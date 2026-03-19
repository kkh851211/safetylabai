import { KioskAdminLoginScreen } from "../components/kiosk-admin-login-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-01-2 관리자 진입 - 잠금 오버레이 (5회 실패)";

export default function KioskAdminLoginLockedPage() {
  return (
    <KioskPageLayout>
      <KioskAdminLoginScreen locked={true} />
    </KioskPageLayout>
  );
}
