"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const activities = [
  { id: 1, action: "Completed task", detail: "Review project proposal", time: "2h ago", type: "task" },
  { id: 2, action: "Focus session", detail: "45 minutes", time: "3h ago", type: "focus" },
  { id: 3, action: "Habit done", detail: "Morning workout", time: "5h ago", type: "habit" },
  { id: 4, action: "Goal progress", detail: "Reading: 80%", time: "6h ago", type: "goal" },
]

const typeColors: Record<string, string> = {
  task: "bg-emerald-500",
  focus: "bg-primary",
  habit: "bg-accent",
  goal: "bg-purple-500",
}

export function ActivityTimeline() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={cn("w-2.5 h-2.5 rounded-full", typeColors[activity.type])} />
                {index < activities.length - 1 && <div className="w-px h-full bg-border mt-1" />}
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm text-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.detail}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
