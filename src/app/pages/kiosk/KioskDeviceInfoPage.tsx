import { KioskDeviceInfoScreen } from "../components/kiosk-device-info-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-4-03 기기 정보 - 온라인";

export default function KioskDeviceInfoPage() {
  return (
    <KioskPageLayout>
      <KioskDeviceInfoScreen />
    </KioskPageLayout>
  );
}
