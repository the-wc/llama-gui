import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { ChatMessages } from "./chat-messages";

export function Gui() {
  return (
    <>
      <ChatHeader />
      <div className="my-4" />
      <ChatMessages />
      <div className="my-4" />
      <div className="bg-secondary/25 shadow-xs w-full max-w-lg rounded-md p-4">
        <ChatInput />
      </div>
      <div className="my-1" />
      <div className="w-full max-w-lg flex items-center gap-x-2">
        <p className="text-xs text-muted-foreground text-nowrap">
          Using <span className="font-mono underline">llama 3.2</span>.
        </p>
      </div>
    </>
  );
}
