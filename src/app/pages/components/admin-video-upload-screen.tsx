import { ArrowLeft, Upload, Calendar, CheckCircle, FileVideo, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface AdminVideoUploadScreenProps {
  hasFile?: boolean;
  errorState?: "size" | "format" | "duration" | null;
  uploadProgress?: number | null;
}

export function AdminVideoUploadScreen({
  hasFile = false,
  errorState = null,
  uploadProgress = null,
}: AdminVideoUploadScreenProps) {
  const [isMuted, setIsMuted] = useState(true);

  // Calculate default dates (today ~ 30 days later)
  const today = new Date();
  const thirtyDaysLater = new Date(today);
  thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [startDate, setStartDate] = useState(formatDate(today));
  const [endDate, setEndDate] = useState(formatDate(thirtyDaysLater));

  // Error messages based on error state
  const getErrorMessage = () => {
    switch (errorState) {
      case "size":
        return "500MB 이하 파일만 업로드 가능합니다";
      case "format":
        return "MP4 형식의 파일만 업로드 가능합니다";
      case "duration":
        return "3분 이하의 영상만 업로드 가능합니다";
      default:
        return "";
    }
  };

  const getErrorFileName = () => {
    switch (errorState) {
      case "size":
        return "홍보영상_최종.mp4";
      case "format":
        return "홍보영상_최종.avi";
      case "duration":
        return "홍보영상_최종.mp4";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-[1440px] h-[900px] bg-gray-50 overflow-hidden flex">
      {/* Left Sidebar */}
      <div className="w-[220px] h-[900px] bg-[#1e293b] flex flex-col">
        <div className="h-[60px] flex items-center justify-center border-b border-white/10">
          <span className="text-white text-lg font-bold">ACCESS CONTROL</span>
        </div>
        <nav className="flex-1 p-4">
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            실시간 모니터
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            출입 기록
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            사용자 관리
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            기기 관리
          </div>
          <div className="px-4 py-3 mb-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer text-sm">
            검교정 관리
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-3 mb-2">
            <span className="text-white text-sm font-medium">콘텐츠 관리</span>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-center px-6 relative">
          {/* Back Button - Positioned Absolutely Left */}
          <button
            className="absolute left-6 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all"
            style={{
              color: "var(--color-action-secondary)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            뒤로
          </button>

          {/* Centered Title */}
          <h1 className="text-2xl font-bold">영상 업로드</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto flex flex-col">
          {hasFile ? (
            <>
              {/* File Preview Card */}
              <div
                className="w-full bg-white p-6 mb-2 relative"
                style={{
                  height: "200px",
                  border: "1px solid var(--color-border-default)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex items-center gap-6 h-full">
                  {/* Video Thumbnail Placeholder */}
                  <div
                    className="bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ width: "240px", height: "135px" }}
                  >
                    <FileVideo className="w-16 h-16 text-gray-400" />
                  </div>

                  {/* File Info */}
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold mb-2" style={{ fontSize: "16pt" }}>
                      홍보영상_최종.mp4
                    </h3>
                    <p className="text-gray-500" style={{ fontSize: "14pt" }}>
                      245MB · 1분 32초
                    </p>
                  </div>
                </div>

                {/* Green Checkmark Badge */}
                <CheckCircle
                  className="absolute top-4 right-4"
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--color-status-allow-text)",
                    fill: "currentColor",
                  }}
                />
              </div>

              {uploadProgress !== null ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div
                      className="w-full bg-gray-200 rounded-full overflow-hidden"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${uploadProgress}%`,
                          backgroundColor: "var(--color-action-primary)",
                        }}
                      />
                    </div>
                    <div className="flex justify-end mt-2">
                      <p
                        style={{
                          fontSize: "14pt",
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        업로드 중... {uploadProgress}%
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* File Spec Note */}
                  <p
                    className="text-gray-400 text-center mb-8"
                    style={{ fontSize: "14pt" }}
                  >
                    MP4 · 최대 500MB · 최대 3분
                  </p>
                </>
              )}
            </>
          ) : errorState ? (
            <>
              {/* Upload Drop Zone with Error */}
              <div
                className="w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50/50 transition-colors mb-2"
                style={{
                  height: "200px",
                  border: `2px dashed var(--color-action-danger)`,
                  borderRadius: "12px",
                }}
              >
                <Upload
                  className="mb-4"
                  style={{
                    width: "48px",
                    height: "48px",
                    color: "var(--color-action-danger)",
                  }}
                />
                <p
                  className="font-medium"
                  style={{
                    fontSize: "16pt",
                    color: "var(--color-action-danger)",
                  }}
                >
                  {getErrorFileName()}
                </p>
              </div>

              {/* Error Message */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <AlertTriangle
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "var(--color-action-danger)",
                  }}
                />
                <p
                  className="font-medium"
                  style={{
                    fontSize: "14pt",
                    color: "var(--color-action-danger)",
                  }}
                >
                  {getErrorMessage()}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Upload Drop Zone */}
              <div
                className="w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50/50 transition-colors mb-2"
                style={{
                  height: "200px",
                  border: "2px dashed var(--color-border-default)",
                  borderRadius: "12px",
                }}
              >
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-gray-500" style={{ fontSize: "16pt" }}>
                  파일을 드래그하거나 클릭하여 선택하세요
                </p>
              </div>

              {/* File Spec Note */}
              <p
                className="text-gray-400 text-center mb-8"
                style={{ fontSize: "14pt" }}
              >
                MP4 · 최대 500MB · 최대 3분
              </p>
            </>
          )}

          {/* Form Section */}
          <div className="max-w-2xl mx-auto w-full space-y-6">
            {/* Date Range Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                유효 기간
              </label>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: "var(--color-border-default)",
                      color: "#111827",
                    }}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <span className="text-gray-500">~</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: "var(--color-border-default)",
                      color: "#111827",
                    }}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mute Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                음소거
              </label>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                style={{
                  backgroundColor: isMuted
                    ? "var(--color-action-primary)"
                    : "#d1d5db",
                }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isMuted ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Spacer to push buttons to bottom */}
          <div className="flex-1"></div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-between pt-6 max-w-2xl mx-auto w-full">
            <button
              className="px-6 py-3 text-sm font-medium text-white rounded-lg hover:brightness-95 transition-all"
              style={{
                backgroundColor: "var(--color-action-secondary)",
              }}
            >
              취소
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium text-white rounded-lg transition-all ${
                hasFile && uploadProgress === null ? "hover:brightness-95" : "cursor-not-allowed"
              }`}
              style={{
                backgroundColor: "var(--color-action-primary)",
                opacity: hasFile && uploadProgress === null ? 1 : 0.4,
              }}
              disabled={!hasFile || uploadProgress !== null}
            >
              {uploadProgress !== null ? "업로드 중" : "업로드"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
