import { KioskDuplicateNameScreen } from "../components/kiosk-duplicate-name-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-02-4 수동 이름 입력 - 동명이인 선택";

export default function KioskDuplicateNamePage() {
  return (
    <KioskPageLayout>
      <KioskDuplicateNameScreen />
    </KioskPageLayout>
  );
}
