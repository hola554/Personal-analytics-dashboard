"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { FocusTimeChart } from "@/components/dashboard/focus-time-chart"
import { ProductivityScore } from "@/components/dashboard/productivity-score"
import { TasksOverview } from "@/components/dashboard/tasks-overview"
import { HabitsTracker } from "@/components/dashboard/habits-tracker"
import { ActivityTimeline } from "@/components/dashboard/activity-timeline"
import { WeeklyStats } from "@/components/dashboard/weekly-stats"

export default function Page() {
  const [timeRange, setTimeRange] = useState("Today")

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-4 md:p-6 lg:p-8 overflow-y-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto space-y-6">
          <Header timeRange={timeRange} onTimeRangeChange={setTimeRange} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Charts */}
            <div className="lg:col-span-8 space-y-6">
              <FocusTimeChart />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TasksOverview />
                <WeeklyStats />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <ProductivityScore />
              <HabitsTracker />
              <ActivityTimeline />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
