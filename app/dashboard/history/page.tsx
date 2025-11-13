"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HistoryPage() {
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

  const documents = []

  return (
    <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
      {/* Header */}
      <motion.div variants={item} className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Document History
        </h1>
        <p className="text-muted-foreground text-lg">View all your processed documents and their analysis results</p>
      </motion.div>

      {/* Documents Table */}
      <motion.div variants={item} className="glass-card glass-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40 bg-background/30">
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Document</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Uploaded</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Models Run</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.length > 0 ? (
                documents.map((doc: any, idx: number) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-border/40 hover:bg-background/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                          <FileText size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        {doc.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {doc.models.map((model: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="rounded-lg">
                        <Download size={16} className="mr-2" />
                        Export
                      </Button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <FileText className="mx-auto mb-4 text-muted-foreground/40" size={40} />
                    <p className="text-muted-foreground">
                      No documents uploaded yet. Start by uploading a document in any feature section.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}
