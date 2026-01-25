import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.headingLine}></div>
    </div>
  );
}
