
"use client"

import { useTranslation } from '@/components/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Eye, Check, Trash2, Send } from 'lucide-react';
import Link from 'next/link';

export default function BlogAdmin() {
  const { t } = useTranslation();
  const db = useFirestore();
  
  const blogQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: allPosts, loading } = useCollection(blogQuery);

  const drafts = allPosts?.filter((p: any) => p.status === 'draft') || [];
  const published = allPosts?.filter((p: any) => p.status === 'published') || [];

  const handleStatusChange = (postId: string, newStatus: string) => {
    if (!db) return;
    const postRef = doc(db, 'blogPosts', postId);
    updateDoc(postRef, { 
      status: newStatus,
      updatedAt: new Date().toISOString(),
      ...(newStatus === 'published' ? { publishedAt: new Date().toISOString() } : {})
    });
  };

  const handleDelete = (postId: string) => {
    if (!db || !confirm('Are you sure?')) return;
    deleteDoc(doc(db, 'blogPosts', postId));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-headline font-bold">Blog Management</h1>
          <div className="flex gap-2">
             <Button variant="outline" asChild>
                <Link href="/blog">View Blog</Link>
             </Button>
          </div>
        </div>

        <Tabs defaultValue="drafts" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="drafts" className="relative">
              Drafts
              {drafts.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">
                  {drafts.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="published">Published ({published.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="drafts" className="space-y-6">
            {loading ? <p>Loading...</p> : drafts.length === 0 ? (
              <Card><CardContent className="pt-6 text-center text-muted-foreground">No drafts found.</CardContent></Card>
            ) : (
              drafts.map((post: any) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge variant="outline">{post.language.toUpperCase()}</Badge>
                        <span className="text-xs text-muted-foreground">
                          Created {format(new Date(post.createdAt), 'dd.MM.yyyy HH:mm')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/blog/${post.slug}?preview=true`} className="gap-2">
                            <Eye className="w-4 h-4" /> Preview
                          </Link>
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white gap-2" onClick={() => handleStatusChange(post.id, 'published')}>
                          <Send className="w-4 h-4" /> Publish
                        </Button>
                        <Button size="sm" variant="destructive" className="gap-2" onClick={() => handleDelete(post.id)}>
                          <Trash2 className="w-4 h-4" /> Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="published" className="space-y-6">
            {published.length === 0 ? (
              <Card><CardContent className="pt-6 text-center text-muted-foreground">No published posts.</CardContent></Card>
            ) : (
              published.map((post: any) => (
                <Card key={post.id}>
                   <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          On {format(new Date(post.publishedAt || post.createdAt), 'dd.MM.yyyy')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/blog/${post.slug}`}>View Post</Link>
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleStatusChange(post.id, 'draft')}>
                          Move to Drafts
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
                          Delete
                        </Button>
                      </div>
                   </div>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
