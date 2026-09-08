"use client";
import styles from './Profile.module.css';
import Section from '../Section/Section';
import SectionIndicator from '../SectionIndicator/SectionIndicator';
import Tag from '../Tag/Tag';
import { useTranslations } from 'use-intl';

const Profile = () => {
  const t = useTranslations("Profile");

  return (
    <Section id="profile">
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
          <div className={styles.profileTags}>
            <Tag text={t("tag1")} /> {" "}
            <Tag text={t("tag2")} /> {" "}
            <Tag text={t("tag3")} /> {" "}
            <Tag text={t("tag4")} /> {" "}
          </div>
        </div>

      </div>


    </Section>
  );
};

export default Profile;
