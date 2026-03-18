import React from 'react';
import { Link } from 'react-router-dom';

interface PageItem {
  name: string;
  path: string;
  fullUrl: string;
  category: string;
}

const IndexPage: React.FC = () => {
  // Scan all files in pages including subdirectories (eager to get exports like 'title')
  const pages = import.meta.glob<{ title?: string }>('../pages/**/*.tsx', { eager: true });
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  
  const allPages: PageItem[] = Object.keys(pages)
    .map((path) => {
      const parts = path.split('/');
      const fileName = parts.pop()?.replace('.tsx', '') || '';
      
      // Get category: look for the directory containing the file
      // Paths from glob look like "../pages/components/file.tsx"
      // After pop(), parts is ["..", "pages", "components"]
      const categoryParts = parts.filter(p => p !== '.' && p !== '..' && p !== 'pages');
      const category = categoryParts.length > 0 ? categoryParts[categoryParts.length - 1] : 'Main';
      
      // Get the exported title or fallback to fileName
      const displayName = pages[path]?.title || fileName;
      
      return {
        name: displayName,
        path: `/${fileName}`,
        fullUrl: `${base}/${fileName}`.replace(/\/+/g, '/'),
        category: category
      };
    })
    .filter(page => {
      const isSystemPage = page.name === 'IndexPage' || page.name === 'index';
      const isComponent = page.category.toLowerCase().includes('component') || 
                          page.path.toLowerCase().includes('component');
      return !isSystemPage && !isComponent;
    });

  // Group pages by category
  const groupedPages = allPages.reduce((acc, page) => {
    if (!acc[page.category]) acc[page.category] = [];
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, PageItem[]>);

  const categories = Object.keys(groupedPages);

  return (
    <div className="p-12 min-h-screen bg-[#F8FAFC]">
      <header className="mb-16">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">세이프티랩 키오스크 프로젝트 사이트맵</h1>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </header>

      <div className="flex flex-col gap-12 relative">
        {categories.map((category, idx) => (
          <div key={category} className="flex items-start group">
            {/* Category Node */}
            <div className="flex-shrink-0 w-48 h-12 flex items-center justify-center bg-slate-800 text-white rounded-md font-bold shadow-lg z-10">
              {category}
            </div>

            {/* Horizontal Line and Nodes */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 ml-12 relative before:content-[''] before:absolute before:left-[-48px] before:top-6 before:w-12 before:h-[2px] before:bg-slate-300">
              {groupedPages[category].map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col min-w-[200px] p-4 bg-white border border-slate-200 rounded shadow-sm hover:shadow-md hover:border-primary transition-all group/node"
                >
                  {/* Small circle connector */}
                  <div className="absolute left-[-25px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover/node:border-primary z-10" />
                  {/* Line to the circle */}
                  <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-5 h-[2px] bg-slate-300 group-hover/node:bg-primary" />
                  
                  <span className="text-[13px] font-bold text-slate-700 group-hover/node:text-primary mb-1">
                    {page.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {page.fullUrl}
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Vertical Line for grouping (only if not last) */}
            {idx < categories.length - 1 && (
              <div className="absolute left-24 top-12 w-[2px] h-12 bg-slate-300 -z-0" />
            )}
          </div>
        ))}
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0066FF_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </div>
  );
};

export default IndexPage;
