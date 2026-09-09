
import styles from './SectionIndicator.module.css';

const SectionIndicator = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className={styles['section-indicator']}>
      {children}
    </span>
  );
}

export default SectionIndicator;