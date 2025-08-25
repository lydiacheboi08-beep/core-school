import { useState } from 'react';
import { Search as SearchIcon, Filter, Calendar, FileText, Users, Book } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const searchResults = {
  courses: [
    {
      id: 1,
      title: 'Advanced Physics: Quantum Mechanics',
      professor: 'Dr. Sarah Johnson',
      description: 'Comprehensive study of quantum mechanical principles and applications in modern physics.',
      students: 45,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      professor: 'Prof. Michael Chen',
      description: 'Introduction to ML algorithms, neural networks, and practical applications.',
      students: 67,
      rating: 4.9
    }
  ],
  documents: [
    {
      id: 1,
      title: 'Quantum Mechanics Lab Manual',
      type: 'PDF',
      size: '2.4 MB',
      modified: '2 days ago',
      course: 'Physics 401'
    },
    {
      id: 2,
      title: 'Neural Networks Research Paper',
      type: 'PDF',
      size: '1.8 MB',
      modified: '1 week ago',
      course: 'CS 550'
    }
  ],
  people: [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Physics Professor',
      department: 'Department of Physics',
      expertise: ['Quantum Mechanics', 'Theoretical Physics']
    },
    {
      id: 2,
      name: 'Alex Chen',
      role: 'PhD Student',
      department: 'Computer Science',
      expertise: ['AI', 'Machine Learning', 'Neural Networks']
    }
  ]
};

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  return (
    <div className={cn('p-6 space-y-6', isMatrixTheme && 'matrix-grid')}>
      <div className="space-y-4">
        <h1 className={cn(
          'text-3xl font-bold',
          isMatrixTheme && 'matrix-font text-primary'
        )}>
          Search
        </h1>
        
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for courses, documents, people, or topics..."
              className={cn(
                'pl-9 h-12 text-base',
                isMatrixTheme && 'matrix-font bg-input/50 border-primary/30'
              )}
            />
          </div>
          <Button
            variant="outline"
            className={cn(
              'h-12 px-4',
              isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
            )}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2">
          {['Recent', 'My Courses', 'Documents', 'Assignments', 'People'].map((filter) => (
            <Badge
              key={filter}
              variant="outline"
              className={cn(
                'cursor-pointer hover:bg-muted',
                isMatrixTheme && 'matrix-font border-primary/50 hover:bg-primary/20'
              )}
            >
              {filter}
            </Badge>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className={cn('grid w-full grid-cols-4', isMatrixTheme && 'matrix-font')}>
          <TabsTrigger value="all">All Results</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Courses Section */}
          <div>
            <h2 className={cn(
              'text-xl font-semibold mb-4',
              isMatrixTheme && 'matrix-font text-primary'
            )}>
              Courses
            </h2>
            <div className="grid gap-4">
              {searchResults.courses.map((course) => (
                <Card key={course.id} className={cn(
                  'school-card',
                  isMatrixTheme && 'bg-card/30 border-primary/30'
                )}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className={cn(
                          'font-semibold text-lg mb-1',
                          isMatrixTheme && 'matrix-font text-primary'
                        )}>
                          {course.title}
                        </h3>
                        <p className={cn(
                          'text-sm text-muted-foreground mb-2',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          {course.professor}
                        </p>
                        <p className={cn(
                          'text-sm mb-3',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          {course.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className={cn('flex items-center', isMatrixTheme && 'matrix-font')}>
                            <Users className="h-4 w-4 mr-1" />
                            {course.students} students
                          </span>
                          <span className={cn(isMatrixTheme && 'matrix-font')}>
                            ⭐ {course.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <h2 className={cn(
              'text-xl font-semibold mb-4',
              isMatrixTheme && 'matrix-font text-primary'
            )}>
              Documents
            </h2>
            <div className="grid gap-4">
              {searchResults.documents.map((doc) => (
                <Card key={doc.id} className={cn(
                  'school-card',
                  isMatrixTheme && 'bg-card/30 border-primary/30'
                )}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        'p-2 bg-school-primary/20 rounded-lg',
                        isMatrixTheme && 'bg-primary/20 border border-primary/30'
                      )}>
                        <FileText className="h-6 w-6 text-school-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className={cn(
                          'font-semibold',
                          isMatrixTheme && 'matrix-font text-primary'
                        )}>
                          {doc.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className={cn(isMatrixTheme && 'matrix-font')}>{doc.type} • {doc.size}</span>
                          <span className={cn('flex items-center', isMatrixTheme && 'matrix-font')}>
                            <Calendar className="h-3 w-3 mr-1" />
                            {doc.modified}
                          </span>
                          <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                            {doc.course}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* People Section */}
          <div>
            <h2 className={cn(
              'text-xl font-semibold mb-4',
              isMatrixTheme && 'matrix-font text-primary'
            )}>
              People
            </h2>
            <div className="grid gap-4">
              {searchResults.people.map((person) => (
                <Card key={person.id} className={cn(
                  'school-card',
                  isMatrixTheme && 'bg-card/30 border-primary/30'
                )}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        'p-2 bg-school-info/20 rounded-lg',
                        isMatrixTheme && 'bg-primary/20 border border-primary/30'
                      )}>
                        <Users className="h-6 w-6 text-school-info" />
                      </div>
                      <div className="flex-1">
                        <h3 className={cn(
                          'font-semibold',
                          isMatrixTheme && 'matrix-font text-primary'
                        )}>
                          {person.name}
                        </h3>
                        <p className={cn(
                          'text-sm text-muted-foreground mb-2',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          {person.role} • {person.department}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {person.expertise.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className={cn(
                                'text-xs',
                                isMatrixTheme && 'matrix-font bg-primary/20 text-primary border-primary/30'
                              )}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid gap-4">
            {searchResults.courses.map((course) => (
              <Card key={course.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold text-lg mb-1',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {course.title}
                      </h3>
                      <p className={cn(
                        'text-sm text-muted-foreground mb-2',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {course.professor}
                      </p>
                      <p className={cn(
                        'text-sm mb-3',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {course.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className={cn('flex items-center', isMatrixTheme && 'matrix-font')}>
                          <Users className="h-4 w-4 mr-1" />
                          {course.students} students
                        </span>
                        <span className={cn(isMatrixTheme && 'matrix-font')}>
                          ⭐ {course.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <div className="grid gap-4">
            {searchResults.documents.map((doc) => (
              <Card key={doc.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      'p-2 bg-school-primary/20 rounded-lg',
                      isMatrixTheme && 'bg-primary/20 border border-primary/30'
                    )}>
                      <FileText className="h-6 w-6 text-school-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {doc.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span className={cn(isMatrixTheme && 'matrix-font')}>{doc.type} • {doc.size}</span>
                        <span className={cn('flex items-center', isMatrixTheme && 'matrix-font')}>
                          <Calendar className="h-3 w-3 mr-1" />
                          {doc.modified}
                        </span>
                        <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                          {doc.course}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="people">
          <div className="grid gap-4">
            {searchResults.people.map((person) => (
              <Card key={person.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      'p-2 bg-school-info/20 rounded-lg',
                      isMatrixTheme && 'bg-primary/20 border border-primary/30'
                    )}>
                      <Users className="h-6 w-6 text-school-info" />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {person.name}
                      </h3>
                      <p className={cn(
                        'text-sm text-muted-foreground mb-2',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {person.role} • {person.department}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {person.expertise.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className={cn(
                              'text-xs',
                              isMatrixTheme && 'matrix-font bg-primary/20 text-primary border-primary/30'
                            )}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}