"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { faculty } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function FacultyPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState('all');

    const departments = ['all', ...Array.from(new Set(faculty.filter(f => !f.isVc).map(f => f.department)))];

    const viceChancellor = faculty.find(prof => prof.isVc);

    const filteredFaculty = faculty.filter(prof => {
        if (prof.isVc) return false;
        const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) || prof.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = selectedDept === 'all' || prof.department === selectedDept;
        return matchesSearch && matchesDept;
    });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Meet Our Esteemed Faculty</h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            The brilliant minds shaping the future of education, research, and innovation.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {viceChancellor && (
          <>
            <div className="mb-12 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center mb-8 font-headline">A Message from the Vice Chancellor</h2>
              <Link href={`/faculty/${viceChancellor.id}`} className="w-full max-w-lg">
                <Card className="group text-center overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-80 w-full">
                    <Image
                      src={viceChancellor.image}
                      alt={`Portrait of ${viceChancellor.name}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="professional portrait"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-2xl font-headline group-hover:text-primary transition-colors">{viceChancellor.name}</h3>
                    <p className="text-lg text-primary/80">{viceChancellor.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{viceChancellor.department}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <Separator className="my-16" />
          </>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search faculty by name or department..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedDept} onValueChange={setSelectedDept}>
            <SelectTrigger className="w-full sm:w-[280px]">
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map(dept => (
                <SelectItem key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredFaculty.map((prof) => (
            <Link href={`/faculty/${prof.id}`} key={prof.id}>
              <Card className="group text-center overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64 w-full">
                  <Image
                    src={prof.image}
                    alt={`Portrait of ${prof.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="professional portrait"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg font-headline group-hover:text-primary transition-colors">{prof.name}</h3>
                  <p className="text-sm text-primary/80">{prof.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{prof.department}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-semibold">No faculty members found.</p>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        )}
      </main>
    </div>
  );
}
