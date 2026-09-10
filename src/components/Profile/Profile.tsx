"use client";
import styles from './Profile.module.css';
import Section from '../ui/Section/Section';
import SectionIndicator from '../ui/SectionIndicator/SectionIndicator';
import Tag from '../ui/Tag/Tag';
import { useTranslations } from 'use-intl';

const Profile = () => {
  const t = useTranslations("Profile");
  const tags = ["tag1", "tag2", "tag3", "tag4"];

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
            {tags.map((item) => (
              <Tag key={item} text={t(item)} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
