import React from 'react';
import { KioskPageLayout } from '../components/KioskPageLayout';
import { KioskNameInputActiveScreen } from '../components/kiosk-name-input-active-screen';
 
export const title = "K-2-02 수동 이름 입력 - 입력 중 (확인 버튼 활성화)";

const KioskNameInputActivePage: React.FC = () => {
  return (
    <KioskPageLayout>
      <KioskNameInputActiveScreen />
    </KioskPageLayout>
  );
};

export default KioskNameInputActivePage;
