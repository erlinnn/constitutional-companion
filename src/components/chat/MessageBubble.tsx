import { format } from 'date-fns';
import { User, Scale } from 'lucide-react';
import { Message } from '@/types/chat';
import { SeverityBadge } from './SeverityBadge';
import { ConfidenceScore } from './ConfidenceScore';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex gap-3 px-4 py-2 animate-fade-in',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
      </div>

      {/* Message content */}
      <div
        className={cn(
          'max-w-[80%] space-y-2',
          isUser ? 'items-end' : 'items-start'
        )}
      >
        <div
          className={cn(
            'rounded-2xl px-4 py-3',
            isUser
              ? 'chat-bubble-user'
              : 'chat-bubble-assistant'
          )}
        >
          {isUser ? (
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          ) : (
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  ul: ({ children }) => <ul className="mb-2 list-disc pl-4">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-2 list-decimal pl-4">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                  h3: ({ children }) => <h3 className="text-base font-semibold mt-3 mb-1">{children}</h3>,
                  h4: ({ children }) => <h4 className="text-sm font-semibold mt-2 mb-1">{children}</h4>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Severity badge for assistant messages */}
        {!isUser && message.severity && (
          <div className="flex items-center gap-2 px-1">
            <SeverityBadge severity={message.severity} />
          </div>
        )}

        {/* Suggested laws with confidence */}
        {!isUser && message.suggestedLaws && message.suggestedLaws.length > 0 && (
          <div className="rounded-lg bg-muted/50 p-3 space-y-2">
            <p className="text-xs font-medium text-muted-foreground">
              Relevant Constitutional Provisions:
            </p>
            {message.suggestedLaws.map((law, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="font-medium">{law.provision.shortName}</span>
                <ConfidenceScore score={law.confidence} />
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <p
          className={cn(
            'text-[10px] text-muted-foreground px-1',
            isUser ? 'text-right' : 'text-left'
          )}
        >
          {format(message.timestamp, 'h:mm a')}
        </p>
      </div>
    </div>
  );
}
