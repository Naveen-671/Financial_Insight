"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignUpButton, SignInButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import { useUser } from "@clerk/nextjs"

export function FinSightHero() {
  const { isLoaded, isSignedIn } = useUser()

  return (
    <section className="relative pt-20 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Extract, Analyze & Understand
            <span className="text-primary"> Financial Data</span>
            Effortlessly
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload PDFs, statements, or reports — FinSight AI automatically extracts entities, detects sentiments, and
            identifies key clauses using advanced AI models.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {isLoaded && !isSignedIn && (
            <>
              <SignUpButton mode="modal">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight size={20} />
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="outline">
                  Try Demo
                </Button>
              </SignInButton>
            </>
          )}
          {isLoaded && isSignedIn && (
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Go to Dashboard <ArrowRight size={20} />
              </Button>
            </Link>
          )}
        </div>

        {/* Feature Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold text-lg mb-2">Named Entity Recognition</h3>
            <p className="text-sm text-muted-foreground">
              Identify companies, financial terms, currencies, and ratios in your documents
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-lg mb-2">Sentiment Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Detect tone and outlook (positive/negative/neutral) from financial reports
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors">
            <div className="text-3xl mb-3">📑</div>
            <h3 className="font-semibold text-lg mb-2">Clause Extraction</h3>
            <p className="text-sm text-muted-foreground">
              Automatically extract termination clauses, risk statements, and compliance sections
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
