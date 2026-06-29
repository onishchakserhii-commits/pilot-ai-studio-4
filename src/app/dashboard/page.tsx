'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/firebase/auth/use-user';
import { MessageSquare, Users, Eye, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useUser();

  const stats = [
    { title: 'Total Leads', value: '14', icon: Users, trend: '+12% from last month' },
    { title: 'Bot Conversations', value: '128', icon: MessageSquare, trend: '+4% from last week' },
    { title: 'Widget Views', value: '1,429', icon: Eye, trend: '+21% from last month' },
    { title: 'Conversion Rate', value: '4.2%', icon: TrendingUp, trend: '+1.2% from last month' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.displayName || 'User'}!</h1>
        <p className="text-muted-foreground mt-1">Here is an overview of your AI assistant's performance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-card/50 backdrop-blur border-white/5 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <Card className="col-span-4 bg-card/50 backdrop-blur border-white/5 shadow-lg">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground border-t border-white/5 border-dashed m-4 rounded">
            Chart Placeholder (Recharts)
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-card/50 backdrop-blur border-white/5 shadow-lg">
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>
              Your assistant captured 3 leads today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Client {i + 1}</p>
                    <p className="text-sm text-muted-foreground">
                      client{i + 1}@example.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">Just now</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
