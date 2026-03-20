import { AdminCalibrationCheckInputScreen } from "../components/admin-calibration-check-input-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-05 점검 결과 입력";

export default function AdminCalibrationCheckInputPage() {
  return (
    <AdminPageLayout>
      <AdminCalibrationCheckInputScreen />
    </AdminPageLayout>
  );
}
