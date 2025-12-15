import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { courses } from "@/lib/data";
import { FileText, Award, Target } from "lucide-react";

export default function AcademicsPage() {
  const totalCredits = 120;
  const completedCredits = courses
    .filter(c => c.progress === 100)
    .reduce((sum, c) => sum + c.credits, 0);
  const degreeProgress = (completedCredits / totalCredits) * 100;
  const currentGpa = 3.85; // Mock data

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 ease-out">
      <section className="relative h-48 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/seed/academics_hero/1200/400"
          alt="A lecture hall full of students"
          data-ai-hint="lecture hall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Academic Portal
          </h1>
          <p className="mt-2 text-lg text-primary-foreground/90">Welcome, Student!</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentGpa.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Maintained across all semesters</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Credits</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedCredits}</div>
              <p className="text-xs text-muted-foreground">Out of {totalCredits} required for graduation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Degree Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{degreeProgress.toFixed(1)}%</div>
              <Progress value={degreeProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Current & Past Courses</CardTitle>
            <CardDescription>A summary of your academic performance in each course.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Code</TableHead>
                  <TableHead>Course Title</TableHead>
                  <TableHead className="text-center">Credits</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-right">Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.code}>
                    <TableCell className="font-medium">{course.code}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell className="text-center">{course.credits}</TableCell>
                    <TableCell className="text-center">{course.grade}</TableCell>
                    <TableCell className="text-right">
                       <div className="flex items-center justify-end gap-2">
                        <span>{course.progress}%</span>
                        <Progress value={course.progress} className="w-24 h-2" />
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
