import { KioskIdleFallbackScreen } from "../components/kiosk-idle-fallback-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-1-01 대기 화면 (광고 영상) - 폴백 (영상 없음 / 캐시 없음)";

export default function KioskIdleFallbackPage() {
  return (
    <KioskPageLayout>
      <KioskIdleFallbackScreen />
    </KioskPageLayout>
  );
}
