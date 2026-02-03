import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Building2, Briefcase, Calculator, Scale, BookOpen } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const categories: Category[] = [
  {
    id: "medical",
    name: "Medical",
    description: "Prepare for USMLE, NEET, PLAB, and other global medical licensing exams.",
    icon: <Stethoscope className="h-6 w-6" />,
    slug: "medical",
  },
  {
    id: "civil-services",
    name: "Civil Services",
    description: "Comprehensive preparation for UPSC, CSE, and other administrative service exams.",
    icon: <Building2 className="h-6 w-6" />,
    slug: "civil-services",
  },
  {
    id: "management",
    name: "Management",
    description: "Ace the GMAT, CAT, GRE, and other top business school entrance tests.",
    icon: <Briefcase className="h-6 w-6" />,
    slug: "management",
  },
  {
    id: "engineering",
    name: "Engineering",
    description: "Mock tests for JEE, GATE, FE/PE, and other engineering competitive exams.",
    icon: <Calculator className="h-6 w-6" />,
    slug: "engineering",
  },
  {
    id: "accounting",
    name: "Accounting",
    description: "Study for CPA, CA, ACCA, and other professional accounting certifications.",
    icon: <BookOpen className="h-6 w-6" />,
    slug: "accounting",
  },
  {
    id: "law",
    name: "Law",
    description: "Preparation materials for LSAT, CLAT, Bar Exams, and legal studies.",
    icon: <Scale className="h-6 w-6" />,
    slug: "law",
  },
];

export function ExamCategoryGrid() {
  return (
    <section className="container py-12 md:py-16">
      <div className="flex flex-col gap-4 mb-8 md:mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight">Explore Exam Categories</h2>
        <p className="text-muted-foreground text-lg">
          Choose your domain to find specialized simulations and practice materials.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {category.icon}
              </div>
              <CardTitle className="text-xl">{category.name}</CardTitle>
              <CardDescription className="text-base mt-2">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              {/* Optional: Add dynamic stats here later, e.g., "50+ Exams Available" */}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="secondary">
                <Link href={`/exams/${category.slug}`} className="text-white font-medium">View Exams</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
