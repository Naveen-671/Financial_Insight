"use client"

import { SignIn } from "@clerk/nextjs"
import { motion } from "framer-motion"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Sign-in Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center px-6 py-12 lg:px-12"
        >
          <div className="w-full max-w-sm">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">Sign In</h1>
              <p className="text-muted-foreground">Enter your email and password to continue</p>
            </div>

            <div className="rounded-2xl bg-card/50 backdrop-blur-md border border-border/40 p-8">
              <SignIn
                appearance={{
                  elements: {
                    formButtonPrimary:
                      "bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg font-medium",
                    formFieldInput: "bg-background border-border rounded-lg text-foreground",
                    formFieldLabel: "text-muted-foreground text-sm",
                    card: "bg-transparent border-none shadow-none",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    footerActionLink: "text-primary hover:text-primary-light",
                    dividerLine: "bg-border",
                    dividerText: "text-muted-foreground",
                    socialButtonsBlockButton: "border-border hover:bg-card rounded-lg",
                  },
                }}
              />
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-primary hover:text-primary-light font-medium">
                Sign up
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right: Gradient Graphic Background */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden p-12"
        >
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                y: [0, 30, 0],
                x: [0, 30, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20"
            />
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, -30, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-20"
            />
          </div>

          {/* Logo and text */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            className="relative z-10 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-8 mx-auto">
              <span className="text-5xl font-bold text-white">F</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">FinSight AI</h2>
            <p className="text-muted-foreground text-lg">Intelligent financial document analysis powered by AI</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
