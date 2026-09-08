import styles from "./ExperienceItem.module.css";


const ExperienceItem = ({
  period,
  role,
  company,
  location,
  bullets,
  tags,
}: {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  tags: string[];
}) => {
  return (
    <div className={styles.experienceItem}>

      <div className={styles.experienceItemLeft}>
        <p className={styles.experiencePeriod}>{period}</p>
        <p className={styles.experienceCompany}>{company}</p>
        <p className={styles.experienceLocation}>{location}</p>
      </div>
      
      <div className={styles.experienceItemRight}>
        <h3 className={styles.experienceRole}>{role}</h3>
        <ul className={styles.experienceBullets}>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <div className={styles.experienceTags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.experienceTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
