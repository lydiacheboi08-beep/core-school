import { Bell, Settings, Sun, Moon, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  return (
    <header className={cn(
      'sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      isMatrixTheme && 'matrix-grid'
    )}>
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <h1 className={cn(
            'text-xl font-semibold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'relative',
              isMatrixTheme && 'hover:bg-primary/20 matrix-font'
            )}
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full" />
          </Button>

          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(isMatrixTheme && 'hover:bg-primary/20 matrix-font')}
              >
                {theme === 'light' && <Sun className="h-4 w-4" />}
                {theme === 'dark' && <Moon className="h-4 w-4" />}
                {theme === 'matrix' && <Terminal className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={cn(isMatrixTheme && 'matrix-font')}>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('matrix')}>
                <Terminal className="mr-2 h-4 w-4" />
                <span>Matrix</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(isMatrixTheme && 'hover:bg-primary/20 matrix-font')}
          >
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </div>
    </header>
  );
}