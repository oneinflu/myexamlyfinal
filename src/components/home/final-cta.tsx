import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-16 md:px-16 md:py-24 shadow-2xl">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-blush/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-blush/10 blur-3xl" />
        
        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto space-y-8 z-10">
          <div className="inline-flex items-center justify-center p-2 bg-brand-blush/10 rounded-full mb-2">
            <Sparkles className="h-5 w-5 text-brand-blush mr-2" />
            <span className="text-brand-blush font-medium text-sm">Join the top 1% of learners</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Start Preparing the <span className="text-brand-blush">Right Way</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Practice under real exam conditions from day one. Join thousands of students who have already achieved their dream scores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6">
            <Button size="lg" className="h-14 px-8 text-base w-full sm:w-auto bg-white text-brand-primary hover:bg-brand-blush hover:text-brand-primary font-semibold transition-all shadow-lg" asChild>
              <Link href="/exams">
                Explore Exams
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="h-14 px-8 text-base w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm" asChild>
              <Link href="/simulation/demo">
                Try Free Simulation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
