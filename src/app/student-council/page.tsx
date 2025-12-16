import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { studentCouncil } from "@/lib/student-council";
import { Separator } from "@/components/ui/separator";

const leadership = studentCouncil.slice(0, 5);
const presidents = studentCouncil.slice(5);

export default function StudentCouncilPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            AWKUM Students Council
          </h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto text-primary-foreground/90">
            Office of the Provost Cabinet 2025-26
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <section id="leadership" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Leadership</h2>
          <div className="flex flex-wrap justify-center items-start gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center w-48">
                <div className="relative h-36 w-36 rounded-full overflow-hidden shadow-lg border-4 border-background">
                  <Image
                    src={`https://picsum.photos/seed/${member.imageSeed}/200`}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover object-top"
                    data-ai-hint="professional portrait"
                  />
                </div>
                <h3 className="font-bold text-lg mt-4 font-headline">{member.name}</h3>
                <p className="text-sm text-primary">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section id="presidents">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Society Presidents</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
            {presidents.map((member) => (
              <div key={member.name} className="text-center flex flex-col items-center">
                <Card className="group overflow-hidden rounded-full h-32 w-32 md:h-36 md:w-36 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-full w-full">
                    <Image
                      src={`https://picsum.photos/seed/${member.imageSeed}/200`}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="student portrait"
                    />
                  </div>
                </Card>
                <div className="mt-4">
                  <h3 className="font-bold text-md font-headline group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
