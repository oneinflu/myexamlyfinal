"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Timer, ChevronRight, ChevronLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export function RealExamSimulationSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience the Real Exam Environment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Timed, structured, pressure-based simulations — designed to mirror actual exam conditions.
            Get comfortable with the interface, timing, and pressure before the big day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button size="lg" asChild>
               <Link href="/simulation/demo">Try Demo Simulation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
               <Link href="/exams">Browse All Exams</Link>
            </Button>
          </div>
        </div>

        {/* Mock Simulation UI */}
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl -z-10" />
          
          <Card className="w-full shadow-lg border-muted">
            {/* Header: Timer and Progress */}
            <CardHeader className="border-b pb-4">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2 text-destructive font-mono font-medium">
                    <Timer className="h-5 w-5" />
                    <span>00:45:23</span>
                 </div>
                 <div className="text-sm text-muted-foreground">
                    Question 14 of 50
                 </div>
              </div>
            </CardHeader>

            {/* Content: Question and Options */}
            <CardContent className="pt-6 pb-8">
               <div className="space-y-6">
                  <div className="space-y-2">
                     <h3 className="text-lg font-medium leading-snug">
                        A 45-year-old male presents with severe chest pain radiating to the left arm. Which of the following is the most appropriate initial diagnostic step?
                     </h3>
                  </div>

                  <RadioGroup defaultValue="option-2" className="space-y-3">
                     <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="option-1" id="option-1" />
                        <Label htmlFor="option-1" className="flex-1 cursor-pointer">Echocardiogram</Label>
                     </div>
                     <div className="flex items-center space-x-3 border-2 border-primary bg-primary/5 rounded-lg p-3 transition-colors">
                        <RadioGroupItem value="option-2" id="option-2" />
                        <Label htmlFor="option-2" className="flex-1 cursor-pointer font-medium">12-lead Electrocardiogram (ECG)</Label>
                     </div>
                     <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="option-3" id="option-3" />
                        <Label htmlFor="option-3" className="flex-1 cursor-pointer">Chest X-ray</Label>
                     </div>
                     <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="option-4" id="option-4" />
                        <Label htmlFor="option-4" className="flex-1 cursor-pointer">CT Angiogram</Label>
                     </div>
                  </RadioGroup>
               </div>
            </CardContent>

            {/* Footer: Navigation */}
            <CardFooter className="border-t pt-4 flex justify-between bg-muted/5">
               <Button variant="ghost" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
               </Button>
               <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-amber-600 border-amber-200 hover:bg-amber-50">
                     <AlertCircle className="h-4 w-4 mr-1" /> Mark for Review
                  </Button>
                  <Button size="sm">
                     Next <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
               </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
