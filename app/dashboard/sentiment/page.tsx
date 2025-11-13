"use client"

import { motion } from "framer-motion"
import { Upload, Smile, Frown, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SentimentPage() {
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
          Sentiment Analysis
        </h1>
        <p className="text-muted-foreground text-lg">
          Detect the tone and sentiment of financial documents with FinBERT
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div variants={item} className="glass-card glass-border p-8 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">Upload Document</h2>
          <p className="text-sm text-muted-foreground">Upload a document for sentiment analysis</p>
        </div>

        <div className="border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-2xl p-12 text-center transition-colors cursor-pointer group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 flex items-center justify-center transition-all">
              <Upload className="text-primary group-hover:text-secondary transition-colors" size={32} />
            </div>
          </div>
          <p className="font-semibold text-foreground mb-1">Select a file to analyze sentiment</p>
          <p className="text-sm text-muted-foreground mb-6">Supported formats: PDF, DOCX, TXT</p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg">
            Upload File
          </Button>
        </div>
      </motion.div>

      {/* Sentiment Distribution */}
      <motion.div variants={item} className="grid gap-6 md:grid-cols-3">
        {[
          {
            label: "Positive",
            value: 0,
            icon: Smile,
            color: "from-green-500/20 to-emerald-600/20",
            textColor: "text-green-400",
          },
          {
            label: "Neutral",
            value: 0,
            icon: Minus,
            color: "from-blue-500/20 to-cyan-600/20",
            textColor: "text-blue-400",
          },
          {
            label: "Negative",
            value: 0,
            icon: Frown,
            color: "from-red-500/20 to-pink-600/20",
            textColor: "text-red-400",
          },
        ].map((sentiment, idx) => {
          const Icon = sentiment.icon
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`glass-card glass-border p-6 bg-gradient-to-br ${sentiment.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">{sentiment.label}</h3>
                <div className={`p-3 rounded-lg bg-background/50 ${sentiment.textColor}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">{sentiment.value}%</div>
              <p className="text-xs text-muted-foreground mt-2">Of analyzed content</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={item} className="glass-card glass-border p-8 space-y-4">
        <h2 className="text-xl font-bold text-foreground">Analysis Summary</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-background/50 border border-border/40">
            <p className="text-sm text-muted-foreground mb-2">Overall Sentiment Score</p>
            <p className="text-2xl font-bold text-foreground">--</p>
          </div>
          <div className="p-4 rounded-lg bg-background/50 border border-border/40">
            <p className="text-sm text-muted-foreground mb-2">Total Sentences Analyzed</p>
            <p className="text-2xl font-bold text-foreground">0</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
