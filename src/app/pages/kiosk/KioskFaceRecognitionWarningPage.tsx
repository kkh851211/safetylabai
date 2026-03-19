import { KioskFaceRecognitionWarningScreen } from "../components/kiosk-face-recognition-warning-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-01 얼굴 인식 - 경고 안내 (복수 얼굴 / 조명 불량)";

export default function KioskFaceRecognitionWarningPage() {
  return (
    <KioskPageLayout>
      <KioskFaceRecognitionWarningScreen />
    </KioskPageLayout>
  );
}
