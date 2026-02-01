import { cn } from '@/lib/utils';

interface ConfidenceScoreProps {
  score: number;
  className?: string;
}

export function ConfidenceScore({ score, className }: ConfidenceScoreProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'bg-severity-low';
    if (score >= 50) return 'bg-severity-medium';
    return 'bg-severity-high';
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
        <div
          className={cn('h-full transition-all duration-500', getColor(score))}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground">{score}%</span>
    </div>
  );
}
