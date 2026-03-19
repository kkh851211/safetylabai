import { KioskUserRegistrationScreen } from "../components/kiosk-user-registration-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-02-4 사용자 등록 (키오스크) - 저장 완료";

export default function KioskUserRegistrationSuccessPage() {
  return (
    <KioskPageLayout>
      <KioskUserRegistrationScreen photoTaken={true} showSuccess={true} />
    </KioskPageLayout>
  );
}
