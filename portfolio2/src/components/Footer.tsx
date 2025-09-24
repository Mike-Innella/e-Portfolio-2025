import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.root}>
      <div className="container">© {new Date().getFullYear()} Mike Innella</div>
    </footer>
  );
}
