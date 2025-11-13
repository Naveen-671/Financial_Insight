export function FinSightHowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="space-y-12">
          {[
            {
              step: 1,
              title: "Upload Your Document",
              description:
                "Simply drag and drop or select your financial PDF, statement, or report from your computer.",
            },
            {
              step: 2,
              title: "FinSight AI Processes",
              description:
                "Our advanced AI models run NER, sentiment analysis, and clause extraction on your document in seconds.",
            },
            {
              step: 3,
              title: "View Structured Insights",
              description:
                "Explore your results in an interactive dashboard with detailed entity tables, sentiment charts, and extracted clauses.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
