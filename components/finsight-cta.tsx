"use client"

import { Button } from "@/components/ui/button"
import { SignUpButton } from "@clerk/nextjs"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

export function FinSightCTA() {
  const { isLoaded, isSignedIn } = useUser()

  return (
    <section className="py-20 px-4 sm:px-6 bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Start Analyzing Your Documents Today</h2>
        <p className="text-lg opacity-90 mb-8">
          Join thousands of financial professionals using FinSight AI to unlock insights from their documents.
        </p>
        {isLoaded && !isSignedIn && (
          <SignUpButton mode="modal">
            <Button size="lg" variant="secondary">
              Get Started Free
            </Button>
          </SignUpButton>
        )}
        {isLoaded && isSignedIn && (
          <Link href="/dashboard">
            <Button size="lg" variant="secondary">
              Open Dashboard
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}
