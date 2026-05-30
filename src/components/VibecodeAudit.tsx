import { Button } from "@/components/ui/button"
import { Bug, ShieldCheck, Wrench, FileSearch } from "lucide-react"

const VibecodeAudit = () => {
  const mailTo = () => {
    window.location.assign(
      "mailto:contact@getuslive.com?subject=Vibecoded project audit & fixes"
    )
  }

  const highlights = [
    {
      icon: FileSearch,
      title: "Fast audit",
      description:
        "We review your repo like a senior engineer would: architecture, correctness, DX, and deployability.",
    },
    {
      icon: Bug,
      title: "Bug fixes",
      description:
        "We track down flaky behavior, broken flows, runtime errors, and “it works on my machine” issues.",
    },
    {
      icon: ShieldCheck,
      title: "Security + stability",
      description:
        "We check auth, secrets, data handling, dependencies, and production readiness so you can ship safely.",
    },
    {
      icon: Wrench,
      title: "Make it maintainable",
      description:
        "We refactor the hard parts and leave you with a clean plan (or PRs) you can confidently build on.",
    },
  ]

  return (
    <section
      id="vibecode-audit"
      className="py-20 px-6 bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Audit & Fix Your Vibecoded Project
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Built something quickly with AI and now it’s breaking, slow, or
              hard to ship? We’ll audit the codebase, identify the real issues,
              and fix them so you can confidently launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={mailTo}
              >
                Request an Audit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border"
                onClick={mailTo}
              >
                Fix Issues in My Project
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VibecodeAudit
