import { KioskAdminLoginScreen } from "../components/kiosk-admin-login-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-01 관리자 진입 - 기본 (입력 대기)";

export default function KioskAdminLoginPage() {
  return (
    <KioskPageLayout>
      <KioskAdminLoginScreen />
    </KioskPageLayout>
  );
}
