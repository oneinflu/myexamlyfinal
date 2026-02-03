import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, BarChart } from "lucide-react";

export interface Exam {
  id: string;
  name: string;
  category: string;
  country: string; // e.g., "IN", "US", "Global"
  difficulty: "Easy" | "Medium" | "Hard" | "Expert";
  slug: string;
}

interface ExamCardProps {
  exam: Exam;
}

export function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="mb-2">
            {exam.category}
          </Badge>
          <div className="flex items-center text-muted-foreground text-xs gap-1">
             <Globe className="h-3 w-3" />
             <span>{exam.country === "Global" ? "Global" : exam.country}</span>
          </div>
        </div>
        <CardTitle className="text-xl">{exam.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BarChart className="h-4 w-4" />
          <span>Difficulty: <span className="font-medium text-foreground">{exam.difficulty}</span></span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" size="sm">
          <Link href={`/exams/${exam.slug}`}>View Exam</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
