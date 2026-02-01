import { Scale, Shield, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DisclaimerModalProps {
  open: boolean;
  onAccept: () => void;
  isInitial?: boolean;
}

export function DisclaimerModal({ open, onAccept, isInitial = true }: DisclaimerModalProps) {
  return (
    <Dialog open={open} onOpenChange={isInitial ? undefined : onAccept}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Scale className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">
            Important Legal Disclaimer
          </DialogTitle>
          <DialogDescription className="text-center">
            Please read carefully before proceeding
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div className="text-sm">
              <p className="font-medium text-amber-800 dark:text-amber-200">
                This is LEGAL AWARENESS, not legal advice
              </p>
              <p className="mt-1 text-amber-700 dark:text-amber-300">
                I am an AI assistant, not a lawyer. I cannot give legal verdicts or predict outcomes.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Your privacy is protected – no data is stored</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-primary" />
              <span>Information is for educational purposes only</span>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Emergency Contacts:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>Women: 181</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>Police: 100</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <Phone className="h-3 w-3" />
                <span>NHRC: 1800-345-4545</span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onAccept} className="w-full">
            {isInitial ? 'I Understand – Continue' : 'Close'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
