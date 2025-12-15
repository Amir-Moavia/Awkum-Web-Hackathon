"use client"

import { useState } from 'react';
import Image from "next/image";
import { news as allNews } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Category = 'All' | 'News' | 'Event' | 'Announcement';

export default function NewsPage() {
    const [filter, setFilter] = useState<Category>('All');
    
    const categories: Category[] = ['All', 'News', 'Event', 'Announcement'];

    const filteredNews = allNews
        .filter(item => filter === 'All' || item.category === filter)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Campus Headlines</h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto text-muted-foreground">
            The latest stories, events, and updates from the heart of AWKUM.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
            <div className="p-1 rounded-lg bg-muted flex gap-1">
                {categories.map(category => (
                     <Button 
                        key={category}
                        variant={filter === category ? "default" : "ghost"}
                        onClick={() => setFilter(category)}
                        className={cn("rounded-md", filter === category && "bg-background text-foreground shadow-sm hover:bg-background")}
                     >
                        {category}
                    </Button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <Card key={item.id} className="group overflow-hidden h-full flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <Link href={item.action?.href || '#'} className="flex flex-col h-full">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="news event"
                  />
                </div>
                <CardHeader>
                  <div className='flex justify-between items-center text-sm text-muted-foreground'>
                    <Badge variant={item.category === 'Event' ? "default" : "secondary"}>{item.category}</Badge>
                    <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <CardTitle className="mt-2 text-xl font-headline group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm whitespace-pre-wrap">{item.snippet}</p>
                </CardContent>
                {item.action && (
                  <CardFooter>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                      <Link href={item.action.href}>
                        {item.action.text} <ArrowRight className="ml-2 h-4 w-4"/>
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Link>
            </Card>
          ))}
        </div>
         {filteredNews.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-semibold">No items match your filter.</p>
                <p>Try selecting another category.</p>
            </div>
        )}
      </main>
    </div>
  );
}
