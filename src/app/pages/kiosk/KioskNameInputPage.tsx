import { KioskNameInputScreen } from "../components/kiosk-name-input-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-02-1 수동 이름 입력 - 초기 (입력 전)";

export default function KioskNameInputPage() {
  return (
    <KioskPageLayout>
      <KioskNameInputScreen />
    </KioskPageLayout>
  );
}
