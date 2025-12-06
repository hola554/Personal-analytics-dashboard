"use client"

import { Calendar, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  timeRange: string
  onTimeRangeChange: (range: string) => void
}

const timeRanges = ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This month"]

export function Header({ timeRange, onTimeRangeChange }: HeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Good morning</h1>
        <p className="text-muted-foreground mt-1">{today}</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-card border-border">
            <Calendar className="w-4 h-4" />
            {timeRange}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card border-border">
          {timeRanges.map((range) => (
            <DropdownMenuItem
              key={range}
              onClick={() => onTimeRangeChange(range)}
              className={range === timeRange ? "bg-secondary" : ""}
            >
              {range}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
