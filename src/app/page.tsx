import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-xl font-bold mb-6">Decker Urbano</h1>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a builder. I'm the CTO at{" "}
              <Link
                href="https://commet.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-gray-300 transition-colors"
              >
                Commet
              </Link>
              , where we're building a modern billing and payments platform for SaaS and AI
              companies. I've been coding for 10 years.
            </p>
            <p>
              I'm an open source contributor and startup enthusiast. I love building tools that make
              developers' lives easier and contributing to the community.
            </p>
          </div>
        </header>

        {/* Recent Open Source Projects */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Recent Open Source Projects</h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="https://billui.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-white group-hover:underline">bill/ui</span>
                  <span className="text-muted-foreground text-sm">React billing components</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/decker-dev/fumadocs-registry"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-white group-hover:underline">fumadocs-registry</span>
                  <span className="text-muted-foreground text-sm">Shadcn registry generation</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://streamui.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-white group-hover:underline">Stream UI</span>
                  <span className="text-muted-foreground text-sm">Progressive AI components</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://mystic.lat/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-white group-hover:underline">Mystic</span>
                  <span className="text-muted-foreground text-sm">Wizards game</span>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
