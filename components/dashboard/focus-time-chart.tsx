"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const data = [
  { time: "6am", focus: 0, breaks: 0 },
  { time: "8am", focus: 45, breaks: 15 },
  { time: "10am", focus: 90, breaks: 20 },
  { time: "12pm", focus: 60, breaks: 30 },
  { time: "2pm", focus: 75, breaks: 15 },
  { time: "4pm", focus: 85, breaks: 25 },
  { time: "6pm", focus: 40, breaks: 10 },
  { time: "8pm", focus: 20, breaks: 5 },
]

export function FocusTimeChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium text-foreground">Focus Time</CardTitle>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Deep Work</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Breaks</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-emerald-500">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+12%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="focusGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(210, 100%, 60%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(210, 100%, 60%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="breaksGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(45, 100%, 60%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(45, 100%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 16%)" />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }}
                tickFormatter={(value) => `${value}m`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 9%)",
                  border: "1px solid hsl(0, 0%, 16%)",
                  borderRadius: "8px",
                  color: "hsl(0, 0%, 98%)",
                }}
              />
              <Area
                type="monotone"
                dataKey="focus"
                stroke="hsl(210, 100%, 60%)"
                strokeWidth={2}
                fill="url(#focusGradient)"
              />
              <Area
                type="monotone"
                dataKey="breaks"
                stroke="hsl(45, 100%, 60%)"
                strokeWidth={2}
                fill="url(#breaksGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
