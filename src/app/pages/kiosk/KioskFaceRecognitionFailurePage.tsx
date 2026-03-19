import { KioskFaceRecognitionFailureScreen } from "../components/kiosk-face-recognition-failure-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-3-02 인식 실패 안내";

export default function KioskFaceRecognitionFailurePage() {
  return (
    <KioskPageLayout>
      <KioskFaceRecognitionFailureScreen />
    </KioskPageLayout>
  );
}
