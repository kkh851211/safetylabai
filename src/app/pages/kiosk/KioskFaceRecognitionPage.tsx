import { KioskFaceRecognitionScreen } from "../components/kiosk-face-recognition-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-2-01 얼굴 인식";

export default function KioskFaceRecognitionPage() {
  return (
    <KioskPageLayout>
      <KioskFaceRecognitionScreen />
    </KioskPageLayout>
  );
}
