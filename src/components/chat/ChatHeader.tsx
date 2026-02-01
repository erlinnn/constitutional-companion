import { Scale, Shield, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ChatHeaderProps {
  onShowDisclaimer: () => void;
}

export function ChatHeader({ onShowDisclaimer }: ChatHeaderProps) {
  return (
    <header className="glass-effect sticky top-0 z-10 border-b px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Constitutional Rights Assistant
            </h1>
            <p className="text-xs text-muted-foreground">
              Know Your Rights • India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                <Shield className="h-3 w-3" />
                <span>Anonymous</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Your conversation is private and not stored</p>
            </TooltipContent>
          </Tooltip>

          <Button
            variant="ghost"
            size="icon"
            onClick={onShowDisclaimer}
            className="h-8 w-8"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
