"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const habits = [
  { id: 1, name: "Morning workout", completed: [true, true, false, true, true, true, false] },
  { id: 2, name: "Read 30 mins", completed: [true, true, true, true, false, true, true] },
  { id: 3, name: "Meditate", completed: [false, true, true, true, true, false, true] },
  { id: 4, name: "No social media", completed: [true, false, true, false, true, true, true] },
]

const days = ["M", "T", "W", "T", "F", "S", "S"]

export function HabitsTracker() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-foreground">Weekly Habits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Day headers */}
          <div className="flex items-center gap-2">
            <div className="w-24" />
            {days.map((day, i) => (
              <div key={i} className="w-6 h-6 flex items-center justify-center text-xs text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Habits */}
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center gap-2">
              <span className="w-24 text-sm text-foreground truncate">{habit.name}</span>
              {habit.completed.map((done, i) => (
                <div
                  key={i}
                  className={cn("w-6 h-6 rounded-md transition-colors", done ? "bg-primary/80" : "bg-secondary")}
                />
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
