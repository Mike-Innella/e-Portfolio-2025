import s from "./TechGrid.module.css";
import { techStack } from "@/content/tech";

export default function TechGrid() {
  return (
    <div className={s.grid}>
      {techStack.map(({ key, label }) => (
        <div className={s.item} key={key}>
          <div className={s.iconCircle}>{/* optional: add an icon later */}</div>
          <span className={s.label}>{label}</span>
        </div>
      ))}
    </div>
  );
}
