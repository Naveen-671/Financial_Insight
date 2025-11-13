"use client"

import { motion } from "framer-motion"
import { User, Shield, Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserProfile } from "@clerk/nextjs"
import { SignOutButton } from "@clerk/nextjs"

export default function SettingsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
      {/* Header */}
      <motion.div variants={item} className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-muted-foreground text-lg">Manage your account and preferences</p>
      </motion.div>

      {/* Settings Sections */}
      <motion.div variants={item} className="grid gap-6">
        {/* Profile Section */}
        <div className="glass-card glass-border p-8 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Profile</h2>
              <p className="text-sm text-muted-foreground">Manage your account information</p>
            </div>
          </div>

          <div className="flex justify-center">
            <UserProfile />
          </div>
        </div>

        {/* Preferences Section */}
        <div className="glass-card glass-border p-8 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <Bell className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Preferences</h2>
              <p className="text-sm text-muted-foreground">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Email Notifications", description: "Receive updates about your documents" },
              { label: "Analysis Reports", description: "Get daily summaries of processed documents" },
              { label: "Data Privacy", description: "Control how your data is used" },
            ].map((pref, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/40"
              >
                <div>
                  <p className="font-medium text-foreground">{pref.label}</p>
                  <p className="text-sm text-muted-foreground">{pref.description}</p>
                </div>
                <div className="w-12 h-6 rounded-full bg-primary/30 relative cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-primary absolute right-0.5 top-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="glass-card glass-border p-8 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Security</h2>
              <p className="text-sm text-muted-foreground">Manage your security settings</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start rounded-lg border-border/40 bg-transparent">
              <Shield size={18} className="mr-2" />
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start rounded-lg border-border/40 bg-transparent">
              <Bell size={18} className="mr-2" />
              Two-Factor Authentication
            </Button>
          </div>
        </div>

        {/* Sign Out Section */}
        <SignOutButton>
          <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:opacity-90 text-white rounded-lg py-6">
            <LogOut size={18} className="mr-2" />
            Sign Out
          </Button>
        </SignOutButton>
      </motion.div>
    </motion.div>
  )
}
