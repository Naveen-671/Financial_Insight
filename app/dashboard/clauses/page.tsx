"use client"

import { motion } from "framer-motion"
import { Upload, FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ClausesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

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

  const sampleClauses = []

  return (
    <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
      {/* Header */}
      <motion.div variants={item} className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Clause Extraction
        </h1>
        <p className="text-muted-foreground text-lg">
          Extract and analyze important clauses from contracts and agreements
        </p>
      </motion.div>

      {/* Upload Section */}
      <motion.div variants={item} className="glass-card glass-border p-8 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">Upload Document</h2>
          <p className="text-sm text-muted-foreground">Upload a legal or financial document for clause extraction</p>
        </div>

        <div className="border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-2xl p-12 text-center transition-colors cursor-pointer group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 flex items-center justify-center transition-all">
              <Upload className="text-primary group-hover:text-secondary transition-colors" size={32} />
            </div>
          </div>
          <p className="font-semibold text-foreground mb-1">Select a file to extract clauses</p>
          <p className="text-sm text-muted-foreground mb-6">Supported formats: PDF, DOCX</p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg">
            Upload File
          </Button>
        </div>
      </motion.div>

      {/* Extracted Clauses */}
      <motion.div variants={item} className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Extracted Clauses</h2>

        {sampleClauses.length > 0 ? (
          <div className="space-y-3">
            {sampleClauses.map((clause: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === idx ? null : idx)}
                  className="w-full glass-card glass-border p-4 hover:border-primary/50 transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <FileText size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{clause.title}</p>
                        <p className="text-xs text-muted-foreground">Confidence: {clause.confidence}%</p>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-primary transition-transform flex-shrink-0 ${expandedId === idx ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {expandedId === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="glass-card glass-border border-t-0 rounded-t-none p-4 text-sm text-muted-foreground"
                  >
                    <p className="leading-relaxed">{clause.text}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="glass-card glass-border p-12 text-center">
            <FileText className="mx-auto mb-4 text-muted-foreground/40" size={40} />
            <p className="text-muted-foreground">No clauses extracted yet. Upload a document to get started.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
