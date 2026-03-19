import { KioskUserRegistrationScreen } from "../components/kiosk-user-registration-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-02-3 사용자 등록 (키오스크) - 품질 검사 실패";

export default function KioskUserRegistrationErrorPage() {
  return (
    <KioskPageLayout>
      <KioskUserRegistrationScreen photoTaken={true} captureError={true} />
    </KioskPageLayout>
  );
}
