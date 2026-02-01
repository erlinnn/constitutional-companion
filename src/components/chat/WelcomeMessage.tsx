import { Scale, Shield, Users, Building } from 'lucide-react';

const categories = [
  { icon: Users, label: 'Caste Discrimination', color: 'text-rose-500' },
  { icon: Shield, label: 'Gender Rights', color: 'text-purple-500' },
  { icon: Building, label: 'Workplace Harassment', color: 'text-blue-500' },
  { icon: Scale, label: 'General Rights', color: 'text-teal-500' },
];

export function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center animate-slide-up">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <Scale className="h-10 w-10 text-primary" />
      </div>

      <h2 className="mb-2 text-2xl font-semibold text-foreground">
        Know Your Constitutional Rights
      </h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        I'm here to help you understand your rights under the Indian Constitution. 
        Share your situation, and I'll guide you to relevant laws and next steps.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3"
          >
            <cat.icon className={`h-4 w-4 ${cat.color}`} />
            <span className="text-sm text-foreground">{cat.label}</span>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-muted p-4 text-left">
        <p className="text-sm font-medium text-foreground mb-2">
          Try asking:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>"I was denied service at a shop because of my caste"</li>
          <li>"My employer is not paying equal wages to women"</li>
          <li>"I was wrongly detained by police for questioning"</li>
        </ul>
      </div>
    </div>
  );
}
