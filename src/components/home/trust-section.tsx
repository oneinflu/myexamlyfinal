import { Users, BookOpenCheck, Globe2 } from "lucide-react";

const stats = [
  {
    label: "Active Learners",
    value: "50,000+",
    icon: Users,
  },
  {
    label: "Exams Covered",
    value: "120+",
    icon: BookOpenCheck,
  },
  {
    label: "Countries Supported",
    value: "15+",
    icon: Globe2,
  },
];

const partners = [
  "University of Cambridge",
  "Pearson Vue",
  "Kaplan",
  "The Princeton Review",
  "British Council",
  "IDP Education",
];

export function TrustSection() {
  return (
    <section className="container py-16 md:py-24 border-t">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Trusted by Learners Worldwide
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Join a global community of ambitious students achieving their dream scores.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-muted/20 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <stat.icon className="h-8 w-8" />
            </div>
            <span className="text-4xl font-extrabold text-foreground mb-2">
              {stat.value}
            </span>
            <span className="text-muted-foreground font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Partner Logos (Text-based for minimal design) */}
      <div className="flex flex-col items-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Recognized by leading educational institutions
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <span key={index} className="text-lg md:text-xl font-bold text-foreground/80 hover:text-primary cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
