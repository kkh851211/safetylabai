import { KioskExitNoticeScreen } from "../components/kiosk-exit-notice-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-1-03 종료 안내";

export default function KioskExitNoticePage() {
  return (
    <KioskPageLayout>
      <KioskExitNoticeScreen />
    </KioskPageLayout>
  );
}
