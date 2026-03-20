import { AdminVideoUploadScreen } from "../components/admin-video-upload-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-02-3 광고 영상 업로드 - 용량 초과 에러";

export default function AdminVideoUploadErrorSizePage() {
  return (
    <AdminPageLayout>
      <AdminVideoUploadScreen errorState="size" />
    </AdminPageLayout>
  );
}
