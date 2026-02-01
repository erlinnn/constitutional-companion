import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Severity } from '@/lib/legal-knowledge';
import { cn } from '@/lib/utils';

interface SeverityBadgeProps {
  severity: Severity;
  className?: string;
}

const severityConfig: Record<Severity, { icon: typeof Info; label: string; className: string }> = {
  LOW: {
    icon: Info,
    label: 'Awareness Level',
    className: 'severity-low',
  },
  MEDIUM: {
    icon: AlertCircle,
    label: 'Action Recommended',
    className: 'severity-medium',
  },
  HIGH: {
    icon: AlertTriangle,
    label: 'Urgent Attention',
    className: 'severity-high',
  },
};

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        config.className,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}
