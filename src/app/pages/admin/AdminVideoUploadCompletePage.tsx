import { AdminVideoUploadScreen } from "../components/admin-video-upload-screen";
import { AdminPageLayout } from "../components/AdminPageLayout";

export const title = "A-4-02-2 광고 영상 업로드 - 파일 선택 완료";

export default function AdminVideoUploadCompletePage() {
  return (
    <AdminPageLayout>
      <AdminVideoUploadScreen hasFile={true} />
    </AdminPageLayout>
  );
}
