import { KioskAccessDenyScreen } from "../components/kiosk-access-deny-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-3-01-2 출입 결과 표시 - 출입 차단";

export default function KioskAccessDenyPage() {
  return (
    <KioskPageLayout>
      <KioskAccessDenyScreen />
    </KioskPageLayout>
  );
}
