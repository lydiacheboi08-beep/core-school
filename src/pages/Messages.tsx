import { useState } from 'react';
import { Send, Phone, Video, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const conversations = [
  {
    id: 1,
    name: 'Study Group - Physics',
    lastMessage: 'Anyone ready for tomorrow\'s exam?',
    time: '2m',
    unread: 3,
    avatar: '/api/placeholder/40/40',
    online: true
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    lastMessage: 'Lab report submissions are due Friday',
    time: '1h',
    unread: 0,
    avatar: '/api/placeholder/40/40',
    online: false
  },
  {
    id: 3,
    name: 'Alex Chen',
    lastMessage: 'Thanks for the AI project help!',
    time: '3h',
    unread: 1,
    avatar: '/api/placeholder/40/40',
    online: true
  }
];

const messages = [
  {
    id: 1,
    sender: 'Emma Wilson',
    content: 'Hey everyone! Did you all finish the quantum mechanics homework?',
    time: '10:30 AM',
    isMe: false
  },
  {
    id: 2,
    sender: 'You',
    content: 'Yeah, I completed it last night. The wave function problems were tricky though.',
    time: '10:32 AM',
    isMe: true
  },
  {
    id: 3,
    sender: 'Mike Rodriguez',
    content: 'I\'m still working on problem 3. Anyone want to discuss it?',
    time: '10:35 AM',
    isMe: false
  },
  {
    id: 4,
    sender: 'You',
    content: 'Sure! Let\'s meet in the library after lunch?',
    time: '10:37 AM',
    isMe: true
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const { theme } = useTheme();
  const isMatrixTheme = theme === 'matrix';

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className={cn('h-full flex', isMatrixTheme && 'matrix-grid')}>
      {/* Conversations List */}
      <div className={cn(
        'w-80 border-r border-border bg-school-surface',
        isMatrixTheme && 'bg-card/20 border-primary/30'
      )}>
        <div className="p-4">
          <h1 className={cn(
            'text-2xl font-bold mb-4',
            isMatrixTheme && 'matrix-font text-primary'
          )}>
            Messages
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className={cn(
                'pl-9',
                isMatrixTheme && 'matrix-font bg-input/50 border-primary/30'
              )}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-1 px-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={cn(
                  'w-full text-left p-3 rounded-lg hover:bg-sidebar-accent transition-colors',
                  selectedConversation.id === conversation.id && 'bg-sidebar-accent',
                  isMatrixTheme && 'hover:bg-primary/20'
                )}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback className={cn(isMatrixTheme && 'matrix-font')}>
                        {conversation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-school-success rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={cn(
                        'font-semibold text-sm',
                        isMatrixTheme && 'matrix-font'
                      )}>
                        {conversation.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <span className={cn(
                          'text-xs text-muted-foreground',
                          isMatrixTheme && 'matrix-font'
                        )}>
                          {conversation.time}
                        </span>
                        {conversation.unread > 0 && (
                          <div className={cn(
                            'bg-school-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center',
                            isMatrixTheme && 'bg-primary matrix-font'
                          )}>
                            {conversation.unread}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className={cn(
                      'text-sm text-muted-foreground truncate',
                      isMatrixTheme && 'matrix-font'
                    )}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className={cn(
          'p-4 border-b border-border bg-background',
          isMatrixTheme && 'bg-card/20 border-primary/30'
        )}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={selectedConversation.avatar} />
                <AvatarFallback className={cn(isMatrixTheme && 'matrix-font')}>
                  {selectedConversation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className={cn(
                  'font-semibold',
                  isMatrixTheme && 'matrix-font text-primary'
                )}>
                  {selectedConversation.name}
                </h2>
                <p className={cn(
                  'text-sm text-muted-foreground',
                  isMatrixTheme && 'matrix-font'
                )}>
                  {selectedConversation.online ? 'Online' : 'Last seen 2h ago'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={cn(isMatrixTheme && 'hover:bg-primary/20 matrix-font')}
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(isMatrixTheme && 'hover:bg-primary/20 matrix-font')}
              >
                <Video className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(isMatrixTheme && 'hover:bg-primary/20 matrix-font')}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex',
                  message.isMe ? 'justify-end' : 'justify-start'
                )}
              >
                <div className={cn(
                  'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
                  message.isMe
                    ? 'bg-school-primary text-white'
                    : 'bg-muted',
                  isMatrixTheme && (message.isMe
                    ? 'bg-primary/70 border border-primary'
                    : 'bg-card/50 border border-primary/30')
                )}>
                  {!message.isMe && (
                    <p className={cn(
                      'text-xs font-semibold mb-1',
                      isMatrixTheme && 'matrix-font text-primary'
                    )}>
                      {message.sender}
                    </p>
                  )}
                  <p className={cn(
                    'text-sm',
                    isMatrixTheme && 'matrix-font'
                  )}>
                    {message.content}
                  </p>
                  <p className={cn(
                    'text-xs mt-1 opacity-70',
                    isMatrixTheme && 'matrix-font'
                  )}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className={cn(
          'p-4 border-t border-border',
          isMatrixTheme && 'border-primary/30'
        )}>
          <div className="flex items-center space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className={cn(
                'flex-1',
                isMatrixTheme && 'matrix-font bg-input/50 border-primary/30'
              )}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className={cn(
                'school-button-primary',
                isMatrixTheme && 'matrix-font bg-primary/70 hover:bg-primary border border-primary'
              )}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}