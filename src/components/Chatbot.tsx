"use client"

import { useState } from 'react';
import { useTranslation } from './LanguageContext';
import { aiChatbotForClientInquiries } from '@/ai/flows/ai-chatbot-for-client-inquiries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Bonjour ! Je suis l\'assistant Pilot AI. Comment puis-je aider votre business aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await aiChatbotForClientInquiries({ message: userMsg });
      setMessages(prev => [...prev, { role: 'bot', text: response.textResponse }]);
      if (response.suggestedAction.type !== 'none' && response.suggestedAction.details) {
         setMessages(prev => [...prev, { role: 'bot', text: response.suggestedAction.details! }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Désolé, une erreur est survenue.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl overflow-hidden border-2 border-primary/10">
          <CardHeader className="bg-primary text-white p-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-base font-headline">Pilot AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={cn("flex", m.role === 'user' ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[85%] p-3 rounded-2xl text-sm",
                      m.role === 'user' ? "bg-accent text-white rounded-br-none" : "bg-muted text-foreground rounded-bl-none"
                    )}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t bg-background">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex w-full gap-2"
            >
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}