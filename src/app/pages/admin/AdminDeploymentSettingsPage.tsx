import { AdminDeploymentSettingsScreen } from "../components/admin-deployment-settings-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-03 지점별 배포 설정 - 본점 관리자 이상 (전체 편집 가능)";

export default function AdminDeploymentSettingsPage() {
  return (
    <AdminPageLayout>
      <AdminDeploymentSettingsScreen />
    </AdminPageLayout>
  );
}
