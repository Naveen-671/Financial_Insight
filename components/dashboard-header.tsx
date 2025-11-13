"use client"

import { UserButton } from "@clerk/nextjs"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-xl border-b border-border/40">
      <div className="px-4 py-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 flex items-center gap-2 bg-background/50 rounded-xl px-4 py-2.5 border border-border/40 hover:border-primary/30 transition-colors">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documents..."
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground"
          />
        </div>

        {/* Icons */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl text-muted-foreground hover:text-foreground hover:bg-card/50"
        >
          <Bell size={20} />
        </Button>

        {/* User Profile */}
        <div className="pl-2 border-l border-border/40">
          <UserButton />
        </div>
      </div>
    </header>
  )
}
