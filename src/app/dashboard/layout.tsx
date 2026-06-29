'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/firebase/provider';
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar';
import { LayoutDashboard, MessageSquare, Users, Code, Settings, LogOut, Loader2 } from 'lucide-react';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth() as any; // Temporary fix if useAuth doesn't expose loading natively. Wait, the provider useAuth() only gives auth instance. We need useUser() hook.
  
  // Wait, I should use useUser() from firebase/auth/use-user
  return <DashboardLayoutInner>{children}</DashboardLayoutInner>;
}

import { useUser } from '@/firebase/auth/use-user';

function DashboardLayoutInner({ children }: { children: ReactNode }) {
  const { user, loading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const navItems = [
    { title: 'Overview', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Bot Settings', url: '/dashboard/bot-settings', icon: MessageSquare },
    { title: 'Leads CRM', url: '/dashboard/leads', icon: Users },
    { title: 'Integration', url: '/dashboard/integration', icon: Code },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4 border-b">
          <div className="font-bold text-lg tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Aivello SaaS
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-500/10">
                <LogOut />
                <span>Log out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 overflow-auto bg-background/50">
        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          <div className="flex items-center mb-6 md:hidden">
            <SidebarTrigger />
            <h1 className="font-bold ml-4">Dashboard</h1>
          </div>
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
