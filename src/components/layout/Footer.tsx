import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "../icons";

const navLinks = [
  { href: '/student-portal', label: 'Student Portal' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary-foreground" />
              <span className="text-xl font-bold font-headline">AWKUM</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering the next generation of leaders, innovators, and thinkers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-primary-foreground/90">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-primary-foreground/90">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-primary-foreground/80">
              <li>123 University Ave</li>
              <li>Innovation City, 10101</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-primary-foreground hover:underline underline-offset-4">(123) 456-7890</a>
              </li>
              <li>
                <a href="mailto:contact@scholarsage.edu" className="hover:text-primary-foreground hover:underline underline-offset-4">contact@awkum.edu</a>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold uppercase tracking-wider text-primary-foreground/90">Connect</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} AWKUM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
