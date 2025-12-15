
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, FileText, GraduationCap, Ticket, Upload } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function StudentPortalPage() {
  const studentData = {
    name: "Amir Moavia",
    fatherName: "Mujahid Khan",
    serialNumber: "SSU-240219272",
    campus: "Main Campus",
    department: "Computer Science",
    discipline: "Open",
    semester: "3rd",
    profilePic: "https://picsum.photos/seed/student_avatar/200/200",
  };

  const actionItems = [
    {
      title: "Temporary Clearance",
      description: "Manage your academic clearance.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      href: "#",
    },
    {
      title: "Student Card",
      description: "Apply for a new or replacement card.",
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      href: "#",
    },
    {
      title: "Transport Card",
      description: "Manage your campus transport access.",
      icon: <Ticket className="h-8 w-8 text-primary" />,
      href: "#",
    },
    {
      title: "Scholarships",
      description: "Explore and apply for funding.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      href: "#",
    },
    {
      title: "Upload Slips",
      description: "Submit your payment and documents.",
      icon: <Upload className="h-8 w-8 text-primary" />,
      href: "#",
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Your Student Dashboard</h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto">Welcome back, {studentData.name}!</p>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
                  <Image
                    src={studentData.profilePic}
                    alt="Student profile picture"
                    fill
                    className="object-cover"
                    data-ai-hint="student portrait"
                  />
                </div>
                <CardTitle className="pt-4">{studentData.name}</CardTitle>
                <CardDescription>Father's Name: {studentData.fatherName}</CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="my-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">Campus:</span>
                    <span>{studentData.campus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">Department:</span>
                    <span className="text-right">{studentData.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">Discipline:</span>
                    <span>{studentData.discipline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">Semester:</span>
                    <span>{studentData.semester}</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="text-center text-muted-foreground text-xs">
                    <p>Serial Number</p>
                    <p className="font-mono text-foreground mt-1">{studentData.serialNumber}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 font-headline">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {actionItems.map((item) => (
                <Link href={item.href} key={item.title} className="group">
                    <Card className="h-full hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                                {item.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                    </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
