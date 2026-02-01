import { useState } from 'react';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { MessageList } from '@/components/chat/MessageList';
import { ChatInput } from '@/components/chat/ChatInput';
import { DisclaimerModal } from '@/components/chat/DisclaimerModal';
import { useChat } from '@/hooks/useChat';

const Index = () => {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const { messages, isLoading, sendMessage } = useChat();

  const handleAcceptDisclaimer = () => {
    setHasAcceptedDisclaimer(true);
    setShowDisclaimer(false);
  };

  const handleShowDisclaimer = () => {
    setShowDisclaimer(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ChatHeader onShowDisclaimer={handleShowDisclaimer} />
      
      <MessageList messages={messages} isLoading={isLoading} />
      
      <ChatInput onSend={sendMessage} isLoading={isLoading} />

      <DisclaimerModal
        open={showDisclaimer}
        onAccept={handleAcceptDisclaimer}
        isInitial={!hasAcceptedDisclaimer}
      />
    </div>
  );
};

export default Index;
