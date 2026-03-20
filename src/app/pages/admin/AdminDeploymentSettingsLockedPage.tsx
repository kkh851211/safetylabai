import { AdminDeploymentSettingsScreen } from "../components/admin-deployment-settings-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-03-2 지점별 배포 설정 - 지점 관리자 (본점 섹션 읽기 전용)";

export default function AdminDeploymentSettingsLockedPage() {
  return (
    <AdminPageLayout>
      <AdminDeploymentSettingsScreen headOfficeLocked={true} />
    </AdminPageLayout>
  );
}
