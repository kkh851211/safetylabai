import { KioskIdleScreen } from "./components/kiosk-idle-screen";
export const title = "K-1-01 대기 화면 (광고 영상) - 영상 재생 중";

export default function KioskIdlePage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 overflow-auto py-10">
      <div className="transform origin-top scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.8] xl:scale-100 transition-transform duration-300">
        <KioskIdleScreen />
      </div>
    </div>
  );
}
