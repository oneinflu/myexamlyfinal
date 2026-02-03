import { 
  ClipboardCheck, 
  Map, 
  BookOpen, 
  PenLine, 
  MonitorPlay, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Diagnostic Test",
    description: "Identify strengths & gaps",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Personalized Plan",
    description: "Get a tailored roadmap",
    icon: Map,
  },
  {
    id: 3,
    title: "Concept Learning",
    description: "Master core topics",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Practice Questions",
    description: "Reinforce with Q&A",
    icon: PenLine,
  },
  {
    id: 5,
    title: "Full Simulations",
    description: "Real exam pressure",
    icon: MonitorPlay,
  },
  {
    id: 6,
    title: "Review & Revise",
    description: "Track & improve",
    icon: TrendingUp,
  },
];

export function HowLearningWorks() {
  return (
    <section className="container py-16 md:py-24 bg-muted/30">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          How Learning Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Our proven methodology takes you from initial assessment to exam readiness through a structured, data-driven journey.
        </p>
      </div>

      <div className="relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="group flex flex-col items-center text-center relative"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-300 z-10">
                <step.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Step Number Badge (Mobile only, or small badge) */}
              <div className="absolute top-0 right-[calc(50%-2.5rem)] w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center lg:hidden">
                {step.id}
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>

              {/* Arrow for mobile/tablet flow indication (optional) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-6 text-muted-foreground/30">
                  <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
