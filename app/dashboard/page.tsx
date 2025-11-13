"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Upload, Brain, MessageSquare, FileText } from "lucide-react"
import Link from "next/link"

export default function DashboardOverview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
      {/* Welcome Section */}
      <motion.div variants={item} className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Welcome to FinSight AI
        </h1>
        <p className="text-muted-foreground text-lg">
          Extract deep insights from your financial documents using advanced AI models
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={item} className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Documents Processed", value: "0", subtext: "This month" },
          { label: "Entities Extracted", value: "0", subtext: "Total extracted" },
          { label: "Analysis Accuracy", value: "--", subtext: "Average score" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="glass-card glass-border group cursor-pointer p-6 hover:border-primary/50 transition-all"
          >
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all" />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Upload Section */}
      <motion.div variants={item} className="glass-card glass-border p-8 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">Upload a Document</h2>
          <p className="text-sm text-muted-foreground">Start analyzing your first financial document</p>
        </div>

        <div className="border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-2xl p-12 text-center transition-colors cursor-pointer group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 flex items-center justify-center transition-all">
              <Upload className="text-primary group-hover:text-secondary transition-colors" size={32} />
            </div>
          </div>
          <p className="font-semibold text-foreground mb-1">Drag and drop your file here</p>
          <p className="text-sm text-muted-foreground mb-6">or click to browse (PDF, DOCX, CSV)</p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg">
            Choose File
          </Button>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div variants={item}>
        <h2 className="text-2xl font-bold text-foreground mb-4">Available Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Named Entity Recognition",
              desc: "Identify companies, financial terms, currencies, and ratios in your documents",
              icon: Brain,
              href: "/dashboard/ner",
              gradient: "from-blue-500/20 to-blue-600/20",
            },
            {
              title: "Sentiment Analysis",
              desc: "Detect tone and outlook (positive/negative/neutral) from financial reports",
              icon: MessageSquare,
              href: "/dashboard/sentiment",
              gradient: "from-purple-500/20 to-pink-600/20",
            },
            {
              title: "Clause Extraction",
              desc: "Automatically extract termination clauses, risk statements, and compliance sections",
              icon: FileText,
              href: "/dashboard/clauses",
              gradient: "from-cyan-500/20 to-blue-600/20",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Link key={idx} href={feature.href}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`glass-card glass-border card-hover p-6 h-full bg-gradient-to-br ${feature.gradient}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <span className="text-xs font-medium text-primary hover:text-secondary transition-colors">
                      Explore Feature →
                    </span>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
