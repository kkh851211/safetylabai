import { KioskFaceRecognitionScreen } from "../components/kiosk-face-recognition-screen";

export const title = "K-2-01 얼굴 인식";

export default function KioskFaceRecognitionPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100 overflow-auto py-20">
      {/* Container that maintains the kiosk proportions while being responsive */}
      <div className="bg-white shadow-2xl relative overflow-hidden" 
           style={{ width: '1080px', height: '1920px', transform: 'scale(0.5)', transformOrigin: 'top center', marginBottom: '-960px' }}>
        <KioskFaceRecognitionScreen />
      </div>
    </div>
  );
}
