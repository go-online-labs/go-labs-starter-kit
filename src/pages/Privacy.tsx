import { Link } from "react-router-dom"

const Privacy = () => {
  const effectiveDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <Link to="/" className="text-sm text-muted-foreground hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-10">Effective: {effectiveDate}</p>

        <div className="space-y-8 text-foreground">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              GetUsLive Solutions Inc. does not run ads, does not use analytics,
              and does not track your activity on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Information we collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not intentionally collect personal information through this
              website. If you contact us via email, we’ll receive the
              information you choose to share.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website does not set marketing or analytics cookies. Like
              most websites, our hosting provider may use strictly necessary
              technical cookies or logs to keep the site secure and reliable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Third-party services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not embed third-party tracking pixels or advertising
              platforms on this site. Links to external sites (for example,
              LinkedIn or Instagram) are governed by their own privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this policy, email{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href="mailto:contact@getuslive.com?subject=Privacy policy inquiry"
              >
                contact@getuslive.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy

