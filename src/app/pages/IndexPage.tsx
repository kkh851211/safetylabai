import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sitemap.css';

interface PageItem {
  name: string;
  path: string;
  fullUrl: string;
  category: string;
  code: string;
  type: 'primary' | 'secondary' | 'caution';
}

const IndexPage: React.FC = () => {
  // Scan all files in pages including subdirectories
  const pages = import.meta.glob<{ title?: string }>('../pages/**/*.tsx', { eager: true });
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  
  const allPages: PageItem[] = Object.keys(pages)
    .map((path) => {
      const parts = path.split('/');
      const fileName = parts.pop()?.replace('.tsx', '') || '';
      
      const categoryParts = parts.filter(p => p !== '.' && p !== '..' && p !== 'pages');
      const category = categoryParts.length > 0 ? categoryParts[categoryParts.length - 1] : 'Main';
      
      const fullTitle = pages[path]?.title || fileName;
      
      // Extract code and clean name (e.g., "K-1-02 개인정보 동의" -> "K-1-02", "개인정보 동의")
      const codeMatch = fullTitle.match(/^([A-Z0-9-]+)\s+(.*)$/);
      const code = codeMatch ? codeMatch[1] : '';
      const name = codeMatch ? codeMatch[2] : fullTitle;

      // Assign type based on category or code for styling variety
      let type: 'primary' | 'secondary' | 'caution' = 'secondary';
      if (category.toLowerCase() === 'kiosk' || code.startsWith('K')) type = 'primary';
      if (fileName.toLowerCase().includes('notice') || fileName.toLowerCase().includes('error')) type = 'caution';
      
      return {
        name,
        code,
        path: `/${fileName}`,
        fullUrl: `${base}/${fileName}`.replace(/\/+/g, '/'),
        category: category,
        type
      };
    })
    .filter(page => {
      const isSystemPage = page.name === 'IndexPage' || page.name === 'index' || page.path === '/IndexPage';
      const isComponent = page.category.toLowerCase().includes('component') || 
                          page.path.toLowerCase().includes('component');
      return !isSystemPage && !isComponent;
    })
    .sort((a, b) => {
      if (a.code && b.code) return a.code.localeCompare(b.code, undefined, { numeric: true });
      return a.name.localeCompare(b.name);
    });

  // Group pages by category AND then by code
  const groupedByCategory = allPages.reduce((acc, page) => {
    const cat = page.category === 'Main' ? '기본 페이지' : page.category;
    if (!acc[cat]) acc[cat] = {};
    
    const code = page.code || page.name;
    if (!acc[cat][code]) acc[cat][code] = [];
    acc[cat][code].push(page);
    return acc;
  }, {} as Record<string, Record<string, PageItem[]>>);

  const categories = Object.keys(groupedByCategory);

  return (
    <div className="sitemap-container">
      <header className="sitemap-header">
        <h1 className="sitemap-title">세이프티랩 키오스크 프로젝트 사이트맵</h1>
        <p className="text-slate-500 mt-2 font-medium">SafetyLab Kiosk System Architecture & Sitemap</p>
      </header>

      <div className="sitemap-grid">
        {categories.map((category) => (
          <div key={category} className="sitemap-row">
            {/* Category Header */}
            <div className="sitemap-category">
              {category.toUpperCase()}
            </div>

            {/* Page Nodes Tree */}
            <div className="sitemap-tree">
              {Object.keys(groupedByCategory[category]).map((code) => {
                const group = groupedByCategory[category][code];
                const isGroup = group.length > 1;

                return (
                  <div key={code} className={`sitemap-group ${isGroup ? 'multi-state' : ''}`}>
                    {group.map((page, idx) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`sitemap-node ${page.type} ${isGroup ? 'state-node' : ''}`}
                      >
                        <div className="node-header">
                          {page.code && <span className="node-code">{page.code}{isGroup && `-${idx+1}`}</span>}
                          <span className="node-title">{page.name}</span>
                        </div>
                        <div className="node-path">{page.path}.tsx</div>
                        {isGroup && idx < group.length - 1 && <div className="state-connector" />}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative dots background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] -z-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }} 
        />
      </div>
    </div>
  );
};

export default IndexPage;
