import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { admissionRequirements } from "@/lib/data";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

export default function AdmissionsPage() {
    const deadlines = [
        { event: "Early Action Deadline", date: "November 1, 2024" },
        { event: "Regular Decision Deadline", date: "January 15, 2025" },
        { event: "Financial Aid (FAFSA) Priority Deadline", date: "February 1, 2025" },
        { event: "Decision Notification", date: "Late March 2025" },
        { event: "Enrollment Deposit Due", date: "May 1, 2025" },
    ];
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <section className="relative h-48 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/seed/admissions_hero/1200/400"
          alt="Students walking on campus"
          data-ai-hint="students walking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Begin Your Legacy
          </h1>
          <p className="mt-2 text-lg text-primary-foreground/90">Join a community of innovators and leaders.</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 font-headline">Your Path to AWKUM</h2>
            <p className="text-muted-foreground mb-8">
                We take a holistic approach to admissions, seeking students who are passionate, curious, and eager to make an impact. Discover the steps to join our vibrant academic community.
            </p>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {admissionRequirements.map((reqCategory, index) => (
                <AccordionItem key={reqCategory.id} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{reqCategory.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 pl-2">
                        {reqCategory.requirements.map(req => (
                            <li key={req.item} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-1 shrink-0"/>
                                <div>
                                    <h4 className="font-semibold">{req.item}</h4>
                                    <p className="text-muted-foreground text-sm">{req.details}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-accent/10">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Key Admission Dates
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {deadlines.map(deadline => (
                            <li key={deadline.event}>
                                <p className="font-semibold">{deadline.event}</p>
                                <p className="text-muted-foreground">{deadline.date}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center mt-16 p-8 bg-secondary/50 rounded-lg">
            <h2 className="text-3xl font-bold font-headline">Ready to Shape Tomorrow?</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Your journey of a thousand miles begins with a single step. Our admissions team is ready to guide you. Take that step today.</p>
            <Button size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="#">
                    Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </main>
    </div>
  );
}
