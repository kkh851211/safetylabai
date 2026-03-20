import { AdminVideoUploadScreen } from "../components/admin-video-upload-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-02-5 광고 영상 업로드 - 시간 초과 에러";

export default function AdminVideoUploadErrorDurationPage() {
  return (
    <AdminPageLayout>
      <AdminVideoUploadScreen errorState="duration" />
    </AdminPageLayout>
  );
}
