import { KioskAccessResultScreen } from "../components/kiosk-access-result-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-3-01-1 출입 결과 표시 - 출입 허용";

export default function KioskAccessResultPage() {
  return (
    <KioskPageLayout>
      <KioskAccessResultScreen />
    </KioskPageLayout>
  );
}
