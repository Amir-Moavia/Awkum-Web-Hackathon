"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll be in touch shortly.",
    })
    form.reset()
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get in Touch</h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
        </div>
      </div>
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>
                        <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Inquiry about admissions" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us more..." className="min-h-[150px]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" size="lg">Send Message</Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Our Campus</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4"/>
                            <span>123 University Ave, Innovation City, 10101</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4"/>
                            <span>(123) 456-7890</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4"/>
                            <a href="mailto:contact@scholarsage.edu" className="hover:text-primary">contact@scholarsage.edu</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold">Website</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                             <Globe className="h-4 w-4"/>
                             <a href="https://scholarsage.edu" target="_blank" rel="noopener noreferrer" className="hover:text-primary">scholarsage.edu</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Campus Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative h-64 w-full overflow-hidden rounded-md">
                        <Image src="https://picsum.photos/seed/campus_map/600/400" alt="Campus map" fill className="object-cover" data-ai-hint="map illustration" />
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
