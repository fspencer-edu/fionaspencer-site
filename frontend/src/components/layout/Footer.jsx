import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* top section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* brand */}
          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Fiona Spencer
            </h2>

            <p className="minimal-muted mt-3 max-w-xs">
              Building software, machine learning systems, and modern web
              applications.
            </p>
          </div>

          {/* navigation */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="minimal-link">Home</Link>
              <Link to="/about" className="minimal-link">About</Link>
              <Link to="/projects" className="minimal-link">Projects</Link>
              <Link to="/contact" className="minimal-link">Contact</Link>
            </div>
          </div>

          {/* social */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </h3>

            <div className="flex gap-5 text-lg text-foreground">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Fiona Spencer
        </div>

      </div>

    </footer>
  )
}