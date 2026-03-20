import { AdminVideoUploadScreen } from "../components/admin-video-upload-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-02-3 광고 영상 업로드 - 업로드 중";

export default function AdminVideoUploadProgressPage() {
  return (
    <AdminPageLayout>
      <AdminVideoUploadScreen hasFile={true} uploadProgress={45} />
    </AdminPageLayout>
  );
}
