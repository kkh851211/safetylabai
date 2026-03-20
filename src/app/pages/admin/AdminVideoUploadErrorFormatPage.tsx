import { AdminVideoUploadScreen } from "../components/admin-video-upload-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-02-5 광고 영상 업로드 - 형식 에러";

export default function AdminVideoUploadErrorFormatPage() {
  return (
    <AdminPageLayout>
      <AdminVideoUploadScreen errorState="format" />
    </AdminPageLayout>
  );
}
