import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Navigation/Sidebar';
import { Navbar } from '@/components/Navigation/Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cn(
      'min-h-screen bg-background transition-colors duration-300',
      isMatrixTheme && 'matrix-grid'
    )}>
      <Sidebar />
      
      <div className={cn(
        'transition-all duration-300',
        sidebarOpen ? 'ml-64' : 'ml-16'
      )}>
        <Navbar />
        
        <main className="min-h-[calc(100vh-3.5rem)] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}