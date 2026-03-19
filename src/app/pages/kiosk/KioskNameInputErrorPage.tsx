import { KioskNameInputErrorScreen } from "../components/kiosk-name-input-error-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-02-3 수동 이름 입력 - 조회 실패 (미등록 사용자)";

export default function KioskNameInputErrorPage() {
  return (
    <KioskPageLayout>
      <KioskNameInputErrorScreen />
    </KioskPageLayout>
  );
}
