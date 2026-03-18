import { KioskIdleScreen } from "./components/kiosk-idle-screen";
export const title = "키오스크 대기 화면";

export default function KioskIdlePage() {
  return (
    <div className="size-full min-h-screen flex items-center justify-center bg-black">
      <KioskIdleScreen />
    </div>
  );
}
