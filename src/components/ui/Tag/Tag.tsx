import styles from "./Tag.module.css";

const Tag = ({ text }: { text: string }) => {
  return (
    <span className={styles.Tag}>
      {text}
    </span>
  );
};

export default Tag;