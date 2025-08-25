import { MessageSquare, Heart, Share, Clock, Pin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const posts = [
  {
    id: 1,
    author: 'Dr. Sarah Johnson',
    avatar: '/api/placeholder/40/40',
    role: 'Physics Professor',
    time: '2 hours ago',
    content: 'New quantum mechanics lab materials are now available in the library. Don\'t forget to check out the interactive simulations for better understanding of wave-particle duality.',
    likes: 24,
    comments: 8,
    isPinned: true,
    tags: ['Physics', 'Lab', 'Resources']
  },
  {
    id: 2,
    author: 'Student Council',
    avatar: '/api/placeholder/40/40',
    role: 'Official',
    time: '4 hours ago',
    content: 'Reminder: Mid-term exams start next week. Study groups are forming in the library. Good luck everyone! 📚✨',
    likes: 156,
    comments: 23,
    isPinned: false,
    tags: ['Announcement', 'Exams']
  },
  {
    id: 3,
    author: 'Alex Chen',
    avatar: '/api/placeholder/40/40',
    role: 'Computer Science Student',
    time: '6 hours ago',
    content: 'Just finished implementing a neural network for my AI project. The results are fascinating! Anyone interested in collaborating on machine learning research?',
    likes: 42,
    comments: 15,
    isPinned: false,
    tags: ['AI', 'Project', 'Collaboration']
  }
];

export default function Feeds() {
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  return (
    <div className={cn('p-6 space-y-6', isMatrixTheme && 'matrix-grid')}>
      <div className="flex items-center justify-between">
        <h1 className={cn(
          'text-3xl font-bold',
          isMatrixTheme && 'matrix-font text-primary'
        )}>
          Feeds & Announcements
        </h1>
        <Button className={cn(
          'school-button-primary',
          isMatrixTheme && 'matrix-font border border-primary/50 bg-primary/20 hover:bg-primary/30'
        )}>
          New Post
        </Button>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className={cn(
            'school-card',
            post.isPinned && 'ring-2 ring-school-primary/20',
            isMatrixTheme && 'bg-card/30 border-primary/30'
          )}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback className={cn(isMatrixTheme && 'matrix-font')}>
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className={cn(
                        'font-semibold',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {post.author}
                      </h3>
                      {post.isPinned && (
                        <Pin className="h-4 w-4 text-school-primary" />
                      )}
                    </div>
                    <p className={cn(
                      'text-sm text-muted-foreground',
                      isMatrixTheme && 'matrix-font'
                    )}>
                      {post.role}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span className={cn(isMatrixTheme && 'matrix-font')}>{post.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className={cn(
                'text-sm leading-relaxed',
                isMatrixTheme && 'matrix-font'
              )}>
                {post.content}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className={cn(
                      'text-xs',
                      isMatrixTheme && 'matrix-font bg-primary/20 text-primary border-primary/30'
                    )}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'text-muted-foreground hover:text-foreground',
                      isMatrixTheme && 'matrix-font hover:bg-primary/20'
                    )}
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'text-muted-foreground hover:text-foreground',
                      isMatrixTheme && 'matrix-font hover:bg-primary/20'
                    )}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {post.comments}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'text-muted-foreground hover:text-foreground',
                    isMatrixTheme && 'matrix-font hover:bg-primary/20'
                  )}
                >
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}