export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="chat-bubble-assistant inline-flex items-center gap-1.5 px-4 py-3">
        <div className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-typing-1" />
        <div className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-typing-2" />
        <div className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-typing-3" />
      </div>
    </div>
  );
}
