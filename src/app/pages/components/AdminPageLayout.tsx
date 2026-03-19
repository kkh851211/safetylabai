import React from 'react';

interface AdminPageLayoutProps {
  children: React.ReactNode;
}

export const AdminPageLayout: React.FC<AdminPageLayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-start overflow-auto py-10 px-10"
      style={{ backgroundColor: '#FFFFFF', color: '#111827', colorScheme: 'light' }}
    >
      {/* Container for the 1440x900 dashboard */}
      <div 
        className="shadow-2xl relative overflow-hidden bg-white" 
        style={{ 
          width: '1440px', 
          height: '900px', 
          transform: 'scale(0.8)', 
          transformOrigin: 'top left',
          marginBottom: '-180px' // Offset the scale gap
        }}
      >
        {children}
      </div>
    </div>
  );
};
