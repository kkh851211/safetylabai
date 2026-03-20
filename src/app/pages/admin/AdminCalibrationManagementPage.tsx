import { AdminCalibrationManagementScreen } from "../components/admin-calibration-management-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-3-04 음주측정기 검교정 관리";

export default function AdminCalibrationManagementPage() {
  return (
    <AdminPageLayout>
      <AdminCalibrationManagementScreen />
    </AdminPageLayout>
  );
}
