import styles from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
};

export default Section;
