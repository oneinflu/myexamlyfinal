import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingTeaser() {
  return (
    <section className="container py-16 md:py-24 bg-muted/20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 border rounded-2xl p-8 md:p-12 bg-background shadow-sm">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Flexible Plans for Every Learner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you&apos;re just starting out or need intensive practice before the big day, we have a plan that fits your goals and budget. No hidden fees, cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-medium">Free Diagnostics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-medium">Mock-Only Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-medium">Full Preparation</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Button size="lg" className="h-14 px-8 text-base" asChild>
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
