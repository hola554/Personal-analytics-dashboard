"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const tasks = [
  { id: 1, title: "Review project proposal", status: "done", time: "9:00 AM" },
  { id: 2, title: "Team standup meeting", status: "done", time: "10:30 AM" },
  { id: 3, title: "Write documentation", status: "in-progress", time: "2:00 PM" },
  { id: 4, title: "Code review", status: "pending", time: "4:00 PM" },
  { id: 5, title: "Update roadmap", status: "pending", time: "5:00 PM" },
]

export function TasksOverview() {
  const completedCount = tasks.filter((t) => t.status === "done").length

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-foreground">Today's Tasks</CardTitle>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{tasks.length}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              {task.status === "done" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              ) : task.status === "in-progress" ? (
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-sm truncate",
                    task.status === "done" ? "text-muted-foreground line-through" : "text-foreground",
                  )}
                >
                  {task.title}
                </p>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{task.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
