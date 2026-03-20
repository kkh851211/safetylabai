import { BpMeasurementPrepScreen } from "../components/bp-measurement-prep-screen";
import { KioskPageLayout } from "../components/KioskPageLayout";

export const title = "K-3-03 측정 준비 안내";

export default function KioskBpMeasurementPrepPage() {
  return (
    <KioskPageLayout>
      <BpMeasurementPrepScreen />
    </KioskPageLayout>
  );
}
