import { KioskFaceRecognitionTimeoutScreen } from "../components/kiosk-face-recognition-timeout-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-01 얼굴 인식 - 타임아웃 임박";

export default function KioskFaceRecognitionTimeoutPage() {
  return (
    <KioskPageLayout>
      <KioskFaceRecognitionTimeoutScreen />
    </KioskPageLayout>
  );
}
