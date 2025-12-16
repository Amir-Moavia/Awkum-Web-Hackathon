"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "../icons";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/student-portal', label: 'Student Portal' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const NavLink = ({ href, label, isMobile }: { href: string, label: string, isMobile?: boolean }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-semibold" : "text-muted-foreground",
          isMobile ? "block py-2 text-lg" : "px-4 py-2 text-sm font-medium"
        )}
      >
        {label}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary"/>
          <span className="font-bold font-headline sm:inline-block">
            AWKUM
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => <NavLink key={link.href} {...link} />)}
        </nav>
        <div className="flex flex-1 items-center justify-end">
           
          <div className="md:hidden">
            {isClient && (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open main menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col p-6">
                    <Link href="/" className="mb-8 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Logo className="h-8 w-8 text-primary"/>
                      <span className="font-bold font-headline">AWKUM</span>
                    </Link>
                    <nav className="flex flex-col space-y-2">
                      {navLinks.map(link => <NavLink key={link.href} {...link} isMobile />)}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
