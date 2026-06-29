'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export default function LeadsCRMPage() {
  const leads = [
    { id: 1, name: 'Alice Dupont', email: 'alice.d@example.com', phone: '+41 79 123 45 67', status: 'New', date: '2026-06-29' },
    { id: 2, name: 'Jean Martin', email: 'jean.martin@example.com', phone: '+41 78 987 65 43', status: 'Contacted', date: '2026-06-28' },
    { id: 3, name: 'Sarah Miller', email: 'smiller@example.com', phone: '+41 76 555 12 34', status: 'Closed', date: '2026-06-25' },
    { id: 4, name: 'Lucas Blanc', email: 'lucas.blanc@example.com', phone: '+41 79 333 44 55', status: 'New', date: '2026-06-29' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads & Contacts</h1>
          <p className="text-muted-foreground mt-1">Manage the leads captured by your AI assistant.</p>
        </div>
        <Button variant="outline" className="shrink-0 bg-background/50">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <Card className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
          <CardDescription>A list of all users who submitted their contact info via the chatbot.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-white/5">
            <Table>
              <TableHeader>
                <TableRow className="border-white/5 hover:bg-white/5">
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} className="border-white/5 hover:bg-white/5">
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">{lead.email}</span>
                        <span className="text-xs text-muted-foreground">{lead.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell>{lead.date}</TableCell>
                    <TableCell>
                      <Badge variant={lead.status === 'New' ? 'default' : lead.status === 'Contacted' ? 'secondary' : 'outline'}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" title="Send Email">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
