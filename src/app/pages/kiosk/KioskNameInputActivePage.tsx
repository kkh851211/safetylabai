import React from 'react';
import KioskPageLayout from '../../components/KioskPageLayout';
import { KioskNameInputActiveScreen } from '../../components/kiosk-name-input-active-screen';

const KioskNameInputActivePage: React.FC = () => {
  return (
    <KioskPageLayout>
      <KioskNameInputActiveScreen />
    </KioskPageLayout>
  );
};

export default KioskNameInputActivePage;
