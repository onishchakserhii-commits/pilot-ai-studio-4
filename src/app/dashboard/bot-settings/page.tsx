'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function BotSettingsPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Settings saved",
        description: "Your bot configuration has been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bot Configuration</h1>
        <p className="text-muted-foreground mt-1">Customize your AI assistant's behavior and appearance.</p>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid gap-6">
          <Card className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>General Identity</CardTitle>
              <CardDescription>How the bot presents itself to users.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="botName">Bot Name</Label>
                <Input id="botName" defaultValue="Aivello Assistant" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="greeting">Welcome Message</Label>
                <Input id="greeting" defaultValue="Hello! How can I help you today?" className="bg-background/50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Tell the AI about your business so it can answer questions accurately.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="systemPrompt">Business Context (System Prompt)</Label>
                <Textarea 
                  id="systemPrompt" 
                  rows={6}
                  defaultValue="You are a helpful assistant for a local Swiss restaurant. You can take reservations, answer questions about the menu, and provide opening hours." 
                  className="bg-background/50 resize-y" 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the chat widget colors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color (Hex)</Label>
                  <div className="flex gap-2">
                    <Input id="primaryColor" defaultValue="#3b82f6" className="bg-background/50 uppercase" />
                    <div className="w-10 h-10 rounded-md border border-white/10" style={{ backgroundColor: '#3b82f6' }} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end pt-4 border-t border-white/5">
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}
