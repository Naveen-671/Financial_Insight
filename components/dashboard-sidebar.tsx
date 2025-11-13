"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Brain, MessageSquare, Settings, Menu, X, Home, LogOut } from "lucide-react"
import { SignOutButton } from "@clerk/nextjs"

const navItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "NER Extraction",
    href: "/dashboard/ner",
    icon: Brain,
  },
  {
    label: "Sentiment Analysis",
    href: "/dashboard/sentiment",
    icon: MessageSquare,
  },
  {
    label: "Clause Extraction",
    href: "/dashboard/clauses",
    icon: FileText,
  },
  {
    label: "Document History",
    href: "/dashboard/history",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 lg:hidden p-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card/80 backdrop-blur-xl border-r border-border/40 z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-border/40">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-lg font-bold text-white">F</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FinSight
            </h1>
          </div>
          <p className="text-xs text-muted-foreground">Financial AI Platform</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Sign Out Button */}
        <div className="p-4 border-t border-border/40">
          <SignOutButton>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 rounded-lg border-border/40 text-muted-foreground hover:bg-card/50 hover:text-foreground bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </Button>
          </SignOutButton>
        </div>
      </aside>

      {/* Main content offset for sidebar */}
      <div className="lg:ml-64" />
    </>
  )
}
