"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"

export function ProductivityScore() {
  const score = 78
  const circumference = 2 * Math.PI * 45

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-foreground flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" />
          Productivity Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-4">
          <div className="relative">
            <svg width="140" height="140" className="transform -rotate-90">
              <circle cx="70" cy="70" r="45" stroke="hsl(0, 0%, 16%)" strokeWidth="10" fill="none" />
              <circle
                cx="70"
                cy="70"
                r="45"
                stroke="hsl(210, 100%, 60%)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (score / 100) * circumference}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{score}</span>
              <span className="text-xs text-muted-foreground">out of 100</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Focus Time</span>
            <span className="text-foreground font-medium">5h 24m</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tasks Done</span>
            <span className="text-foreground font-medium">12/15</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Streak</span>
            <span className="text-foreground font-medium">7 days</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
