import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, Newspaper, Users } from "lucide-react";
import { news as allNews, faculty } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const latestNews = allNews.slice(0, 3);
  const featuredFaculty = faculty.slice(0, 4);

  const features = [
    {
      title: "Admissions",
      description: "Start your journey and discover your potential.",
      href: "/admissions",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Academics",
      description: "Explore our diverse programs and courses.",
      href: "/academics",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Our Faculty",
      description: "Learn from world-class educators and researchers.",
      href: "/faculty",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Campus News",
      description: "Stay current with the latest events and stories.",
      href: "/news",
      icon: <Newspaper className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-primary-foreground">
          <Image
            src="https://picsum.photos/seed/university_hero/1200/600.jpg"
            alt="A grand university campus with modern architecture"
            data-ai-hint="university campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline">
              WELCOME TO AWKUM
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Igniting Curiosity, Fostering Excellence, and Shaping the Leaders of Tomorrow.
            </p>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Link href={feature.href} key={feature.title} className="group">
                  <Card className="h-full text-center hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <CardHeader>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {feature.icon}
                      </div>
                      <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="py-16 sm:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Latest Campus Headlines</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((item) => (
                <Link href="/news" key={item.id}>
                  <Card className="group overflow-hidden h-full flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        data-ai-hint="news event"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">{item.category}</Badge>
                      <CardTitle className="mt-2 text-lg font-headline group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3">{item.snippet}</p>
                    </CardContent>
                    <div className="p-6 pt-0 text-sm font-semibold text-primary group-hover:underline">
                      Read More <ArrowRight className="inline h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/news">Explore All News</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="faculty-spotlight" className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Faculty Spotlight</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featuredFaculty.map((prof) => (
                <Link href={`/faculty/${prof.id}`} key={prof.id}>
                  <Card className="group text-center overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative h-56 w-full">
                      <Image
                        src={prof.image}
                        alt={`Portrait of ${prof.name}`}
                        fill
                        className="object-cover object-top transition-all duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
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
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/faculty">
                  Meet All Faculty
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
