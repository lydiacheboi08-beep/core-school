import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  BookOpen,
  MessageSquare,
  Search,
  Library,
  User,
  Home,
  Wrench,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const navigation = [
  { name: 'Feeds', href: '/feeds', icon: Home },
  { name: 'Tools', href: '/tools', icon: Wrench },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Library', href: '/library', icon: Library },
  { name: 'Profile', href: '/profile', icon: User },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const isMatrixTheme = theme === 'matrix';

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen transition-all duration-300',
        'bg-sidebar border-r border-sidebar-border',
        collapsed ? 'w-16' : 'w-64',
        isMatrixTheme && 'matrix-grid'
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className={cn('flex items-center space-x-2', collapsed && 'justify-center w-full')}>
            <BookOpen className={cn('h-6 w-6 text-primary', isMatrixTheme && 'matrix-font')} />
            {!collapsed && (
              <span className={cn('text-lg font-semibold', isMatrixTheme && 'matrix-font')}>
                CoreSchool
              </span>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-sidebar-accent transition-colors"
          >
            {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2 pb-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
                           (item.href === '/feeds' && location.pathname === '/');
            
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                  'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  isActive 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                    : 'text-sidebar-foreground',
                  isMatrixTheme && 'matrix-font'
                )}
              >
                <item.icon
                  className={cn(
                    'flex-shrink-0 h-5 w-5',
                    collapsed ? 'mx-auto' : 'mr-3'
                  )}
                />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}