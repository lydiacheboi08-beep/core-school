import { Calculator, Calendar, FileText, PieChart, Clock, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const tools = [
  {
    id: 1,
    name: 'Grade Calculator',
    description: 'Calculate your GPA and track academic performance',
    icon: Calculator,
    category: 'Academic',
    color: 'bg-school-primary'
  },
  {
    id: 2,
    name: 'Assignment Tracker',
    description: 'Keep track of deadlines and assignments',
    icon: FileText,
    category: 'Productivity',
    color: 'bg-school-info'
  },
  {
    id: 3,
    name: 'Study Schedule',
    description: 'Plan your study sessions and manage time effectively',
    icon: Calendar,
    category: 'Planning',
    color: 'bg-school-success'
  },
  {
    id: 4,
    name: 'Progress Analytics',
    description: 'Visualize your learning progress with charts',
    icon: PieChart,
    category: 'Analytics',
    color: 'bg-school-warning'
  },
  {
    id: 5,
    name: 'Pomodoro Timer',
    description: 'Focus with timed study sessions',
    icon: Clock,
    category: 'Focus',
    color: 'bg-destructive'
  },
  {
    id: 6,
    name: 'Note Organizer',
    description: 'Organize and categorize your study notes',
    icon: BookOpen,
    category: 'Organization',
    color: 'bg-school-primary'
  }
];

export default function Tools() {
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  return (
    <div className={cn('p-6 space-y-6', isMatrixTheme && 'matrix-grid')}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className={cn(
            'text-3xl font-bold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Educational Tools
          </h1>
          <p className={cn(
            'text-muted-foreground mt-2',
            isMatrixTheme && 'matrix-font'
          )}>
            Enhance your learning experience with these productivity tools
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.id} className={cn(
            'school-card hover:shadow-md transition-shadow cursor-pointer',
            isMatrixTheme && 'bg-card/30 border-primary/30 hover:border-primary/50'
          )}>
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className={cn(
                  'p-3 rounded-lg text-white',
                  tool.color,
                  isMatrixTheme && 'bg-primary/30 border border-primary/50'
                )}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className={cn(
                    'font-semibold text-lg',
                    isMatrixTheme && 'matrix-font text-primary'
                  )}>
                    {tool.name}
                  </h3>
                  <span className={cn(
                    'text-xs text-muted-foreground',
                    isMatrixTheme && 'matrix-font'
                  )}>
                    {tool.category}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className={cn(
                'text-sm text-muted-foreground mb-4',
                isMatrixTheme && 'matrix-font'
              )}>
                {tool.description}
              </p>
              <Button 
                variant="outline" 
                className={cn(
                  'w-full',
                  isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                )}
              >
                Launch Tool
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  12
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Tools Used This Week
                </p>
              </div>
              <div className={cn(
                'p-2 bg-school-primary/20 rounded-lg',
                isMatrixTheme && 'bg-primary/20 border border-primary/30'
              )}>
                <Calculator className="h-4 w-4 text-school-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  3.8
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Current GPA
                </p>
              </div>
              <div className={cn(
                'p-2 bg-school-success/20 rounded-lg',
                isMatrixTheme && 'bg-primary/20 border border-primary/30'
              )}>
                <PieChart className="h-4 w-4 text-school-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  24h
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Study Time This Week
                </p>
              </div>
              <div className={cn(
                'p-2 bg-school-info/20 rounded-lg',
                isMatrixTheme && 'bg-primary/20 border border-primary/30'
              )}>
                <Clock className="h-4 w-4 text-school-info" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}