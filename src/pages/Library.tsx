import { useState } from 'react';
import { BookOpen, FileText, Download, Star, Filter, Grid, List } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const libraryItems = {
  textbooks: [
    {
      id: 1,
      title: 'Introduction to Quantum Mechanics',
      author: 'David J. Griffiths',
      cover: '/api/placeholder/120/160',
      pages: 468,
      rating: 4.8,
      category: 'Physics',
      format: 'PDF',
      size: '15.2 MB',
      available: true
    },
    {
      id: 2,
      title: 'Artificial Intelligence: A Modern Approach',
      author: 'Stuart Russell, Peter Norvig',
      cover: '/api/placeholder/120/160',
      pages: 1152,
      rating: 4.9,
      category: 'Computer Science',
      format: 'PDF',
      size: '28.5 MB',
      available: true
    }
  ],
  research: [
    {
      id: 1,
      title: 'Quantum Computing Algorithms',
      author: 'Dr. Alice Johnson',
      type: 'Research Paper',
      published: '2024',
      citations: 145,
      category: 'Quantum Physics',
      format: 'PDF',
      size: '2.8 MB'
    },
    {
      id: 2,
      title: 'Machine Learning in Healthcare',
      author: 'Prof. Michael Chen',
      type: 'Journal Article',
      published: '2023',
      citations: 89,
      category: 'AI/ML',
      format: 'PDF',
      size: '1.9 MB'
    }
  ],
  resources: [
    {
      id: 1,
      title: 'Physics Lab Manual 2024',
      author: 'Physics Department',
      type: 'Manual',
      updated: 'Last week',
      category: 'Laboratory',
      format: 'PDF',
      size: '5.1 MB'
    },
    {
      id: 2,
      title: 'Programming Style Guide',
      author: 'CS Department',
      type: 'Guide',
      updated: '2 weeks ago',
      category: 'Programming',
      format: 'PDF',
      size: '1.2 MB'
    }
  ]
};

const categories = ['All', 'Physics', 'Computer Science', 'Mathematics', 'Chemistry', 'Biology'];

export default function Library() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  return (
    <div className={cn('p-6 space-y-6', isMatrixTheme && 'matrix-grid')}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={cn(
            'text-3xl font-bold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Digital Library
          </h1>
          <p className={cn(
            'text-muted-foreground mt-2',
            isMatrixTheme && 'matrix-font'
          )}>
            Access textbooks, research papers, and educational resources
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
            className={cn(isMatrixTheme && 'matrix-font')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
            className={cn(isMatrixTheme && 'matrix-font')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search books, papers, and resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(isMatrixTheme && 'matrix-font bg-input/50 border-primary/30')}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className={cn(isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20')}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={cn(
              'cursor-pointer',
              isMatrixTheme && 'matrix-font',
              selectedCategory === category 
                ? 'bg-primary text-primary-foreground'
                : 'border-primary/50 hover:bg-primary/20'
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="textbooks" className="w-full">
        <TabsList className={cn('grid w-full grid-cols-3', isMatrixTheme && 'matrix-font')}>
          <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
          <TabsTrigger value="research">Research Papers</TabsTrigger>
          <TabsTrigger value="resources">Study Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="textbooks" className="space-y-4">
          <div className={cn(
            'grid gap-6',
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          )}>
            {libraryItems.textbooks.map((book) => (
              <Card key={book.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                {viewMode === 'grid' ? (
                  <>
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">
                        <div className={cn(
                          'w-20 h-28 bg-school-surface-variant rounded-md flex items-center justify-center',
                          isMatrixTheme && 'bg-primary/20 border border-primary/30'
                        )}>
                          <BookOpen className="h-8 w-8 text-muted-foreground" />
                        </div>
                      </div>
                      <h3 className={cn(
                        'font-semibold text-center',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {book.title}
                      </h3>
                      <p className={cn(
                        'text-sm text-muted-foreground text-center',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {book.author}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className={cn(
                          'flex items-center text-muted-foreground',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          <Star className="h-3 w-3 mr-1 text-yellow-500" />
                          {book.rating}
                        </span>
                        <Badge variant="secondary" className={cn(isMatrixTheme && 'matrix-font')}>
                          {book.category}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className={cn(isMatrixTheme && 'matrix-font')}>
                          {book.pages} pages
                        </span>
                        <span className={cn(isMatrixTheme && 'matrix-font')}>
                          {book.format} • {book.size}
                        </span>
                      </div>
                      <Button 
                        className={cn(
                          'w-full school-button-primary',
                          isMatrixTheme && 'matrix-font bg-primary/70 hover:bg-primary border border-primary'
                        )}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        'w-16 h-20 bg-school-surface-variant rounded-md flex items-center justify-center flex-shrink-0',
                        isMatrixTheme && 'bg-primary/20 border border-primary/30'
                      )}>
                        <BookOpen className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className={cn(
                          'font-semibold',
                          isMatrixTheme && 'matrix-font text-primary'
                        )}>
                          {book.title}
                        </h3>
                        <p className={cn(
                          'text-sm text-muted-foreground',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          {book.author}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                          <span className={cn(
                            'flex items-center',
                            isMatrixTheme && 'matrix-font'
                          )}>
                            <Star className="h-3 w-3 mr-1 text-yellow-500" />
                            {book.rating}
                          </span>
                          <span className={cn(isMatrixTheme && 'matrix-font')}>
                            {book.pages} pages
                          </span>
                          <Badge variant="secondary" className={cn(isMatrixTheme && 'matrix-font')}>
                            {book.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        className={cn(
                          'school-button-primary',
                          isMatrixTheme && 'matrix-font bg-primary/70 hover:bg-primary border border-primary'
                        )}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <div className="grid gap-4">
            {libraryItems.research.map((paper) => (
              <Card key={paper.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      'p-3 bg-school-primary/20 rounded-lg',
                      isMatrixTheme && 'bg-primary/20 border border-primary/30'
                    )}>
                      <FileText className="h-6 w-6 text-school-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold text-lg',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {paper.title}
                      </h3>
                      <p className={cn(
                        'text-muted-foreground',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {paper.author} • {paper.type} • {paper.published}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <span className={cn(isMatrixTheme && 'matrix-font')}>
                          {paper.citations} citations
                        </span>
                        <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                          {paper.category}
                        </Badge>
                        <span className={cn(isMatrixTheme && 'matrix-font')}>
                          {paper.format} • {paper.size}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className={cn(
                        isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                      )}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4">
            {libraryItems.resources.map((resource) => (
              <Card key={resource.id} className={cn(
                'school-card',
                isMatrixTheme && 'bg-card/30 border-primary/30'
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      'p-3 bg-school-success/20 rounded-lg',
                      isMatrixTheme && 'bg-primary/20 border border-primary/30'
                    )}>
                      <BookOpen className="h-6 w-6 text-school-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-semibold text-lg',
                        isMatrixTheme && 'matrix-font text-primary'
                      )}>
                        {resource.title}
                      </h3>
                      <p className={cn(
                        'text-muted-foreground',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {resource.author} • {resource.type} • Updated {resource.updated}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <Badge variant="outline" className={cn(isMatrixTheme && 'matrix-font')}>
                          {resource.category}
                        </Badge>
                        <span className={cn(isMatrixTheme && 'matrix-font')}>
                          {resource.format} • {resource.size}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className={cn(
                        isMatrixTheme && 'matrix-font border-primary/50 bg-primary/10 hover:bg-primary/20'
                      )}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
        <div className={cn(
          'text-center p-4 bg-school-surface rounded-lg',
          isMatrixTheme && 'bg-card/20 border border-primary/30'
        )}>
          <p className={cn(
            'text-2xl font-bold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            2,847
          </p>
          <p className={cn(
            'text-sm text-muted-foreground',
            isMatrixTheme && 'matrix-font'
          )}>
            Available Books
          </p>
        </div>
        <div className={cn(
          'text-center p-4 bg-school-surface rounded-lg',
          isMatrixTheme && 'bg-card/20 border border-primary/30'
        )}>
          <p className={cn(
            'text-2xl font-bold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            456
          </p>
          <p className={cn(
            'text-sm text-muted-foreground',
            isMatrixTheme && 'matrix-font'
          )}>
            Research Papers
          </p>
        </div>
        <div className={cn(
          'text-center p-4 bg-school-surface rounded-lg',
          isMatrixTheme && 'bg-card/20 border border-primary/30'
        )}>
          <p className={cn(
            'text-2xl font-bold',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            128
          </p>
          <p className={cn(
            'text-sm text-muted-foreground',
            isMatrixTheme && 'matrix-font'
          )}>
            Study Resources
          </p>
        </div>
      </div>
    </div>
  );
}