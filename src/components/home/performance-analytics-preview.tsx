"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend
} from "recharts";
import { useEffect, useState } from "react";

const accuracyData = [
  { topic: "Cardiology", accuracy: 85 },
  { topic: "Neurology", accuracy: 65 },
  { topic: "Pediatrics", accuracy: 92 },
  { topic: "Surgery", accuracy: 74 },
  { topic: "Pharmacology", accuracy: 58 },
];

const timeData = [
  { difficulty: "Easy", userTime: 45, avgTime: 60 },
  { difficulty: "Medium", userTime: 95, avgTime: 90 },
  { difficulty: "Hard", userTime: 150, avgTime: 120 },
];

const readinessData = [
  {
    name: "Readiness",
    uv: 78,
    pv: 2400,
    fill: "hsl(var(--primary))",
  },
];

export function PerformanceAnalyticsPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="container py-16 md:py-24 bg-muted/30">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Deep Performance Analytics
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Visualize your progress, identify weak spots, and optimize your study strategy with our advanced analytics engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Readiness Gauge */}
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-2">
            <CardTitle>Exam Readiness</CardTitle>
            <CardDescription>Probability of passing</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px] relative">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={250}>
                <RadialBarChart 
                  innerRadius="60%" 
                  outerRadius="100%" 
                  barSize={20} 
                  data={readinessData} 
                  startAngle={180} 
                  endAngle={0}
                >
                  <RadialBar
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    dataKey="uv"
                    cornerRadius={10}
                  />
                  <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }} content={() => (
                     <div className="text-center mt-8">
                        <span className="text-4xl font-bold text-primary">78%</span>
                        <p className="text-sm text-muted-foreground">Ready</p>
                     </div>
                  )} />
                </RadialBarChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-muted/10 animate-pulse rounded-lg" />
            )}
          </CardContent>
        </Card>

        {/* Topic-wise Accuracy */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Topic Accuracy</CardTitle>
            <CardDescription>Your strengths & weaknesses</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px]">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={250}>
                <BarChart
                  layout="vertical"
                  data={accuracyData}
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="topic" type="category" width={80} tick={{fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="accuracy" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-muted/10 animate-pulse rounded-lg" />
            )}
          </CardContent>
        </Card>

        {/* Time vs Average */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Time Management</CardTitle>
            <CardDescription>Seconds per question vs. Average</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px]">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={250}>
                <BarChart
                  data={timeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="difficulty" tick={{fontSize: 12}} />
                  <YAxis tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Legend wrapperStyle={{fontSize: '12px', paddingTop: '10px'}} />
                  <Bar name="You" dataKey="userTime" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar name="Avg Student" dataKey="avgTime" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} opacity={0.3} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-muted/10 animate-pulse rounded-lg" />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
