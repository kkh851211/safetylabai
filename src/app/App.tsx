import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

// Dynamically import all pages
const pages = import.meta.glob('./pages/*.tsx');

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-[var(--background)]">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          {Object.entries(pages).map(([path, importFn]) => {
            const name = path.split('/').pop()?.replace('.tsx', '') || '';
            if (name === 'IndexPage') return null;
            
            const Component = lazy(importFn as any);
            
            return (
              <Route 
                key={name} 
                path={`/${name}`} 
                element={
                  <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                    <Component />
                  </Suspense>
                } 
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
