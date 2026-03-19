import { KioskFaceRecognitionProcessingScreen } from "../components/kiosk-face-recognition-processing-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-01 얼굴 인식 - 인식 처리 중";

export default function KioskFaceRecognitionProcessingPage() {
  return (
    <KioskPageLayout>
      <KioskFaceRecognitionProcessingScreen />
    </KioskPageLayout>
  );
}
