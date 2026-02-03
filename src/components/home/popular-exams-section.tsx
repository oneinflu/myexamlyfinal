"use client";

import { useGlobalSettings } from "@/context/global-settings-context";
import { ExamCard, Exam } from "./exam-card";

// Mock database of exams
const allExams: Exam[] = [
  // Medical
  { id: "1", name: "USMLE Step 1", category: "Medical", country: "US", difficulty: "Expert", slug: "usmle-step-1" },
  { id: "2", name: "NEET PG", category: "Medical", country: "IN", difficulty: "Expert", slug: "neet-pg" },
  { id: "3", name: "PLAB 1", category: "Medical", country: "UK", difficulty: "Hard", slug: "plab-1" },
  
  // Engineering
  { id: "4", name: "JEE Advanced", category: "Engineering", country: "IN", difficulty: "Expert", slug: "jee-advanced" },
  { id: "5", name: "FE Civil", category: "Engineering", country: "US", difficulty: "Hard", slug: "fe-civil" },
  { id: "6", name: "GATE CSE", category: "Engineering", country: "IN", difficulty: "Hard", slug: "gate-cse" },

  // Management
  { id: "7", name: "GMAT Focus", category: "Management", country: "Global", difficulty: "Hard", slug: "gmat-focus" },
  { id: "8", name: "CAT", category: "Management", country: "IN", difficulty: "Expert", slug: "cat" },

  // Civil Services
  { id: "9", name: "UPSC CSE Prelims", category: "Civil Services", country: "IN", difficulty: "Expert", slug: "upsc-prelims" },

  // Law
  { id: "10", name: "LSAT", category: "Law", country: "US", difficulty: "Hard", slug: "lsat" },
  { id: "11", name: "CLAT", category: "Law", country: "IN", difficulty: "Medium", slug: "clat" },
];

export function PopularExamsSection() {
  const { country } = useGlobalSettings();

  // Filter logic:
  // 1. Prioritize exams from the selected country.
  // 2. Include "Global" exams.
  // 3. Limit to top 6 for the homepage.
  const displayedExams = allExams
    .filter((exam) => exam.country === country || exam.country === "Global")
    .slice(0, 6);

  // If we don't have enough local/global exams, fill with popular international ones (optional fallback)
  if (displayedExams.length < 3) {
     const otherExams = allExams.filter(e => e.country !== country && e.country !== "Global").slice(0, 3 - displayedExams.length);
     displayedExams.push(...otherExams);
  }

  return (
    <section className="container py-12 md:py-16 bg-muted/20">
      <div className="flex flex-col gap-4 mb-8 md:mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Popular Exams</h2>
        <p className="text-muted-foreground text-lg">
          Top-rated simulations trending in {country === "IN" ? "India" : country === "US" ? "the United States" : country}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedExams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </section>
  );
}
