import { 
  MonitorCheck, 
  Brain, 
  BarChart3, 
  Target, 
  RefreshCcw, 
  Smartphone 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Real Exam Simulations",
    description: "Practice with interface replicas that match the actual exam environment.",
    icon: MonitorCheck,
  },
  {
    title: "Adaptive Difficulty",
    description: "Questions get harder as you improve, ensuring optimal challenge levels.",
    icon: Brain,
  },
  {
    title: "Performance Analytics",
    description: "Deep dive into your scores with granular topic-wise analysis.",
    icon: BarChart3,
  },
  {
    title: "Weak Area Detection",
    description: "Automatically identify and focus on topics where you lose the most marks.",
    icon: Target,
  },
  {
    title: "Revision Engine",
    description: "Smart scheduling of past mistakes and high-yield topics for review.",
    icon: RefreshCcw,
  },
  {
    title: "Multi-device Access",
    description: "Seamlessly switch between laptop, tablet, and mobile anytime.",
    icon: Smartphone,
  },
];

export function PlatformFeatures() {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Why Choose Our Platform?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Everything you need to excel in your competitive exams, all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-muted hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
