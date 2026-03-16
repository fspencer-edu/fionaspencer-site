import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* top section */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* brand */}
          <div>
            <h2 className="text-xl font-semibold">Fiona Spencer</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Building software, machine learning systems, and modern web applications.
            </p>
          </div>

          {/* navigation */}
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">
              Navigation
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/about" className="hover:text-primary">About</Link>
              <Link to="/projects" className="hover:text-primary">Projects</Link>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>

          {/* social */}
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">
              Connect
            </h3>

            <div className="flex gap-4 text-lg">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fiona Spencer. All rights reserved.
        </div>

      </div>
    </footer>
  )
}