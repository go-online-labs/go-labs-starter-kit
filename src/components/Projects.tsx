import { useCallback, useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { PROJECTS } from "@/config/projects"
import { cn } from "@/lib/utils"

type Snapshot = {
  src: string
  alt: string
}

const AUTOPLAY_INTERVAL_MS = 4000

const ProjectSnapshotsCarousel = ({
  snapshots,
  url,
}: {
  snapshots: readonly Snapshot[]
  url: string
}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    setCurrent(carouselApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  useEffect(() => {
    if (!api || isPaused || snapshots.length <= 1) return

    const interval = window.setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_INTERVAL_MS)

    return () => window.clearInterval(interval)
  }, [api, isPaused, snapshots.length])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {snapshots.map((snapshot, index) => (
            <CarouselItem key={snapshot.alt} className="pl-0">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-[min(78vh,720px)]"
              >
                <img
                  src={snapshot.src}
                  alt={snapshot.alt}
                  className="w-full h-full object-cover object-top"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {snapshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {snapshots.map((snapshot, index) => (
            <button
              key={snapshot.alt}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-secondary/30 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Products we&apos;ve built and shipped — real tools solving real
            problems for creators and businesses.
          </p>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {project.name}
                  </h3>
                  <p className="text-lg font-medium text-foreground mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        • {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit {project.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6 lg:p-8 bg-muted/30 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <ProjectSnapshotsCarousel
                      snapshots={project.snapshots}
                      url={project.url}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
