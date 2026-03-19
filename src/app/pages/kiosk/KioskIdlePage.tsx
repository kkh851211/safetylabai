import { KioskIdleScreen } from "../components/kiosk-idle-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-1-01 대기 화면 (광고 영상) - 영상 재생 중";

export default function KioskIdlePage() {
  return (
    <KioskPageLayout>
      <KioskIdleScreen />
    </KioskPageLayout>
  );
}
