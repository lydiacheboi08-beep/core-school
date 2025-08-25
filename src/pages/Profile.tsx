import { Edit, Award, BookOpen, Clock, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const courses = [
  {
    id: 1,
    name: 'Quantum Mechanics',
    professor: 'Dr. Sarah Johnson',
    progress: 85,
    grade: 'A-',
    status: 'In Progress'
  },
  {
    id: 2,
    name: 'Machine Learning',
    professor: 'Prof. Michael Chen',
    progress: 92,
    grade: 'A+',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Advanced Mathematics',
    professor: 'Dr. Emily Rodriguez',
    progress: 67,
    grade: 'B+',
    status: 'In Progress'
  }
];

const achievements = [
  {
    id: 1,
    title: 'Honor Roll',
    description: 'Maintained GPA above 3.8 for 3 consecutive semesters',
    date: 'December 2023',
    type: 'Academic'
  },
  {
    id: 2,
    title: 'Research Excellence',
    description: 'Published paper on quantum computing algorithms',
    date: 'November 2023',
    type: 'Research'
  },
  {
    id: 3,
    title: 'Leadership Award',
    description: 'Led successful study group initiative',
    date: 'October 2023',
    type: 'Leadership'
  }
];

const schedule = [
  { time: '09:00', course: 'Quantum Mechanics', room: 'Physics Lab A' },
  { time: '11:00', course: 'Machine Learning', room: 'CS Building 201' },
  { time: '14:00', course: 'Advanced Mathematics', room: 'Math Hall 305' },
  { time: '16:00', course: 'Study Group - Physics', room: 'Library Room 12' }
];

export default function Profile() {
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  return (
    <div className={cn('p-6 space-y-6', isMatrixTheme && 'matrix-grid')}>
      {/* Profile Header */}
      <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/api/placeholder/96/96" />
              <AvatarFallback className={cn(
                'text-2xl font-bold',
                isMatrixTheme && 'matrix-font bg-primary/20 text-primary'
              )}>
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className={cn(
                    'text-3xl font-bold',
                    isMatrixTheme && 'matrix-font text-primary'
                  )}>
                    Jane Doe
                  </h1>
                  <p className={cn(
                    'text-muted-foreground text-lg',
                    isMatrixTheme && 'matrix-font'
                  )}>
                    Computer Science Student
                  </p>
                  <p className={cn(
                    'text-sm text-muted-foreground',
                    isMatrixTheme && 'matrix-font'
                  )}>
                    Student ID: CS2024001 • Junior Year
                  </p>
                </div>
                <Button
                  variant="outline"
                  className={cn(
                    'mt-4 md:mt-0',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className={cn(isMatrixTheme && 'matrix-font bg-primary/70 text-primary-foreground')}>
                  Dean's List
                </Badge>
                <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                  Research Assistant
                </Badge>
                <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                  Study Group Leader
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  3.85
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Current GPA
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-school-success" />
            </div>
          </CardContent>
        </Card>

        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  24
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Credits Completed
                </p>
              </div>
              <BookOpen className="h-8 w-8 text-school-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  156h
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Study Hours
                </p>
              </div>
              <Clock className="h-8 w-8 text-school-info" />
            </div>
          </CardContent>
        </Card>

        <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={cn(
                  'text-2xl font-bold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  8
                </p>
                <p className={cn(
                  'text-xs text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  Achievements
                </p>
              </div>
              <Award className="h-8 w-8 text-school-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className={cn('grid w-full grid-cols-4', isMatrixTheme && 'matrix-font')}>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <h2 className={cn(
            'text-xl font-semibold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Current Courses
          </h2>
          <div className="grid gap-4">
            {courses.map((course) => (
              <Card key={course.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold text-lg',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {course.name}
                      </h3>
                      <p className={cn(
                        'text-muted-foreground',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {course.professor}
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className={cn(isMatrixTheme && 'matrix-font')}>
                            Progress: {course.progress}%
                          </span>
                          <span className={cn(isMatrixTheme && 'matrix-font')}>
                            Current Grade: {course.grade}
                          </span>
                        </div>
                        <Progress 
                          value={course.progress} 
                          className={cn(
                            'w-full',
                            isMatrixTheme && '[&>div]:bg-primary/70'
                          )} 
                        />
                      </div>
                    </div>
                    <Badge
                      variant={course.status === 'Completed' ? 'default' : 'secondary'}
                      className={cn(
                        'ml-4',
                        isMatrixTheme && 'matrix-font',
                        course.status === 'Completed' ? 'bg-primary/70' : ''
                      )}
                    >
                      {course.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <h2 className={cn(
            'text-xl font-semibold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Achievements & Awards
          </h2>
          <div className="grid gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      'p-3 bg-school-warning/20 rounded-lg',
                      isMatrixTheme && 'bg-primary/20 border border-primary/30'
                    )}>
                      <Award className="h-6 w-6 text-school-warning" />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {achievement.title}
                      </h3>
                      <p className={cn(
                        'text-sm text-muted-foreground mt-1',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {achievement.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                          {achievement.type}
                        </Badge>
                        <span className={cn(
                          'text-xs text-muted-foreground',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <h2 className={cn(
            'text-xl font-semibold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Today's Schedule
          </h2>
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <Card key={index} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      'p-2 bg-school-primary/20 rounded-lg',
                      isMatrixTheme && 'bg-primary/20 border border-primary/30'
                    )}>
                      <Calendar className="h-5 w-5 text-school-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={cn(
                          'font-semibold',
                          isMatrixTheme && 'matrix-font text-primary'
                        )}>
                          {item.course}
                        </h3>
                        <span className={cn(
                          'font-mono text-sm',
                          isMatrixTheme && 'matrix-font text-primary'
                        )}>
                          {item.time}
                        </span>
                      </div>
                      <p className={cn(
                        'text-sm text-muted-foreground',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {item.room}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <h2 className={cn(
            'text-xl font-semibold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Account Settings
          </h2>
          <div className="grid gap-4">
            <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
              <CardHeader>
                <h3 className={cn(
                  'font-semibold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  Personal Information
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  Update Contact Information
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  Change Password
                </Button>
              </CardContent>
            </Card>

            <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
              <CardHeader>
                <h3 className={cn(
                  'font-semibold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  Notifications
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  Email Preferences
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  Push Notifications
                </Button>
              </CardContent>
            </Card>

            <Card className={cn('school-card', isMatrixTheme && 'bg-card/30 border-primary/30')}>
              <CardHeader>
                <h3 className={cn(
                  'font-semibold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  Privacy & Security
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  Privacy Settings
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start',
                    isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                  )}
                >
                  Two-Factor Authentication
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}