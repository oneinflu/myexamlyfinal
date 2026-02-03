import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col gap-8 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand & Description */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image 
                src="/logo.svg" 
                alt="Examly Logo" 
                width={120} 
                height={34} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The world&apos;s most comprehensive exam preparation platform. 
              We provide simulation-first learning for every major exam category across the globe.
            </p>
          </div>

          {/* Exam Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Categories</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/exams/medical" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Medical
              </Link>
              <Link href="/exams/civil-services" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Civil Services
              </Link>
              <Link href="/exams/management" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Management
              </Link>
              <Link href="/exams/engineering" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Engineering
              </Link>
              <Link href="/exams/law" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Law
              </Link>
            </div>
          </div>

          {/* Popular Exams - Placeholder list */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Popular Exams</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/exams/usmle" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                USMLE (Medical)
              </Link>
              <Link href="/exams/upsc" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                UPSC (Civil Services)
              </Link>
              <Link href="/exams/gmat" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                GMAT (Management)
              </Link>
              <Link href="/exams/jee" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                JEE Advanced (Eng)
              </Link>
              <Link href="/exams/lsat" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                LSAT (Law)
              </Link>
            </div>
          </div>

          {/* Resources & Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/blog" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Blog
              </Link>
              <Link href="/guides" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Study Guides
              </Link>
              <Link href="/pricing" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Pricing
              </Link>
            </div>
            
            <h3 className="font-semibold">Legal</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-foreground hover:underline hover:underline-offset-4 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Examly Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Social icons could go here */}
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
