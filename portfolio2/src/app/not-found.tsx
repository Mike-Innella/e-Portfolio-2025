import Link from "next/link";
import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={`section ${s.root}`}>
      <h1 className={s.title}>404 — Page Not Found</h1>
      <p className={s.text}>Oops! The page you’re looking for doesn’t exist.</p>
      <Link href="/" className={s.link}>
        ← Back to Home
      </Link>
    </main>
  );
}
