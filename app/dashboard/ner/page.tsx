"use client"

import { motion } from "framer-motion"
import { Upload, Database, Zap, Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NERPage() {
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

  const sampleEntities = [
    { entity: "Apple Inc.", type: "Company", confidence: 0.98 },
    { entity: "USD", type: "Currency", confidence: 0.99 },
    { entity: "Q4 2024", type: "Period", confidence: 0.95 },
    { entity: "12.5%", type: "Ratio", confidence: 0.97 },
  ]

  return (
    <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
      {/* Header */}
      <motion.div variants={item} className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Named Entity Recognition
        </h1>
        <p className="text-muted-foreground text-lg">
          Identify and extract financial entities from your documents with precision
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div variants={item} className="glass-card glass-border p-8 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">Upload Document</h2>
          <p className="text-sm text-muted-foreground">Upload a financial document for entity extraction</p>
        </div>

        <div className="border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-2xl p-12 text-center transition-colors cursor-pointer group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 flex items-center justify-center transition-all">
              <Upload className="text-primary group-hover:text-secondary transition-colors" size={32} />
            </div>
          </div>
          <p className="font-semibold text-foreground mb-1">Select a file to extract entities</p>
          <p className="text-sm text-muted-foreground mb-6">Supported formats: PDF, DOCX, CSV</p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg">
            Upload File
          </Button>
        </div>
      </motion.div>

      {/* Results Grid */}
      <motion.div variants={item} className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Extracted Entities</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-lg border-border/40 bg-transparent">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>

        {sampleEntities.length > 0 ? (
          <div className="grid gap-4">
            {sampleEntities.map((entity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card glass-border p-4 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Database size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{entity.entity}</p>
                        <p className="text-xs text-muted-foreground">{entity.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {(entity.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-20 h-1 bg-background rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          style={{ width: `${entity.confidence * 100}%` }}
                        />
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy size={18} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="glass-card glass-border p-12 text-center">
            <Database className="mx-auto mb-4 text-muted-foreground/40" size={40} />
            <p className="text-muted-foreground">No entities extracted yet. Upload a document to get started.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
