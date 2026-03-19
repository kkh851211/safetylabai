import { KioskUserRegistrationScreen } from "../components/kiosk-user-registration-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-02 사용자 등록 (키오스크) - 초기 (촬영 전)";

export default function KioskUserRegistrationPage() {
  return (
    <KioskPageLayout>
      <KioskUserRegistrationScreen />
    </KioskPageLayout>
  );
}
