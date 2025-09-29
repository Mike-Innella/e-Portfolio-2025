import s from './Stat.module.css';

type Props = {
  label: string;
  value: string;
};

export default function Stat({ label, value }: Props) {
  return (
    <div className={s.stat}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>{value}</span>
    </div>
  );
}
