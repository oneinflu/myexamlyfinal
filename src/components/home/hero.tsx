import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroLMSWorkspace } from "./hero-lms-workspace";

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 items-center py-24 md:py-32">
      <div className="flex flex-col gap-8 items-start text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
          Prepare for Competitive Exams Worldwide
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
    </section>
  );
}
