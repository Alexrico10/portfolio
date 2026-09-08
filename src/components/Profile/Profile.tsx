"use client";
import styles from './Profile.module.css';
import SectionIndicator from '../SectionIndicator/SectionIndicator';
import { useTranslations } from 'use-intl';

const Profile = () => {
  const t = useTranslations("Profile");

  return (
    <section className={styles.profile} id="profile">
      <div className={styles.profileContent}>
        <div className={styles.profileLeft}>
          <SectionIndicator>{t("indicator")}</SectionIndicator>
        </div>
        <div className={styles.profileRight}>
          <h2 className={styles.profileTitle}>{t("title")}</h2>
          <div className={styles.profileContentText}>
            <p className={styles.profileText}>{t("text1")}</p>
            <p className={styles.profileText}>{t("text2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
