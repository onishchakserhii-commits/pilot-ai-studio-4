'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUser } from '@/firebase/auth/use-user';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function IntegrationPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const snippet = `
<!-- Aivello AI Assistant -->
<script>
  window.AIVELLO_BOT_ID = "${user?.uid || 'DEMO_ID'}";
</script>
<script src="https://studio-aivello.vercel.app/widget.js" async defer></script>
<!-- End Aivello -->
  `.trim();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Code snippet copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Integration</h1>
        <p className="text-muted-foreground mt-1">Embed the AI assistant on your website.</p>
      </div>

      <Card className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Copy the code snippet below and paste it just before the closing <code>&lt;/body&gt;</code> tag on every page where you want the assistant to appear.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <pre className="bg-background/80 p-4 rounded-lg overflow-x-auto text-sm border border-white/5">
              <code>{snippet}</code>
            </pre>
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-2 right-2 bg-secondary/80 hover:bg-secondary"
              onClick={copyToClipboard}
            >
              {copied ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied' : 'Copy Code'}
            </Button>
          </div>
          <div className="text-sm text-muted-foreground pt-2">
            <p><strong>Note:</strong> Your unique Bot ID is securely generated based on your account. Do not share it publicly.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
        <CardHeader>
          <CardTitle>Supported Platforms</CardTitle>
          <CardDescription>Our widget works on all major platforms.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li><strong>WordPress:</strong> Add it using the "Insert Headers and Footers" plugin.</li>
            <li><strong>Shopify:</strong> Edit your <code>theme.liquid</code> file.</li>
            <li><strong>Wix:</strong> Go to Settings &gt; Custom Code.</li>
            <li><strong>Webflow:</strong> Go to Project Settings &gt; Custom Code &gt; Footer Code.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
