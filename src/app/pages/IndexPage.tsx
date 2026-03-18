import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => {
  // Logic to get all files in src/app/pages
  // In a real scenario, this would be dynamic. 
  // For now, we'll use Vite's import.meta.glob to find files in ../pages/
  const pages = import.meta.glob('../pages/*.tsx');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pageNames = Object.keys(pages)
    .map((path) => {
      const name = path.split('/').pop()?.replace('.tsx', '') || '';
      return {
        name,
        path: `/${name}`,
        fullUrl: `${base}/${name}`.replace(/\/+/g, '/'),
      };
    })
    .filter(page => page.name !== 'IndexPage');

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
          Safety Lab AI Kiosk
        </h1>
        <p className="text-secondary-dark text-lg">Screen Navigation Index</p>
      </header>

      {pageNames.length === 0 ? (
        <div className="text-center py-20 glass-card">
          <p className="text-secondary-dark mb-4">No screens found in src/app/pages/</p>
          <p className="text-sm text-secondary">Add .tsx files to the pages directory to see them here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageNames.map((page) => (
            <Link 
              key={page.path} 
              to={page.path}
              className="glass-card p-6 group hover:translate-y-[-4px] hover:shadow-2xl transition-all border-l-4 border-l-primary"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {page.name}
              </h3>
              <p className="text-xs font-mono text-secondary mb-4">
                Internal: {page.path}<br/>
                URL: {page.fullUrl}
              </p>
              <div className="flex justify-end">
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  View Screen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexPage;
