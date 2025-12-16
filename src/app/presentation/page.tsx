import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { faculty, news, courses, admissionRequirements } from '@/lib/data';
import { studentCouncil } from '@/lib/student-council';
import { ArrowRight, BookOpen, GraduationCap, Newspaper, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PresentationPage() {
  const totalCredits = 120;
  const completedCredits = courses
    .filter(c => c.progress === 100)
    .reduce((sum, c) => sum + c.credits, 0);
  const degreeProgress = (completedCredits / totalCredits) * 100;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out bg-background">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            AWKUM: At a Glance
          </h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            A comprehensive overview of our university's key data and highlights.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Section 1: Core Pillars */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Our Core Pillars</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Welcoming the next generation of leaders. Holistic review process.</p>
                <Link href="/admissions" className="text-sm font-semibold text-primary hover:underline mt-4 inline-block">
                  Learn More <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Academics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{degreeProgress.toFixed(0)}% average degree completion. {courses.length} courses tracked.</p>
                <Link href="/academics" className="text-sm font-semibold text-primary hover:underline mt-4 inline-block">
                  Explore Programs <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faculty.length} esteemed members shaping futures.</p>
                <Link href="/faculty" className="text-sm font-semibold text-primary hover:underline mt-4 inline-block">
                  Meet Our Experts <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Newspaper className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">News & Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{news.length} recent stories and updates.</p>
                <Link href="/news" className="text-sm font-semibold text-primary hover:underline mt-4 inline-block">
                  Stay Informed <ArrowRight className="inline h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Faculty */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Faculty Spotlight</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {faculty.slice(0, 10).map((prof) => (
              <Link href={`/faculty/${prof.id}`} key={prof.id}>
                <div className="group text-center">
                  <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-background transform transition-transform group-hover:scale-105">
                    <Image
                      src={prof.image}
                      alt={`Portrait of ${prof.name}`}
                      fill
                      className="object-cover object-top"
                      data-ai-hint="professional portrait"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-md font-headline group-hover:text-primary">{prof.name}</h3>
                  <p className="text-sm text-primary/80">{prof.title}</p>
                </div>
              </Link>
            ))}
          </div>
           <div className="text-center mt-8">
              <Link href="/faculty" className="text-primary font-semibold hover:underline">
                View All Faculty &rarr;
              </Link>
            </div>
        </section>

        {/* Section 3: Student Council */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Student Leadership</h2>
           <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10">
            {studentCouncil.slice(0, 16).map((member) => (
              <div key={member.name} className="text-center flex flex-col items-center">
                 <div className="relative h-24 w-24 rounded-full overflow-hidden shadow-md">
                    <Image
                      src={`https://picsum.photos/seed/${member.imageSeed}/150`}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                <div className="mt-2">
                  <h3 className="font-bold text-sm font-headline">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-8">
              <Link href="/student-council" className="text-primary font-semibold hover:underline">
                See Full Council &rarr;
              </Link>
            </div>
        </section>

        {/* Section 4: Latest News */}
        <section>
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">Latest Headlines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.slice(0,3).map(item => (
                    <Card key={item.id}>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{new Date(item.date).toLocaleDateString()}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground line-clamp-4">{item.snippet}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link href="/news" className="text-primary font-semibold hover:underline">
                    Read More News &rarr;
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}
