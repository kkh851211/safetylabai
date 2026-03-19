import { KioskUserRegistrationScreen } from "../components/kiosk-user-registration-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-02-2 사용자 등록 (키오스크) - 촬영 완료 (저장 버튼 활성화)";

export default function KioskUserRegistrationActivePage() {
  return (
    <KioskPageLayout>
      <KioskUserRegistrationScreen photoTaken={true} />
    </KioskPageLayout>
  );
}
