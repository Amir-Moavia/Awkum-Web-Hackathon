import { faculty } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Book, Link as LinkIcon, Building } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SummarizeProfile } from "@/components/faculty/SummarizeProfile";

type FacultyPageProps = {
  params: {
    id: string;
  };
};

export default function FacultyProfilePage({ params }: FacultyPageProps) {
  const professor = faculty.find((f) => f.id === params.id);

  if (!professor) {
    notFound();
  }

  const profileTextForAI = `
    Name: ${professor.name}
    Title: ${professor.title}
    Department: ${professor.department}
    Bio: ${professor.profile.bio}
    Research Interests: ${professor.profile.researchInterests.join(", ")}
  `;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 ease-out">
       <div className="bg-secondary/50">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <div className="relative h-48 w-48 rounded-full overflow-hidden shadow-lg border-4 border-background">
                    <Image
                        src={professor.image}
                        alt={`Portrait of ${professor.name}`}
                        fill
                        className="object-cover object-top"
                        data-ai-hint="professional portrait"
                    />
                    </div>
                </div>
                <div className="md:col-span-3 text-center md:text-left">
                    <h1 className="text-4xl font-bold font-headline">{professor.name}</h1>
                    <p className="text-xl text-primary mt-1">{professor.title}</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-muted-foreground">
                        <Building className="h-4 w-4"/>
                        <span>{professor.department}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                        <a href={`mailto:${professor.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-4 w-4" />
                            {professor.email}
                        </a>
                        <SummarizeProfile profileText={profileTextForAI} facultyName={professor.name} />
                    </div>
                </div>
            </div>
        </div>
       </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed whitespace-pre-wrap">
                  {professor.profile.bio}
                </p>
              </CardContent>
            </Card>

            <Separator className="my-8" />
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Publications</CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-4">
                    {professor.profile.publications.map((pub) => (
                        <li key={pub.title} className="flex items-start gap-3">
                            <Book className="h-5 w-5 text-primary mt-1 shrink-0"/>
                            <div>
                                <h4 className="font-semibold">{pub.title}</h4>
                                <a href={pub.link} className="text-sm text-primary/80 hover:underline flex items-center gap-1">
                                    View Publication <LinkIcon className="h-3 w-3"/>
                                </a>
                            </div>
                        </li>
                    ))}
                 </ul>
              </CardContent>
            </Card>

          </div>
          <div className="lg:col-span-1">
             <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline">Research Interests</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {professor.profile.researchInterests.map(interest => (
                            <Badge key={interest} variant="secondary">{interest}</Badge>
                        ))}
                    </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
