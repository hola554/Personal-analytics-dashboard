"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", hours: 6.5 },
  { day: "Tue", hours: 7.2 },
  { day: "Wed", hours: 5.8 },
  { day: "Thu", hours: 8.1 },
  { day: "Fri", hours: 6.9 },
  { day: "Sat", hours: 3.2 },
  { day: "Sun", hours: 2.5 },
]

export function WeeklyStats() {
  const totalHours = data.reduce((sum, d) => sum + d.hours, 0).toFixed(1)
  const avgHours = (Number.parseFloat(totalHours) / 7).toFixed(1)

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-foreground">Weekly Overview</CardTitle>
          <div className="text-right">
            <p className="text-2xl font-bold text-foreground">{totalHours}h</p>
            <p className="text-xs text-muted-foreground">avg {avgHours}h/day</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }}
                tickFormatter={(value) => `${value}h`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 9%)",
                  border: "1px solid hsl(0, 0%, 16%)",
                  borderRadius: "8px",
                  color: "hsl(0, 0%, 98%)",
                }}
                formatter={(value: number) => [`${value}h`, "Focus Time"]}
              />
              <Bar dataKey="hours" fill="hsl(210, 100%, 60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
