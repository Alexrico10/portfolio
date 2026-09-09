import styles from "./EducationItem.module.css";

const EducationItem = ({
  courseName,
  courseLocation,
  courseDate,
}: {
  courseName: string;
  courseLocation: string;
  courseDate: string;
}) => {
  return (
    <div className={styles.educationItemContainer}>
      <div className={styles.educationItemInfo}>
        <p className={styles.courseName}>{courseName}</p>
        <p className={styles.courseLocation}>{courseLocation}</p>
      </div>
      <p className={styles.courseDate}>{courseDate}</p>
    </div>
  );
};

export default EducationItem;
