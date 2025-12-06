"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Clock, CheckSquare, Target, BarChart3, Settings, ChevronLeft, User } from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Clock, label: "Time Tracking", active: false },
  { icon: CheckSquare, label: "Tasks", active: false },
  { icon: Target, label: "Goals", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-50 hidden lg:flex flex-col",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && <span className="text-lg font-semibold text-foreground">Analytics</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ChevronLeft
            className={cn("w-4 h-4 text-muted-foreground transition-transform", collapsed && "rotate-180")}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
              item.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-border">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors cursor-pointer",
            collapsed && "justify-center",
          )}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">You</p>
              <p className="text-xs text-muted-foreground">Personal</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
