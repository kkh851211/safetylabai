import { AdminVideoUploadScreen } from "../components/admin-video-upload-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-02-1 광고 영상 업로드 - 파일 선택 전";

export default function AdminVideoUploadPage() {
  return (
    <AdminPageLayout>
      <AdminVideoUploadScreen />
    </AdminPageLayout>
  );
}
