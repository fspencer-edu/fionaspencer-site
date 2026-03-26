import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 pt-5 pb-2 text-center">

        {/* contact */}
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Contact
        </p>

        {/* icons */}
        <div className="flex justify-center gap-4 text-base text-foreground mb-4">
          <a
            href="mailto:fionagspenver@gmail.com"
            className="transition-opacity hover:opacity-60"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://github.com/fspencer-edu"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/fiona-spencer-8987771bb"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Fiona Spencer
        </p>

      </div>
    </footer>
  );
}