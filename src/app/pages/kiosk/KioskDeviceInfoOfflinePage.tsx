import { KioskDeviceInfoScreen } from "../components/kiosk-device-info-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-03-2 기기 정보 - 오프라인";

export default function KioskDeviceInfoOfflinePage() {
  return (
    <KioskPageLayout>
      <KioskDeviceInfoScreen isOnline={false} />
    </KioskPageLayout>
  );
}
