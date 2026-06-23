import affiliateHome from "@/assets/projects/affiliatecheckers-home.png"
import affiliateDashboard from "@/assets/projects/affiliatecheckers-dashboard.png"
import affiliateDocs from "@/assets/projects/affiliatecheckers-docs.png"
import { EXTERNAL_LINKS } from "@/config/externalLinks"

export const PROJECTS = [
  {
    name: "Affiliate Checkers",
    url: EXTERNAL_LINKS.affiliateCheckers,
    tagline: "Never lose money to broken affiliate links",
    description:
      "Affiliate Checkers monitors link-in-bio pages around the clock. When a link breaks, goes out of stock, or returns an error, creators get a Telegram alert so they can fix it fast.",
    tags: ["SaaS", "Link Monitoring", "Telegram Alerts", "Creator Tools"],
    highlights: [
      "Scheduled link checks for 404s, 5xx errors, timeouts, and DNS failures",
      "Out-of-stock and unavailable page detection",
      "Telegram alerts with smart deduplication",
      "CSV import/export and YouTube channel import on paid plans",
    ],
    snapshots: [
      {
        src: affiliateHome,
        alt: "Affiliate Checkers homepage with hero, features, and how it works",
      },
      {
        src: affiliateDashboard,
        alt: "Affiliate Checkers dashboard for managing and monitoring affiliate links",
      },
      {
        src: affiliateDocs,
        alt: "Affiliate Checkers documentation for setup and usage",
      },
    ],
  },
] as const
