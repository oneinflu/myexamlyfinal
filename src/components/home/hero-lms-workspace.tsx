
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, CheckCircle2, TrendingUp, AlertCircle, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroLMSWorkspace() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto perspective-1000">
      {/* Background Decor - Specific to this component as requested */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-blush/40 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl -z-10" />

      {/* Floating Momentum Card - Positioned top-right overlapping */}
      <Card className="absolute -top-6 -right-4 z-20 w-48 shadow-lg border-border/50 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium text-brand-primary">Today&apos;s Goal</span>
            <Badge variant="secondary" className="text-[10px] h-5 bg-brand-blush text-brand-primary border-none">In Progress</Badge>
          </div>
          <p className="text-sm font-semibold text-foreground">Complete 20 Questions</p>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>12/20</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-1.5 bg-muted" />
          </div>
        </CardContent>
      </Card>

      {/* Main LMS Card */}
      <Card className="w-full shadow-xl border-border/60 bg-white/95 backdrop-blur-sm overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="pb-4 border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-brand-primary">My Exam: Civil Services</CardTitle>
              <CardDescription className="text-xs mt-1 font-medium">Personalized Study Plan • Week 4</CardDescription>
            </div>
            <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            
            {/* Left Column: Learning Activities */}
            <div className="p-5 space-y-6">
              
              {/* Section 1: Video Learning */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-brand-primary" />
                    Video Learning
                  </h4>
                  <span className="text-xs text-muted-foreground">12m left</span>
                </div>
                <div className="p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shrink-0">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </div>
                    <div className="space-y-2 w-full">
                      <p className="text-sm font-medium leading-none">Constitutional History</p>
                      <Progress value={62} className="h-1.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Practice Quiz */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    Practice Quiz
                  </h4>
                  <span className="text-xs font-medium text-green-600">High Accuracy</span>
                </div>
                <div className="p-3 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Polity Basics</span>
                    <span className="text-xs font-bold text-brand-primary bg-brand-blush px-2 py-0.5 rounded-full">7/10</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full h-8 text-xs hover:text-brand-primary hover:border-brand-primary">
                    Review Answers
                  </Button>
                </div>
              </div>

            </div>

            {/* Right Column: Analytics & Weak Areas */}
            <div className="p-5 space-y-6 bg-muted/10">
              
              {/* Section 4: Exam Readiness (Moved up for visual balance on right) */}
              <div className="text-center space-y-3 p-4 rounded-xl bg-white border shadow-sm">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Exam Readiness</p>
                <div className="relative inline-flex items-center justify-center">
                  <svg className="h-24 w-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-muted/20" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.74)} className="text-brand-primary" />
                  </svg>
                  <span className="absolute text-2xl font-bold text-brand-primary">74%</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">On Track</span>
                </div>
              </div>

              {/* Section 3: Weak Areas */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="h-3.5 w-3.5" />
                  Focus Areas
                </h4>
                <div className="space-y-2">
                  {['Fiscal Policy', 'Modern History'].map((topic) => (
                    <div key={topic} className="flex items-center justify-between text-sm p-2 rounded bg-red-50/50 border border-red-100">
                      <span className="text-foreground/80">{topic}</span>
                      <ArrowRight className="h-3 w-3 text-red-400" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
