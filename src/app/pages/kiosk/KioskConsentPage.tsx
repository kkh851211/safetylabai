import { KioskConsentScreen } from "../components/kiosk-consent-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-1-02 개인정보 동의";

export default function KioskConsentPage() {
  return (
    <KioskPageLayout>
      <KioskConsentScreen />
    </KioskPageLayout>
  );
}
