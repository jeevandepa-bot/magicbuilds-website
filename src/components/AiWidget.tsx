"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, MessageSquare } from "lucide-react";
import { generateAIResponse } from "@/app/actions/chat";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "ai";
  content: string;
};

export function AiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I'm the MagicBuilds AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    const result = await generateAIResponse(userMsg);
    
    setMessages((prev) => [
      ...prev, 
      { role: "ai", content: result.message }
    ]);
    
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-5 right-4 sm:bottom-6 sm:right-6 p-3.5 sm:p-4 rounded-full bg-gold-500 text-black shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all z-40 magic-glow",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
        aria-label="Open AI Assistant"
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-6 w-auto sm:w-[400px] h-[calc(100dvh-5rem)] sm:h-[500px] max-h-[600px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-2xl flex flex-col shadow-2xl transition-all duration-300 z-50 overflow-hidden",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-gold-500" />
            <h3 className="font-semibold text-white">MagicBuilds AI</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-gold-500 text-black rounded-tr-sm"
                    : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm"
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex w-full justify-start">
              <div className="bg-white/5 border border-white/10 text-gray-400 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-black/20 border-t border-white/10 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our services..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/10 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-lg text-gold-500 hover:bg-gold-500/10 disabled:opacity-50 disabled:hover:bg-transparent transition-all active:scale-90"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
