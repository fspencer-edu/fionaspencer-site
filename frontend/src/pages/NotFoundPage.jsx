import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="space-y-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Page not found.</p>
      <Link to="/about" className="underline">
        Go home
      </Link>
    </section>
  );
}