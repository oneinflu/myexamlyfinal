import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroLMSWorkspace } from "./hero-lms-workspace";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Gradient Blobs */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-brand-blush/20 to-transparent blur-3xl -z-10" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-blush/30 blur-3xl" />
        
        {/* Geometric Accents */}
        <div className="absolute top-20 right-[10%] w-24 h-24 border-2 border-brand-primary/10 rounded-full hidden lg:block animate-pulse duration-[3000ms]" />
        <div className="absolute bottom-40 left-[5%] w-16 h-16 border border-brand-primary/20 rotate-45 hidden lg:block opacity-50" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 items-start text-left">
          <div className="inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-blush/50 px-3 py-1 text-sm font-medium text-brand-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary mr-2 animate-pulse"></span>
            New: AI-Powered Performance Analysis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
            Prepare for <span className="text-brand-primary relative">
              Competitive Exams
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blush -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </span> Worldwide
          </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
          Real exam simulations, adaptive practice, and performance analytics. 
          Master your exam with the most realistic testing platform available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/exams">Explore Exams</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/simulation/demo">Try Free Simulation</Link>
          </Button>
        </div>
      </div>
      
      {/* Right Side: Hero LMS Workspace */}
      <div className="flex justify-center lg:justify-end w-full">
        <HeroLMSWorkspace />
      </div>
      </div>
    </section>
  );
}
