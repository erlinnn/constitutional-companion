import { Category, Severity, SuggestedLaw } from '@/lib/legal-knowledge';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: Category;
  severity?: Severity;
  suggestedLaws?: SuggestedLaw[];
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  hasAcceptedDisclaimer: boolean;
}

export type Language = 'en' | 'hi' | 'kn';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' }
];
