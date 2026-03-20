import { AdminCalibrationCheckInputScreen } from "../components/admin-calibration-check-input-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-05-2 점검 결과 입력 - 불량 판정";

export default function AdminCalibrationCheckInputFaultPage() {
  return (
    <AdminPageLayout>
      <AdminCalibrationCheckInputScreen showFaultWarning={true} />
    </AdminPageLayout>
  );
}
